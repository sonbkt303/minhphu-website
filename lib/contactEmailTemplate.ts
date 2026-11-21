export type ContactLead = {
  name: string;
  phone: string;
  email: string;
  msg: string;
};


const SITE = "Minh Phú Hưng Land";
const PROJECT = "Khu Đồng Mái";
const HOTLINE = "0988056886";
const HOTLINE_TEL = "+84988056886";

function formatSubmittedAt(date = new Date()) {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildContactSubject(name: string) {
  return `[${SITE}] Yêu cầu tư vấn mới – ${name}`;
}

export function buildContactMessage(lead: ContactLead) {
  const email = lead.email.trim() || "Chưa cung cấp";
  const note = lead.msg.trim() || "Không có ghi chú thêm.";
  const at = formatSubmittedAt();

  return [
    `${SITE} — ${PROJECT}`,
    "────────────────────────────",
    "",
    `Họ và tên:   ${lead.name}`,
    `Điện thoại:  ${lead.phone}`,
    `Email:       ${email}`,
    "",
    "Nội dung tư vấn:",
    note,
    "",
    `Thời gian gửi: ${at}`,
    "Nguồn: Form liên hệ website",
    "",
    `Ưu tiên gọi lại: ${HOTLINE}`,
  ].join("\n");
}

export function buildContactHtml(lead: ContactLead) {
  const emailRaw = lead.email.trim();
  const emailDisplay = emailRaw || "Chưa cung cấp";
  const note = lead.msg.trim() || "Khách không ghi thêm nội dung.";
  const at = formatSubmittedAt();
  const phoneHref = `tel:${lead.phone.replace(/\s/g, "")}`;

  const rows = [
    { label: "Họ và tên", value: lead.name },
    { label: "Điện thoại", value: lead.phone, href: phoneHref },
    {
      label: "Email khách",
      value: emailDisplay,
      href: emailRaw ? `mailto:${emailRaw}` : undefined,
    },
    { label: "Dự án", value: PROJECT },
    { label: "Thời gian", value: at },
  ];

  const rowHtml = rows
    .map((row) => {
      const val = escapeHtml(row.value);
      const inner = row.href
        ? `<a href="${escapeHtml(row.href)}" style="color:#15305C;text-decoration:none;font-weight:600;">${val}</a>`
        : `<span style="color:#2A3A4F;font-weight:600;">${val}</span>`;
      return `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #E9E5DC;color:#6B7788;font-size:13px;width:34%;vertical-align:top;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:10px 14px;border-bottom:1px solid #E9E5DC;font-size:14px;vertical-align:top;">
            ${inner}
          </td>
        </tr>`;
    })
    .join("");

  const noteHtml = escapeHtml(note).replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(buildContactSubject(lead.name))}</title>
</head>
<body style="margin:0;padding:0;background:#F3EBD9;font-family:Segoe UI,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3EBD9;padding:28px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(11,31,63,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#0B1F3F,#15305C);padding:28px 28px 24px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#E8CF85;font-weight:600;">
                Thông báo nội bộ
              </p>
              <h1 style="margin:0;font-size:22px;font-weight:600;color:#FFFFFF;line-height:1.35;">
                Yêu cầu tư vấn mới
              </h1>
              <p style="margin:10px 0 0;font-size:14px;color:rgba(255,255,255,0.85);">
                ${escapeHtml(SITE)} · ${escapeHtml(PROJECT)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 22px 4px;">
              <p style="margin:16px 0 8px;font-size:13px;color:#6B7788;">
                Khách hàng vừa gửi form trên website. Vui lòng liên hệ trong thời gian sớm nhất.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E9E5DC;border-radius:12px;overflow:hidden;background:#FBF7EE;">
                ${rowHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 22px 8px;">
              <p style="margin:12px 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#B8923A;font-weight:600;">
                Nội dung cần tư vấn
              </p>
              <div style="background:#FBF7EE;border:1px solid #E9E5DC;border-radius:12px;padding:16px 18px;font-size:14px;line-height:1.65;color:#2A3A4F;">
                ${noteHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 22px 28px;" align="center">
              <a href="tel:${HOTLINE_TEL}" style="display:inline-block;margin-top:8px;background:linear-gradient(135deg,#E8CF85,#B8923A);color:#0B1F3F;text-decoration:none;font-weight:700;font-size:14px;padding:12px 28px;border-radius:999px;">
                Gọi khách: ${escapeHtml(lead.phone)}
              </a>
              <p style="margin:18px 0 0;font-size:12px;color:#6B7788;line-height:1.5;">
                Hotline hỗ trợ: <a href="tel:${HOTLINE_TEL}" style="color:#15305C;">${HOTLINE}</a>
                · Trả lời email khách qua nút Reply nếu khách đã để địa chỉ email.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 22px;background:#0B1F3F;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.55);">
                Email tự động từ form liên hệ · ${escapeHtml(at)}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}