"use client";
import { useEffect, useState } from "react";

type Doc = { id: string; label: string; title: string; updated: string; sections: { h: string; p: string[] }[] };

const docs: Doc[] = [
  {
    id: "terms",
    label: "Điều khoản",
    title: "Điều khoản sử dụng",
    updated: "01/01/2026",
    sections: [
      { h: "1. Chấp thuận điều khoản", p: ["Khi truy cập và sử dụng website của Công ty TNHH Đầu tư Bất động sản Minh Phú Hưng (“Minh Phú Hưng Land”), bạn đồng ý tuân thủ các điều khoản dưới đây. Nếu không đồng ý, vui lòng ngừng sử dụng website."] },
      { h: "2. Tính chất thông tin", p: ["Mọi thông tin về dự án, quy mô, tiến độ, tiện ích và hình ảnh trên website mang tính chất giới thiệu, có thể được điều chỉnh theo quyết định của cơ quan có thẩm quyền và thực tế triển khai. Hình ảnh phối cảnh, minh họa không có giá trị cam kết thay thế hợp đồng.", "Thông tin chính thức về giá, diện tích, điều kiện mua và tiến độ thanh toán được thể hiện trong hợp đồng và văn bản do Công ty phát hành."] },
      { h: "3. Đối tượng nhà ở xã hội", p: ["Việc mua, thuê mua nhà ở xã hội dành cho lực lượng Công an nhân dân chỉ được thực hiện đối với đối tượng và điều kiện theo quy định pháp luật hiện hành và hướng dẫn của Bộ Công an. Công ty không nhận đặt cọc, thu tiền ngoài quy trình đã được công bố chính thức."] },
      { h: "4. Quyền sở hữu trí tuệ", p: ["Logo, nhãn hiệu, hình ảnh, nội dung và thiết kế trên website thuộc quyền sở hữu của Minh Phú Hưng Land hoặc bên cấp phép. Nghiêm cấm sao chép, phát tán, sử dụng cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản."] },
      { h: "5. Giới hạn trách nhiệm", p: ["Công ty nỗ lực đảm bảo thông tin chính xác và cập nhật nhưng không chịu trách nhiệm đối với thiệt hại phát sinh do việc sử dụng thông tin chưa được xác nhận bằng văn bản chính thức."] },
      { h: "6. Luật áp dụng", p: ["Các điều khoản này được điều chỉnh bởi pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam. Mọi tranh chấp ưu tiên giải quyết thông qua thương lượng; nếu không đạt được, sẽ do Tòa án có thẩm quyền tại Việt Nam giải quyết."] },
    ],
  },
  {
    id: "privacy",
    label: "Bảo mật",
    title: "Chính sách bảo mật thông tin",
    updated: "01/01/2026",
    sections: [
      { h: "1. Thông tin chúng tôi thu thập", p: ["Chúng tôi chỉ thu thập thông tin bạn tự nguyện cung cấp qua biểu mẫu liên hệ: họ tên, số điện thoại, email và nội dung cần tư vấn. Website có thể ghi nhận dữ liệu truy cập ẩn danh (loại thiết bị, trình duyệt, trang xem) để cải thiện trải nghiệm."] },
      { h: "2. Mục đích sử dụng", p: ["Thông tin được dùng để: tư vấn và phản hồi yêu cầu của bạn; gửi thông tin dự án, tiến độ khi bạn đồng ý; nâng cao chất lượng dịch vụ và đáp ứng yêu cầu của cơ quan nhà nước theo quy định pháp luật."] },
      { h: "3. Cam kết không chia sẻ", p: ["Minh Phú Hưng Land không bán, trao đổi hay cho thuê thông tin cá nhân của bạn cho bên thứ ba vì mục đích thương mại. Thông tin chỉ được chia sẻ với đơn vị hỗ trợ trực tiếp (có ràng buộc bảo mật) hoặc theo yêu cầu hợp pháp của cơ quan có thẩm quyền."] },
      { h: "4. Bảo vệ dữ liệu", p: ["Dữ liệu được lưu trữ trên hệ thống có kiểm soát truy cập, kết nối được mã hóa (HTTPS) và chỉ nhân sự được phân quyền mới có thể tiếp cận. Chúng tôi tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân."] },
      { h: "5. Quyền của bạn", p: ["Bạn có quyền yêu cầu truy cập, chỉnh sửa, xóa dữ liệu hoặc rút lại sự đồng ý bất cứ lúc nào bằng cách liên hệ hotline 0988056886 hoặc email bdsminhphuhung@gmail.com. Yêu cầu sẽ được xử lý trong thời hạn theo quy định."] },
      { h: "6. Cookie", p: ["Website sử dụng cookie cần thiết để vận hành và ghi nhớ tùy chọn. Bạn có thể tắt cookie trong trình duyệt, tuy nhiên một số tính năng có thể bị ảnh hưởng."] },
    ],
  },
  {
    id: "license",
    label: "Giấy phép",
    title: "Giấy phép & Pháp lý doanh nghiệp",
    updated: "01/01/2026",
    sections: [
      { h: "Thông tin doanh nghiệp", p: ["Tên đầy đủ: Công ty TNHH Đầu tư Bất động sản Minh Phú Hưng.", "Mã số doanh nghiệp (GCNĐKDN): 2500783313.", "Trụ sở: Số 29, Phố Ấp Hạ, Phường Vĩnh Phúc, Tỉnh Phú Thọ, Việt Nam.", "Chủ tịch: Vũ Văn Minh. Tổng giám đốc: Lê Đức Thọ."] },
      { h: "Cơ sở pháp lý dự án", p: ["Dự án nhà ở Công an nhân dân được triển khai theo Quyết định số 6061/QĐ-BCA-H02 của Bộ Công an về việc phê duyệt chủ trương đầu tư và lựa chọn chủ đầu tư.", "Dự án thực hiện theo Luật Nhà ở, Luật Đất đai, Luật Kinh doanh bất động sản và các văn bản hướng dẫn hiện hành."] },
      { h: "Minh bạch & kiểm chứng", p: ["Khách hàng có thể tra cứu thông tin doanh nghiệp trên Cổng thông tin quốc gia về đăng ký doanh nghiệp (dangkykinhdoanh.gov.vn) bằng mã số 2500783313.", "Hồ sơ pháp lý dự án được cung cấp bản sao đầy đủ khi khách hàng làm việc trực tiếp tại văn phòng Công ty."] },
      { h: "Xác minh thông tin", p: ["Để đảm bảo quyền lợi, hãy liên hệ chính thức qua hotline 0988056886 hoặc email bdsminhphuhung@gmail.com để xác minh mọi thông tin trước khi giao dịch."] },
    ],
  },
];

const badges = ["Đã đăng ký kinh doanh", "Dự án theo QĐ 6061/QĐ-BCA"];

export default function LegalLinks() {
  const [open, setOpen] = useState<string | null>(null);
  const doc = docs.find((d) => d.id === open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div>
        <h4>Pháp lý</h4>
        {docs.map((d) => (
          <a key={d.id} href={`#${d.id}`} onClick={(e) => { e.preventDefault(); setOpen(d.id); }}>{d.label}</a>
        ))}
        <ul className="trust">
          {badges.map((b) => <li key={b}>✓ {b}</li>)}
        </ul>
      </div>
      {doc && (
        <div className="nw lg" onClick={() => setOpen(null)}>
          <div className="lg-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={doc.title}>
            <button className="nw-x" onClick={() => setOpen(null)} aria-label="Đóng">✕</button>
            <div className="lg-tabs">
              {docs.map((d) => (
                <button key={d.id} className={d.id === open ? "on" : ""} onClick={() => setOpen(d.id)}>{d.label}</button>
              ))}
            </div>
            <div className="lg-body" key={doc.id}>
              <h2>{doc.title}</h2>
              <p className="lg-date">Cập nhật lần cuối: {doc.updated} · Công ty TNHH Đầu tư BĐS Minh Phú Hưng</p>
              {doc.sections.map((s) => (
                <section key={s.h}>
                  <h4>{s.h}</h4>
                  {s.p.map((t, i) => <p key={i}>{t}</p>)}
                </section>
              ))}
              <p className="lg-note">Mọi thắc mắc vui lòng liên hệ: 0988056886 · bdsminhphuhung@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
