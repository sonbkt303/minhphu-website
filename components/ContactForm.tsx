"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { buildWeb3FormsPayload } from "@/lib/contactEmailTemplate";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const PHONE_RE = /^\+?[0-9][0-9\s]{8,14}$/;

function resolveKey(propKey?: string) {
  const fromProp = propKey?.trim() ?? "";
  if (fromProp) return fromProp;
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}

export default function ContactForm({ web3formsAccessKey = "" }: { web3formsAccessKey?: string }) {
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

    const key = resolveKey(web3formsAccessKey);
    if (!key) {
      if (process.env.NODE_ENV === "development") {
        setNote("");
        setLoading(true);
        await new Promise((r) => setTimeout(r, 700));
        formRef.current?.reset();
        setSuccessOpen(true);
        setLoading(false);
        return;
      }
      setNote(
        "Form chưa được cấu hình. Vui lòng gọi hotline 0988056886 hoặc email congtyminhphuhung@gmail.com.",
      );
      return;
    }

    setNote("");
    setLoading(true);

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(buildWeb3FormsPayload(key, { name, phone, email, msg })),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
        body?: { message?: string };
      };

      if (!res.ok || !data.success) {
        const detail = data.body?.message ?? data.message;
        setNote(detail ?? "Không gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline 0988056886.");
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