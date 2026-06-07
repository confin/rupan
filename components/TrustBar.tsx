import { PARTNERS } from "@/lib/data/partners";

export function TrustBar() {
  return (
    <section className="bg-sand-50 border-y-2 border-military-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-xs tracking-[0.3em] text-military-700/60 font-bold mb-3">官方认可 · 战略合作</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-military-900/80">
          {PARTNERS.map(p => (
            <span key={p.name} className="border-l-2 border-military-900 pl-3">{p.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
