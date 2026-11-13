ĐỀ XUẤT THIẾT KẾ — WEBSITE CÔNG TY MINH PHÚ HƯNG LAND · REVIEW TRƯỚC KHI TRIỂN KHAI

Proposal v1.0 · Tháng 11/2026

# Website Giới Thiệu Công Ty *Minh Phú Hưng Land*

Đề xuất công nghệ, hệ màu sắc, typography và layout tổng thể cho website bất động sản — hiện đại, SEO tốt, phù hợp thị trường Việt Nam.

📌 **CÔNG TY TNHH ĐẦU TƯ BĐS MINH PHÚ HƯNG**

📍 **Phường Vĩnh Phúc, Tỉnh Phú Thọ**

💰 **Vốn điều lệ: 460 tỷ đồng**

01 · Thông tin công ty

## Hồ sơ từ tài liệu

Những thông tin cốt lõi từ hồ sơ pháp lý và tài liệu dự án sẽ là nội dung chính của website.

Tên công ty

Công ty TNHH Đầu tư BĐS Minh Phú Hưng

Mã số ĐKDN

2500783313

Vốn điều lệ

460.000.000.000 đồng

Chủ tịch HĐTV

Vũ Văn Minh

Tổng giám đốc

Lê Đức Thọ

Địa chỉ

TDP Khai Quang, P. Vĩnh Phúc, Phú Thọ

Email liên hệ

congtyminhphuhung@gmail.com

Điện thoại

0988056886

Dự án trọng điểm

Nhà ở LLVT Công an tại Khu Đồng Mái, Vĩnh Phúc, Phú Thọ

Tổng vốn đầu tư

\~2.262,3 tỷ đồng

Quy mô đất

50.000 m² — 1.233 căn hộ

Tiến độ GĐ 1

Q3/2026 → Q4/2028

02 · Đề xuất công nghệ

## Technology Stack

Chọn stack đơn giản, triển khai nhanh, SEO tốt nhất, dễ bảo trì — phù hợp cho website giới thiệu công ty BĐS quy mô vừa.

### 🏗️ Framework

Next.js 15 React 19 TypeScript

Next.js với App Router cho SSR/SSG — tốt nhất cho SEO vì HTML được render server-side. Google index trang tức thì, không cần JavaScript.

### 🎨 Styling

Tailwind CSS 4 CSS Variables CSS Modules

Tailwind cho tốc độ dev, CSS Variables cho theming (dark/light mode), responsive dễ dàng, file CSS nhỏ gọn sau build.

### ✨ Animation

GSAP 3 Framer Motion AOS

GSAP cho scroll-triggered animations phức tạp. Framer Motion cho React component transitions. AOS cho fade-in đơn giản trên các section.

### 📦 Content

MDX / JSON Static Files +CMS tuỳ chọn

Phase 1: nội dung tĩnh trong JSON/MDX, không cần backend. Phase 2: có thể thêm Sanity CMS hoặc Strapi nếu cần cập nhật tin tức thường xuyên.

### 🖼️ Hình ảnh

Next/Image WebP Unsplash API

Next.js Image component tự động tối ưu: lazy load, WebP conversion, responsive sizes. Ảnh tạm từ Unsplash API (high quality, không vỡ ảnh).

### 🚀 Deploy

Vercel hoặc Netlify CDN Global

Vercel là platform tối ưu nhất cho Next.js — deploy tự động, CDN edge toàn cầu, HTTPS miễn phí, tên miền tuỳ chỉnh, analytics tích hợp sẵn.

### 📊 Analytics & SEO

Google Analytics 4 Schema.org Sitemap XML

GA4 theo dõi hành vi. Schema.org markup cho tìm kiếm (RealEstateAgent, LocalBusiness). Sitemap.xml tự động, robots.txt chuẩn.

### 📱 Progressive

PWA Service Worker Offline Cache

PWA cho phép người dùng "Add to Home Screen" trên điện thoại — rất phù hợp người dùng Việt Nam. Cache offline giúp load nhanh lần sau.

💡

**Phương án đơn giản hơn:** Nếu không muốn dùng Next.js, có thể làm thuần HTML/CSS/JS với các file tĩnh — tốc độ load nhanh, SEO tốt, không cần server. Phù hợp nếu ít cập nhật nội dung. Mình sẽ implement theo hướng này nếu T muốn triển khai nhanh.

03 · Hệ thống thiết kế

## Màu sắc & Typography

Bảng màu navy–gold — uy tín, chuyên nghiệp, sang trọng — rất phổ biến trong BĐS Việt Nam. Phối hợp với font chữ hiện đại hỗ trợ tiếng Việt tốt.

Bảng màu chính

Navy Deep

#0C1E35 — Màu nền chính, header, footer

Navy Mid

#163352 — Section background, cards hover

Navy Light

#1E4D7B — Gradients, overlays

Gold

#C8982A — Accent chính, CTA buttons

Gold Light

#E4B84A — Hover states, highlights

Warm White

#F6F4F0 — Page background (ấm, không lạnh)

Typography

Display / Heading — Cormorant Garamond

Minh Phú Hưng Land — Đầu Tư Vững Chắc

Dùng cho: H1, H2, số liệu lớn, quotes. Tạo cảm giác sang trọng, editorial, chuyên nghiệp trong lĩnh vực BĐS cao cấp.

Body / UI — Be Vietnam Pro

Dự án nhà ở lực lượng vũ trang

Font tiếng Việt hiện đại, rõ ràng, dễ đọc trên mọi kích cỡ màn hình. Hỗ trợ dấu tiếng Việt hoàn hảo, phù hợp cho nội dung chi tiết dự án, navigation, buttons.

04 · Cấu trúc website

## Sitemap & Các trang

Cấu trúc 1 trang chính (Landing Page) với các section cuộn liên tục — phù hợp nhất cho website giới thiệu công ty BĐS tại Việt Nam.

🏠 Trang chủ

Home / Landing Page

Hero section\
Giới thiệu công ty\
Dự án nổi bật\
Thống kê số liệu\
Lý do chọn chúng tôi\
Tiến độ dự án\
Tin tức mới nhất\
Liên hệ / CTA

🏢 Trang 2

Giới Thiệu

Lịch sử hình thành\
Tầm nhìn, Sứ mệnh\
Hội đồng thành viên\
Sơ đồ tổ chức\
Giấy phép kinh doanh

🏗️ Trang 3

Dự Án

Khu Đồng Mái - Phú Thọ\
Phối cảnh tổng thể\
Thông số kỹ thuật\
Tiến độ thi công\
Vị trí & Tiện ích

📰 Trang 4

Tin Tức

Tin tức dự án\
Thị trường BĐS\
Chính sách pháp lý\
Sự kiện công ty

📞 Trang 5

Liên Hệ

Form liên hệ\
Bản đồ Google Maps\
Hotline tư vấn\
Đăng ký nhận thông tin

⚖️ Phụ trợ

Legal / SEO Pages

Chính sách bảo mật\
Điều khoản sử dụng\
Sitemap.xml\
robots.txt

05 · Wireframe layout

## Bố cục từng section

Mock-up thu nhỏ của trang chủ — font chữ và màu sắc thực tế, layout chính xác để T có thể hình dung đúng kết quả.

minhphuhungland.com

HERO

MINH PHÚ HƯNG LAND

Giới Thiệu Dự Án Tin Tức Liên Hệ

Nhà đầu tư BĐS uy tín · Phú Thọ

Kiến Tạo Không Gian Sống Chất Lượng Cao

Chủ đầu tư dự án nhà ở lực lượng vũ trang Công an nhân dân tại Phú Thọ

460tỷ

Vốn điều lệ

1.233

Căn hộ

2.262tỷ

Tổng đầu tư

50.000m²

Quy mô đất

Phối cảnh\
dự án

GIỚI THIỆU

Về chúng tôi

Công ty TNHH Đầu Tư BĐS Minh Phú Hưng

Được thành lập với tầm nhìn phát triển nhà ở chất lượng cao cho cán bộ chiến sĩ Công an nhân dân, chúng tôi cam kết mang lại không gian sống tiêu chuẩn, bền vững tại Phú Thọ...

460tỷ

Vốn điều lệ

04

Thành viên

17

Nhân sự

2026

Năm thành lập

DỰ ÁN

Dự án của chúng tôi

Khu Đồng Mái — Phường Vĩnh Phúc, Phú Thọ

🏢

Tòa VT1 — Nhà ở XH

247 căn · 70m² · 20 tầng

Đang triển khai →

🏗️

Tòa VT2 — Nhà ở XH

418 căn · 70m² · 20 tầng

Đang triển khai →

🏬

Tòa TM — Thương mại

179 căn · 74–123m²

Mở bán →

VÌ SAO CHỌN

Lý do chọn chúng tôi

Uy tín · Chuyên nghiệp · Minh bạch

🏛️

Pháp lý đầy đủ

Quyết định BCA số 6061/QĐ-BCA-H02

💰

Vốn vững chắc

460 tỷ vốn điều lệ, 4 cổ đông chiến lược

📐

Quy hoạch chuẩn

Mật độ xây dựng 21%, nhiều cây xanh

🚀

Tiến độ đúng hạn

Giai đoạn 1 hoàn thành Q4/2028

TIẾN ĐỘ

Tiến độ dự án

Lộ trình 2026 – 2030

Q3/2026

Khởi công Giai đoạn 1

Hạ tầng + 665 căn NOXH + toàn bộ Tòa TM cao tầng

Q4/2028

Hoàn thành Giai đoạn 1

Bàn giao cho cán bộ chiến sĩ Công an

2029–2030

Giai đoạn 2

568 căn NOXH còn lại + 15 căn thấp tầng

LIÊN HỆ

Liên hệ tư vấn

Đăng ký nhận thông tin dự án

GỬI YÊU CẦU TƯ VẤN

Bản đồ vị trí\
Khu Đồng Mái, Phú Thọ

MINH PHÚ HƯNG LAND

TDP Khai Quang, P. Vĩnh Phúc, Phú Thọ\
📞 0988056886\
✉️ congtyminhphuhung@gmail.com\
GCNĐKDN: 2500783313

Dự án

Khu Đồng Mái\
Nhà ở XH\
Nhà ở TM

Pháp lý

Điều khoản\
Bảo mật\
Giấy phép

06 · SEO Strategy

## Tối ưu tìm kiếm

Các kỹ thuật SEO sẽ được tích hợp ngay từ khi xây dựng website, không cần làm lại sau.

🏷️

Meta Tags & Open Graph

Title, description, keywords tối ưu cho từng trang. OG tags cho chia sẻ Facebook/Zalo — rất quan trọng với người dùng Việt Nam.

📊

Schema.org Structured Data

Markup JSON-LD cho RealEstateAgent, LocalBusiness, ApartmentComplex. Google hiển thị rich snippets trong kết quả tìm kiếm.

⚡

Core Web Vitals

LCP \< 2.5s, FID \< 100ms, CLS \< 0.1. Next.js + optimized images đảm bảo điểm PageSpeed ≥ 90 — quan trọng cho rank Google.

🗺️

Sitemap.xml & Robots.txt

Sitemap tự động cập nhật khi thêm nội dung. Robots.txt cấu hình đúng để Google index hiệu quả.

📍

Local SEO

Google Business Profile, từ khóa địa phương "bất động sản Phú Thọ", NAP (Name-Address-Phone) nhất quán trên toàn site.

📱

Mobile-First Indexing

Google index mobile trước. Design responsive hoàn toàn, tốc độ load mobile tối ưu — 70%+ người dùng Việt Nam dùng điện thoại.

07 · Animation Plan

## Hiệu ứng & Animation

Các animation được thiết kế tinh tế, nâng cao trải nghiệm mà không ảnh hưởng performance.

Hero

**Parallax background** + ảnh dự án fade-in khi load. Text xuất hiện từng dòng với GSAP stagger. Counter số liệu đếm lên animation khi vào viewport.

Scroll

**Fade-up animation** cho các section khi scroll xuống (AOS library). Cards trượt vào từ trái/phải. Tiêu đề section có underline animation màu vàng.

Hover

**Card hover effect**: nâng lên nhẹ, shadow tăng, border vàng highlight. Button ripple effect. Navigation link underline slide animation.

Timeline

**Progress line draw animation** khi scroll đến section tiến độ. Mỗi milestone điểm xuất hiện theo thứ tự với GSAP ScrollTrigger.

Stats

**Number counter animation**: 460 tỷ, 1.233 căn, 50.000m² đếm từ 0 lên khi vào viewport. Rất thu hút — phổ biến trong BĐS Việt Nam.

Navbar

**Sticky header** với backdrop blur khi scroll. Logo shrink nhẹ. Progress bar hiển thị % đã đọc (optional — tăng engagement).

A11y

Tất cả animation **tắt tự động** khi người dùng bật "prefers-reduced-motion" trong hệ thống — đảm bảo accessibility theo chuẩn WCAG.

## Sẵn sàng để xây dựng?

Sau khi review, T xác nhận là mình sẽ bắt tay vào implement ngay với đầy đủ content từ tài liệu dự án.