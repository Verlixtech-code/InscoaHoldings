import { Construction } from "lucide-react";

export default function ProductSupply() {
  return (
    <div>
      

      <section className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1B4F8C]/10">
            <Construction className="h-10 w-10 text-[#1B4F8C]" />
          </div>

          <h2 className="font-Headings text-4xl font-bold text-gray-900">
            Page Under Construction
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're currently working on this page to bring you detailed
            information about our construction product supply services.
          </p>

          <p className="mt-3 text-gray-500">
            Please check back soon. Thank you for your patience.
          </p>
        </div>
      </section>
    </div>
  );
}