"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";

type Item = {
  ico: string;
  t: string;
  d: string;
  lead: string;
  facts: [string, string][];
  points: string[];
  proof: string;
};

const items: Item[] = [
  {
    ico: "scale",
    t: "Pháp lý đầy đủ",
    d: "Quyết định BCA số 6061/QĐ-BCA-H02",
    lead: "Dự án được triển khai trên cơ sở pháp lý rõ ràng, minh bạch, được các cơ quan có thẩm quyền phê duyệt theo đúng quy định hiện hành.",
    facts: [
      ["Quyết định phê duyệt", "6061/QĐ-BCA-H02"],
      ["Đăng ký kinh doanh", "2500783313"],
      ["Đối tượng", "Cán bộ, chiến sĩ CAND"],
    ],
    points: [
      "Quyết định phê duyệt dự án của Bộ Công an số 6061/QĐ-BCA-H02.",
      "Doanh nghiệp đăng ký kinh doanh hợp pháp, tra cứu công khai trên Cổng thông tin quốc gia.",
      "Quy hoạch 1/500 và các thủ tục đầu tư được hoàn tất theo từng giai đoạn.",
      "Hợp đồng, quy trình đăng ký và danh sách đối tượng được công khai minh bạch.",
    ],
    proof: "Khách hàng có thể yêu cầu cung cấp bản sao hồ sơ pháp lý tại văn phòng công ty.",
  },
  {
    ico: "wallet",
    t: "Năng lực triển khai",
    d: "Tổng mức đầu tư ~2.262 tỷ đồng, 2 giai đoạn",
    lead: "Dự án được chuẩn bị bài bản về quy mô, lộ trình và quản trị để triển khai đúng cam kết, không đứt gãy tiến độ.",
    facts: [
      ["Tổng mức đầu tư", "~2.262 tỷ đồng"],
      ["Quy mô", "1.233 căn hộ"],
      ["Triển khai", "2 giai đoạn"],
    ],
    points: [
      "Tổng mức đầu tư khoảng 2.262 tỷ đồng cho toàn bộ dự án.",
      "Giai đoạn 1 (Q3/2026 – Q4/2028): bồi thường GPMB, HTKT toàn khu, ≈700 căn NOXH (tòa 1, 2) và 179 căn TM cao tầng.",
      "Giai đoạn 2: ≈339 căn NOXH (tòa 3), 15 căn thấp tầng, trường MN-01 — khởi công theo nhu cầu Bộ Công an, hoàn thành sau 2 năm.",
      "Tiến độ và chất lượng được kiểm soát theo từng mốc nghiệm thu.",
    ],
    proof: "Lộ trình rõ ràng giúp khách hàng yên tâm về tiến độ bàn giao và quyền lợi.",
  },
  {
    ico: "layout",
    t: "Quy hoạch chuẩn",
    d: "Mật độ xây dựng 21%, nhiều cây xanh",
    lead: "Khu đô thị được quy hoạch đồng bộ, ưu tiên không gian xanh, hạ tầng hiện đại và môi trường sống trong lành cho cư dân.",
    facts: [
      ["Mật độ xây dựng", "21%"],
      ["Không gian", "Cây xanh, mặt nước"],
      ["Hạ tầng", "Đồng bộ, hiện đại"],
    ],
    points: [
      "Mật độ xây dựng chỉ 21%, dành phần lớn diện tích cho cây xanh và tiện ích.",
      "Hệ thống giao thông nội khu thông thoáng, kết nối thuận tiện.",
      "Tiện ích đầy đủ: trường học, y tế, công viên, thể thao, thương mại.",
      "Thiết kế theo tiêu chuẩn đô thị hiện đại, đảm bảo an ninh và riêng tư.",
    ],
    proof: "Quy hoạch bài bản giúp giá trị bất động sản bền vững theo thời gian.",
  },
  {
    ico: "clock",
    t: "Tiến độ đúng hạn",
    d: "Giai đoạn 1 hoàn thành Q4/2028",
    lead: "Chúng tôi cam kết tiến độ bằng lộ trình rõ ràng, giám sát chặt chẽ và cập nhật thường xuyên đến khách hàng.",
    facts: [
      ["Giai đoạn 1", "Hoàn thành Q4/2028"],
      ["Lộ trình", "GĐ1: Q3/2026 – Q4/2028"],
      ["Cập nhật", "Định kỳ hằng quý"],
    ],
    points: [
      "Lộ trình thi công chia theo từng giai đoạn với mốc bàn giao cụ thể.",
      "Nhà thầu uy tín, giám sát chất lượng độc lập tại từng hạng mục.",
      "Cập nhật hình ảnh, tiến độ thực tế định kỳ cho khách hàng.",
      "Cam kết bàn giao đúng hạn, đúng chất lượng theo hợp đồng.",
    ],
    proof: "Tiến độ được công khai trên website và tại các buổi gặp gỡ khách hàng.",
  },
];

export default function WhyCards() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o + items.length - 1) % items.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", k);
    };
  }, [open]);

  const cur = open === null ? null : items[open];

  return (
    <>
      <div className="cards four">
        {items.map((it, i) => (
          <article
            className="fcard reveal why-card"
            key={it.t}
            role="button"
            tabIndex={0}
            onClick={() => setOpen(i)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(i)}
          >
            <div className="ico"><Icon name={it.ico} size={28} /></div>
            <h3>{it.t}</h3>
            <p>{it.d}</p>
            <span className="why-more">Xem chi tiết →</span>
          </article>
        ))}
      </div>
      {cur && open !== null && (
        <div className="nw lg" onClick={() => setOpen(null)}>
          <div className="lg-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="nw-x" onClick={() => setOpen(null)} aria-label="Đóng">✕</button>
            <div className="lg-tabs">
              {items.map((it, i) => (
                <button key={it.t} className={i === open ? "on" : ""} onClick={() => setOpen(i)}>{it.t}</button>
              ))}
            </div>
            <div className="lg-body" key={open}>
              <div className="why-head"><div className="ico"><Icon name={cur.ico} size={28} /></div><h2>{cur.t}</h2></div>
              <p>{cur.lead}</p>
              <div className="why-facts">
                {cur.facts.map(([k, v]) => (
                  <div key={k}><small>{k}</small><b>{v}</b></div>
                ))}
              </div>
              <h4>Cam kết cụ thể</h4>
              <ul className="why-list">
                {cur.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
              <div className="lg-note">{cur.proof}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
