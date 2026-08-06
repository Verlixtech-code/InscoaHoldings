import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MainHero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <Image
        src="/mainHero.svg"
        alt="Main Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Engineering Sri Lanka's
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Infrastructure Future
        </h2>
        <p className="mt-6 text-lg max-w-3xl text-gray-200">
          INSCOA Holdings is a CIDA-registered engineering, construction and
          project development group. We deliver water, power, transport and
          infrastructure solutions across Sri Lanka in partnership with leading
          international firms.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 text-lg">
          <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link href="/projects" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg transition duration-300">
            View Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
