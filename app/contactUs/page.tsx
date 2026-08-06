import ContactBanner from "@/components/contactBanner";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="pt-24 mx-auto max-w-7xl">
      <div className="grid overflow-hidden rounded-3xl border border-gray-200 shadow-sm lg:grid-cols-2 lg:max-h-[450px]">
        {/* Map */}
        <div className="h-80 w-full lg:h-auto lg:max-h-[450px]">
          <iframe
            src="https://www.google.com/maps?q=Parakandeniya+Road,+Sri+Lanka&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:px-12">
          <h2 className="font-Headings text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-gray-600">
            Whether you&apos;re exploring an infrastructure investment, need a
            CIDA-registered engineering partner, or are sourcing construction
            products — our team is ready to help.
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {/* Phone */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 px-5 py-2 transition duration-300 hover:border-[#1B4F8C] md:max-w-[400px]">
              <Phone size={18} className="shrink-0 text-gray-900" />
              <div className="text-[14px] leading-6 text-gray-800">
                <p>+94 11 297 2770</p>
                <p>+94 77 235 7071</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 px-5 py-2 transition duration-300 hover:border-[#1B4F8C] md:max-w-[400px]">
              <Mail size={18} className="shrink-0 text-gray-900" />
              <div className="text-[14px] leading-6 text-gray-800">
                <p>hasinthahh@gmail.com</p>
                <p>inscoaa@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 px-5 py-2 transition duration-300 hover:border-[#1B4F8C] md:max-w-[400px]">
              <MapPin size={18} className="shrink-0 text-gray-900" />
              <div className="text-[14px] leading-6 text-gray-800">
                <p>72/10/15, Parakandeniya Road, Pahala Imbulgoda,</p>
                <p>Imbulgoda, Gampaha, Sri Lanka. 11856.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactBanner
        title="Ready to Start the Conversation?"
        description="Tell us what you're working on and we'll get back to you within one business day."
      />

      
    </div>
  );
}
