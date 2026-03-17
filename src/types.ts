export type CertificationLevel = 1 | 2 | 3;

export type SpotCategory = "rest" | "park" | "cafe" | "view" | "stay";

export type SpotCategoryFilter = SpotCategory | "all";

export type LevelFilter = CertificationLevel | "all";

export interface Spot {
  id: string;
  name: string;
  area: string;
  category: SpotCategory;
  level: CertificationLevel;
  summary: string;
  description: string;
  highlight: string;
  address: string;
  recommendedTime: string;
  note: string;
  tags: string[];
  amenities: string[];
  latitude: number;
  longitude: number;
}

export interface Course {
  id: string;
  title: string;
  area: string;
  duration: string;
  distance: string;
  pace: string;
  description: string;
  highlight: string;
  bestFor: string;
  stops: string[];
}

export interface EmergencyHotline {
  id: string;
  label: string;
  number: string;
  title: string;
  description: string;
  availability: string;
}

export interface EmergencyChecklist {
  id: string;
  title: string;
  items: string[];
}
