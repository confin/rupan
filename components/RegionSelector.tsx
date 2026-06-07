"use client";
import { useMemo, useState } from "react";
import { REGIONS } from "@/lib/data/regions";

type Level = "p" | "c" | "a";
export type RegionValue = { province?: string; city?: string; county?: string };

export function RegionSelector({ value, onChange }: {
  value: RegionValue;
  onChange: (v: RegionValue) => void;
}) {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<Level>("p");

  // 用 name 匹配，不怕 code 搞混
  const province = useMemo(() => REGIONS.find(p => p.name === value.province), [value.province]);
  const city = useMemo(() => province?.cities.find(c => c.name === value.city), [province, value.city]);

  const hasCounty = value.county && value.city && value.province;

  // 选省
  const pickProvince = (name: string) => {
    onChange({ province: name });
    setLevel("c");
  };
  // 选市
  const pickCity = (name: string) => {
    onChange({ ...value, city: name });
    setLevel("a");
  };
  // 选县/区 — 关弹窗
  const pickCounty = (name: string) => {
    onChange({ ...value, county: name });
    setOpen(false);
    setLevel("p");
  };
  // 回退
  const backToProvince = () => setLevel("p");
  const backToCity = () => setLevel("c");

  // 已选中的省对象
  const selectedProvince = REGIONS.find(p => p.name === value.province);
  const selectedCity = selectedProvince?.cities.find(c => c.name === value.city);

  // 摘要
  const summary = hasCounty
    ? `${value.province} / ${value.city} / ${value.county}`
    : value.province
      ? value.city
        ? `${value.province} / ${value.city} / 请选择县区`
        : `${value.province} / 请选择市`
      : "请选择省/市/县";

  return (
    <div className="relative">
      {/* 触发器 */}
      <button type="button" onClick={() => { setOpen(v => { if (!v) setLevel("p"); return !v; }); }}
        className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 text-left font-bold flex items-center justify-between hover:bg-military-50 transition">
        <span className={`truncate ${!hasCounty ? "text-military-700/50" : "text-military-900"}`}>
          {hasCounty ? "📍 " : "👇 "}{summary}
        </span>
        <svg className={`w-4 h-4 text-military-700 transition ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-40 mt-2 w-full bg-sand-50 border-2 border-military-900 shadow-hard">
          {/* 三步指示条 — 可点击跳转 */}
          <div className="flex border-b-2 border-military-900">
            <button type="button" onClick={backToProvince}
              className={`flex-1 px-3 py-2.5 text-xs font-black text-center transition ${level === "p" ? "bg-military-900 text-sand-50" : "bg-sand-50 text-military-900 hover:bg-military-100"}`}>
              {value.province || "① 省/直辖市"}
            </button>
            <button type="button" onClick={backToCity}
              className={`flex-1 px-3 py-2.5 text-xs font-black text-center transition ${level === "c" ? "bg-military-900 text-sand-50" : value.province ? "text-military-900 hover:bg-military-100" : "text-military-700/30 cursor-not-allowed"}`}>
              {value.city || "② 市"}
            </button>
            <button type="button" disabled
              className={`flex-1 px-3 py-2.5 text-xs font-black text-center ${value.city ? "text-military-900" : "text-military-700/30 cursor-not-allowed"} ${level === "a" ? "bg-military-900 text-sand-50" : ""}`}>
              {value.county || "③ 县/区"}
            </button>
            <button type="button" onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-military-700 hover:bg-military-900 hover:text-sand-50 transition">
              ✕
            </button>
          </div>

          {/* 当前层级列表 */}
          <div className="max-h-64 overflow-y-auto">
            {/* 省列表 */}
            {level === "p" && (
              <div>
                <div className="px-4 py-2 text-[10px] text-military-700/50 font-bold bg-military-50 border-b border-military-100">
                  请选择省份 / 直辖市
                </div>
                {REGIONS.map(p => (
                  <button type="button" key={p.code} onClick={() => pickProvince(p.name)}
                    className={`w-full text-left px-4 py-3 text-sm font-bold border-b border-military-100 flex items-center justify-between hover:bg-military-900 hover:text-sand-50 transition ${value.province === p.name ? "bg-military-900 text-sand-50" : "text-military-900"}`}>
                    <span>{p.name}</span>
                    <span className="text-[10px] opacity-50">{p.cities.length} 市 →</span>
                  </button>
                ))}
              </div>
            )}

            {/* 市列表 */}
            {level === "c" && selectedProvince && (
              <div>
                <div className="sticky top-0 px-4 py-2 text-[10px] text-military-700/50 font-bold bg-military-50 border-b border-military-100 flex items-center justify-between">
                  <span>{selectedProvince.name} → 请选择城市</span>
                  <button type="button" onClick={backToProvince} className="text-military-900 underline hover:no-underline">← 换省份</button>
                </div>
                {selectedProvince.cities.map(c => (
                  <button type="button" key={c.code} onClick={() => pickCity(c.name)}
                    className={`w-full text-left px-4 py-3 text-sm font-bold border-b border-military-100 flex items-center justify-between hover:bg-military-900 hover:text-sand-50 transition ${value.city === c.name ? "bg-military-900 text-sand-50" : "text-military-900"}`}>
                    <span>{c.name}</span>
                    <span className="text-[10px] opacity-50">{c.counties.length} 区/县 →</span>
                  </button>
                ))}
              </div>
            )}

            {/* 县/区列表 */}
            {level === "a" && selectedCity && (
              <div>
                <div className="sticky top-0 px-4 py-2 text-[10px] text-military-700/50 font-bold bg-military-50 border-b border-military-100 flex items-center justify-between">
                  <span>{selectedProvince?.name} / {selectedCity.name} → 请选择区/县</span>
                  <button type="button" onClick={backToCity} className="text-military-900 underline hover:no-underline">← 换城市</button>
                </div>
                {selectedCity.counties.map(a => (
                  <button type="button" key={a.code} onClick={() => pickCounty(a.name)}
                    className={`w-full text-left px-4 py-3 text-sm font-bold border-b border-military-100 hover:bg-military-900 hover:text-sand-50 transition ${value.county === a.name ? "bg-military-900 text-sand-50" : "text-military-900"}`}>
                    {a.name}
                  </button>
                ))}
              </div>
            )}

            {/* 空状态 */}
            {level === "c" && !selectedProvince && (
              <div className="px-4 py-10 text-center text-military-700/50 text-sm">请先选择省份</div>
            )}
            {level === "a" && !selectedCity && (
              <div className="px-4 py-10 text-center text-military-700/50 text-sm">请先选择城市</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
