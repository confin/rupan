import { CATEGORIES, PROGRAMS } from "@/lib/data/camps";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

export const metadata = { title: "营地项目 · 汝攀营地教育" };

export default function CampsPage({ searchParams }: { searchParams: { category?: string; type?: string } }) {
  const activeCat = searchParams.category;
  const list = activeCat ? PROGRAMS.filter(p => p.categoryId === activeCat) : PROGRAMS;

  return (
    <div className="bg-sand-50">
      {/* Hero */}
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-xs tracking-[0.3em] text-sand-200/70">CAMP PROGRAMS</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black">8 类营地 · {PROGRAMS.length} 款精选营期</h1>
          <p className="mt-3 text-sand-100/85 max-w-2xl">按主题筛选你的目的地。每张图都来自汝攀实际开营现场。</p>
        </div>
      </section>

      {/* 类型筛选 */}
      <section className="border-b-2 border-military-900 bg-sand-50 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto">
          <Link href="/camps" className={`px-4 py-2 text-sm font-black whitespace-nowrap border-2 ${!activeCat ? "bg-military-900 text-sand-50 border-military-900" : "border-military-900 text-military-900 hover:bg-military-900 hover:text-sand-50"}`}>
            全部
          </Link>
          {CATEGORIES.map(c => (
            <Link key={c.id} href={`/camps?category=${c.id}`}
              className={`px-4 py-2 text-sm font-black whitespace-nowrap border-2 ${activeCat === c.id ? "bg-military-900 text-sand-50 border-military-900" : "border-military-900 text-military-900 hover:bg-military-900 hover:text-sand-50"}`}>
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeCat && (
          <SectionTitle kicker={CATEGORIES.find(c => c.id === activeCat)?.enName} title={CATEGORIES.find(c => c.id === activeCat)?.name || ""} sub={CATEGORIES.find(c => c.id === activeCat)?.desc} />
        )}
        {list.length === 0 ? (
          <div className="border-2 border-dashed border-military-900/30 p-12 text-center text-military-700/60">
            该分类下暂无营期，请选择其他分类或
            <Link href="/camps" className="ml-1 text-military-900 underline">查看全部</Link>。
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {list.map(p => <ProgramCard key={p.id} p={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
