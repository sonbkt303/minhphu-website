import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["vietnamese", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const body = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const SITE = "https://minhphuhungland.com";
const HERO_IMG =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=70";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Minh Phú Hưng Land – Chủ đầu tư dự án nhà ở Công an nhân dân tại Phú Thọ",
  description:
    "Công ty TNHH Đầu tư BĐS Minh Phú Hưng – chủ đầu tư dự án Nhà ở lực lượng vũ trang Công an nhân dân tại Khu Đồng Mái, Phường Vĩnh Phúc, Phú Thọ. 1.233 căn hộ, tổng mức đầu tư ~2.262 tỷ đồng.",
  keywords: ["bất động sản Phú Thọ", "nhà ở xã hội Vĩnh Phúc", "Minh Phú Hưng Land", "Khu Đồng Mái"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Minh Phú Hưng Land – Kiến tạo không gian sống chất lượng cao",
    description: "Dự án nhà ở lực lượng vũ trang Công an nhân dân tại Khu Đồng Mái, Phú Thọ.",
    images: [{ url: "/logo/minh-phu-hung.png", width: 1400, height: 933, alt: "Minh Phú Hưng" }, HERO_IMG],
  },
};

export const viewport: Viewport = { themeColor: "#0B1F3F" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  name: "Công ty TNHH Đầu tư BĐS Minh Phú Hưng",
  url: SITE,
  telephone: "+84988056886",
  email: "bdsminhphuhung@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 29, Phố Ấp Hạ",
    addressLocality: "Phường Vĩnh Phúc",
    addressRegion: "Phú Thọ",
    addressCountry: "VN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
