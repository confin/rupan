"use client";
import { useState } from "react";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { getProgramById, PROGRAMS } from "@/lib/data/camps";
import { Countdown } from "@/components/Countdown";
import { RegionSelector, type RegionValue } from "@/components/RegionSelector";

type Form = {
  parent: string;
  phone: string;
  childName: string;
  childAge: string;
  childGender: "男" | "女";
  startDate: string;
  pickup: boolean;
  remark: string;
};

const EMPTY: Form = { parent: "", phone: "", childName: "", childAge: "", childGender: "男", startDate: "", pickup: false, remark: "" };

function CheckoutInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const pid = sp.get("program") || PROGRAMS[0].id;
  const program = getProgramById(pid) || PROGRAMS[0];

  const [qty, setQty] = useState(1);
  const [region, setRegion] = useState<RegionValue>({});
  const [form, setForm] = useState<Form>(EMPTY);
  const [err, setErr] = useState<string | null>(null);
  const [expired, setExpired] = useState(false);

  const update = (k: keyof Form, v: any) => setForm(s => ({ ...s, [k]: v }));
  const total = program.price * qty;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!region.province || !region.city || !region.county) return setErr("请选择完整的省/市/县区");
    if (!form.parent.trim()) return setErr("请填写监护人姓名");
    if (!/^1[3-9]\d{9}$/.test(form.phone)) return setErr("请填写正确的联系手机号");
    if (!form.childName.trim()) return setErr("请填写孩子姓名");
    if (!form.childAge) return setErr("请填写孩子年龄");
    if (!form.startDate) return setErr("请选择期望开营日期");
    const orderId = "RP" + Date.now().toString().slice(-10);
    const orderPayload = {
      id: orderId, programId: program.id, programTitle: program.title,
      qty, total, region, form,
    };
    // 写入 Supabase
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
      const data = await res.json();
      if (!res.ok) return setErr(data.error || "创建订单失败");
    } catch {
      return setErr("网络异常，请稍后重试");
    }
    router.push(`/checkout/order?id=${orderId}`);
  };

  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs tracking-[0.3em] text-military-700/70">CHECKOUT</div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-military-900">确认订单 · 锁定营位</h1>
          </div>
          {!expired && <Countdown minutes={15} onExpire={() => setExpired(true)} />}
        </div>

        <form onSubmit={submit} className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <section className="bg-sand-50 border-2 border-military-900 p-5">
              <h3 className="font-black text-military-900 mb-3">① 营期信息</h3>
              <div className="flex gap-4 items-start">
                <img src={program.cover} alt="" className="w-28 h-20 object-cover border-2 border-military-900 shrink-0" />
                <div className="flex-1">
                  <div className="font-black text-military-900">{program.title}</div>
                  <div className="text-xs text-military-700/80 mt-0.5">{program.subTitle}</div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-0.5 border border-military-900">{program.days} 天</span>
                    <span className="px-2 py-0.5 border border-military-900">{program.ageRange} 岁</span>
                    <span className="px-2 py-0.5 border border-military-900">📍 {program.city}</span>
                    <span className="px-2 py-0.5 border border-military-900">🏕 {program.base}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-military-700/70">单价</div>
                  <div className="text-xl font-black text-red-600">¥{program.price.toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm font-bold text-military-900">报名人数</span>
                <div className="inline-flex border-2 border-military-900">
                  <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))} className="w-9 h-9 font-black hover:bg-military-900 hover:text-sand-50">-</button>
                  <span className="w-10 h-9 grid place-items-center font-black">{qty}</span>
                  <button type="button" onClick={() => setQty(q => Math.min(6, q + 1))} className="w-9 h-9 font-black hover:bg-military-900 hover:text-sand-50">+</button>
                </div>
                <span className="text-xs text-military-700/60">单笔最多 6 人 · 团体请联系大客户</span>
              </div>
            </section>

            <section className="bg-sand-50 border-2 border-military-900 p-5">
              <h3 className="font-black text-military-900 mb-3">② 营地区域（3 级联动）</h3>
              <p className="text-xs text-military-700/70 mb-2">请先选择「省」→「市」→「县/区」，用于匹配最近的接驳点与带队教官。</p>
              <RegionSelector value={region} onChange={setRegion} />
            </section>

            <section className="bg-sand-50 border-2 border-military-900 p-5">
              <h3 className="font-black text-military-900 mb-3">③ 报名信息</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="监护人姓名 *" v={form.parent} onChange={v => update("parent", v)} placeholder="如：王女士" />
                <Field label="联系手机 *" v={form.phone} onChange={v => update("phone", v)} placeholder="11 位手机号" type="tel" />
                <Field label="孩子姓名 *" v={form.childName} onChange={v => update("childName", v)} placeholder="孩子中文姓名" />
                <Field label="孩子年龄 *" v={form.childAge} onChange={v => update("childAge", v)} placeholder="如：9" type="number" />
                <div>
                  <Label>性别</Label>
                  <div className="flex gap-2">
                    {(["男", "女"] as const).map(g => (
                      <button type="button" key={g} onClick={() => update("childGender", g)}
                        className={`flex-1 py-3 border-2 font-black ${form.childGender === g ? "bg-military-900 text-sand-50 border-military-900" : "border-military-900 text-military-900"}`}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <Field label="期望开营日期 *" v={form.startDate} onChange={v => update("startDate", v)} type="date" />
                <label className="sm:col-span-2 flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={form.pickup} onChange={e => update("pickup", e.target.checked)} className="w-4 h-4 accent-military-900" />
                  <span>需要安排营地到高铁站/机场的定点接驳（按实际公布）</span>
                </label>
                <div className="sm:col-span-2">
                  <Label>补充说明（过敏史、用药、特别关注等）</Label>
                  <textarea value={form.remark} onChange={e => update("remark", e.target.value)} rows={3}
                    placeholder="例：海鲜过敏 / 正在服用 X 药 / 需要关注视力"
                    className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 text-sm" />
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-sand-50 border-2 border-military-900 shadow-hard">
              <div className="px-5 py-3 bg-military-900 text-sand-50 font-black">订单摘要</div>
              <div className="p-5 space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-military-700/70">营期</span><span className="font-bold text-right">{program.title}</span></div>
                <div className="flex justify-between"><span className="text-military-700/70">单价</span><span className="font-bold">¥{program.price.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-military-700/70">人数</span><span className="font-bold">× {qty}</span></div>
                <div className="flex justify-between"><span className="text-military-700/70">区域</span><span className="font-bold text-right">{region.county ? `${region.province} ${region.city} ${region.county}` : "未选择"}</span></div>
                <div className="border-t-2 border-dashed border-military-900/30 my-2" />
                <div className="flex justify-between items-baseline">
                  <span className="text-military-700/70">应付</span>
                  <span className="text-2xl font-black text-red-600">¥{total.toLocaleString()}</span>
                </div>
                {err && <div className="text-red-600 text-xs font-bold">⚠ {err}</div>}
                <button type="submit" disabled={expired}
                  className="w-full bg-military-900 text-sand-50 py-3.5 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed">
                  锁定营位 · 提交订单
                </button>
                <div className="text-[11px] text-military-700/70 leading-5">
                  · 提交后将生成订单号并跳转支付<br />
                  · 营位保留 15 分钟，超时自动释放<br />
                  · 100 万 / 人意外险 + 双重百万责任险
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-black text-military-900 mb-1.5">{children}</div>;
}
function Field({ label, v, onChange, placeholder, type = "text" }: { label: string; v: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input value={v} onChange={e => onChange(e.target.value)} type={type} placeholder={placeholder}
        className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold placeholder:text-military-700/40" />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-military-700/70">正在加载订单...</div>}>
      <CheckoutInner />
    </Suspense>
  );
}