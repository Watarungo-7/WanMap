"use client";

import { categoryMeta, levelMeta } from "@/data/spots";
import type { LevelFilter, SpotCategoryFilter } from "@/types";

interface FilterBarProps {
  activeCategory: SpotCategoryFilter;
  activeLevel: LevelFilter;
  onCategoryChange: (category: SpotCategoryFilter) => void;
  onLevelChange: (level: LevelFilter) => void;
}

export function FilterBar({
  activeCategory,
  activeLevel,
  onCategoryChange,
  onLevelChange,
}: FilterBarProps) {
  const categories: SpotCategoryFilter[] = [
    "all",
    "rest",
    "park",
    "cafe",
    "view",
    "stay",
  ];
  const levels: LevelFilter[] = ["all", 1, 2, 3];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/50">
          Spot Category
        </p>
        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => {
            const active = activeCategory === category;
            const label =
              category === "all" ? "すべて" : categoryMeta[category].label;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border-[#1a3a4a] bg-[#1a3a4a] text-white shadow-[0_12px_24px_rgba(26,58,74,0.18)]"
                    : "border-[#1a3a4a]/10 bg-white text-[#1a3a4a]/72"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/50">
          Acceptance Level
        </p>
        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
          {levels.map((level) => {
            const active = activeLevel === level;
            const label = level === "all" ? "認証すべて" : levelMeta[level].label;
            const color = level === "all" ? "#1a3a4a" : levelMeta[level].color;

            return (
              <button
                key={String(level)}
                type="button"
                onClick={() => onLevelChange(level)}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border-transparent text-white shadow-[0_12px_24px_rgba(26,58,74,0.18)]"
                    : "border-[#1a3a4a]/10 bg-white text-[#1a3a4a]/72"
                }`}
                style={active ? { backgroundColor: color } : undefined}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
