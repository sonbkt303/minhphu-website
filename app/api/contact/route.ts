import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  msg?: string;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const msg = String(body.msg ?? "").trim();

  if (!name || !/^[0-9+ ]{9,13}$/.test(phone)) {
    return NextResponse.json(
      { error: "Vui lòng nhập họ tên và số điện thoại hợp lệ." },
      { status: 400 },
    );
  }

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    if (process.env.NODE_ENV === "development") {
      await new Promise((r) => setTimeout(r, 700));
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      {
        error:
          "Hệ thống chưa được cấu hình gửi mail. Vui lòng gọi hotline 0988056886 hoặc email congtyminhphuhung@gmail.com.",
      },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: "Yêu cầu tư vấn dự án Khu Đồng Mái",
      from_name: name,
      name,
      phone,
      email,
      message: msg,
    }),
  });

  const data = (await res.json()) as { success?: boolean };
  if (!data.success) {
    return NextResponse.json(
      { error: "Không gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline 0988056886." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}