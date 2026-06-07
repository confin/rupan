import Link from "next/link";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span
        className="grid place-items-center bg-military-900 text-sand-100 font-black tracking-tight"
        style={{ width: size, height: size, clipPath: "polygon(0 18%, 50% 0, 100% 18%, 100% 82%, 50% 100%, 0 82%)" }}
      >
        汝
      </span>
      <div className="leading-none">
        <div className="font-black text-military-900 text-base">汝攀营地</div>
        <div className="text-[10px] tracking-[0.2em] text-military-700/70">RUPAN · CAMP</div>
      </div>
    </Link>
  );
}
