import ContactBanner from "@/components/contactBanner";
import PageHero from "@/components/pageHero";
import ProjectsSection from "@/components/Projectssection";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <PageHero
        image="/Project_Hero_Image.svg"
        title="Our Projects"
        description="A record of the infrastructure and supply work INSCOA Holdings has delivered for government agencies, state institutions and international main contractors across Sri Lanka."
      />


      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
                <p className="text-sm text-slate-500 leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        title="Have a Project of This Scale?"
        description="Our engineering and supply teams are ready to bring the same rigour to your next project."
      />

      <div className="flex justify-center py-10">
        <Image
          src="/Inscoa Logo.png"
          alt="INSCOA"
          width={500}
          height={220}
          className="w-full max-w-lg object-contain"
        />
      </div>

      
    </div>
  );
}
