"use client";

import type { DivisionProject } from "@/data/divisions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface ProjectListProps {
  projects: DivisionProject[];
  pageSize?: number;
}

export default function ProjectList({ projects, pageSize }: ProjectListProps) {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const totalPages = pageSize ? Math.ceil(projects.length / pageSize) : 1;
  const visible = pageSize
    ? projects.slice((page - 1) * pageSize, page * pageSize)
    : projects;

  const goTo = (next: number) => {
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={topRef} className="scroll-mt-28">
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Project pages"
          className="mt-10 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B4F8C] text-white transition hover:bg-[#163D70] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goTo(n)}
              aria-current={n === page ? "page" : undefined}
              className={`h-10 w-10 rounded-lg text-sm font-medium transition ${
                n === page
                  ? "bg-[#1B4F8C] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {String(n).padStart(2, "0")}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B4F8C] text-white transition hover:bg-[#163D70] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: DivisionProject }) {
  return (
    <article className="flex w-full flex-col rounded-xl border border-slate-300 bg-white p-5 transition-shadow duration-200 hover:shadow-md sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
      {project.party && (
        <p className="mb-2 text-xs font-medium text-emerald-600">
          {project.party}
        </p>
      )}
      <h4 className="text-base font-normal leading-snug text-indigo-800">
        {project.title}
      </h4>
      {project.value && (
        <p className="mt-2 text-xs text-slate-500">{project.value}</p>
      )}
    </article>
  );
}
