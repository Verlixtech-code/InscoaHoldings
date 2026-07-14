import { ArrowRight, Phone } from "lucide-react";

interface ContactBannerProps {
  title?: string;
  description?: string;
}

const ContactBanner = ({
  title = "Have a Project in Mind?",
  description = "Planning an infrastructure investment or looking for an engineering partner with a proven track record? Our team is ready to talk.",
}: ContactBannerProps) => {

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="mx-auto max-w-7xl rounded-3xl bg-blue-900 px-6 py-14 sm:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h2>
        <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">{description}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-18">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-900 font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            Contact INSCOA
            <ArrowRight className="w-4 h-4" />
          </button>

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