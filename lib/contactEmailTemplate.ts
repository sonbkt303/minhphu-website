export type ContactLead = {
  name: string;
  phone: string;
  email: string;
  msg: string;
};

const SITE = "Minh Phú Hưng Land";
const PROJECT = "Khu Đồng Mái";

/** Giờ Việt Nam, định dạng ngắn dễ đọc trên điện thoại. */
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

export function buildContactSubject(name: string) {
  return `Khách tư vấn: ${name} · ${PROJECT}`;
}

/**
 * Một khối nội dung duy nhất — tránh trùng với bảng field mặc định của Web3Forms.
 * Plain text, hiển thị ổn trên Gmail / Outlook.
 */
export function buildContactMessage(lead: ContactLead) {
  const email = lead.email.trim() || "Chưa cung cấp";
  const note = lead.msg.trim() || "Khách không ghi thêm nội dung.";

  return [
    `${SITE}`,
    `Yêu cầu tư vấn ${PROJECT}`,
    "",
    `Họ tên:      ${lead.name}`,
    `Điện thoại:  ${lead.phone}`,
    `Email:       ${email}`,
    "",
    "Nội dung:",
    note,
    "",
    `Thời gian: ${formatSubmittedAt()}`,
    "Nguồn: Form liên hệ trên website",
  ].join("\n");
}

export function buildWeb3FormsPayload(key: string, lead: ContactLead) {
  const email = lead.email.trim();

  return {
    access_key: key,
    subject: buildContactSubject(lead.name),
    from_name: SITE,
    email: email || undefined,
    replyto: email || undefined,
    message: buildContactMessage(lead),
    botcheck: false as const,
  };
}