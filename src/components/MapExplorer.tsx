"use client";

import { useState } from "react";
import { Compass, ShieldCheck, Sparkles } from "lucide-react";

import { categoryMeta, levelMeta, spots } from "@/data/spots";
import type { LevelFilter, SpotCategoryFilter } from "@/types";

import { FilterBar } from "./FilterBar";
import { MapView } from "./MapView";
import { SpotCard } from "./SpotCard";

export function MapExplorer() {
  const [activeCategory, setActiveCategory] =
    useState<SpotCategoryFilter>("all");
  const [activeLevel, setActiveLevel] = useState<LevelFilter>("all");
  const [requestedSelectedSpotId, setRequestedSelectedSpotId] = useState<string | null>(
    spots[0]?.id ?? null,
  );

  const filteredSpots = spots.filter((spot) => {
    const categoryMatch =
      activeCategory === "all" ? true : spot.category === activeCategory;
    const levelMatch = activeLevel === "all" ? true : spot.level === activeLevel;

    return categoryMatch && levelMatch;
  });

  const selectedSpot =
    filteredSpots.find((spot) => spot.id === requestedSelectedSpotId) ??
    filteredSpots[0] ??
    null;
  const remainingSpots = filteredSpots.filter((spot) => spot.id !== selectedSpot?.id);
  const categorySummary =
    activeCategory === "all" ? "カテゴリ横断" : categoryMeta[activeCategory].label;
  const categoryDetail =
    activeCategory === "all"
      ? "いま使える候補を一覧で比較"
      : categoryMeta[activeCategory].description;
  const levelSummary =
    activeLevel === "all" ? "Lv.1-3 横断" : levelMeta[activeLevel].shortLabel;
  const levelDetail =
    activeLevel === "all"
      ? "受入段階をまとめて比較"
      : levelMeta[activeLevel].description;

  return (
    <section className="space-y-6">
      <div className="rounded-[28px] border border-[#4ECDC4]/20 bg-white/82 p-5 shadow-[0_18px_45px_rgba(26,58,74,0.08)] backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4ECDC4]/14 text-[#1a3a4a]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/50">
              MVP Note
            </p>
            <p className="text-sm leading-6 text-[#1a3a4a]/75">
              地図は今治市の実地図です。掲載スポットの受入レベルや一部テキストは、
              いぬばり構想の MVP を具体化するためのモデルデータとして構成しています。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-[24px] bg-white/88 p-4 shadow-[0_18px_45px_rgba(26,58,74,0.08)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/45">
            Spots
          </p>
          <p className="mt-2 text-2xl font-black text-[#1a3a4a]">
            {filteredSpots.length}
          </p>
          <p className="mt-1 text-xs leading-5 text-[#1a3a4a]/55">
            今の条件で見える候補
          </p>
        </div>
        <div className="rounded-[24px] bg-white/88 p-4 shadow-[0_18px_45px_rgba(26,58,74,0.08)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/45">
            View
          </p>
          <p className="mt-2 text-base font-bold leading-5 text-[#1a3a4a]">
            {categorySummary}
          </p>
          <p className="mt-1 text-xs leading-5 text-[#1a3a4a]/55">{categoryDetail}</p>
        </div>
        <div className="rounded-[24px] bg-white/88 p-4 shadow-[0_18px_45px_rgba(26,58,74,0.08)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/45">
            Level
          </p>
          <p className="mt-2 text-base font-bold leading-5 text-[#1a3a4a]">
            {levelSummary}
          </p>
          <p className="mt-1 text-xs leading-5 text-[#1a3a4a]/55">{levelDetail}</p>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/65 bg-white/75 p-5 shadow-[0_18px_45px_rgba(26,58,74,0.10)] backdrop-blur-md">
        <FilterBar
          activeCategory={activeCategory}
          activeLevel={activeLevel}
          onCategoryChange={setActiveCategory}
          onLevelChange={setActiveLevel}
        />
      </div>

      <div id="map" className="scroll-mt-24">
        <MapView
          spots={filteredSpots}
          selectedSpotId={selectedSpot?.id ?? null}
          onSelectSpot={setRequestedSelectedSpotId}
        />
      </div>

      {selectedSpot ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/45">
                Selected Spot
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#1a3a4a]">
                いま見ているスポット
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#1a3a4a]/8 bg-white px-3 py-2 text-xs font-semibold text-[#1a3a4a]/65">
              <ShieldCheck className="h-4 w-4 text-[#4ECDC4]" />
              いぬばり指標
            </div>
          </div>
          <SpotCard spot={selectedSpot} featured />
        </div>
      ) : (
        <div className="rounded-[30px] bg-white/85 p-8 text-center shadow-[0_18px_45px_rgba(26,58,74,0.08)]">
          <Compass className="mx-auto h-10 w-10 text-[#45B7D1]" />
          <p className="mt-4 text-lg font-bold text-[#1a3a4a]">
            条件に合うスポットがまだありません
          </p>
          <p className="mt-2 text-sm leading-6 text-[#1a3a4a]/62">
            カテゴリか認証レベルをひとつ戻すと、今治市内の候補が再表示されます。
          </p>
        </div>
      )}

      {remainingSpots.length > 0 ? (
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/45">
              Other Picks
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#1a3a4a]">
              条件に合うほかの候補
            </h2>
          </div>
          <div className="space-y-4">
            {remainingSpots.map((spot) => (
              <SpotCard
                key={spot.id}
                spot={spot}
                onSelect={setRequestedSelectedSpotId}
                selected={spot.id === selectedSpot?.id}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
