import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface ContactBannerProps {
  title?: string;
  description?: string;
}

const ContactBanner = ({ title,description }: ContactBannerProps) => {

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#1B4F8C] px-6 py-14 sm:px-12 flex justify-center flex-col items-center  ">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-3xl text-center">{title}</h2>
        <p className="mt-4 text-sm sm:text-base text-blue-100 mx-auto text-center max-w-4xl">{description}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-18">
          <Link  href="/contactUs">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-900 font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            Contact INSCOA
            <ArrowRight className="w-4 h-4" />
          </button>
          </Link>

          <div className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-100 transition-colors duration-200">
            <Phone className="w-4 h-4" />
            Call +94 77 235 7071
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;