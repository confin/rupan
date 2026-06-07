"use client";
import { useEffect, useState } from "react";

export function Countdown({ minutes = 15, onExpire }: { minutes?: number; onExpire?: () => void }) {
  const [left, setLeft] = useState(minutes * 60);
  useEffect(() => {
    if (left <= 0) { onExpire?.(); return; }
    const t = setTimeout(() => setLeft(l => l - 1), 1000);
    return () => clearTimeout(t);
  }, [left, onExpire]);
  if (left <= 0) {
    return <div className="text-red-600 font-black text-lg">⛔ 订单已超时，请重新选择营期</div>;
  }
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return (
    <div className="inline-flex items-center gap-2 font-mono">
      <span className="text-xs text-military-700/70">订单保留</span>
      <span className="bg-military-900 text-sand-50 px-2.5 py-1 text-xl font-black">{m[0]}</span>
      <span className="bg-military-900 text-sand-50 px-2.5 py-1 text-xl font-black">{m[1]}</span>
      <span className="text-xl font-black text-military-900">:</span>
      <span className="bg-military-900 text-sand-50 px-2.5 py-1 text-xl font-black">{s[0]}</span>
      <span className="bg-military-900 text-sand-50 px-2.5 py-1 text-xl font-black">{s[1]}</span>
    </div>
  );
}
