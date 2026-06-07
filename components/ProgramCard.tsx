import Link from "next/link";
import type { CampProgram } from "@/lib/data/camps";

export function ProgramCard({ p }: { p: CampProgram }) {
  return (
    <Link href={`/camp/${p.id}`}
      className="group block bg-sand-50 border-2 border-military-900 shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition">
      <div className="relative aspect-[4/3] overflow-hidden bg-military-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.cover} alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition" />
        <div className="absolute top-2 left-2 flex gap-1">
          {p.hot && <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5">🔥 HOT</span>}
          {p.new && <span className="bg-military-900 text-sand-50 text-[10px] font-black px-2 py-0.5">NEW</span>}
        </div>
        <div className="absolute top-2 right-2 bg-military-900/85 text-sand-50 text-[10px] font-bold px-2 py-0.5">
          {p.days} 天
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-black text-military-900 leading-tight line-clamp-1">{p.title}</h3>
        <p className="mt-1 text-xs text-military-700/80 line-clamp-1">{p.subTitle}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-military-700/70">
          <span>👶 {p.ageRange} 岁</span>
          <span>📍 {p.city}</span>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <span className="text-red-600 font-black text-xl">¥{p.price.toLocaleString()}</span>
            {p.originalPrice && <span className="ml-1 text-xs line-through text-military-700/50">¥{p.originalPrice.toLocaleString()}</span>}
          </div>
          <span className="text-xs font-bold text-military-900 border-b-2 border-military-900 group-hover:translate-x-0.5 transition">查看 →</span>
        </div>
      </div>
    </Link>
  );
}
