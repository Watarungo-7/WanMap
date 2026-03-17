import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex w-full max-w-[480px] items-center justify-between rounded-full border border-white/60 bg-white/80 px-4 py-3 shadow-[0_20px_45px_rgba(26,58,74,0.12)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a3a4a] text-sm font-black tracking-[0.18em] text-white">
            WM
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#4ECDC4]">
              Dog Friendly Imabari
            </p>
            <p className="text-base font-bold text-[#1a3a4a]">WanMap</p>
          </div>
        </Link>
        <div className="rounded-full bg-[#1a3a4a]/5 px-3 py-2 text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/55">
            Imabari
          </p>
          <p className="text-sm font-semibold text-[#1a3a4a]">愛媛県今治市</p>
        </div>
      </div>
    </header>
  );
}
