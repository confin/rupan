import { PartnerForm } from "@/components/PartnerForm";

export const metadata = { title: "城市合伙人 · 抢占素质教育蓝海 | 汝攀营地教育" };

export default function PartnerPage() {
  return (
    <div className="bg-sand-50">
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div className="text-xs tracking-[0.3em] text-sand-200/70">CITY PARTNER · 城市合伙人</div>
            <h1 className="mt-2 text-3xl sm:text-5xl font-black leading-tight">共享素质教育蓝海<br />军创品牌 + 科学体系 + 全程扶持</h1>
            <p className="mt-4 text-sand-100/85 max-w-xl leading-8">
              区域独家代理，招培物料全扶持，首签 1 年送 1 年。
              30 天无理由退出，总部回购权益。郴州基地实证：300+ 人单营，45% 复购率，60% 推荐转化。
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
              <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">500+ 亿 2025 营地教育市场</span>
              <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">20 万+ 学员验证</span>
              <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">7 年零事故</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀夏令营招商手册_p2_774c7f240c.jpeg" alt="招商" className="w-full h-40 object-cover border-2 border-sand-50/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀夏令营招商手册_p14_ce2d1e2068.jpeg" alt="加盟" className="w-full h-40 object-cover border-2 border-sand-50/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀集团企业介绍_p17_d64bcc9af1.jpeg" alt="团队" className="w-full h-40 object-cover border-2 border-sand-50/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/汝攀集团企业介绍_p19_405d696894.jpeg" alt="创始人" className="w-full h-40 object-cover border-2 border-sand-50/30" />
          </div>
        </div>
      </section>

      {/* 三大合作层级 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">3 LEVELS</div>
        <h2 className="mt-2 text-3xl font-black text-military-900">三大合作层级 · 灵活匹配</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { t: "城市合伙人", h: "区域独家代理", p: "享营地合伙人身份，招生分成 + 门店文化布置奖励 + 年度业绩奖励 + 区域招生流量扶持 + 区域代理商招募扶持，首签 1 年送 1 年。", tag: "推荐", s: "教育机构 / 研学公司 / 投资人" },
            { t: "代理商", h: "分销权限", p: "线上培训陪跑跟踪，高额返佣，帮助代理商打造自己的私域社群。", s: "学校 / 培训机构 / 旅行社 / 社群团长" },
            { t: "校园合作方", h: "联合定制", p: "联合定制学校专属营期，共享营地资源，承接学校研学 + 课后服务 + 国防驻校。", s: "中小学 / 国际学校 / 教育集团" }
          ].map((c, i) => (
            <div key={c.t} className={`bg-sand-50 border-2 ${i === 0 ? "border-military-900 shadow-hard" : "border-military-900/50"} p-5 relative`}>
              {c.tag && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5">{c.tag}</span>}
              <div className="text-xs tracking-[0.2em] text-military-700/70 font-bold">0{i + 1}</div>
              <h3 className="mt-1 text-2xl font-black text-military-900">{c.t}</h3>
              <div className="text-sm text-military-700/85 mt-1">{c.h}</div>
              <p className="mt-3 text-sm text-military-900/85 leading-7">{c.p}</p>
              <div className="mt-4 pt-3 border-t-2 border-military-900/20 text-xs text-military-700/80">适合：{c.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 四大支持 */}
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-black">四大支持 · 全程扶持</h2>
          <p className="mt-2 text-sand-100/80">无需自建场地，总部提供标准化课程、招生物料、招生培训。投资仅为传统机构 1/10。</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { i: "📣", t: "招生支持", d: "线上引流 + 线下地推" },
              { i: "🎓", t: "培训支持", d: "创始人亲授，体系化" },
              { i: "📦", t: "物料支持", d: "统一设计 + 供应链" },
              { i: "📊", t: "数据支持", d: "测评系统 + 客户洞察" }
            ].map(s => (
              <div key={s.t} className="border-2 border-sand-50/30 p-5">
                <div className="text-3xl">{s.i}</div>
                <div className="mt-2 font-black text-sand-50">{s.t}</div>
                <div className="text-sm text-sand-200/80 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 限时加盟礼遇 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-6 items-start">
        <div>
          <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">LIMITED OFFER</div>
          <h2 className="mt-2 text-3xl font-black text-military-900">限时加盟礼遇</h2>
          <div className="mt-5 space-y-3">
            {[
              "前 20 名：免 2 万管理费 + 5000 元招生礼包",
              "实战培训：创始人亲授 + 团队陪跑",
              "区域保护：地级市独家，避免内部竞争",
              "退出保障：30 天无理由退出，总部回购权益"
            ].map((b, i) => (
              <div key={i} className="flex gap-3 items-start border-l-4 border-military-900 bg-sand-50 px-4 py-3">
                <span className="font-black text-military-900">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-military-900/90">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-military-900 text-sand-50 p-5 shadow-hard">
            <div className="text-xs text-sand-200/70">招商热线</div>
            <div className="text-2xl font-black mt-1">📞 178-7216-7788</div>
            <div className="text-sm text-sand-100/85 mt-1">朱营长 亲接</div>
          </div>
        </div>

        <PartnerForm />
      </section>

      {/* 代理级别锚点 */}
      <section id="agent" className="bg-military-50 border-t-2 border-military-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-black text-military-900">代理商常见问题</h3>
          <div className="mt-5 space-y-3">
            {[
              { q: "我没有营地，能做吗？", a: "完全可以。汝攀沙洲总部 + 嘉禾 1958 新汝空间 + 全国 8 家加盟基地已覆盖主要城市，您只需负责招生与本地化服务。" },
              { q: "投入多少钱？", a: "代理商门槛低，城市合伙人首签送 1 年，详情请通过下方表单或电话沟通。" },
              { q: "多久能回本？", a: "湘粤赣代理实证：首年营收 50 万+，县域利润 10 万。" }
            ].map((f, i) => (
              <details key={i} className="bg-sand-50 border-2 border-military-900 px-4 py-3">
                <summary className="font-black text-military-900 cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-military-700/85 leading-7">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="school" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-black text-military-900">校园合作方通道</h3>
        <p className="mt-2 text-military-700/85">为中小学 / 国际学校 / 教育集团提供：研学、课后服务、国防驻校、入学训练、春秋游、定制营期。</p>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {["研学旅行（沙洲/嘉禾）", "国防教育驻校（教材+教官+装备）", "课后服务 1 对 1 定制"].map(t => (
            <div key={t} className="border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold text-military-900">{t}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
