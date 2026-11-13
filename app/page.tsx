import Navbar from "@/components/Navbar";
import Effects from "@/components/Effects";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import NewsList, { type Article } from "@/components/NewsList";
import GalleryMosaic from "@/components/GalleryMosaic";
import ProjectCards, { type Project } from "@/components/ProjectCards";

const profile: [string, React.ReactNode][] = [
  ["Mã số ĐKDN", "2500783313"],
  ["Vốn điều lệ", "460.000.000.000 đồng"],
  ["Chủ tịch HĐTV", "Vũ Văn Minh"],
  ["Tổng giám đốc", "Lê Đức Thọ"],
  ["Địa chỉ", "TDP Khai Quang, P. Vĩnh Phúc, Phú Thọ"],
  ["Email", <a key="e" href="mailto:congtyminhphuhung@gmail.com">congtyminhphuhung@gmail.com</a>],
  ["Điện thoại", <a key="t" href="tel:0988056886">0988056886</a>],
];


const img = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const P = {
  hero: "photo-1545324418-cc1a3fa10c00",
  a1: "photo-1486406146926-c627a92ad1ab",
  a2: "photo-1560518883-ce09059eeffa",
  p1: "photo-1512917774080-9991f1c4c750",
  p2: "photo-1582407947304-fd86f028f716",
  p3: "photo-1600585154340-be6161a56a0c",
  g1: "photo-1600607687939-ce8a6c25118c",
  g2: "photo-1564013799919-ab600027ffc6",
  g3: "photo-1613490493576-7fde63acd811",
  g4: "photo-1568605114967-8130f3a36994",
  g5: "photo-1600596542815-ffad4c1539a9",
  g6: "photo-1600566753190-17f0baa2a6c3",
  g7: "photo-1600585154340-be6161a56a0c",
  tl: "photo-1503387762-592deb58ef4e",
  cta: "photo-1448630360428-65456885c650",
  n1: "photo-1554995207-c18c203602cb",
  n2: "photo-1523217582562-09d0def993a6",
};

const projects: Project[] = [
  {
    cover: P.p1, title: "Tòa VT1", kind: "Nhà ở xã hội", desc: "247 căn · 70m² · 20 tầng", tag: "Đang triển khai",
    album: [[P.p1, "Phối cảnh tổng thể"], [P.g2, "Kiến trúc hiện đại"], [P.g1, "Phòng khách"], [P.g5, "Nội thất tinh tế"], [P.a1, "Mặt đứng tòa nhà"], [P.g6, "Căn hộ mẫu"]],
  },
  {
    cover: P.p2, title: "Tòa VT2", kind: "Nhà ở xã hội", desc: "418 căn · 70m² · 20 tầng", tag: "Đang triển khai",
    album: [[P.p2, "Phối cảnh tổng thể"], [P.a1, "Mặt đứng tòa nhà"], [P.g3, "Không gian sống"], [P.g6, "Căn hộ mẫu"], [P.g1, "Phòng khách"], [P.a2, "Tiện ích nội khu"]],
  },
  {
    cover: P.p3, title: "Tòa TM", kind: "Nhà ở thương mại", desc: "179 căn · 74–123m²", tag: "Mở bán",
    album: [[P.p3, "Phối cảnh tổng thể"], [P.g4, "Nhà thấp tầng"], [P.g3, "Không gian sống"], [P.g5, "Nội thất tinh tế"], [P.g2, "Kiến trúc hiện đại"], [P.hero, "Toàn cảnh khu đô thị"]],
  },
];

const why = [
  ["scale", "Pháp lý đầy đủ", "Quyết định BCA số 6061/QĐ-BCA-H02"],
  ["wallet", "Vốn vững chắc", "460 tỷ vốn điều lệ, 4 cổ đông chiến lược"],
  ["layout", "Quy hoạch chuẩn", "Mật độ xây dựng 21%, nhiều cây xanh"],
  ["clock", "Tiến độ đúng hạn", "Giai đoạn 1 hoàn thành Q4/2028"],
];

const gallery = [
  [P.g1, "Phòng khách", "g-a"],
  [P.g2, "Kiến trúc hiện đại", "g-b"],
  [P.g3, "Không gian sống", "g-c"],
  [P.g4, "Nhà thấp tầng", "g-d"],
  [P.g5, "Nội thất tinh tế", "g-e"],
  [P.g6, "Căn hộ mẫu", "g-f"],
  [P.g7, "Ngoại thất xanh", "g-g"],
];

const milestones = [
  ["Q3/2026", "Khởi công Giai đoạn 1", "Hạ tầng + 665 căn NOXH + toàn bộ Tòa TM cao tầng"],
  ["Q4/2028", "Hoàn thành Giai đoạn 1", "Bàn giao cho cán bộ chiến sĩ Công an"],
  ["2029–2030", "Giai đoạn 2", "568 căn NOXH còn lại + 15 căn thấp tầng"],
];

const news: Article[] = [
  {
    img: P.n1, tag: "Tin dự án", read: "3 phút",
    title: "Khởi công Giai đoạn 1 dự án Khu Đồng Mái",
    excerpt: "Kế hoạch triển khai hạ tầng và 665 căn nhà ở xã hội dự kiến từ Q3/2026.",
    lead: "Giai đoạn 1 của dự án Khu Đồng Mái được xác định là bước khởi đầu quan trọng, tạo nền tảng hạ tầng đồng bộ cho toàn bộ khu đô thị.",
    body: [
      "Theo kế hoạch, Giai đoạn 1 tập trung đầu tư hạ tầng kỹ thuật và xây dựng 665 căn nhà ở xã hội dành cho cán bộ, chiến sĩ lực lượng Công an nhân dân, dự kiến triển khai từ Quý 3/2026.",
      "Minh Phú Hưng Land cam kết tổ chức thi công theo đúng tiến độ, kiểm soát chặt chẽ chất lượng vật liệu, an toàn lao động và vệ sinh môi trường trong suốt quá trình xây dựng.",
      "Toàn bộ dự án có quy mô hơn 50.000 m², tổng vốn đầu tư khoảng 2.262 tỷ đồng với 1.233 căn hộ, được phát triển theo hai giai đoạn.",
    ],
    points: ["665 căn nhà ở xã hội trong Giai đoạn 1", "Hạ tầng kỹ thuật đồng bộ, cây xanh và tiện ích nội khu", "Cam kết tiến độ và chất lượng công trình"],
  },
  {
    img: P.n2, tag: "Pháp lý", read: "4 phút",
    title: "Dự án được phê duyệt theo QĐ 6061/QĐ-BCA-H02",
    excerpt: "Cơ sở pháp lý đầy đủ cho nhà ở lực lượng vũ trang Công an nhân dân.",
    lead: "Pháp lý minh bạch là nền tảng để khách hàng an tâm lựa chọn. Dự án được triển khai trên cơ sở Quyết định số 6061/QĐ-BCA-H02.",
    body: [
      "Quyết định 6061/QĐ-BCA-H02 là căn cứ pháp lý cho việc đầu tư xây dựng dự án nhà ở dành cho lực lượng vũ trang Công an nhân dân tại Phú Thọ.",
      "Minh Phú Hưng Land luôn công khai thông tin pháp lý, quy hoạch và tiến độ để khách hàng có thể kiểm chứng và theo dõi thuận tiện.",
      "Đội ngũ tư vấn sẵn sàng giải đáp về đối tượng, điều kiện và quy trình đăng ký mua nhà ở xã hội theo quy định hiện hành.",
    ],
    points: ["Phê duyệt theo QĐ 6061/QĐ-BCA-H02", "Thông tin pháp lý công khai, minh bạch", "Hỗ trợ tư vấn thủ tục đăng ký"],
  },
  {
    img: P.a1, tag: "Sự kiện", read: "2 phút",
    title: "Minh Phú Hưng Land chính thức ra mắt",
    excerpt: "Công ty đặt mục tiêu phát triển nhà ở chất lượng cao tại Phú Thọ.",
    lead: "Với vốn điều lệ 460 tỷ đồng, Minh Phú Hưng Land bước vào thị trường với khát vọng kiến tạo những khu ở chất lượng, bền vững.",
    body: [
      "Lấy tinh thần “Minh bạch – Phú quý – Hưng thịnh” làm kim chỉ nam, công ty hướng đến việc phát triển các dự án nhà ở tại Phú Thọ với pháp lý rõ ràng, thiết kế hiện đại và tiến độ cam kết.",
      "Ban lãnh đạo do ông Vũ Văn Minh (Chủ tịch HĐTV) và ông Lê Đức Thọ (Tổng giám đốc) dẫn dắt, đặt khách hàng và cộng đồng làm trung tâm của mọi quyết định.",
    ],
    points: ["Vốn điều lệ 460 tỷ đồng", "Định hướng phát triển nhà ở chất lượng cao", "Giá trị cốt lõi: Minh bạch · Phú quý · Hưng thịnh"],
  },
  {
    img: P.g2, tag: "Thiết kế", read: "3 phút",
    title: "Kiến trúc hiện đại, không gian sống xanh",
    excerpt: "Quy hoạch ưu tiên mảng xanh, ánh sáng tự nhiên và tiện ích nội khu.",
    lead: "Mỗi căn hộ được thiết kế để tối ưu ánh sáng, thông gió và sự riêng tư, mang lại cảm giác thư thái mỗi ngày.",
    body: [
      "Tổng thể quy hoạch kết hợp tòa nhà cao tầng với mảng xanh, lối đi dạo và không gian sinh hoạt cộng đồng, tạo nên môi trường sống an toàn, văn minh.",
      "Các căn hộ có công năng linh hoạt, vật liệu hoàn thiện bền đẹp, phù hợp với nhu cầu của các gia đình trẻ.",
    ],
    points: ["Mật độ xây dựng hợp lý, nhiều cây xanh", "Căn hộ thông thoáng, đón ánh sáng tự nhiên", "Tiện ích nội khu đáp ứng nhu cầu hằng ngày"],
  },
  {
    img: P.g5, tag: "Tiện ích", read: "2 phút",
    title: "Tiện ích nội khu đáp ứng cuộc sống thường nhật",
    excerpt: "Từ khu vui chơi, sân vườn đến dịch vụ thương mại ngay dưới chân tòa nhà.",
    lead: "Cuộc sống tiện nghi bắt đầu từ những tiện ích gần gũi, đủ đầy ngay trong khuôn viên dự án.",
    body: [
      "Dự án quy hoạch khu vui chơi trẻ em, sân vườn, không gian sinh hoạt chung và khu thương mại dịch vụ để cư dân thuận tiện trong sinh hoạt.",
      "Hệ thống an ninh, bãi đỗ xe và hạ tầng kỹ thuật được thiết kế đồng bộ, hướng đến sự an tâm lâu dài.",
    ],
    points: ["Sân vườn và khu vui chơi trẻ em", "Khu thương mại dịch vụ nội khu", "An ninh và bãi đỗ xe đồng bộ"],
  },
  {
    img: P.g3, tag: "Cộng đồng", read: "2 phút",
    title: "Kiến tạo cộng đồng cư dân văn minh, gắn kết",
    excerpt: "Hướng tới một môi trường sống an toàn, thân thiện cho các gia đình.",
    lead: "Hơn cả một nơi để ở, dự án hướng tới xây dựng cộng đồng cư dân gắn kết, văn minh và nghĩa tình.",
    body: [
      "Minh Phú Hưng Land chú trọng các hoạt động kết nối cư dân, vận hành chuyên nghiệp và chăm sóc khách hàng sau bàn giao.",
      "Mục tiêu là mang đến cho mỗi gia đình một tổ ấm bình yên, nơi các thế hệ cùng phát triển.",
    ],
    points: ["Vận hành và quản lý chuyên nghiệp", "Chăm sóc khách hàng sau bàn giao", "Môi trường sống an toàn, thân thiện"],
  },
];

const marquee = ["Pháp lý minh bạch", "Quy hoạch xanh", "Tiến độ cam kết", "Chất lượng bền vững", "Cộng đồng văn minh", "Giá trị trường tồn"];

function Words({ text, start }: { text: string; start: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span className="w" key={i} style={{ ["--i" as string]: start + i }}>
          <span>{w}</span>{" "}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="progress" id="progress" />
      <div className="cursor-glow" id="glow" aria-hidden="true" />
      <Navbar />
      <Effects />

      <main>
        <section className="hero" id="home">
          <div className="hero-bg" id="heroBg" style={{ backgroundImage: `url(${img(P.hero, 2000)})` }} />
          <div className="hero-shade" />
          <canvas className="sparkles" id="sparkles" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="eyebrow light line-in">Nhà đầu tư BĐS uy tín · Phú Thọ</p>
            <h1>
              <Words text="Kiến tạo không gian" start={0} />
              <br />
              <em><Words text="sống thanh thoát" start={3} /></em>
            </h1>
            <p className="lead line-in">Chủ đầu tư dự án nhà ở lực lượng vũ trang Công an nhân dân tại Phú Thọ — nơi chất lượng sống được nâng tầm mỗi ngày.</p>
            <div className="line-in">
              <a href="#projects" className="btn">Khám phá dự án</a>
              <a href="#contact" className="btn btn-ghost">Nhận tư vấn</a>
            </div>
          </div>
          <div className="container stats-wrap">
            <div className="stats">
              <div><b data-count="460">460</b><small>tỷ</small><span>Vốn điều lệ</span></div>
              <div><b data-count="1233">1.233</b><span>Căn hộ</span></div>
              <div><b data-count="2262">2.262</b><small>tỷ</small><span>Tổng đầu tư</span></div>
              <div><b data-count="50000">50.000</b><small>m²</small><span>Quy mô đất</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container grid2">
            <div className="collage reveal">
              <img className="c1" data-speed="0.05" src={img(P.a1, 900)} alt="Công trình hiện đại" loading="lazy" />
              <img className="c2" data-speed="-0.08" src={img(P.a2, 700)} alt="Không gian sống" loading="lazy" />
              <div className="badge"><b>2026</b><span>Năm thành lập</span></div>
            </div>
            <div className="reveal">
              <p className="eyebrow">Giới thiệu</p>
              <h2>Về chúng tôi</h2>
              <h3>Công ty TNHH Đầu tư BĐS Minh Phú Hưng</h3>
              <p className="muted">Được thành lập với tầm nhìn phát triển nhà ở chất lượng cao cho cán bộ chiến sĩ Công an nhân dân, chúng tôi cam kết mang lại không gian sống tiêu chuẩn, bền vững tại Phú Thọ.</p>
              <dl className="profile">
                {profile.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div className="marquee-set" key={k}>
                {marquee.map((m) => (
                  <span key={m}>{m}<i>✦</i></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="section soft" id="projects">
          <div className="container">
            <div className="head">
              <p className="eyebrow">Dự án</p>
              <h2>Khu Đồng Mái</h2>
              <p className="muted">Nhà ở LLVT Công an tại Phường Vĩnh Phúc, Phú Thọ<br />~2.262,3 tỷ đồng · 50.000 m² · 1.233 căn hộ</p>
            </div>
            <ProjectCards projects={projects} />
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="head">
              <p className="eyebrow">Hình ảnh</p>
              <h2>Không gian sống đẳng cấp</h2>
              <p className="muted">Từng chi tiết được chăm chút để mỗi gia đình thêm an yên</p>
            </div>
            <GalleryMosaic items={gallery as [string, string, string][]} />
          </div>
        </section>

        <section className="section soft" id="why">
          <div className="container">
            <div className="head">
              <p className="eyebrow">Vì sao chọn</p>
              <h2>Lý do chọn chúng tôi</h2>
              <p className="muted">Uy tín · Chuyên nghiệp · Minh bạch</p>
            </div>
            <div className="cards four">
              {why.map(([ico, t, d]) => (
                <article className="fcard reveal" key={t}><div className="ico"><Icon name={ico} size={28} /></div><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section navy bgimg" id="timeline" style={{ backgroundImage: `linear-gradient(rgba(12,30,53,.9),rgba(12,30,53,.94)),url(${img(P.tl, 1800)})` }}>
          <div className="container">
            <div className="head">
              <p className="eyebrow light">Tiến độ</p>
              <h2>Tiến độ dự án</h2>
              <p>Lộ trình 2026 – 2030</p>
            </div>
            <div className="timeline" id="tl">
              <div className="tl-line"><i id="tlFill" /></div>
              {milestones.map(([d, t, p]) => (
                <div className="tl-item" key={d}><em>{d}</em><h3>{t}</h3><p>{p}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="news">
          <div className="container">
            <div className="head">
              <p className="eyebrow">Tin tức</p>
              <h2>Tin tức mới nhất</h2>
            </div>
            <NewsList items={news} />
          </div>
        </section>

        <section className="cta" style={{ backgroundImage: `linear-gradient(rgba(12,30,53,.72),rgba(12,30,53,.8)),url(${img(P.cta, 1800)})` }}>
          <div className="container reveal">
            <h2>Ngôi nhà mơ ước <em>bắt đầu từ chữ Tín</em></h2>
            <a href="#contact" className="btn">Đăng ký tư vấn <Icon name="arrow" size={18} /></a>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container grid2">
            <div className="reveal">
              <p className="eyebrow">Liên hệ</p>
              <h2>Liên hệ tư vấn</h2>
              <p className="muted">Đăng ký nhận thông tin dự án</p>
              <ul className="contact-list">
                <li><Icon name="phone" size={20} /><a href="tel:0988056886">0988056886</a></li>
                <li><Icon name="mail" size={20} /><a href="mailto:congtyminhphuhung@gmail.com">congtyminhphuhung@gmail.com</a></li>
                <li><Icon name="pin" size={20} />TDP Khai Quang, P. Vĩnh Phúc, Phú Thọ</li>
              </ul>
              <ContactForm />
            </div>
            <div className="reveal">
              <iframe
                title="Bản đồ Khu Đồng Mái, Phú Thọ"
                className="map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Ph%C6%B0%E1%BB%9Dng+V%C4%A9nh+Ph%C3%BAc,+Ph%C3%BA+Th%E1%BB%8D&output=embed"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container fgrid">
          <div>
            <Logo tone="light" />
            <p>TDP Khai Quang, P. Vĩnh Phúc, Phú Thọ<br />Hotline: <a href="tel:0988056886">0988056886</a><br />Email: <a href="mailto:congtyminhphuhung@gmail.com">congtyminhphuhung@gmail.com</a><br />GCNĐKDN: 2500783313</p>
          </div>
          <div><h4>Dự án</h4><a href="#projects">Khu Đồng Mái</a><a href="#projects">Nhà ở XH</a><a href="#projects">Nhà ở TM</a></div>
          <div><h4>Pháp lý</h4><a href="#">Điều khoản</a><a href="#">Bảo mật</a><a href="#">Giấy phép</a></div>
        </div>
        <p className="copy">© 2026 Công ty TNHH Đầu tư BĐS Minh Phú Hưng. Bảo lưu mọi quyền.</p>
      </footer>
    </>
  );
}
