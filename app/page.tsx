import Navbar from "@/components/Navbar";
import Effects from "@/components/Effects";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import WhyCards from "@/components/WhyCards";
import LegalLinks from "@/components/LegalLinks";
import NewsList, { type Article } from "@/components/NewsList";
import GalleryMosaic from "@/components/GalleryMosaic";
import ProjectCards, { type Project } from "@/components/ProjectCards";

const profile: [string, React.ReactNode][] = [
  ["Mã số ĐKDN", "2500783313"],
  ["Địa chỉ", "Số 29, Phố Ấp Hạ, Phường Vĩnh Phúc, Tỉnh Phú Thọ, Việt Nam"],
  ["Email", <a key="e" href="mailto:bdsminhphuhung@gmail.com">bdsminhphuhung@gmail.com</a>],
  ["Điện thoại", <a key="t" href="tel:0988056886">0988056886</a>],
];


const D = (n: string) => `/du-an/${n}.jpg`;
const P = {
  hero: D("phoi-canh-ban-ngay"),
  a1: D("kien-truc"),
  a2: D("cong-vien-xanh"),
  p1: D("phoi-canh-ban-ngay"),
  p2: D("thap-hoang-hon"),
  p3: D("toa-tm"),
  g1: D("vuon-yoga"),
  g2: D("kien-truc"),
  g3: D("ho-boi"),
  g4: D("nha-thap-tang"),
  g5: D("cong-vien-thap"),
  g6: D("duong-noi-khu"),
  g7: D("cong-vien-nang"),
  tl: D("vi-tri-tong-the"),
  cta: D("toan-canh-dem"),
  n1: D("phoi-canh-ban-ngay"),
  n2: D("vi-tri-tong-the"),
  plan: D("quy-hoach-1-500"),
  vt1: D("mat-bang-vt1"),
  apt: D("can-ho-dien-hinh"),
  night: D("toan-canh-dem"),
  tn: D("nha-lien-ke"),
};

const projects: Project[] = [
  {
    cover: P.p1, title: "Tòa VT1", kind: "Nhà ở xã hội · Tòa 1", desc: "Giai đoạn 1 · 20 tầng nổi · 1 tầng hầm", tag: "Đang triển khai",
    album: [[P.p1, "Phối cảnh tổng thể"], [P.g2, "Kiến trúc hiện đại"], [P.g1, "Phòng khách"], [P.g5, "Nội thất tinh tế"], [P.a1, "Mặt đứng tòa nhà"], [P.g6, "Căn hộ mẫu"]],
  },
  {
    cover: P.p2, title: "Tòa VT2", kind: "Nhà ở xã hội · Tòa 2", desc: "Giai đoạn 1 · ≈700 căn (tòa 1 & 2) · 20 tầng + 1 hầm", tag: "Đang triển khai",
    album: [[P.p2, "Phối cảnh tổng thể"], [P.a1, "Mặt đứng tòa nhà"], [P.g3, "Không gian sống"], [P.g6, "Căn hộ mẫu"], [P.g1, "Phòng khách"], [P.a2, "Tiện ích nội khu"]],
  },
  {
    cover: P.p3, title: "Tòa TM", kind: "Nhà ở thương mại cao tầng", desc: "179 căn · 15 tầng nổi · 1 hầm · đế TM 2 tầng", tag: "Giai đoạn 1",
    album: [[P.p3, "Phối cảnh tổng thể"], [P.g4, "Nhà thấp tầng"], [P.g3, "Không gian sống"], [P.g5, "Nội thất tinh tế"], [P.g2, "Kiến trúc hiện đại"], [P.night, "Toàn cảnh khu đô thị về đêm"]],
  },
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

const pillars = [
  ["Tri ân người giữ bình yên", "Cán bộ, chiến sĩ Công an nhân dân hy sinh thầm lặng vì sự bình yên của Nhân dân. Xây dựng một nơi ở ổn định cho các đồng chí là cách chúng tôi bày tỏ lòng biết ơn bằng hành động cụ thể."],
  ["An cư để lạc nghiệp", "Nhà ở xã hội diện tích hợp lý, giá phù hợp giúp các gia đình yên tâm công tác, chăm lo con cái và gắn bó lâu dài với địa phương."],
  ["Doanh nghiệp đồng hành cùng Nhà nước", "Chủ động chia sẻ gánh nặng an sinh xã hội cùng Nhà nước, thực hiện chính sách nhà ở cho lực lượng vũ trang theo đúng pháp luật, minh bạch và đúng tiến độ."],
  ["Phát triển bền vững", "Quy hoạch nhiều cây xanh, mặt nước, tiện ích cộng đồng; mật độ xây dựng thấp để thế hệ hôm nay và mai sau cùng thụ hưởng môi trường sống lành mạnh."],
];

const minhPhuHung = [
  ["明", "MINH", "Trí tuệ dẫn lối", "Mỗi dự án của Minh Phú Hưng bắt đầu từ tư duy sáng suốt: nghiên cứu kỹ lưỡng, tính toán thấu đáo và nhìn xa trông rộng. Chúng tôi tin rằng trí tuệ là ánh sáng soi đường cho mọi quyết định đầu tư, giúp mỗi bước đi đúng hướng và mỗi công trình đúng giá trị."],
  ["富", "PHÚ", "Thịnh vượng để sẻ chia", "Giá trị chúng tôi tạo ra không dừng ở lợi nhuận doanh nghiệp. Đó là mái ấm cho mỗi gia đình, tài sản bền vững cho khách hàng, lợi ích hài hòa cho đối tác và đóng góp thiết thực cho cộng đồng."],
  ["興", "HƯNG", "Hưng thịnh để trường tồn", "Chúng tôi không chạy theo thành công ngắn hạn. Phát triển thận trọng, quản trị rủi ro chặt chẽ và không ngừng đổi mới là con đường để doanh nghiệp cùng các công trình bền vững theo thời gian."],
];

const missions = [
  ["Với khách hàng", "Kiến tạo những không gian sống an toàn, tiện nghi, được quy hoạch thông minh để mỗi gia đình yên tâm an cư."],
  ["Với đối tác", "Hợp tác trên nền tảng hiểu biết, chuyên nghiệp và cùng phát triển lâu dài."],
  ["Với cộng đồng", "Góp phần giải quyết nhu cầu nhà ở, đặc biệt là nhà ở xã hội cho các lực lượng và người lao động."],
  ["Với đội ngũ", "Xây dựng môi trường làm việc trọng tri thức, khuyến khích sáng tạo và học hỏi không ngừng."],
];

const coreValues = [
  ["Trí tuệ", "Tư duy sáng suốt, quyết định dựa trên hiểu biết và tầm nhìn dài hạn"],
  ["Chính trực", "Rõ ràng, đúng pháp luật trong mọi cam kết và giao dịch"],
  ["Tận tâm", "Đặt sự an tâm và lợi ích của khách hàng lên trước"],
  ["Đồng lòng", "Gắn kết nội bộ, đối tác và khách hàng như hai nhánh nguyệt quế đan vào nhau"],
  ["Bền vững", "Phát triển thận trọng, quản trị rủi ro, hướng tới lâu dài"],
];

const landUse: [string, number, string][] = [
  ["Đất ở (xã hội + thương mại)", 21630, "m²"],
  ["Giao thông, bãi đỗ xe", 17100, "m²"],
  ["Cây xanh, thể dục thể thao", 7633, "m²"],
  ["Đất giáo dục (trường mầm non)", 3637, "m²"],
];

const scaleFacts: [string, string][] = [
  ["Tổng diện tích khu đất", "~50.000 m²"],
  ["Tổng diện tích sàn xây dựng", "~154.389 m²"],
  ["Nhà ở xã hội", "≈1.039 căn · 3 tòa · ≈700 căn GĐ1 (tòa 1, 2) · ≈339 căn GĐ2 (tòa 3)"],
  ["Nhà ở thương mại cao tầng", "179 căn · 15 tầng nổi · 1 hầm · khối đế TM 2 tầng (GĐ1)"],
  ["Nhà ở thương mại thấp tầng", "15 căn · 4 tầng (GĐ2)"],
  ["Trường mầm non MN-01", "3 tầng · quy mô 186 cháu (GĐ2)"],
  ["Mật độ xây dựng gộp", "~21,2%"],
  ["Dân số dự kiến", "~3.714 người"],
  ["Tổng mức đầu tư", "~2.262,3 tỷ đồng"],
];

const milestones = [
  ["Q3/2026 – Q4/2028", "Giai đoạn 1", "Bồi thường, GPMB; HTKT toàn khu · ≈700 căn NOXH (tòa 1, 2; 20 tầng nổi, 1 hầm) · 179 căn TM cao tầng (15 tầng nổi, 1 hầm, đế TM 2 tầng)"],
  ["Q4/2028", "Hoàn thành Giai đoạn 1", "Bàn giao các hạng mục Giai đoạn 1 theo quy hoạch"],
  ["Theo nhu cầu BCA", "Giai đoạn 2", "≈339 căn NOXH (tòa 3) · 15 căn thấp tầng (4 tầng) · Trường MN-01 (3 tầng, 186 cháu). Khởi công khi Bộ Công an có nhu cầu cụ thể; hoàn thành sau 02 năm"],
];

const news: Article[] = [
  {
    img: P.n1, tag: "Tin dự án", read: "4 phút",
    title: "Khởi công Giai đoạn 1 dự án Khu Đồng Mái",
    excerpt: "Kế hoạch Giai đoạn 1: bồi thường GPMB, HTKT toàn khu, ≈700 căn NOXH và Tòa TM từ Q3/2026.",
    lead: "Giai đoạn 1 của dự án Khu Đồng Mái được xác định là bước khởi đầu quan trọng, tạo nền tảng hạ tầng đồng bộ cho toàn bộ khu đô thị.",
    body: [
      "Theo kế hoạch, Giai đoạn 1 (Quý III/2026 – Quý IV/2028) thực hiện bồi thường, giải phóng mặt bằng, hoàn thiện hạ tầng kỹ thuật toàn khu, xây dựng khoảng 700 căn nhà ở xã hội (tòa 1, 2; 20 tầng nổi, 01 tầng hầm) và 179 căn nhà ở thương mại cao tầng kèm khối đế thương mại 2 tầng.",
      "Minh Phú Hưng Land cam kết tổ chức thi công theo đúng tiến độ, kiểm soát chặt chẽ chất lượng vật liệu, an toàn lao động và vệ sinh môi trường trong suốt quá trình xây dựng.",
      "Toàn bộ dự án có quy mô hơn 50.000 m², tổng mức đầu tư khoảng 2.262 tỷ đồng với 1.233 căn hộ, được phát triển theo hai giai đoạn.",
      "Việc khởi công được chuẩn bị qua nhiều bước: hoàn tất thủ tục pháp lý, rà soát thiết kế, lựa chọn nhà thầu có năng lực và lập biện pháp thi công chi tiết. Mỗi hạng mục đều có mốc nghiệm thu rõ ràng để chủ đầu tư và khách hàng cùng theo dõi.",
      "Hạ tầng được ưu tiên triển khai trước gồm đường nội khu, hệ thống cấp thoát nước, điện chiếu sáng và cây xanh cảnh quan. Cách làm này giúp cư dân sớm có môi trường sống hoàn chỉnh ngay khi nhận nhà.",
      "Giai đoạn 2 triển khai khoảng 339 căn nhà ở xã hội (tòa 3), 15 căn nhà ở thương mại thấp tầng (4 tầng) và trường mầm non MN-01 (3 tầng, 186 cháu), khởi công khi Bộ Công an có nhu cầu cụ thể và hoàn thành sau 02 năm. Công ty sẽ cập nhật tiến độ trên website và các kênh liên hệ chính thức.",
    ],
    points: ["≈700 căn NOXH và 179 căn TM trong Giai đoạn 1", "Bồi thường GPMB và HTKT toàn khu", "Cam kết tiến độ và chất lượng công trình"],
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
      "Việc tuân thủ đúng quy định pháp luật về đầu tư, xây dựng và nhà ở giúp dự án vận hành thuận lợi từ khâu quy hoạch, thi công đến bàn giao. Đây cũng là yếu tố then chốt giúp khách hàng yên tâm về quyền lợi lâu dài.",
      "Khách hàng nên chuẩn bị các giấy tờ chứng minh đối tượng và điều kiện theo quy định, đồng thời chỉ thực hiện giao dịch qua kênh chính thức của chủ đầu tư. Bộ phận tư vấn sẽ hướng dẫn từng bước, từ nộp hồ sơ đến ký hợp đồng.",
      "Minh Phú Hưng Land cam kết minh bạch về giá, diện tích, tiến độ và các điều khoản hợp đồng, xem đây là cam kết đầu tiên với mọi khách hàng.",
    ],
    points: ["Phê duyệt theo QĐ 6061/QĐ-BCA-H02", "Thông tin pháp lý công khai, minh bạch", "Hỗ trợ tư vấn thủ tục đăng ký"],
  },
  {
    img: P.a1, tag: "Sự kiện", read: "3 phút",
    title: "Minh Phú Hưng Land chính thức ra mắt",
    excerpt: "Công ty đặt mục tiêu phát triển nhà ở chất lượng cao tại Phú Thọ.",
    lead: "Minh Phú Hưng Land bước vào thị trường với khát vọng kiến tạo những khu ở chất lượng, bền vững.",
    body: [
      "Lấy tinh thần “Minh bạch – Phú quý – Hưng thịnh” làm kim chỉ nam, công ty hướng đến việc phát triển các dự án nhà ở tại Phú Thọ với pháp lý rõ ràng, thiết kế hiện đại và tiến độ cam kết.",
      "Ban lãnh đạo do ông Vũ Văn Minh (Chủ tịch HĐTV) và ông Lê Đức Thọ (Tổng giám đốc) dẫn dắt, đặt khách hàng và cộng đồng làm trung tâm của mọi quyết định.",
      "Tên gọi Minh Phú Hưng gói trọn ba giá trị: “Minh” là sự sáng suốt và minh bạch; “Phú” là sự thịnh vượng, đủ đầy; “Hưng” là sự phát triển bền vững qua từng giai đoạn. Ba giá trị này được thể hiện xuyên suốt từ cách làm việc đến từng sản phẩm.",
      "Công ty đặt trụ sở tại phường Vĩnh Phúc, tỉnh Phú Thọ, với đội ngũ nhân sự giàu kinh nghiệm trong đầu tư, thiết kế, thi công và chăm sóc khách hàng. Dự án đầu tiên là Khu Đồng Mái với quy mô 1.233 căn hộ, tổng mức đầu tư khoảng 2.262 tỷ đồng.",
      "Trong thời gian tới, công ty sẽ tiếp tục hoàn thiện quy trình quản trị, nâng cao chất lượng dịch vụ và mở rộng hợp tác để mang lại nhiều giá trị hơn cho khách hàng, đối tác và địa phương.",
    ],
    points: ["Dự án đầu tiên: Khu Đồng Mái, Phú Thọ", "Định hướng phát triển nhà ở chất lượng cao", "Giá trị cốt lõi: Minh bạch · Phú quý · Hưng thịnh"],
  },
  {
    img: P.g2, tag: "Thiết kế", read: "4 phút",
    title: "Kiến trúc hiện đại, không gian sống xanh",
    excerpt: "Quy hoạch ưu tiên mảng xanh, ánh sáng tự nhiên và tiện ích nội khu.",
    lead: "Mỗi căn hộ được thiết kế để tối ưu ánh sáng, thông gió và sự riêng tư, mang lại cảm giác thư thái mỗi ngày.",
    body: [
      "Tổng thể quy hoạch kết hợp tòa nhà cao tầng với mảng xanh, lối đi dạo và không gian sinh hoạt cộng đồng, tạo nên môi trường sống an toàn, văn minh.",
      "Các căn hộ có công năng linh hoạt, vật liệu hoàn thiện bền đẹp, phù hợp với nhu cầu của các gia đình trẻ.",
      "Ngôn ngữ kiến trúc hiện đại với các đường nét gọn gàng, mặt đứng sử dụng hài hòa vật liệu và mảng kính giúp công trình có diện mạo thanh thoát, đồng thời tối ưu chiếu sáng và thông gió tự nhiên.",
      "Không gian xanh được bố trí xen kẽ giữa các tòa nhà, tạo nên những khoảng thở cho cư dân. Lối đi bộ, vườn dạo và khu sinh hoạt cộng đồng được kết nối liền mạch, khuyến khích lối sống năng động, thân thiện với môi trường.",
      "Từng căn hộ được tính toán kỹ về công năng: phòng khách rộng rãi, bếp và khu phụ hợp lý, ban công đón gió. Nhờ vậy mỗi gia đình đều có thể tận hưởng không gian sống tiện nghi và ấm cúng.",
    ],
    points: ["Mật độ xây dựng hợp lý, nhiều cây xanh", "Căn hộ thông thoáng, đón ánh sáng tự nhiên", "Tiện ích nội khu đáp ứng nhu cầu hằng ngày"],
  },
  {
    img: P.g5, tag: "Tiện ích", read: "3 phút",
    title: "Tiện ích nội khu đáp ứng cuộc sống thường nhật",
    excerpt: "Từ khu vui chơi, sân vườn đến dịch vụ thương mại ngay dưới chân tòa nhà.",
    lead: "Cuộc sống tiện nghi bắt đầu từ những tiện ích gần gũi, đủ đầy ngay trong khuôn viên dự án.",
    body: [
      "Dự án quy hoạch khu vui chơi trẻ em, sân vườn, không gian sinh hoạt chung và khu thương mại dịch vụ để cư dân thuận tiện trong sinh hoạt.",
      "Hệ thống an ninh, bãi đỗ xe và hạ tầng kỹ thuật được thiết kế đồng bộ, hướng đến sự an tâm lâu dài.",
      "Ngay dưới chân tòa nhà là các dịch vụ thiết yếu, giúp cư dân mua sắm, ăn uống và làm việc thuận tiện mà không cần di chuyển xa. Trẻ em có khu vui chơi an toàn, người lớn tuổi có không gian dạo bộ và thư giãn.",
      "Hệ thống giao thông nội khu được quy hoạch rõ ràng, tách biệt lối đi bộ và phương tiện, bãi đỗ xe bố trí hợp lý. An ninh được giám sát chặt chẽ, góp phần tạo cảm giác bình yên cho mọi gia đình.",
      "Đội ngũ vận hành chuyên nghiệp sẽ đảm nhiệm công tác vệ sinh, bảo trì và chăm sóc cảnh quan, giữ cho khu ở luôn sạch đẹp và bền giá trị theo thời gian.",
    ],
    points: ["Sân vườn và khu vui chơi trẻ em", "Khu thương mại dịch vụ nội khu", "An ninh và bãi đỗ xe đồng bộ"],
  },
  {
    img: P.g3, tag: "Cộng đồng", read: "3 phút",
    title: "Kiến tạo cộng đồng cư dân văn minh, gắn kết",
    excerpt: "Hướng tới một môi trường sống an toàn, thân thiện cho các gia đình.",
    lead: "Hơn cả một nơi để ở, dự án hướng tới xây dựng cộng đồng cư dân gắn kết, văn minh và nghĩa tình.",
    body: [
      "Minh Phú Hưng Land chú trọng các hoạt động kết nối cư dân, vận hành chuyên nghiệp và chăm sóc khách hàng sau bàn giao.",
      "Mục tiêu là mang đến cho mỗi gia đình một tổ ấm bình yên, nơi các thế hệ cùng phát triển.",
      "Các hoạt động như ngày hội gia đình, chương trình thiện nguyện và sinh hoạt câu lạc bộ sẽ được tổ chức định kỳ, giúp cư dân làm quen và gắn bó với nhau.",
      "Với đối tượng chính là cán bộ, chiến sĩ lực lượng Công an nhân dân và gia đình, khu ở mang tinh thần kỷ cương, đoàn kết và tương trợ. Đó là nền tảng cho một cộng đồng văn minh, an toàn.",
      "Sau bàn giao, bộ phận chăm sóc khách hàng tiếp tục tiếp nhận góp ý và hỗ trợ bảo hành, để mỗi cư dân luôn cảm nhận được sự đồng hành lâu dài của chủ đầu tư.",
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
          <div className="hero-bg" id="heroBg" style={{ backgroundImage: `url(${P.hero})` }} />
          <div className="hero-shade" />
          <canvas className="sparkles" id="sparkles" aria-hidden="true" />
          <div className="container hero-inner">
            <h1 className="sr-only">Minh Phú Hưng — Chủ đầu tư nhà ở lực lượng vũ trang tại Phú Thọ</h1>
            <p className="lead line-in">Chủ đầu tư dự án nhà ở lực lượng vũ trang Công an nhân dân tại Phú Thọ — nơi chất lượng sống được nâng tầm mỗi ngày.</p>
            <div className="line-in">
              <a href="#projects" className="btn">Khám phá dự án</a>
              <a href="#contact" className="btn btn-ghost">Nhận tư vấn</a>
            </div>
          </div>
          <div className="container stats-wrap">
            <div className="stats">
              <div><b data-count="1233">1.233</b><span>Căn hộ</span></div>
              <div><b data-count="2262">2.262</b><small>tỷ</small><span>Tổng mức đầu tư</span></div>
              <div><b data-count="20">20</b><small>tầng</small><span>Nhà cao tầng</span></div>
              <div><b data-count="50000">50.000</b><small>m²</small><span>Quy mô đất</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container grid2">
            <div className="collage reveal">
              <img className="c1" data-speed="0.05" src={P.a1} alt="Công trình hiện đại" loading="lazy" />
              <img className="c2" data-speed="-0.08" src={P.a2} alt="Không gian sống" loading="lazy" />
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

        <section className="section philo" id="philosophy">
          <div className="container">
            <div className="head">
              <p className="eyebrow light">Triết lý phát triển</p>
              <h2>Minh để dẫn lối – Phú để sẻ chia – Hưng để trường tồn</h2>
              <p>Tầm nhìn sáng suốt – Giá trị thịnh vượng – Phát triển trường tồn</p>
            </div>
            <div className="cards mph">
              {minhPhuHung.map(([han, t, s, d]) => (
                <div className="philo-card mph-card reveal" key={t}>
                  <span className="han">{han}</span>
                  <h3>{t} <small>({han})</small></h3>
                  <strong>{s}</strong>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <div className="head philo-sub">
              <h2>Xây nhà cho người giữ bình yên</h2>
              <p>Phát triển bất động sản gắn liền với trách nhiệm xã hội</p>
            </div>
            <blockquote className="philo-quote reveal">
              <span className="diamond" aria-hidden="true" />
              Với Minh Phú Hưng, mỗi ngôi nhà không chỉ là công trình – đó là lời tri ân và là cam kết trách nhiệm của doanh nghiệp đối với những người ngày đêm gìn giữ sự bình yên cho Tổ quốc.
            </blockquote>
            <div className="cards four">
              {pillars.map(([t, d], i) => (
                <div className="philo-card reveal" key={t}>
                  <em>0{i + 1}</em>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <p className="philo-why reveal">
              <b>Vì sao chúng tôi chọn xây dựng nhà ở cho lực lượng vũ trang?</b> Bởi chúng tôi tin rằng một doanh nghiệp bền vững là doanh nghiệp biết đặt giá trị cộng đồng lên trước lợi ích ngắn hạn: khi người chiến sĩ có một mái ấm ổn định, xã hội có thêm một nền tảng vững vàng cho an ninh và phát triển.
            </p>
          </div>
        </section>

        <section className="section" id="vision">
          <div className="container">
            <div className="head">
              <p className="eyebrow">Định hướng</p>
              <h2>Tầm nhìn · Sứ mệnh · Giá trị cốt lõi</h2>
            </div>
            <div className="vm reveal">
              <div className="vm-box">
                <h3>Tầm nhìn</h3>
                <p>Trở thành nhà đầu tư và phát triển bất động sản có tầm nhìn sáng suốt, uy tín và bền vững, được khách hàng tin chọn và đối tác tin cậy. Dấu ấn của chúng tôi là những dự án nhà ở chất lượng, được kiến tạo bằng trí tuệ và mang giá trị thực.</p>
              </div>
              <div className="vm-box">
                <h3>Sứ mệnh</h3>
                <ul>
                  {missions.map(([k, v]) => (
                    <li key={k}><b>{k}:</b> {v}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className="cv-title reveal">Giá trị cốt lõi</h3>
            <div className="cv reveal">
              {coreValues.map(([k, v]) => (
                <div className="cv-item" key={k}>
                  <b>{k}</b>
                  <p>{v}</p>
                </div>
              ))}
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
            <div className="overview">
              <div className="ov-plan reveal">
                <img src={P.plan} alt="Quy hoạch chi tiết tỷ lệ 1/500 Khu Đồng Mái" loading="lazy" />
                <span>Quy hoạch chi tiết tỷ lệ 1/500</span>
              </div>
              <div className="ov-info reveal">
                <h3>Quy mô &amp; cơ cấu sử dụng đất</h3>
                <ul className="bars">
                  {landUse.map(([k, v]) => (
                    <li key={k}>
                      <div><span>{k}</span><b>{v.toLocaleString("vi-VN")} m²</b></div>
                      <i style={{ width: `${(v / 21630) * 100}%` }} />
                    </li>
                  ))}
                </ul>
                <dl className="profile">
                  {scaleFacts.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="plans">
              <figure className="reveal"><img src={P.vt1} alt="Mặt bằng tầng điển hình Tòa VT1" loading="lazy" /><figcaption>Mặt bằng tầng điển hình – Tòa VT1</figcaption></figure>
              <figure className="reveal"><img src={P.apt} alt="Căn hộ điển hình nhà ở xã hội" loading="lazy" /><figcaption>Căn hộ điển hình – 70 m²</figcaption></figure>
            </div>
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
            <WhyCards />
          </div>
        </section>

        <section className="section navy bgimg" id="timeline" style={{ backgroundImage: `linear-gradient(rgba(12,30,53,.9),rgba(12,30,53,.94)),url(${P.tl})` }}>
          <div className="container">
            <div className="head">
              <p className="eyebrow light">Tiến độ</p>
              <h2>Tiến độ dự án</h2>
              <p>Giai đoạn 1: Q3/2026 – Q4/2028 · Giai đoạn 2: theo nhu cầu Bộ Công an</p>
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

        <section className="cta" style={{ backgroundImage: `linear-gradient(rgba(12,30,53,.72),rgba(12,30,53,.8)),url(${P.cta})` }}>
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
                <li><Icon name="mail" size={20} /><a href="mailto:bdsminhphuhung@gmail.com">bdsminhphuhung@gmail.com</a></li>
                <li><Icon name="pin" size={20} />Số 29, Phố Ấp Hạ, Phường Vĩnh Phúc, Tỉnh Phú Thọ, Việt Nam</li>
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
            <p>Chủ đầu tư các dự án nhà ở dành cho cán bộ, chiến sĩ Công an nhân dân tại Phú Thọ, cam kết minh bạch, chất lượng và đúng tiến độ.</p>
          </div>
          <div><h4>Dự án</h4><a href="#projects">Khu Đồng Mái</a><a href="#projects">Nhà ở XH</a><a href="#projects">Nhà ở TM</a></div>
          <LegalLinks />
          <div>
            <h4>Liên hệ</h4>
            <p className="fc">Số 29, Phố Ấp Hạ, Phường Vĩnh Phúc, Tỉnh Phú Thọ, Việt Nam<br />Hotline: <a href="tel:0988056886">0988056886</a><br />Email: <a href="mailto:bdsminhphuhung@gmail.com">bdsminhphuhung@gmail.com</a></p>
          </div>
        </div>
        <div className="container copy">
          <span>© 2026 Công ty TNHH Đầu tư BĐS Minh Phú Hưng. Bảo lưu mọi quyền.</span>
          <span>GCNĐKDN: 2500783313</span>
        </div>
      </footer>
    </>
  );
}
