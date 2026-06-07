import Link from "next/link";
import { BRAND, TEAM } from "@/lib/data/brand";

export const metadata = { title: "关于我们 · 汝攀营地教育" };

export default function AboutPage() {
  return (
    <div className="bg-sand-50">
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs tracking-[0.3em] text-sand-200/70">ABOUT US</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black">用军人品质做教育</h1>
          <p className="mt-4 text-sand-100/85 max-w-3xl leading-8 text-lg">{BRAND.mission}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">BRAND ORIGIN</div>
          <h2 className="mt-2 text-3xl font-black text-military-900">「汝攀」二字的来历</h2>
          <p className="mt-4 text-military-900/85 leading-8">
            「汝」代表「你」，寓意以客户为中心；「攀」象征追逐梦想、永攀高峰。
            徽标以「山」为形，顶端「人」字象征攀登者永葆谦逊、心系根本；
            「汝攀」二字嵌入山体，寓意以赤子之心追逐理想；底部「于」字如承载之手，诠释「化繁为简、传递使命」的根基力量。
          </p>
          <ul className="mt-6 space-y-2 text-military-900/85">
            <li>· 湖南省汝攀户外拓展有限公司 创立于 {BRAND.founded} 年</li>
            <li>· 总部位于「半条被子」故事发源地 — 沙洲 5A 景区</li>
            <li>· 旗下嘉禾 1958 新汝空间研学基地（107 亩工业遗址）</li>
            <li>· 7 年零事故 · 20 万+ 学员验证 · 8 家同类型企业加盟</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/汝攀集团企业介绍_p4_dafb039fbf.jpeg" alt="logo" className="w-full h-44 object-cover border-2 border-military-900" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/汝攀集团企业介绍_p16_01ee660313.jpeg" alt="团队" className="w-full h-44 object-cover border-2 border-military-900" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/汝攀集团企业介绍_p17_d64bcc9af1.jpeg" alt="创始人" className="w-full h-44 object-cover border-2 border-military-900" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/汝攀集团企业介绍_p18_12bb59d3c8.jpeg" alt="公益" className="w-full h-44 object-cover border-2 border-military-900" />
        </div>
      </section>

      <section id="team" className="bg-military-50 border-y-2 border-military-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">CORE TEAM</div>
          <h2 className="mt-2 text-3xl font-black text-military-900">核心团队</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {TEAM.map(m => (
              <div key={m.name} className="bg-sand-50 border-2 border-military-900 p-5 shadow-hard">
                <div className="font-black text-military-900 text-lg">{m.name}</div>
                <div className="text-xs text-military-700/70 mt-0.5">{m.role}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 bg-military-900 text-sand-50">{t}</span>)}
                </div>
                <p className="mt-3 text-sm text-military-900/85 leading-7">{m.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">CULTURE</div>
        <h2 className="mt-2 text-3xl font-black text-military-900">企业文化</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "愿景", c: BRAND.vision },
            { t: "使命", c: BRAND.mission },
            { t: "价值观", c: BRAND.values.join(" · ") },
            { t: "教育理念", c: "用体验积累收获，让感悟助力成长。" }
          ].map(x => (
            <div key={x.t} className="bg-military-900 text-sand-50 p-5 shadow-hard">
              <div className="text-xs text-sand-200/70 tracking-[0.2em]">{x.t}</div>
              <p className="mt-2 text-sm leading-7">{x.c}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="border-2 border-military-900 p-5">
            <h3 className="font-black text-military-900 text-lg">八个有</h3>
            <p className="mt-2 text-sm text-military-900/85 leading-7">有爱心 · 有信心 · 有形象 · 有狼性 · 有眼色 · 有耐心 · 有团队精神 · 有抗压能力</p>
          </div>
          <div className="border-2 border-military-900 p-5">
            <h3 className="font-black text-military-900 text-lg">三不原则</h3>
            <p className="mt-2 text-sm text-military-900/85 leading-7">任务必达 · 困难必克 · 对手必胜</p>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 border-t-2 border-military-900">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-black text-military-900">想与汝攀同行？</h2>
          <p className="mt-3 text-military-700/85">城市合伙人 / 代理商 / 校园合作方，总有一种方式适合你。</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/partner" className="bg-military-900 text-sand-50 px-6 py-3 font-black shadow-hard">立即申请合伙人</Link>
            <Link href="/contact" className="border-2 border-military-900 px-6 py-3 font-black">联系我们</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
