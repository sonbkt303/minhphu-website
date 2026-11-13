"use client";

import { FormEvent, useState } from "react";

// Static site, no backend: submitting opens the user's mail client.
export default function ContactForm() {
  const [note, setNote] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const phone = String(d.get("phone") ?? "").trim();
    if (!name || !/^[0-9+ ]{9,13}$/.test(phone)) {
      setNote("Vui lòng nhập họ tên và số điện thoại hợp lệ.");
      return;
    }
    const body = `Họ tên: ${name}\nĐiện thoại: ${phone}\nEmail: ${d.get("email")}\n\n${d.get("msg")}`;
    location.href = `mailto:congtyminhphuhung@gmail.com?subject=${encodeURIComponent(
      "Yêu cầu tư vấn dự án Khu Đồng Mái",
    )}&body=${encodeURIComponent(body)}`;
    setNote("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.");
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <input name="name" placeholder="Họ và tên" required autoComplete="name" />
      <input name="phone" type="tel" placeholder="Số điện thoại" required autoComplete="tel" />
      <input name="email" type="email" placeholder="Email" autoComplete="email" />
      <textarea name="msg" rows={3} placeholder="Nội dung cần tư vấn" />
      <button className="btn" type="submit">Gửi yêu cầu tư vấn</button>
      <p className="note" role="status">{note}</p>
    </form>
  );
}
