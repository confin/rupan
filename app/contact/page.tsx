"use client";
import { useState, useEffect } from "react";
import { BRAND } from "@/lib/data/brand";

export default function ContactPage() {
  useEffect(() => { document.title = "联系我们 · 汝攀营地教育"; }, []);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const update = (k: string, v: string) => setForm(s => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!form.name.trim()) return setErr("请填写您的姓名");
    if (!/^1[3-9]\d{9}$/.test(form.phone)) return setErr("请填写正确的手机号");
    if (!form.message.trim()) return setErr("请填写留言内容");
    setSending(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) return setErr(data.error || "提交失败");
      setSubmitted(true);
    } catch {
      setErr("网络异常，请稍后重试");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-sand-50">
      <section className="bg-military-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-xs tracking-[0.3em] text-sand-200/70">CONTACT</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black">联系我们</h1>
          <p className="mt-4 text-sand-100/85 max-w-2xl leading-8">有任何问题欢迎直接电话或邮件联系。家长咨询 / 招商加盟 / 媒体合作 / 校园合作，分线对接更高效。</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-6">
        {/* 左侧联系信息 */}
        <div className="space-y-4">
          {[
            { i: "📞", t: "招商 / 加盟", v: BRAND.hot, d: "朱营长 亲接 · 工作日 9:00-21:00" },
            { i: "✉", t: "商务合作 / 媒体", v: BRAND.email, d: "BD 团队 24h 内回复" },
            { i: "🛡", t: "校园 / 国防驻校", v: "bd@rupan-edu.com", d: "提供学校名称 + 联系人 + 需求" },
            { i: "🧑‍🎓", t: "家长客服", v: "0735-17872167788", d: "营期咨询 / 退款 / 改期" }
          ].map(c => (
            <div key={c.t} className="bg-sand-50 border-2 border-military-900 p-5">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{c.i}</div>
                <div className="flex-1">
                  <div className="font-black text-military-900">{c.t}</div>
                  <div className="text-military-900 mt-1 font-bold break-all">{c.v}</div>
                  <div className="text-xs text-military-700/70 mt-1">{c.d}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 右侧留言表单 + 基地信息 */}
        <div className="space-y-4">
          {/* 联系表单 — 写入 contacts 表 */}
          {submitted ? (
            <div className="bg-military-900 text-sand-50 border-2 border-military-900 p-6 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-2xl font-black">留言已提交</h3>
              <p className="mt-2 text-sand-100/85">我们将在 1 个工作日内与您联系。</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                className="mt-4 bg-sand-50 text-military-900 px-5 py-2.5 font-black">再留一条</button>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-sand-50 border-2 border-military-900 shadow-hard p-5">
              <h3 className="font-black text-military-900 text-lg mb-1">在线留言</h3>
              <p className="text-xs text-military-700/70 mb-4">提交后将自动写入系统，客服第一时间跟进。</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-black text-military-900">您的姓名 *</label>
                  <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="如：王先生"
                    className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold mt-1" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-black text-military-900">手机号 *</label>
                    <input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="11 位手机号" type="tel"
                      className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-military-900">邮箱</label>
                    <input value={form.email} onChange={e => update("email", e.target.value)} placeholder="选填"
                      className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 font-bold mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black text-military-900">留言内容 *</label>
                  <textarea value={form.message} onChange={e => update("message", e.target.value)} rows={4}
                    placeholder="请描述您的需求：家长咨询 / 商务合作 / 媒体采访 / 校园合作..."
                    className="w-full border-2 border-military-900 bg-sand-50 px-4 py-3 text-sm mt-1" />
                </div>
                {err && <div className="text-red-600 text-sm font-bold">⚠ {err}</div>}
                <button type="submit" disabled={sending}
                  className="w-full bg-military-900 text-sand-50 py-3.5 font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition disabled:opacity-60">
                  {sending ? "提交中..." : "提交留言 →"}
                </button>
              </div>
            </form>
          )}

          <div className="bg-military-900 text-sand-50 p-5">
            <h3 className="font-black text-sand-50">双核基地</h3>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="text-xs text-sand-200/70">沙洲总部</div>
                <div className="mt-0.5">{BRAND.hq}</div>
              </div>
              <div>
                <div className="text-xs text-sand-200/70">嘉禾 1958 新汝空间</div>
                <div className="mt-0.5">{BRAND.jiahe}</div>
              </div>
            </div>
          </div>
          <div className="bg-sand-50 border-2 border-military-900 p-5">
            <h3 className="font-black text-military-900">工作日办公时间</h3>
            <ul className="mt-2 text-sm text-military-700/85 space-y-1">
              <li>· 周一至周五 9:00 - 18:00</li>
              <li>· 周六 10:00 - 17:00（招生季延长至 21:00）</li>
              <li>· 周日 闭馆（家长群 24h 应急）</li>
            </ul>
          </div>
          <a href="tel:17872167788" className="block text-center bg-military-900 text-sand-50 py-3.5 font-black shadow-hard">📞 一键拨打</a>
        </div>
      </section>
    </div>
  );
}
