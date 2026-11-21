import { Resend } from "resend";
import {
  buildContactMessage,
  buildContactSubject,
  type ContactLead,
} from "@/lib/contactEmailTemplate";

const PHONE_RE = /^\+?[0-9][0-9\s]{8,14}$/;

/** Resend chỉ gửi được từ domain đã verify hoặc onboarding@resend.dev (sandbox). */
const BLOCKED_FROM_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
]);

function fromDomainError(fromEmail: string): string | null {
  const domain = fromEmail.split("@")[1]?.toLowerCase() ?? "";
  if (!BLOCKED_FROM_DOMAINS.has(domain)) return null;
  return "Địa chỉ gửi (CONTACT_FROM_EMAIL) không dùng được @gmail.com. Local/test: onboarding@resend.dev · Production: email trên domain đã verify trên Resend.";
}

type ContactBody = ContactLead & { botcheck?: boolean };

function parseBody(raw: unknown): { ok: true; lead: ContactLead } | { ok: false; message: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, message: "Dữ liệu không hợp lệ." };
  }

  const body = raw as ContactBody;
  if (body.botcheck) {
    return { ok: false, message: "Yêu cầu không hợp lệ." };
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const phone = String(body.phone ?? "").trim().slice(0, 24);
  const email = String(body.email ?? "").trim().slice(0, 254);
  const msg = String(body.msg ?? "").trim().slice(0, 5000);

  if (!name || !PHONE_RE.test(phone)) {
    return { ok: false, message: "Vui lòng nhập họ tên và số điện thoại hợp lệ." };
  }

  return { ok: true, lead: { name, phone, email, msg } };
}

function mailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const to = process.env.CONTACT_TO_EMAIL?.trim() ?? "congtyminhphuhung@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
  const fromName = process.env.CONTACT_FROM_NAME?.trim() || "Minh Phú Hưng Land";
  const from = fromEmail ? `${fromName} <${fromEmail}>` : "";

  return { apiKey, to, from, fromEmail };
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return Response.json({ success: false, message: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  const parsed = parseBody(json);
  if (!parsed.ok) {
    const status = parsed.message === "Yêu cầu không hợp lệ." ? 400 : 422;
    return Response.json({ success: false, message: parsed.message }, { status });
  }

  const { apiKey, to, from, fromEmail } = mailConfig();

  const fromErr = fromEmail ? fromDomainError(fromEmail) : null;
  if (fromErr) {
    console.error("[contact]", fromErr);
    return Response.json({ success: false, message: fromErr }, { status: 503 });
  }

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[contact] Thiếu RESEND_API_KEY hoặc CONTACT_FROM_EMAIL — bỏ qua gửi mail.");
      return Response.json({ success: true });
    }
    return Response.json(
      {
        success: false,
        message: "Hệ thống chưa cấu hình gửi mail. Vui lòng gọi hotline 0988056886.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const lead = parsed.lead;
  const replyTo = lead.email.trim() || undefined;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo,
    subject: buildContactSubject(lead.name),
    text: buildContactMessage(lead),
  });

  if (error) {
    console.error("[contact] Resend:", error);
    return Response.json(
      { success: false, message: "Không gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline 0988056886." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}