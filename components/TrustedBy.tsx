import Image from "next/image";

const logos: string[] = [
  "image 52.svg",
  "image 42.svg",
  "image 43.svg",
  "image 49.svg",
  "image 45.svg",
  "image 33.svg",
  "image 48.svg",
  "image 44.svg",
  "image 51.svg",
  "image 53.svg",
  "image 54.svg",
  "image 55.svg",
  "image 56.svg",
  "image 57.svg",
];

export default function TrustedBy() {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted By Global and Local Leaders
          </h2>
          <p className="mt-3 text-slate-500 max-w-3xl mx-auto text-sm sm:text-base">
            We work alongside internationally recognised manufacturers, technology providers and
            main contractors to deliver every project to standard.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {logos.map((file, index) => (
            <div
              key={file}
              className="flex items-center justify-center h-24 sm:h-28 rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md transition-shadow duration-200"
            >
              <Image
                src={`/logos/${file}`}
                alt={`Partner logo ${index + 1}`}
                width={120}
                height={60}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
