import { PARTNERS, FRIEND_LINKS } from "@/lib/data/partners";

export const metadata = { title: "合作机构 · 汝攀营地教育" };

export default function CooperationPage() {
  return (
    <div className="bg-sand-50">
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs tracking-[0.3em] text-sand-200/70">PARTNERS</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black">合作机构 · 生态共建</h1>
          <p className="mt-4 text-sand-100/85 max-w-2xl leading-8">感谢以下机构对汝攀的支持与信任。资源互通、客群互导、联合品牌，共建青少年素质教育生态。</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-black text-military-900">战略 / 业务合作</h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARTNERS.map(p => (
            <div key={p.name} className="bg-sand-50 border-2 border-military-900 p-5 shadow-hard">
              <div className="font-black text-military-900 text-lg">{p.name}</div>
              <div className="mt-1 text-sm text-military-700/80">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-military-50 border-y-2 border-military-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-black text-military-900">友好合作伙伴 · 友情链接</h2>
          <p className="mt-2 text-sm text-military-700/80">以下为对汝攀给予支持的相关政府、行业及公益网站，按访问需要选择。</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FRIEND_LINKS.map(p => (
              <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
                className="block bg-sand-50 border-2 border-military-900 px-4 py-3 hover:bg-military-900 hover:text-sand-50 transition">
                <div className="font-black text-military-900 group-hover:text-sand-50">{p.name} ↗</div>
                <div className="text-xs text-military-700/80 mt-0.5">{p.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-black text-military-900">想成为汝攀的合作伙伴？</h2>
        <p className="mt-3 text-military-700/85">资源互换 / 联合招生 / 行业活动，扫码或邮件联系 BD 团队。</p>
        <a href="mailto:bd@rupan-edu.com" className="inline-block mt-5 bg-military-900 text-sand-50 px-6 py-3 font-black shadow-hard">联系 BD →</a>
      </section>
    </div>
  );
}
