import Link from "next/link";
import { AlertTriangle, ArrowLeft, HeartPulse, ShieldAlert } from "lucide-react";

import { emergencyChecklists, emergencyHotlines } from "@/data/emergency";

export default function EmergencyPage() {
  return (
    <>
      <section className="overflow-hidden rounded-[34px] bg-[#1a3a4a] px-6 py-7 text-white shadow-[0_28px_60px_rgba(26,58,74,0.24)]">
        <div className="space-y-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            マップへ戻る
          </Link>
          <div className="space-y-3">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
              Emergency Guide
            </div>
            <h1 className="text-[2rem] font-black leading-tight">
              もしものときに
              <br />
              最初に見るページ
            </h1>
            <p className="text-sm leading-7 text-white/78">
              旅先では「どこに電話するか」より先に、どこへ避けて何を伝えるかが重要です。
              WanMap では犬連れ来訪者向けに、最初の動きと最低限の連絡先を短くまとめています。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {emergencyHotlines.map((hotline) => (
          <article
            key={hotline.id}
            className="rounded-[30px] border border-white/65 bg-white/88 p-6 shadow-[0_18px_45px_rgba(26,58,74,0.10)] backdrop-blur-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex rounded-full bg-[#FF6B6B]/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1a3a4a]">
                  {hotline.availability}
                </div>
                <h2 className="text-2xl font-black text-[#1a3a4a]">
                  {hotline.label}
                </h2>
                <p className="text-base font-bold text-[#1a3a4a]">{hotline.title}</p>
                <p className="text-sm leading-6 text-[#1a3a4a]/72">
                  {hotline.description}
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#FF6B6B]/12">
                <ShieldAlert className="h-6 w-6 text-[#FF6B6B]" />
              </div>
            </div>
            <a
              href={`tel:${hotline.number}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1a3a4a] px-4 py-3 text-sm font-semibold text-white"
            >
              そのまま発信する
            </a>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/88 shadow-[0_12px_30px_rgba(26,58,74,0.08)]">
            <HeartPulse className="h-5 w-5 text-[#45B7D1]" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/45">
              Checklist
            </p>
            <h2 className="text-2xl font-bold text-[#1a3a4a]">
              落ち着いて確認する項目
            </h2>
          </div>
        </div>
        {emergencyChecklists.map((list) => (
          <article
            key={list.id}
            className="rounded-[30px] border border-white/65 bg-white/88 p-6 shadow-[0_18px_45px_rgba(26,58,74,0.10)] backdrop-blur-md"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#45B7D1]/12">
                <AlertTriangle className="h-5 w-5 text-[#45B7D1]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a3a4a]">{list.title}</h3>
                <ul className="mt-3 space-y-3">
                  {list.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-[20px] bg-[#f8f6f3] px-4 py-3 text-sm leading-6 text-[#1a3a4a]/72"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
