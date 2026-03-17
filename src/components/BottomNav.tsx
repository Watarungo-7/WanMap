"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle, Compass, Map, Route } from "lucide-react";

const items = [
  {
    href: "/",
    label: "マップ",
    icon: Map,
  },
  {
    href: "/course",
    label: "コース",
    icon: Route,
  },
  {
    href: "/emergency",
    label: "緊急連絡",
    icon: AlertCircle,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-50 px-4"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <nav className="pointer-events-auto mx-auto flex w-full max-w-[480px] items-center justify-between gap-2 rounded-[28px] border border-white/65 bg-[#1a3a4a]/92 p-2 shadow-[0_24px_60px_rgba(26,58,74,0.35)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-[22px] px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-white text-[#1a3a4a] shadow-[0_12px_25px_rgba(255,255,255,0.18)]"
                  : "text-white/72 hover:bg-white/8"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
        <div className="hidden h-0 w-0" aria-hidden="true">
          <Compass />
        </div>
      </nav>
    </div>
  );
}
