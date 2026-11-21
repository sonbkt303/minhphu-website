"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const CONTACT_API = "/api/contact";
const PHONE_RE = /^\+?[0-9][0-9\s]{8,14}$/;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    if (!successOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSuccessOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [successOpen]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const phone = String(d.get("phone") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const msg = String(d.get("msg") ?? "").trim();

    if (d.get("botcheck")) return;

    if (!name || !PHONE_RE.test(phone)) {
      setNote("Vui lòng nhập họ tên và số điện thoại hợp lệ.");
      return;
    }

    setNote("");
    setLoading(true);

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          msg,
          botcheck: Boolean(d.get("botcheck")),
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setNote(data.message ?? "Không gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline 0988056886.");
        return;
      }

      formRef.current?.reset();
      setSuccessOpen(true);
    } catch {
      setNote("Mất kết nối. Vui lòng kiểm tra mạng và thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit} noValidate>
        <input
          type="checkbox"
          name="botcheck"
          className="cf-honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <input name="name" placeholder="Họ và tên" required autoComplete="name" disabled={loading} />
        <input name="phone" type="tel" placeholder="Số điện thoại" required autoComplete="tel" disabled={loading} />
        <input name="email" type="email" placeholder="Email" autoComplete="email" disabled={loading} />
        <textarea name="msg" rows={3} placeholder="Nội dung cần tư vấn" disabled={loading} />
        <button className="btn" type="submit" disabled={loading} aria-busy={loading}>
          {loading ? (
            <>
              <span className="spin" aria-hidden="true" />
              Đang gửi…
            </>
          ) : (
            "Gửi yêu cầu tư vấn"
          )}
        </button>
        {note ? (
          <p className="note err" role="alert">
            {note}
          </p>
        ) : null}
      </form>

      {successOpen ? (
        <div className="nw" onClick={() => setSuccessOpen(false)}>
          <div
            className="lg-box cf-success"
            onClick={(ev) => ev.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cf-success-title"
          >
            <button type="button" className="nw-x" onClick={() => setSuccessOpen(false)} aria-label="Đóng">
              ✕
            </button>
            <div className="cf-success-body">
              <span className="cf-success-ico" aria-hidden="true">
                ✓
              </span>
              <h3 id="cf-success-title">Gửi yêu cầu thành công</h3>
              <p>Cảm ơn bạn! Đội ngũ tư vấn Minh Phú Hưng sẽ liên hệ sớm nhất qua số điện thoại hoặc email bạn đã cung cấp.</p>
              <button type="button" className="btn" onClick={() => setSuccessOpen(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}