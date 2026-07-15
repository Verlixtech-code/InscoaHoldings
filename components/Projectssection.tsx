import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Projects That Speak for Themselves
          </h2>
          <p className="mt-3 text-slate-500 max-w-3xl mx-auto text-sm sm:text-base">
            From national airport infrastructure to power generation and water supply, these are
            projects we&apos;ve delivered, with the contractors, clients and contract values to
            back it up.
          </p>
        </div>

        {/* Grid: 3 columns x 2 rows on desktop, 2 cols on tablet, 1 col on mobile */}
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gridAutoRows: "1fr" }}
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-sm font-medium text-emerald-600 mb-2">
                {project.partyLabel} — {project.partyName}
              </p>
              <h3 className="text-lg font-semibold text-blue-900 leading-snug mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 transition-colors duration-200"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}