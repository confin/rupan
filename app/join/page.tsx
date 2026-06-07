import { BRAND } from "@/lib/data/brand";

export const metadata = { title: "加入我们 · 汝攀营地教育" };

const JOBS = [
  { t: "营地营长", d: "统筹整期营地运营 · 应急处置 · 家长沟通", city: "湖南郴州", tag: "急聘" },
  { t: "课程研发导师", d: "133 节课程迭代 · 9 大能力体系落地", city: "湖南郴州", tag: "" },
  { t: "退役军事教官", d: "队列 / 战术 / 射击训练 · 退役 5 年内", city: "全国", tag: "持续" },
  { t: "新媒体运营", d: "抖音 / 视频号 · 招生转化", city: "湖南郴州", tag: "" },
  { t: "市场合伙人", d: "本地招生 · 异业合作 · 团队搭建", city: "全国", tag: "" },
  { t: "生活老师", d: "24h 营员陪护 · 用药/内务/家校沟通", city: "湖南郴州", tag: "" }
];

export default function JoinPage() {
  return (
    <div className="bg-sand-50">
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs tracking-[0.3em] text-sand-200/70">JOIN US</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black">和一群军人 · 一起做教育</h1>
          <p className="mt-4 text-sand-100/85 max-w-2xl leading-8">汝攀的核心团队 70% 来自退役军人。我们正在寻找：教育情怀 + 实战能力兼备的同行者。</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">OPEN POSITIONS</div>
        <h2 className="mt-2 text-3xl font-black text-military-900">热招岗位</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {JOBS.map(j => (
            <div key={j.t} className="bg-sand-50 border-2 border-military-900 p-5 shadow-hard">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-military-900 text-lg">{j.t}</h3>
                {j.tag && <span className="text-[10px] font-black bg-red-600 text-white px-2 py-0.5">{j.tag}</span>}
              </div>
              <p className="mt-2 text-sm text-military-700/85 leading-7">{j.d}</p>
              <div className="mt-3 text-xs text-military-700/70">📍 {j.city}</div>
              <a href="mailto:hr@rupan-edu.com" className="mt-4 inline-block border-2 border-military-900 px-4 py-2 text-sm font-black">投递简历 →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-military-50 border-y-2 border-military-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-black text-military-900">为什么加入汝攀</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { t: "可量化的事业", d: "5 年实证：连续 50% 增长 · 6 年覆盖 20 万+ 学员" },
              { t: "看得见的成长", d: "营员 → 成长之星 → 助教三阶晋升 · 积分换勋章 / 奖学金" },
              { t: "有温度的团队", d: "八个有 · 三不原则 · 二十严禁 · 团队像军营般靠谱" }
            ].map(x => (
              <div key={x.t} className="bg-sand-50 border-2 border-military-900 p-5">
                <h3 className="font-black text-military-900 text-lg">{x.t}</h3>
                <p className="mt-2 text-sm text-military-700/85 leading-7">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-black text-military-900">投递方式</h2>
        <p className="mt-3 text-military-700/85">简历请发至 <span className="font-bold">hr@rupan-edu.com</span>，邮件标题「岗位 - 姓名 - 城市」。</p>
        <a href="mailto:hr@rupan-edu.com" className="inline-block mt-5 bg-military-900 text-sand-50 px-6 py-3 font-black shadow-hard">立即投递</a>
      </section>
    </div>
  );
}
