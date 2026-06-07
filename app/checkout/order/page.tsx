"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getProgramById } from "@/lib/data/camps";
import { Countdown } from "@/components/Countdown";

type Order = {
  id: string;
  programId: string;
  programTitle: string;
  qty: number;
  total: number;
  region: { province?: string; city?: string; county?: string };
  form: { parent: string; phone: string; childName: string; childAge: string; childGender: string; startDate: string; pickup: boolean; remark: string };
  createdAt: string;
};

function OrderConfirmInner() {
  const sp = useSearchParams();
  const id = sp.get("id") || "";
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [paid, setPaid] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!id) { setLoading(false); return; }
    fetch(`/api/orders?id=${id}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.order) {
          // 兼容 Supabase 的列名映射
          const o = data.order;
          setOrder({
            id: o.id,
            programId: o.program_id,
            programTitle: o.program_title,
            qty: o.qty,
            total: o.total,
            region: o.region || {},
            form: o.form_data || {},
            createdAt: o.created_at,
          });
          if (o.paid_at) setPaid(true);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-3">🧐</div>
        <h1 className="text-2xl font-black text-military-900">未找到订单</h1>
        <p className="mt-2 text-military-700/80">订单链接可能已失效或参数缺失。</p>
        <Link href="/camps" className="inline-block mt-5 bg-military-900 text-sand-50 px-5 py-2.5 font-black">前往选营地</Link>
      </div>
    );
  }

  const p = getProgramById(order.programId);

  if (paid) {
    return (
      <div className="bg-sand-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-black text-military-900">支付成功 · 营位已锁定</h1>
          <p className="mt-3 text-military-700/85">订单号 <span className="font-mono font-black">{order.id}</span> 已记录在案。客服将在 24 小时内电话联系您复核营期信息。</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
            <div className="border-2 border-military-900 p-4">
              <div className="text-xs text-military-700/70">入营须知</div>
              <div className="mt-1 text-sm">· 报到当日上午 9:00 前抵达营地<br />· 携带身份证 / 户口本原件<br />· 准备换洗衣物、洗漱用品</div>
            </div>
            <div className="border-2 border-military-900 p-4">
              <div className="text-xs text-military-700/70">家长群</div>
              <div className="mt-1 text-sm">支付完成后 2 小时内将邀请您加入「家长群」，每日直播 + 24h 反馈。</div>
            </div>
          </div>
          <div className="mt-8 flex gap-3 justify-center">
            <Link href="/camps" className="border-2 border-military-900 px-5 py-2.5 font-black">继续逛营地</Link>
            <a href="tel:17872167788" className="bg-military-900 text-sand-50 px-5 py-2.5 font-black">📞 联系客服</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs tracking-[0.3em] text-military-700/70">ORDER · 订单确认</div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-military-900">请在 15 分钟内完成支付</h1>
            <div className="text-sm text-military-700/80 mt-1">订单号 <span className="font-mono font-bold">{order.id}</span></div>
          </div>
          {!expired && <Countdown minutes={15} onExpire={() => setExpired(true)} />}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <section className="bg-sand-50 border-2 border-military-900 p-5">
              <h3 className="font-black text-military-900 mb-3">营期信息</h3>
              <div className="flex gap-4">
                {p && <img src={p.cover} alt="" className="w-32 h-24 object-cover border-2 border-military-900 shrink-0" />}
                <div>
                  <div className="font-black text-military-900">{order.programTitle}</div>
                  {p && <div className="text-xs text-military-700/80 mt-1">{p.subTitle}</div>}
                  <div className="mt-2 text-xs space-y-0.5 text-military-700/80">
                    {p && <div>📍 {p.city} · {p.base}</div>}
                    <div>👶 {order.form.childName}（{order.form.childGender} · {order.form.childAge} 岁）</div>
                    <div>📅 期望开营：{order.form.startDate || "待客服确认"}</div>
                    <div>👥 人数：× {order.qty}</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-sand-50 border-2 border-military-900 p-5">
              <h3 className="font-black text-military-900 mb-3">家长 / 联系信息</h3>
              <div className="text-sm space-y-1">
                <div>监护人：<span className="font-bold">{order.form.parent}</span></div>
                <div>手机号：<span className="font-bold">{order.form.phone}</span></div>
                <div>所在区域：<span className="font-bold">{order.region.province} {order.region.city} {order.region.county}</span></div>
                {order.form.remark && <div className="pt-2 text-military-700/80">备注：{order.form.remark}</div>}
              </div>
            </section>

            <section className="bg-sand-50 border-2 border-military-900 p-5">
              <h3 className="font-black text-military-900 mb-3">选择支付方式</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { k: "wechat", n: "微信支付", i: "💚" },
                  { k: "alipay", n: "支付宝", i: "💙" },
                  { k: "bank", n: "对公转账", i: "🏛" }
                ].map((m, i) => (
                  <div key={m.k} className={`border-2 p-4 ${i === 0 ? "border-military-900 bg-military-50" : "border-military-900/30"}`}>
                    <div className="text-2xl">{m.i}</div>
                    <div className="font-black mt-1">{m.n}</div>
                    {i === 0 && <div className="text-[10px] text-military-700/60 mt-1">推荐 · 即时到账</div>}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-military-700/60">* 本页面为 Mock 演示，点击「模拟支付成功」即视为支付完成。</p>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-sand-50 border-2 border-military-900 shadow-hard p-5">
              <div className="text-sm text-military-700/70">应付总额</div>
              <div className="text-3xl font-black text-red-600">¥{order.total.toLocaleString()}</div>
              <div className="text-[11px] text-military-700/60 mt-0.5">含 100 万 / 人意外险</div>
              <button onClick={async () => {
                try {
                  await fetch("/api/orders", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: order.id, paymentMethod: "wechat" }),
                  });
                } catch {}
                setPaid(true);
              }} disabled={expired}
                className="mt-4 w-full bg-military-900 text-sand-50 py-3.5 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50">
                模拟支付成功
              </button>
              <a href="tel:17872167788" className="mt-2 w-full block text-center border-2 border-military-900 py-3 font-black">
                📞 改用电话下单
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
import { Suspense } from "react";
export default function OrderConfirmPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-military-700/70">正在加载订单...</div>}>
      <OrderConfirmInner />
    </Suspense>
  );
}