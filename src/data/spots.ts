import type { CertificationLevel, Spot, SpotCategory } from "@/types";

export const mapConfig = {
  center: [132.9982, 34.0663] as [number, number],
  zoom: 12.9,
  bounds: [
    [132.944, 34.031],
    [133.072, 34.144],
  ] as [[number, number], [number, number]],
};

export const levelMeta: Record<
  CertificationLevel,
  { label: string; shortLabel: string; color: string; description: string }
> = {
  1: {
    label: "Lv.1 ウェルカム",
    shortLabel: "Lv.1",
    color: "#4ECDC4",
    description: "外席や短時間の立ち寄りに向くスポット",
  },
  2: {
    label: "Lv.2 フレンドリー",
    shortLabel: "Lv.2",
    color: "#FF9F43",
    description: "休憩しやすく、滞在時間を取りやすいスポット",
  },
  3: {
    label: "Lv.3 ステイ",
    shortLabel: "Lv.3",
    color: "#FF6B6B",
    description: "長めの滞在や旅の拠点向きのスポット",
  },
};

export const categoryMeta: Record<
  SpotCategory,
  { label: string; description: string }
> = {
  rest: {
    label: "休憩",
    description: "到着直後や移動の合間に寄りやすい場所",
  },
  park: {
    label: "公園",
    description: "歩かせやすく、気分転換しやすい場所",
  },
  cafe: {
    label: "カフェ",
    description: "テラスや海辺でひと息つける場所",
  },
  view: {
    label: "景色",
    description: "今治らしい海風や眺望を味わえる場所",
  },
  stay: {
    label: "滞在",
    description: "旅の拠点として落ち着いて過ごしやすい場所",
  },
};

export const spots: Spot[] = [
  {
    id: "station-welcome",
    name: "今治駅前ウェルカムデッキ",
    area: "駅前",
    category: "rest",
    level: 1,
    summary: "到着後すぐに身支度を整えやすい、待ち合わせ向けの導入スポット。",
    description:
      "駐車場からの動線がわかりやすく、最初の一杯の水分補給やお散歩前の体勢づくりに向いたエリアです。",
    highlight: "最初の5分で迷わない導入地点",
    address: "愛媛県今治市北宝来町1丁目 付近",
    recommendedTime: "10-15分",
    note: "掲載内容は MVP 用のモデル案内です。実地運用時は提携先情報に差し替えられます。",
    tags: ["駅近", "待ち合わせ", "駐車動線が明快"],
    amenities: ["ベンチ", "短時間休憩", "ルート確認"],
    latitude: 34.0666,
    longitude: 132.9978,
  },
  {
    id: "castle-moat",
    name: "今治城お堀さんぽエリア",
    area: "吹揚町",
    category: "park",
    level: 2,
    summary: "お堀沿いを歩きながら、城下町らしい風景をゆっくり楽しめる定番ルート。",
    description:
      "平坦で歩きやすく、街歩きの満足感が出やすいエリアです。初来訪でも今治らしさを感じやすい場所として使えます。",
    highlight: "写真を撮りながら歩ける街中コース",
    address: "愛媛県今治市通町3丁目 付近",
    recommendedTime: "25-40分",
    note: "日差しが強い日は周回を短めにして、海辺エリアと組み合わせると無理がありません。",
    tags: ["城下町", "お堀沿い", "写真映え"],
    amenities: ["平坦路", "回遊しやすい", "景観"],
    latitude: 34.0685,
    longitude: 132.9958,
  },
  {
    id: "harbary-terrace",
    name: "はーばりー海辺テラスエリア",
    area: "片原町",
    category: "cafe",
    level: 2,
    summary: "港の開放感を感じながら、休憩と景色の両方を取りたいときに使いやすい場所。",
    description:
      "海沿いの抜け感があり、短時間でも旅気分が出やすいエリアです。駅前や今治城からつなげやすい位置関係も強みです。",
    highlight: "海風を感じながら休める中継地点",
    address: "愛媛県今治市片原町1丁目100-3 付近",
    recommendedTime: "20-30分",
    note: "時間帯によって風が強く感じられるため、滞在前に様子を見る前提の案内にしています。",
    tags: ["海辺", "休憩", "回遊しやすい"],
    amenities: ["景色", "ベンチ", "ひと息"],
    latitude: 34.0647,
    longitude: 133.003,
  },
  {
    id: "fukiage-green",
    name: "吹揚やわらか芝生スポット",
    area: "吹揚町",
    category: "park",
    level: 1,
    summary: "お散歩の途中に少しペースを落としたいときに便利な、街中の緩衝地帯。",
    description:
      "硬い舗装路が続いたあとでも立ち寄りやすく、短時間だけ様子を見る使い方に向いています。",
    highlight: "コースの合間に呼吸を整える小休止",
    address: "愛媛県今治市吹揚町2丁目 付近",
    recommendedTime: "10-20分",
    note: "広場の使い方はイベント状況で変わる可能性があるため、現地状況優先の案内を想定しています。",
    tags: ["芝生", "小休止", "街中"],
    amenities: ["気分転換", "短時間利用", "見通しが良い"],
    latitude: 34.0669,
    longitude: 132.9944,
  },
  {
    id: "itoyama-breeze",
    name: "サンライズ糸山 しまなみ風待ちスポット",
    area: "糸山",
    category: "view",
    level: 1,
    summary: "しまなみ海道の入口らしい景色を、無理のない滞在時間で味わえる展望寄りの立ち寄り地点。",
    description:
      "ドライブの締めや、海沿いコースのハイライトとして使いやすいロケーションです。市街地から少し足を伸ばす価値があります。",
    highlight: "来島海峡の抜け感を楽しむ締めの一手",
    address: "愛媛県今治市砂場町2丁目8-1 付近",
    recommendedTime: "20-35分",
    note: "風の影響を受けやすいので、滞在時間を短めに設定した UI にしています。",
    tags: ["しまなみ海道", "展望", "ドライブ立ち寄り"],
    amenities: ["眺望", "写真映え", "ドライブ休憩"],
    latitude: 34.1277,
    longitude: 133.0461,
  },
  {
    id: "yunoura-stay",
    name: "湯ノ浦やすらぎステイエリア",
    area: "湯ノ浦",
    category: "stay",
    level: 3,
    summary: "移動の疲れを翌日に持ち越しにくい、宿泊や長めの休憩を想定した旅の拠点。",
    description:
      "高速道路側からもアクセスしやすく、今治観光を一日で詰め込みすぎない使い方に向いたエリアです。",
    highlight: "旅程を詰め込みすぎない拠点設計",
    address: "愛媛県今治市湯ノ浦 付近",
    recommendedTime: "半日-1泊",
    note: "宿泊可否や条件は正式運用時に施設ごとの掲載へ差し替える前提のモデルです。",
    tags: ["長め滞在", "ドライブ拠点", "旅程調整"],
    amenities: ["宿泊想定", "休息", "再出発しやすい"],
    latitude: 34.0868,
    longitude: 133.0276,
  },
];
