import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { CampCategoryCarousel } from "@/components/CampCategoryCarousel";
import { ProgramCard } from "@/components/ProgramCard";
import { TrustBar } from "@/components/TrustBar";
import { PROGRAMS } from "@/lib/data/camps";
import { BRAND } from "@/lib/data/brand";

export default function HomePage() {
  const hot = PROGRAMS.filter(p => p.hot).slice(0, 4);
  const fresh = PROGRAMS.slice(0, 8);

  return (
    <>
      <Hero />
      <TrustBar />

    {/* 核心数字 */}
      <section className="bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "133", u: "节", t: "沉浸式课程（79 节核心课+54 节拓展）" },
            { k: "9", u: "大", t: "能力培养体系（BPL 行为-实践-学习）" },
            { k: "5", u: "位一体", t: "教学法（军事+礼仪+科技+生存+心灵）" },
            { k: "28", u: "天", t: "完整蜕变周期（7/14/21/28 天阶梯可选）" }
          ].map(s => (
            <div key={s.t} className="bg-military-900 text-sand-50 p-5 shadow-hard">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">{s.k}</span>
                <span className="text-xl font-bold text-sand-200">{s.u}</span>
              </div>
              <div className="mt-2 text-sm text-sand-100/85">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 类营地选择（轮播+选区） */}
      <CampCategoryCarousel />

      {/* 四大阶梯 · 成长路径 */}
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle kicker="GROWTH PATH · 四大阶梯" title="从体验到蜕变 · 看得见的成长路径" sub="汝攀全能领导力夏令营四大营期阶梯递进，从 7 天体验到 28 天蜕变，匹配不同阶段孩子的成长需求。" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {[
              { d: "7", t: "体验营", p: "¥3,980", sub: "领导力初体验", c: "探索自我", tag: "入门推荐" },
              { d: "14", t: "强化营", p: "¥5,980", sub: "强化领导力", c: "挑战极限", tag: "人气首选" },
              { d: "21", t: "磨炼营", p: "¥7,980", sub: "磨炼意志", c: "锻造领袖", tag: "深度成长" },
              { d: "28", t: "蜕变营", p: "¥9,980", sub: "破茧成蝶", c: "领袖蜕变", tag: "全面蜕变" }
            ].map((s, i) => (
              <Link key={s.d} href={`/camp/core-${s.d}`}
                className="group bg-sand-50 text-military-900 border-2 border-sand-50/30 shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition">
                <div className={`px-4 py-2 flex items-center justify-between bg-military-50`}>
                  <span className="font-mono font-black text-xl">{s.d} 天</span>
                  <span className="text-[10px] font-black bg-military-900 text-sand-50 px-2 py-0.5">{s.tag}</span>
                </div>
                <div className="p-4">
                  <div className="font-black text-2xl">{s.t}</div>
                  <div className="text-xs text-military-700/80 mt-1">{s.sub}</div>
                  <div className="mt-2 text-sm font-bold text-military-900 border-l-2 border-military-900 pl-2">{s.c}</div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="text-xl font-black text-red-600">{s.p}</span>
                    <span className="text-xs font-bold border-b-2 border-military-900 group-hover:translate-x-0.5 transition">了解 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-sand-200/80">
            <span>⬆ 阶梯递进</span>
            <span className="w-4 h-0.5 bg-sand-200/40" />
            <span>🎯 9 大能力覆盖</span>
            <span className="w-4 h-0.5 bg-sand-200/40" />
            <span>📈 55% 复购率验证</span>
          </div>
        </div>
      </section>

      {/* 热门项目 */}
      <section className="bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between">
            <SectionTitle kicker="HOT PROGRAMS · 家长热搜" title="这个暑假，6-16 岁的孩子都在抢" sub="基于真实开营数据，节选本季最受欢迎的营期。" />
            <Link href="/camps" className="hidden sm:inline-block text-sm font-black text-military-900 border-b-2 border-military-900 pb-0.5">查看全部 →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hot.map(p => <ProgramCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* 基地双核 */}
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="text-xs tracking-[0.3em] text-sand-200/70">DUAL BASE</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black">双核基地 · 一南一北 一文一武</h2>
            <p className="mt-4 text-sand-100/85 leading-8">
              沙洲总部扎根「半条被子」红色热土，主打国防 + 红色 + 领导力；
              嘉禾 1958 新汝空间占地 107 亩，由 50 年代水电设备厂改造，
              26 字母分区对应 12 大主题功能，工业遗址 + 非遗 + 国防沉浸式。
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <div className="border-2 border-sand-50/30 p-4">
                <div className="font-black text-sand-50">沙洲总部</div>
                <div className="text-xs text-sand-200/70 mt-1">0.92 km² · 餐饮住宿配套</div>
                <div className="text-xs text-sand-200/70 mt-1">📍 湖南郴州汝城县</div>
              </div>
              <div className="border-2 border-sand-50/30 p-4">
                <div className="font-black text-sand-50">嘉禾 1958 新汝空间</div>
                <div className="text-xs text-sand-200/70 mt-1">107 亩 · 1.8 万㎡ · 26 分区</div>
                <div className="text-xs text-sand-200/70 mt-1">📍 湖南郴州嘉禾县</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/scenes/新汝空间研学产品手册_p2_ffeedee59d.jpeg" alt="嘉禾" className="w-full h-44 object-cover border-2 border-sand-50/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/scenes/新汝空间研学产品手册_p3_3cb14fba7d.jpeg" alt="嘉禾" className="w-full h-44 object-cover border-2 border-sand-50/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/scenes/汝攀国防教育驻校宣传手册_p8_bc3c902bce.jpeg" alt="国防" className="w-full h-44 object-cover border-2 border-sand-50/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/scenes/汝攀国防教育驻校宣传手册_p4_8dcff0a786.jpeg" alt="红色" className="w-full h-44 object-cover border-2 border-sand-50/30" />
          </div>
        </div>
      </section>

      {/* 全营期项目瀑布 */}
      <section className="bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle kicker="ALL CAMPS · 全部营期" title="8 类营地 · 26 款精选营期" sub="从 7 天体验到 28 天蜕变，按营地类型、营期天数筛选最适合孩子的项目。" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fresh.map(p => <ProgramCard key={p.id} p={p} />)}
          </div>
          <div className="mt-8 text-center">
            <Link href="/camps" className="inline-block bg-military-900 text-sand-50 px-7 py-3 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
              查看全部 {PROGRAMS.length} 款营期 →
            </Link>
          </div>
        </div>
      </section>

      {/* 家长/学校 信任 */}
      <section className="bg-military-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionTitle kicker="WHY RUPAN" title="为什么 20 万家庭把孩子交给汝攀" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "7 年零事故", d: "持续 7 年市电视台独家报道 · 双重百万保险 · 1:7 师资配比 · 24h 随队医生", i: "🛡" },
              { t: "5 位一体教学法", d: "军事塑行 + 礼仪修身 + 科技赋能 + 生存淬炼 + 心灵成长，覆盖九大能力", i: "🎯" },
              { t: "看得见的成长", d: "结营出具《九大能力成长报告》，勋章激励 + UGC 记录，55% 复购率", i: "📈" }
            ].map(c => (
              <div key={c.t} className="bg-sand-50 border-2 border-military-900 p-5 shadow-hard">
                <div className="text-3xl">{c.i}</div>
                <div className="mt-2 font-black text-military-900 text-lg">{c.t}</div>
                <div className="mt-1 text-sm text-military-700/85 leading-7">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 招加盟 */}
      <section className="bg-sand-50 border-t-2 border-military-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">CITY PARTNER · 城市合伙人</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-military-900">抢占万亿级素质教育市场</h2>
            <p className="mt-4 text-military-700/85 leading-8">
              区域独家代理 · 招培物料全扶持 · 首签 1 年送 1 年 · 30 天无理由退出，总部回购权益。
              郴州基地实证：300+ 人单营，45% 复购率。
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/partner" className="bg-military-900 text-sand-50 px-6 py-3 font-black shadow-hard">立即申请 →</Link>
              <a href="tel:17872167788" className="border-2 border-military-900 px-6 py-3 font-black">📞 178-7216-7788</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀夏令营招商手册_p2_774c7f240c.jpeg" alt="招商" className="w-full h-40 object-cover border-2 border-military-900" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀夏令营招商手册_p14_ce2d1e2068.jpeg" alt="招商" className="w-full h-40 object-cover border-2 border-military-900" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀集团企业介绍_p17_d64bcc9af1.jpeg" alt="创始人" className="w-full h-40 object-cover border-2 border-military-900" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀集团企业介绍_p18_12bb59d3c8.jpeg" alt="团队" className="w-full h-40 object-cover border-2 border-military-900" />
          </div>
        </div>
      </section>
    </>
  );
}
