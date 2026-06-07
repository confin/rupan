"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data/camps";

export function CampCategoryCarousel() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const cur = CATEGORIES[active];
  const total = CATEGORIES.length;
  const prev = () => { setAutoPlay(false); setActive(i => (i - 1 + total) % total); };
  const next = () => { setAutoPlay(false); setActive(i => (i + 1) % total); };

  // Auto-rotate every 6s
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActive(i => (i + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [autoPlay, total]);

  return (
    <section className="bg-military-900 text-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.3em] text-sand-200/70">CAMP TYPES · 8 大主题 · 26 款营期</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black">选一类营地，给孩子一段看得见的成长</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} aria-label="上一类" className="w-10 h-10 border-2 border-sand-50 hover:bg-sand-50 hover:text-military-900 transition">&larr;</button>
            <span className="font-mono text-sm">{active + 1} / {total}</span>
            <button onClick={next} aria-label="下一类" className="w-10 h-10 border-2 border-sand-50 hover:bg-sand-50 hover:text-military-900 transition">&rarr;</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* 左侧大图（当前选中类别） */}
          <div className="lg:col-span-7 relative bg-military-800 border-2 border-sand-50/20 overflow-hidden min-h-[520px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={cur.id + "-cover"}
              src={cur.cover}
              alt={cur.name}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-military-950/95 via-military-900/50 to-transparent" />
            <div className="absolute left-6 right-6 bottom-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-sand-50/30 text-[10px] tracking-[0.25em] text-sand-200/80 mb-2">
                <span className="w-2 h-2 bg-sand-200 rounded-full" /> {cur.enName}
              </div>
              <div className="text-4xl sm:text-5xl font-black leading-tight">{cur.name}</div>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-sand-100/90 leading-7">{cur.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cur.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs border border-sand-50/40 bg-military-900/40"># {t}</span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/camps?category=${cur.id}`}
                  className="inline-block bg-sand-50 text-military-900 px-6 py-3 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
                >
                  查看 {cur.name} 项目 &rarr;
                </Link>
                <Link
                  href="/camps"
                  className="inline-block border-2 border-sand-50 text-sand-50 px-6 py-3 font-black hover:bg-sand-50 hover:text-military-900 transition"
                >
                  查看全部 &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* 右侧 8 类缩略图选择 */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {CATEGORIES.map((c, i) => (
              <button key={c.id} onClick={() => { setAutoPlay(false); setActive(i); }}
                className={`relative border-2 ${i === active ? "border-sand-50 ring-1 ring-sand-50" : "border-sand-50/20"} group overflow-hidden text-left hover:border-sand-50/60 transition`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={c.id + "-thumb"}
                  src={c.cover}
                  alt={c.name}
                  className="w-full h-28 object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-military-950/90 to-transparent" />
                <div className="absolute left-2.5 bottom-2 right-2.5">
                  <div className="text-[10px] tracking-widest text-sand-200/80">{c.enName}</div>
                  <div className="font-black text-base">{c.name}</div>
                </div>
                {i === active && <span className="absolute top-2 right-2 w-3 h-3 bg-sand-50 rounded-full ring-2 ring-military-900" />}
              </button>
            ))}
          </div>
        </div>

        {/* 进度指示条 */}
        <div className="mt-6 flex gap-1.5 justify-center">
          {CATEGORIES.map((_, i) => (
            <button key={i} onClick={() => { setAutoPlay(false); setActive(i); }}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-sand-50" : "w-4 bg-sand-50/30 hover:bg-sand-50/50"}`}
              aria-label={`切换到第 ${i + 1} 类`}
            />
          ))}
        </div>
        <p className="mt-2 text-center text-[11px] text-sand-200/50">自动轮播中 · 点击任意类别可切换</p>
      </div>
    </section>
  );
}
