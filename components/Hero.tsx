import Link from "next/link";
import { BRAND } from "@/lib/data/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-military-900 text-sand-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/scenes/新汝空间研学产品手册_p1_6f510da36a.jpeg" alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-military-950/95 via-military-900/80 to-military-900/40" />
      {/* 硬朗装饰条 */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-sand-200" />
      <div className="absolute top-2 left-0 right-0 h-1 bg-red-600" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-sand-50/50 text-xs tracking-[0.25em]">
            <span className="w-1.5 h-1.5 bg-red-500" /> 军创品牌 · 7 年零事故
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight">
            做军人品质<br />
            <span className="text-sand-200">用爱创一流服务</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-sand-100/85 max-w-2xl leading-8">
            专为 <span className="font-black text-sand-50">6-16 岁</span> 青少年打造。
            133 节沉浸式课程 · 9 大能力培养 · 1:7 师资配比 ·
            <span className="font-black text-sand-50"> 100万 / 人</span> 意外险。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/camps"
              className="bg-sand-50 text-military-900 px-6 py-3 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
              🔥 立即选营地
            </Link>
            <Link href="/partner"
              className="bg-transparent border-2 border-sand-50 text-sand-50 px-6 py-3 font-black hover:bg-sand-50 hover:text-military-900 transition">
              城市合伙人招募 →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { k: BRAND.students_total, v: "已培训学员" },
              { k: `${BRAND.camps_total} 年`, v: "零事故运营" },
              { k: "1:7", v: "师资配比" },
              { k: "300+", v: "退役军人教官" }
            ].map(s => (
              <div key={s.v} className="border-2 border-sand-50/30 bg-military-950/40 p-3">
                <div className="text-2xl font-black text-sand-50">{s.k}</div>
                <div className="text-[11px] text-sand-200/80 mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
