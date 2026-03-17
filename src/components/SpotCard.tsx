import { ArrowUpRight, Clock3, MapPin, Sparkles } from "lucide-react";

import { levelMeta } from "@/data/spots";
import type { Spot } from "@/types";

interface SpotCardProps {
  spot: Spot;
  featured?: boolean;
  selected?: boolean;
  onSelect?: (spotId: string) => void;
}

export function SpotCard({
  spot,
  featured = false,
  selected = false,
  onSelect,
}: SpotCardProps) {
  const level = levelMeta[spot.level];
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;

  return (
    <article
      className={`rounded-[28px] border border-white/65 bg-white/88 p-5 shadow-[0_18px_45px_rgba(26,58,74,0.10)] backdrop-blur-md transition ${
        selected ? "ring-2 ring-[#1a3a4a]/14" : ""
      } ${featured ? "space-y-5" : "space-y-4"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: level.color }}
            >
              {level.label}
            </span>
            <span className="rounded-full bg-[#1a3a4a]/6 px-3 py-1 text-xs font-semibold text-[#1a3a4a]/70">
              {spot.area}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a3a4a]">{spot.name}</h3>
            <p className="mt-1 text-sm leading-6 text-[#1a3a4a]/72">
              {spot.summary}
            </p>
          </div>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1a3a4a]/5">
          <Sparkles className="h-5 w-5 text-[#FF9F43]" />
        </div>
      </div>

      {featured ? (
        <div className="rounded-[24px] bg-[#1a3a4a] px-4 py-3 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Highlight
          </p>
          <p className="mt-2 text-sm font-semibold leading-6">{spot.highlight}</p>
        </div>
      ) : null}

      <div className="grid gap-3 text-sm text-[#1a3a4a]/72">
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#45B7D1]" />
          <span>{spot.address}</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#45B7D1]" />
          <span>おすすめ滞在: {spot.recommendedTime}</span>
        </div>
        <p className="rounded-[22px] bg-[#f8f6f3] px-4 py-3 leading-6 text-[#1a3a4a]/75">
          {spot.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {spot.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#1a3a4a]/8 bg-white px-3 py-1 text-xs font-semibold text-[#1a3a4a]/68"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {spot.amenities.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#4ECDC4]/12 px-3 py-1 text-xs font-semibold text-[#1a3a4a]"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-xs leading-5 text-[#1a3a4a]/50">{spot.note}</p>

      <div className="flex flex-wrap gap-3">
        {onSelect ? (
          <button
            type="button"
            onClick={() => onSelect(spot.id)}
            className="inline-flex items-center gap-2 rounded-full bg-[#1a3a4a] px-4 py-2.5 text-sm font-semibold text-white"
          >
            地図で開く
          </button>
        ) : null}
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#1a3a4a]/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#1a3a4a]"
        >
          Google Maps
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
