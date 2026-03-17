import Link from "next/link";
import { ArrowLeft, Navigation, Route, Sparkles } from "lucide-react";

import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursePage() {
  return (
    <>
      <section className="rounded-[34px] bg-white/82 p-6 shadow-[0_22px_52px_rgba(26,58,74,0.10)] backdrop-blur-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#1a3a4a]/6 px-3 py-2 text-sm font-semibold text-[#1a3a4a]"
        >
          <ArrowLeft className="h-4 w-4" />
          マップへ戻る
        </Link>
        <div className="mt-5 space-y-4">
          <div className="inline-flex rounded-full border border-[#4ECDC4]/20 bg-[#4ECDC4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]">
            Recommended Routes
          </div>
          <div className="space-y-3">
            <h1 className="text-[2rem] font-black leading-tight text-[#1a3a4a]">
              犬連れ旅のペースで選べる
              <br />
              今治のおさんぽコース
            </h1>
            <p className="text-sm leading-7 text-[#1a3a4a]/72">
              目的地を増やしすぎず、景色と休憩のバランスで組んだコースです。
              「短時間で今治らしさを感じたい」「海辺でゆっくりしたい」
              「一泊前提で無理なく回りたい」を切り分けています。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[24px] bg-[#f8f6f3] p-4">
              <Route className="h-5 w-5 text-[#45B7D1]" />
              <p className="mt-3 text-sm font-semibold text-[#1a3a4a]">
                目的別に選べる
              </p>
            </div>
            <div className="rounded-[24px] bg-[#f8f6f3] p-4">
              <Navigation className="h-5 w-5 text-[#45B7D1]" />
              <p className="mt-3 text-sm font-semibold text-[#1a3a4a]">
                車旅の途中にも合う
              </p>
            </div>
            <div className="rounded-[24px] bg-[#f8f6f3] p-4">
              <Sparkles className="h-5 w-5 text-[#FF9F43]" />
              <p className="mt-3 text-sm font-semibold text-[#1a3a4a]">
                写真も休憩も両立
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </>
  );
}
