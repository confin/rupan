"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/camps", label: "营地项目" },
  { href: "/about", label: "关于我们" },
  { href: "/partner", label: "城市合伙人" },
  { href: "/join", label: "加入我们" },
  { href: "/cooperation", label: "合作机构" },
  { href: "/contact", label: "联系我们" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur border-b-2 border-military-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className="px-3 py-2 text-sm font-bold text-military-900 hover:bg-military-900 hover:text-sand-50 transition">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href="tel:17872167788" className="text-sm font-bold text-military-900 border-2 border-military-900 px-3 py-1.5">
            📞 178-7216-7788
          </a>
          <Link href="/camps" className="bg-military-900 text-sand-50 px-4 py-2 text-sm font-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
            立即报名
          </Link>
        </div>
        <button className="lg:hidden p-2 border-2 border-military-900" onClick={() => setOpen(!open)} aria-label="菜单">
          <span className="block w-5 h-0.5 bg-military-900 mb-1" />
          <span className="block w-5 h-0.5 bg-military-900 mb-1" />
          <span className="block w-5 h-0.5 bg-military-900" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t-2 border-military-900 bg-sand-50">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-bold border-b border-military-100 text-military-900">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
