import { ArrowRight, Clock3, Footprints, Sparkles } from "lucide-react";

import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="rounded-[30px] border border-white/65 bg-white/88 p-6 shadow-[0_18px_45px_rgba(26,58,74,0.10)] backdrop-blur-md">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <span className="inline-flex rounded-full bg-[#4ECDC4]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1a3a4a]">
            {course.area}
          </span>
          <h3 className="text-2xl font-bold text-[#1a3a4a]">{course.title}</h3>
          <p className="text-sm leading-6 text-[#1a3a4a]/72">{course.description}</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF9F43]/12">
          <Sparkles className="h-5 w-5 text-[#FF9F43]" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-[24px] bg-[#f8f6f3] px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#1a3a4a]">
            <Clock3 className="h-4 w-4 text-[#45B7D1]" />
            {course.duration}
          </div>
          <p className="mt-2 text-xs leading-5 text-[#1a3a4a]/55">
            ペース: {course.pace}
          </p>
        </div>
        <div className="rounded-[24px] bg-[#f8f6f3] px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#1a3a4a]">
            <Footprints className="h-4 w-4 text-[#45B7D1]" />
            {course.distance}
          </div>
          <p className="mt-2 text-xs leading-5 text-[#1a3a4a]/55">
            {course.bestFor}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-[24px] bg-[#1a3a4a] px-4 py-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Route Highlight
        </p>
        <p className="mt-2 text-sm font-semibold leading-6">{course.highlight}</p>
      </div>

      <div className="mt-5 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a4a]/50">
          Stops
        </p>
        <div className="space-y-2">
          {course.stops.map((stop, index) => (
            <div
              key={stop}
              className="flex items-center gap-3 rounded-[20px] border border-[#1a3a4a]/8 bg-white px-4 py-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a3a4a] text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="min-w-0 flex-1 text-sm font-semibold text-[#1a3a4a]">
                {stop}
              </p>
              {index < course.stops.length - 1 ? (
                <ArrowRight className="h-4 w-4 shrink-0 text-[#1a3a4a]/35" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
