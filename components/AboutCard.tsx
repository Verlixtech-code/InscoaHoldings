"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutCard() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
        {/* ================= Card 1 ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Yellow Glow */}
          <div className="absolute right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#FFD670]/40 blur-[120px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="font-Headings text-4xl font-bold text-gray-900">
                Building on a Decade of Trust
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-gray-600">
                INSCOA Holdings began operations in 2011 and was formally
                incorporated in 2017. Since then, We've grown into one of Sri
                Lanka's most accomplished multi-sector groups, working across
                project development, engineering, construction, real estate, and
                import-export trade.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                We know the local business and regulatory environment well, and
                our reach goes further too. As the parent company to a growing
                family of businesses, We've earned the confidence of
                international investors and partnered with firms from North
                America, South Africa, the Middle East, Europe and East Asia to
                deliver infrastructure that matters.
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]">
                Learn more about INSCOA
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <Image
                src="/Inscoa Logo.png"
                alt="INSCOA"
                width={500}
                height={220}
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= Card 2 ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-y-1/2  blur-[120px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Image */}

            <div>
              <Image
                src="/Inscoa Factory.png"
                alt="Engineering"
                width={700}
                height={450}
                className="h-70 w-full rounded-2xl object-cover"
              />
            </div>

            {/* Content */}

            <div>
              <h2 className="font-Headings text-4xl font-bold text-gray-900">
                Built to Deliver, Site by Site
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-gray-600 text-justify">
                From wave power installations off the coast to pumping complexes
                inland, our engineering teams work at the scale national
                infrastructure demands. We bring international partners and a
                decade of hands-on delivery experience to every site.
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#1B4F8C] px-7 py-3 text-white transition duration-300 hover:bg-[#163D70]">
                See Our Engineering Work
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
