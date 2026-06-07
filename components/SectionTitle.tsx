export function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mb-8">
      {kicker && <div className="text-xs tracking-[0.3em] text-military-700/70 font-bold">{kicker}</div>}
      <h2 className="mt-1 text-2xl sm:text-3xl font-black text-military-900 leading-tight">{title}</h2>
      {sub && <p className="mt-2 text-sm sm:text-base text-military-700/80 max-w-2xl">{sub}</p>}
    </div>
  );
}
