"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const divisions = [
  {
    title: "Inscoa Consultancy",
    description:
      "Business development, project facilitation and investment advisory for local and international clients.",
  },
  {
    title: "Inscoa Engineering",
    description:
      "Electro-mechanical installation, pipe fitting, MEP and turnkey construction execution.",
  },
  {
    title: "Inscoa Real Estate",
    description:
      "Property and infrastructure development ventures across Sri Lanka.",
  },
  {
    title: "Inscoa Supply & Services",
    description:
      "Trusted import/export sourcing across engineering, construction and industrial products.",
  },
];

export default function Divisions() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % divisions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f7f8fb] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-Headings text-4xl font-bold text-gray-900">
            Four Divisions. One Standard of Excellence.
          </h2>

          <p className="mt-3 text-gray-500">
            Each division has its own specialist focus, but all four operate to
            the same standard of quality, transparency and delivery.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-4  ">
          {divisions.map((division, index) => (
            <Card    key={index} division={division} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="overflow-hidden lg:hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {divisions.map((division, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card division={division} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {divisions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition ${
                  current === index
                    ? "bg-[#1B4F8C] w-6"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ division }: { division: (typeof divisions)[0] }) {
  return (
    <div className="mx-2 rounded-xl border border-blue-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">
        {division.title}
      </h3>

      <p className="min-h-[80px] text-sm leading-6 text-gray-500">
        {division.description}
      </p>

      {/* <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B4F8C] py-3 text-sm font-medium text-white transition hover:bg-[#173f77]">
        Learn more
        <ArrowRight size={16} />
      </button> */}
    </div>
  );
}