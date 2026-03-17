"use client";

import { useEffect, useRef } from "react";
import maplibregl, {
  type LngLatBoundsLike,
  type StyleSpecification,
} from "maplibre-gl";
import { MapPinned } from "lucide-react";

import { levelMeta, mapConfig } from "@/data/spots";
import type { Spot } from "@/types";

const defaultMapTiles = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const rasterTileUrl =
  process.env.NEXT_PUBLIC_MAP_TILE_URL?.trim() || defaultMapTiles;
const rasterAttribution =
  process.env.NEXT_PUBLIC_MAP_ATTRIBUTION?.trim() ||
  "© OpenStreetMap contributors";

const mapStyle: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: [rasterTileUrl],
      tileSize: 256,
      attribution: rasterAttribution,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm",
    },
  ],
};

const bounds = mapConfig.bounds as unknown as LngLatBoundsLike;

interface MapViewProps {
  spots: Spot[];
  selectedSpotId: string | null;
  onSelectSpot: (spotId: string) => void;
}

function createMarkerElement(spot: Spot, selected: boolean) {
  const button = document.createElement("button");
  const level = levelMeta[spot.level];

  button.type = "button";
  button.className = "wanmap-marker";
  button.dataset.selected = selected ? "true" : "false";
  button.setAttribute("aria-label", `${spot.name} を選択`);
  button.style.setProperty("--marker-color", level.color);
  button.innerHTML = `<span>${level.shortLabel}</span>`;

  return button;
}

export function MapView({ spots, selectedSpotId, onSelectSpot }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<Map<string, maplibregl.Marker>>(new Map());

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return;
    }

    const markerStore = markersRef.current;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: mapStyle,
      center: mapConfig.center,
      zoom: mapConfig.zoom,
      maxBounds: bounds,
      attributionControl: false,
    });

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    mapRef.current = map;

    return () => {
      markerStore.forEach((marker) => marker.remove());
      markerStore.clear();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const container = containerRef.current;

    if (!map || !container) {
      return;
    }

    const resizeMap = () => {
      requestAnimationFrame(() => {
        map.resize();
      });
    };

    resizeMap();

    const observer = new ResizeObserver(() => {
      resizeMap();
    });

    observer.observe(container);
    window.addEventListener("resize", resizeMap);
    window.addEventListener("orientationchange", resizeMap);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeMap);
      window.removeEventListener("orientationchange", resizeMap);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    const visibleIds = new Set(spots.map((spot) => spot.id));

    markersRef.current.forEach((marker, markerId) => {
      if (!visibleIds.has(markerId)) {
        marker.remove();
        markersRef.current.delete(markerId);
      }
    });

    spots.forEach((spot) => {
      const existing = markersRef.current.get(spot.id);
      const selected = spot.id === selectedSpotId;

      if (existing) {
        const element = existing.getElement();
        element.dataset.selected = selected ? "true" : "false";
        element.style.setProperty("--marker-color", levelMeta[spot.level].color);
        return;
      }

      const element = createMarkerElement(spot, selected);
      element.addEventListener("click", () => onSelectSpot(spot.id));

      const marker = new maplibregl.Marker({
        element,
        anchor: "bottom",
      })
        .setLngLat([spot.longitude, spot.latitude])
        .addTo(map);

      markersRef.current.set(spot.id, marker);
    });
  }, [onSelectSpot, selectedSpotId, spots]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || !selectedSpotId) {
      return;
    }

    const selectedSpot = spots.find((spot) => spot.id === selectedSpotId);

    if (!selectedSpot) {
      return;
    }

    map.flyTo({
      center: [selectedSpot.longitude, selectedSpot.latitude],
      zoom: selectedSpot.category === "stay" ? 11.9 : 13.6,
      essential: true,
      duration: 900,
    });
  }, [selectedSpotId, spots]);

  const selectedSpot = spots.find((spot) => spot.id === selectedSpotId) ?? spots[0];

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[#dcecf0] shadow-[0_24px_55px_rgba(26,58,74,0.18)]">
      <div
        ref={containerRef}
        className="h-[390px] w-full md:h-[460px]"
        aria-label="今治市のスポットマップ"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
        <div className="pointer-events-auto rounded-[24px] bg-white/90 px-4 py-3 shadow-[0_14px_32px_rgba(26,58,74,0.14)] backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/55">
            Real Imabari Map
          </p>
          <div className="mt-1 flex items-center gap-2">
            <MapPinned className="h-4 w-4 text-[#45B7D1]" />
            <p className="text-sm font-bold text-[#1a3a4a]">
              {selectedSpot ? selectedSpot.area : "今治市中心部"}
            </p>
          </div>
        </div>
        <div className="pointer-events-auto hidden rounded-[24px] bg-[#1a3a4a]/92 px-4 py-3 text-white shadow-[0_14px_32px_rgba(26,58,74,0.18)] backdrop-blur-md sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Legend
          </p>
          <div className="mt-2 space-y-2">
            {Object.values(levelMeta).map((level) => (
              <div key={level.shortLabel} className="flex items-center gap-2 text-xs">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: level.color }}
                />
                <span>{level.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="rounded-full bg-white/82 px-3 py-2 text-[11px] font-medium text-[#1a3a4a]/62 shadow-[0_12px_28px_rgba(26,58,74,0.16)] backdrop-blur-md">
              Map data: {rasterAttribution}
            </div>
          </div>
          <div className="rounded-[28px] bg-white/88 p-4 shadow-[0_18px_45px_rgba(26,58,74,0.18)] backdrop-blur-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/50">
              Current Focus
            </p>
            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-[#1a3a4a]">
                  {selectedSpot ? selectedSpot.name : "掲載スポットを選択"}
                </p>
                <p className="mt-1 text-sm text-[#1a3a4a]/68">
                  {selectedSpot ? selectedSpot.highlight : "マップ上のピンから選べます。"}
                </p>
              </div>
              <div className="rounded-full bg-[#f8f6f3] px-3 py-2 text-xs font-semibold text-[#1a3a4a]/72">
                {spots.length} spots
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
