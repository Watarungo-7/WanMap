import Link from "next/link";
import { ArrowDown, Route, ShieldAlert } from "lucide-react";

import { MapExplorer } from "@/components/MapExplorer";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-[36px] bg-[#1a3a4a] px-6 py-7 text-white shadow-[0_28px_60px_rgba(26,58,74,0.24)]">
        <div className="absolute -right-8 top-6 h-32 w-32 rounded-full bg-[#4ECDC4]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#FF9F43]/20 blur-3xl" />
        <div className="relative space-y-5">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
            Map First / Mobile First
          </div>
          <div className="space-y-3">
            <h1 className="text-[2rem] font-black leading-tight">
              犬と歩く今治が、
              <br />
              すぐ見つかる。
            </h1>
            <p className="max-w-[28rem] text-sm leading-7 text-white/78">
              実地図の上で「次どこへ行くか」を迷わず決められる、
              犬連れ来訪者のための今治ガイド。到着直後の導線、海辺の休憩、
              しまなみの景色、緊急時の動き方までスマホで完結します。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#map"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF9F43] px-4 py-3 text-sm font-bold text-[#1a3a4a]"
            >
              地図を見る
              <ArrowDown className="h-4 w-4" />
            </a>
            <Link
              href="/course"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
            >
              おさんぽコース
              <Route className="h-4 w-4" />
            </Link>
            <Link
              href="/emergency"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
            >
              緊急連絡先
              <ShieldAlert className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="rounded-[24px] bg-white/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/48">
                Use
              </p>
              <p className="mt-2 text-sm font-semibold text-white">来訪前と現地の両方</p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/48">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-white">片手で迷わない導線</p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/48">
                Base
              </p>
              <p className="mt-2 text-sm font-semibold text-white">今治市の実地図</p>
            </div>
          </div>
        </div>
      </section>

      <MapExplorer />
    </>
  );
}
