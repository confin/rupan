import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "汝攀营地教育 · 军创品牌 | 6-16岁青少年素质教育",
  description: "汝攀营地教育由退伍军人创立，7 年零事故运营。8 大营地类型 / 133 节课程 / 1:7 师资比 / 100万保险。沙洲总部 + 嘉禾 1958 新汝空间双基地。",
  keywords: "汝攀营地教育,军创夏令营,沙洲研学,嘉禾1958,城市合伙人,退伍军人素质教育"
};

export const viewport: Viewport = {
  themeColor: "#1d2a1d",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
