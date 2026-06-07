import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramById, getCategoryById, programsByCategory, PROGRAMS } from "@/lib/data/camps";
import { ProgramCard } from "@/components/ProgramCard";

export function generateStaticParams() { return PROGRAMS.map(p => ({ id: p.id })); }

export function generateMetadata({ params }: { params: { id: string } }) {
  const p = getProgramById(params.id);
  return { title: p ? `${p.title} · 汝攀营地教育` : "营地项目 · 汝攀" };
}

export default function CampDetailPage({ params }: { params: { id: string } }) {
  const p = getProgramById(params.id);
  if (!p) return notFound();
  const cat = getCategoryById(p.categoryId)!;
  const related = programsByCategory(p.categoryId).filter(x => x.id !== p.id).slice(0, 4);

  return (
    <div className="bg-sand-50">
      <section className="relative bg-military-900 text-sand-50 overflow-hidden">
        <img src={p.cover} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-military-950/95 via-military-900/75 to-military-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-xs tracking-[0.3em] text-sand-200/80">{cat.enName} · {cat.name}</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black leading-tight max-w-3xl">{p.title}</h1>
          <p className="mt-3 text-sand-100/85 text-lg">{p.subTitle}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
            <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">👶 {p.ageRange} 岁</span>
            <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">⏱ {p.days} 天</span>
            <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">📍 {p.city}</span>
            <span className="px-3 py-1.5 border-2 border-sand-50/40 bg-military-900/40">🏕 {p.base}</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-black text-military-900 mb-3">营期实景</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {p.gallery.map((g, i) => (
                <div key={i} className="relative aspect-square overflow-hidden border-2 border-military-900">
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-military-900 mb-3">营期亮点</h2>
            <ul className="space-y-2">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 items-start bg-sand-50 border-l-4 border-military-900 px-4 py-3">
                  <span className="font-black text-military-900">{i + 1}.</span>
                  <span className="text-military-900/90">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-military-900 mb-3">每日行程</h2>
            <div className="space-y-3">
              {p.schedule.map(s => (
                <div key={s.day} className="border-2 border-military-900 bg-sand-50">
                  <div className="flex items-center gap-3 px-4 py-2 bg-military-900 text-sand-50">
                    <span className="font-black">D{s.day}</span>
                    <span className="font-bold">{s.title}</span>
                  </div>
                  <ul className="px-4 py-3 space-y-1.5 text-sm text-military-900/90">
                    {s.items.map((it, i) => (
                      <li key={i} className="flex gap-2"><span className="text-military-700/60">›</span>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-2 border-military-900 bg-sand-50 p-4">
              <h3 className="font-black text-military-900 mb-2">✅ 费用包含</h3>
              <ul className="text-sm text-military-900/85 space-y-1">
                {p.inclusions.map((i, k) => <li key={k}>· {i}</li>)}
              </ul>
            </div>
            <div className="border-2 border-military-900 bg-military-50 p-4">
              <h3 className="font-black text-military-900 mb-2">⚠ 报名须知</h3>
              <ul className="text-sm text-military-900/85 space-y-1">
                {p.notes.map((i, k) => <li key={k}>· {i}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-sand-50 border-2 border-military-900 shadow-hard p-5">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-red-600">¥{p.price.toLocaleString()}</span>
              {p.originalPrice && <span className="text-sm line-through text-military-700/50">¥{p.originalPrice.toLocaleString()}</span>}
              <span className="ml-auto text-xs font-black text-red-600 border border-red-600 px-1.5 py-0.5">EARLY BIRD</span>
            </div>
            <div className="text-xs text-military-700/70 mt-1">/ 营期 / 人（不含大交通）</div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-military-700/70">营期</span><span className="font-bold">{p.days} 天{p.days > 1 ? ` ${p.days - 1} 晚` : ""}</span></div>
              <div className="flex justify-between"><span className="text-military-700/70">适合年龄</span><span className="font-bold">{p.ageRange} 岁</span></div>
              <div className="flex justify-between"><span className="text-military-700/70">开营基地</span><span className="font-bold text-right">{p.base}</span></div>
              <div className="flex justify-between"><span className="text-military-700/70">所在省市</span><span className="font-bold">{p.city}</span></div>
            </div>
            <Link href={`/checkout?program=${p.id}`}
              className="mt-5 block text-center bg-military-900 text-sand-50 py-3.5 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
              立即预订 →
            </Link>
            <a href="tel:17872167788" className="mt-2 block text-center border-2 border-military-900 py-3 font-black text-military-900">
              📞 电话咨询
            </a>
            <div className="mt-4 text-xs text-military-700/70 leading-5">
              · 报名后 24h 内确认营期<br />· 入营前 3 天每日反馈<br />· 100 万 / 人意外险 + 双重百万责任险
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-military-50 border-t-2 border-military-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-black text-military-900 mb-6">同类营地推荐</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(r => <ProgramCard key={r.id} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}