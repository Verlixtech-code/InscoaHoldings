import ContactBanner from "@/components/contactBanner";
import InscoaLogo from "@/components/InscoaLogo";
import PageHero from "@/components/pageHero";
import PartnersMarquees from "@/components/partnersMarquees";
import ProjectList from "@/components/ProjectList";
import { divisions, getDivision } from "@/data/divisions";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function WhatWeDo({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { division: param } = await searchParams;
  const division = getDivision(Array.isArray(param) ? param[0] : param);

  return (
    <div className="pt-20">
      <PageHero
        image="/WhatWeDo_Hero_Image.svg"
        title={division.heroTitle}
        description="Four divisions, one standard of delivery, from the first advisory conversation through to construction and supply."
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Tabs */}
          <nav
            aria-label="Divisions"
            className="mb-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-2"
          >
            {divisions.map((d) => {
              const active = d.slug === division.slug;
              return (
                <Link
                  key={d.slug}
                  href={`/whatWeDo?division=${d.slug}`}
                  scroll={false}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 px-3 py-3 text-center text-sm transition-colors sm:px-4 ${
                    active
                      ? "border-[#1B4F8C] font-semibold text-[#1B4F8C]"
                      : "border-transparent text-gray-600 hover:text-[#1B4F8C]"
                  }`}
                >
                  {d.tabLabel}
                </Link>
              );
            })}
          </nav>

          {/* Overview card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-8">
            <Image
              src="/Inscoa Factory.png"
              alt={division.heading}
              width={1200}
              height={450}
              className="h-56 w-full rounded-2xl object-cover sm:h-80 lg:h-[420px]"
              priority
            />

            <div className="mx-auto mt-8 max-w-5xl text-center">
              <h2 className="font-Headings text-3xl font-bold text-gray-900 sm:text-4xl">
                {division.heading}
              </h2>

              <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-600">
                {division.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <Link
                href="/contactUs"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]"
              >
                {division.ctaLabel}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Services (Consultancy) */}
          {division.services && (
            <div className="mt-10 grid items-start gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
              <div>
                <p className="text-lg font-medium text-gray-900">
                  {division.services.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {division.services.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-gray-600"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-[15px] leading-7 text-gray-700">
                {division.services.highlight}
              </div>
            </div>
          )}

          {/* Extra sections (Supply & Services) */}
          {division.sections?.map((section) => (
            <div
              key={section.heading}
              className="mt-10 grid items-center gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2"
            >
              <div>
                <h3 className="font-Headings text-2xl font-bold text-gray-900">
                  {section.heading}
                </h3>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-600">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <Image
                src="/Import-Export img.webp"
                alt={section.heading}
                width={700}
                height={450}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          ))}

          {/* Project list */}
          {division.projects && (
            <div className="mt-14">
              <h3 className="text-center font-Headings text-2xl font-semibold text-gray-900 sm:text-3xl">
                List of Projects {division.tabLabel}
              </h3>
              <ProjectList
                key={division.slug}
                projects={division.projects}
                pageSize={division.slug === "engineering" ? 14 : undefined}
              />
            </div>
          )}
        </div>
      </section>

      <div className="px-5 md:pt-4 text-center sm:px-8 lg:px-12">
        <h2 className="font-Headings text-2xl font-semibold text-gray-900 md:text-3xl ">
          Key Associated Partners
        </h2>
      </div>
      <PartnersMarquees />

      <ContactBanner
        title="Ready to Work With INSCOA?"
        description="Whichever division fits your project, our team is ready to talk it through."
      />

      <InscoaLogo />
    </div>
  );
}
