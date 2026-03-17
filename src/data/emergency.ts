import type { EmergencyChecklist, EmergencyHotline } from "@/types";

export const emergencyHotlines: EmergencyHotline[] = [
  {
    id: "ambulance",
    label: "119",
    number: "119",
    title: "人の救急・火災",
    description:
      "人の体調不良、交通事故、意識障害、熱中症など迷ったら最優先で連絡する番号です。",
    availability: "24時間",
  },
  {
    id: "police",
    label: "110",
    number: "110",
    title: "交通事故・迷子・トラブル",
    description:
      "接触事故、危険運転、迷子、周囲とのトラブルなど安全確保が先のときに使います。",
    availability: "24時間",
  },
];

export const emergencyChecklists: EmergencyChecklist[] = [
  {
    id: "first-action",
    title: "最初の3分でやること",
    items: [
      "人と犬を車道や人混みから外し、安全な場所へ移動する",
      "呼吸、歩き方、出血の有無、熱さのサインを落ち着いて確認する",
      "無理に移動を続けず、必要なら旅程を一度止める",
    ],
  },
  {
    id: "before-call",
    title: "連絡前に手元へ揃える情報",
    items: [
      "現在地が伝わる目印や施設名",
      "症状が出始めた時間ときっかけ",
      "体重、持病、服薬、ワクチン状況",
    ],
  },
  {
    id: "go-bag",
    title: "持っておくと動きやすいもの",
    items: [
      "飲み水と小さなボウル",
      "タオル、マナー袋、替えのリード",
      "保険証券の写真、かかりつけ情報のメモ",
    ],
  },
];
