import Link from "next/link";
import { BRAND } from "@/lib/data/brand";
import { FRIEND_LINKS, PARTNERS } from "@/lib/data/partners";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-military-900 text-sand-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* 品牌信息 */}
        <div className="col-span-2">
          <div className="font-black text-2xl mb-2">{BRAND.zh}</div>
          <div className="text-xs tracking-[0.2em] text-sand-200/70 mb-4">{BRAND.en}</div>
          <p className="text-sm text-sand-200/80 leading-7">{BRAND.mission}</p>
          <div className="mt-4 text-sm space-y-1">
            <div>📞 招商热线：<a href="tel:17872167788" className="font-bold text-sand-50 hover:underline">{BRAND.hot}</a></div>
            <div>✉ 商务邮箱：<a href={`mailto:${BRAND.email}`} className="text-sand-200/80 hover:underline">{BRAND.email}</a></div>
            <div>📍 总部：{BRAND.hq}</div>
            <div>🏕 嘉禾基地：{BRAND.jiahe}</div>
          </div>
        </div>

        {/* 关于汝攀 */}
        <div>
          <div className="font-black text-base mb-3 text-sand-50">关于汝攀</div>
          <ul className="space-y-2 text-sm text-sand-200/80">
            <li><Link href="/about" className="hover:text-sand-50 transition">关于我们</Link></li>
            <li><Link href="/about#team" className="hover:text-sand-50 transition">核心团队</Link></li>
            <li><Link href="/about#culture" className="hover:text-sand-50 transition">企业文化</Link></li>
            <li><Link href="/camps" className="hover:text-sand-50 transition">营地项目</Link></li>
            <li><Link href="/contact" className="hover:text-sand-50 transition">联系我们</Link></li>
          </ul>
        </div>

        {/* 商业合作 */}
        <div>
          <div className="font-black text-base mb-3 text-sand-50">商业合作</div>
          <ul className="space-y-2 text-sm text-sand-200/80">
            <li><Link href="/partner" className="hover:text-sand-50 transition">城市合伙人</Link></li>
            <li><Link href="/partner#agent" className="hover:text-sand-50 transition">代理商</Link></li>
            <li><Link href="/partner#school" className="hover:text-sand-50 transition">校园合作方</Link></li>
            <li><Link href="/join" className="hover:text-sand-50 transition">加入我们</Link></li>
            <li><a href="tel:17872167788" className="hover:text-sand-50 transition">📞 招商热线</a></li>
          </ul>
        </div>

        {/* 友好合作伙伴 */}
        <div>
          <div className="font-black text-base mb-3 text-sand-50">友好合作伙伴</div>
          <ul className="space-y-2 text-sm text-sand-200/80">
            {FRIEND_LINKS.slice(0, 6).map(p => (
              <li key={p.name}>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-sand-50 transition text-xs leading-tight block">
                  {p.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 版权与底部信息 */}
      <div className="border-t border-sand-200/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-sand-200/60">
          <div>© {year} 汝攀营地教育 · 湖南省汝攀户外拓展有限公司 · 军创品牌 · All Rights Reserved</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {PARTNERS.slice(0, 4).map(p => (
              <span key={p.name} className="text-sand-200/40">· {p.name}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
