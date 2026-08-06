import ContactBanner from "@/components/contactBanner";
import PageHero from "@/components/pageHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhatWeDo() {
    return (
        <div className="pt-20">
            <PageHero
                image="/WhatWeDo_Hero_Image.svg"
                title="What We Do"
                description="Four divisions, one standard of delivery, from the first advisory conversation through to construction and supply."
            />

                <section className="bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">

        {/* ================= Card 1: Inscoa Consultancy ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            {/* Image */}
            <div className="h-full">
              <Image
                src="/Inscoa Factory.png"
                alt="Inscoa Consultancy"
                width={700}
                height={450}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-Headings text-4xl font-bold text-gray-900">
                Inscoa Consultancy
              </h2>

              <p className="mt-4 text-[15px] font-medium leading-7 text-gray-500">
                Business development and investment advisory for organisations
                building Sri Lanka&apos;s next generation of infrastructure.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-gray-600 text-justify">
                We bring a decade of experience facilitating mega development
                projects in Sri Lanka, liaising with government agencies and
                international construction firms across water treatment,
                power generation, roads, highways and town development. We
                guide foreign investors and companies from first
                documentation through to project proposal.
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-900">
                Services
              </h3>

              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Initial advisory and documentation support
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Regulatory clearance for incorporation of local companies
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Investment facilitation, including fund repatriation support
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Feasibility studies and project preparation
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Preparation and submission of project proposals
                </li>
              </ul>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]">
                Get in Touch About Your Project
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* ================= Card 2: Inscoa Engineering ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            {/* Content (left on this card) */}
            <div className="order-2 lg:order-1">
              <h2 className="font-Headings text-4xl font-bold text-gray-900">
                Inscoa Engineering
              </h2>

              <p className="mt-4 text-[15px] font-medium leading-7 text-gray-500">
                Our forte: turnkey engineering and construction execution
                behind some of Sri Lanka&apos;s most critical infrastructure.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-gray-600 text-justify">
                Inscoa Engineering has played a critical role in improving and
                renovating Sri Lanka&apos;s primary infrastructure, working
                alongside international investors and main contractors on
                projects nationwide. Every client gets direct access to
                senior managerial staff, so communication stays clear from
                start to finish.
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-900">
                Capabilities
              </h3>

              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Electro-mechanical equipment and pipe fitting
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  MEP, fire and building management systems
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Pump and control panel installation
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B4F8C]" />
                  Construction supervision and project execution
                </li>
              </ul>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]">
                View Full Project Portfolio
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Image (right on this card) */}
            <div className="order-1 lg:order-2 h-full">
              <Image
                src="/Inscoa Factory.png"
                alt="Inscoa Engineering"
                width={700}
                height={450}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

          </div>
        </div>

        {/* ================= Card 3: Inscoa Real Estate ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            {/* Image */}
            <div className="h-full">
              <Image
                src="/Inscoa Factory.png"
                alt="Inscoa Real Estate"
                width={700}
                height={450}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-Headings text-4xl font-bold text-gray-900">
                Inscoa Real Estate
              </h2>

              <p className="mt-4 text-[15px] font-medium leading-7 text-gray-500">
                Property and infrastructure development, built with the same
                engineering discipline behind every INSCOA project.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-gray-600 text-justify">
                Inscoa Real Estate is part of INSCOA Holdings&apos;
                diversified portfolio, contributing to property and
                infrastructure development ventures, including housing
                complex development, as part of the group&apos;s broader
                project development activities.
              </p>

              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-[13px] italic leading-6 text-gray-500">
                Source profile has minimal detail here — request proper case
                studies and imagery from the client before launch, rather
                than padding with generic copy.
              </div>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]">
                Get in Touch About Real Estate
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* ================= Card 4: Inscoa Supply & Services ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            {/* Content (left on this card) */}
            <div className="order-2 lg:order-1">
              <h2 className="font-Headings text-4xl font-bold text-gray-900">
                Inscoa Supply &amp; Services
              </h2>

              <p className="mt-4 text-[15px] font-medium leading-7 text-gray-500">
                Trusted import, export and trade sourcing, built on genuine
                relationships with suppliers worldwide.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-gray-600 text-justify">
                Inscoa Supply and Services manages the entire shipping process
                for engineering, construction and industrial products. We
                import steel, piping, electrical equipment and more, and
                export handicrafts, spices and products to markets across
                Asia and Europe.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]">
                  Request a Quote
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-gray-300 px-7 py-3 text-gray-700 transition duration-300 hover:border-[#1B4F8C] hover:text-[#1B4F8C]">
                  View Full Project Portfolio
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Image (right on this card) */}
            <div className="order-1 lg:order-2 h-full">
              <Image
                src="/Inscoa Factory.png"
                alt="Inscoa Supply & Services"
                width={700}
                height={450}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>





            <ContactBanner
                title="Ready to Work With INSCOA?"
                description="Whichever division fits your project, our team is ready to talk it through."
            />

            <div className="flex justify-center py-10">
                <Image
                    src="/Inscoa Logo.png"
                    alt="INSCOA"
                    width={500}
                    height={220}
                    className="w-full max-w-lg h-auto object-contain"
                />
            </div>
        </div>

        
    )
}