"use client";
import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  city: string;
  role: string;
  resource: string;
  remark: string;
  agree: boolean;
};

const EMPTY: FormState = { name: "", phone: "", city: "", role: "城市合伙人", resource: "", remark: "", agree: false };

export function PartnerForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const update = (k: keyof FormState, v: any) => setForm(s => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!form.name.trim()) return setErr("请填写您的姓名");
    if (!/^1[3-9]\d{9}$/.test(form.phone)) return setErr("请填写正确的手机号");
    if (!form.city.trim()) return setErr("请填写意向城市");
    if (!form.agree) return setErr("请阅读并同意合作须知");

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) return setErr(data.error || "提交失败");
    } catch {
      return setErr("网络异常，请稍后重试");
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-military-900 text-sand-50 border-2 border-military-900 p-8 text-center">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-2xl font-black">申请已提交</h3>
        <p className="mt-2 text-sand-100/85">总部将在 1 个工作日内通过电话 {form.phone} 与您联系，请保持手机畅通。</p>
        <button onClick={() => { setForm(EMPTY); setSubmitted(false); }}
          className="mt-5 bg-sand-50 text-military-900 px-5 py-2.5 font-black">再提交一份</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-sand-50 border-2 border-military-900 shadow-hard p-6 sm:p-8 space-y-4">
      <div className="text-xl font-black text-military-900">城市合伙人申请表</div>
      <div className="text-sm text-military-700/80">首签 1 年送 1 年 · 30 天无理由退出 · 总部回购权益</div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="您的姓名 *" v={form.name} onChange={v => update("name", v)} placeholder="如：王先生" />
        <Field label="手机号码 *" v={form.phone} onChange={v => update("phone", v)} placeholder="11 位手机号" type="tel" />
        <Field label="意向城市 *" v={form.city} onChange={v => update("city", v)} placeholder="如：湖南 · 长沙" />
        <div>
          <Label>合作身份 *</Label>
          <select value={form.role} onChange={e => update("role", e.target.value)}
            className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold">
            <option>城市合伙人</option>
            <option>代理商</option>
            <option>校园合作方</option>
          </select>
        </div>
      </div>

      <div>
        <Label>现有资源（多选）</Label>
        <div className="flex flex-wrap gap-2">
          {["教育资源", "本地渠道", "资金实力", "团队≥3人", "学校关系", "媒体资源"].map(t => {
            const has = form.resource.split(",").filter(Boolean).includes(t);
            return (
              <button type="button" key={t} onClick={() => {
                const arr = form.resource.split(",").filter(Boolean);
                update("resource", has ? arr.filter(x => x !== t).join(",") : [...arr, t].join(","));
              }}
                className={`px-3 py-1.5 text-sm border-2 ${has ? "bg-military-900 text-sand-50 border-military-900" : "border-military-900 text-military-900"}`}>
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <Label>补充说明</Label>
        <textarea value={form.remark} onChange={e => update("remark", e.target.value)} rows={3}
          placeholder="可补充您对营地教育的看法、计划投入、过往经历等"
          className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 text-sm" />
      </div>

      <label className="flex items-start gap-2 text-xs text-military-700/80">
        <input type="checkbox" checked={form.agree} onChange={e => update("agree", e.target.checked)} className="mt-0.5 w-4 h-4 accent-military-900" />
        <span>我已阅读并同意《城市合伙人合作须知》，知悉信息仅用于总部评审与回访。</span>
      </label>

      {err && <div className="text-red-600 text-sm font-bold">⚠ {err}</div>}

      <button type="submit"
        className="w-full bg-military-900 text-sand-50 py-3.5 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
        提交申请 →
      </button>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-black text-military-900 mb-1.5">{children}</div>;
}
function Field({ label, v, onChange, placeholder, type = "text" }: { label: string; v: string; onChange: (v: string) => void; placeholder?: string; type?: string; }) {
  return (
    <div>
      <Label>{label}</Label>
      <input value={v} onChange={e => onChange(e.target.value)} type={type} placeholder={placeholder}
        className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold placeholder:text-military-700/40" />
    </div>
  );
}
