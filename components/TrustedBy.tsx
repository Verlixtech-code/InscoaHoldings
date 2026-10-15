import Image from "next/image";

const logos: string[] = [
  "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp",
  "10.webp", "11.webp", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png",
  "19.png", "20.png", "21.jpg", "22.png", "23.jpg", "24.jpg", "25.jpg", "26.png", "27.jpg",
  "28.jpg", "29.png", "30.png",
];

export default function TrustedBy() {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="font-Headings text-2xl font-semibold text-gray-900 sm:text-3xl">
          Trusted By Global and Local Leaders
        </h3>
        <p className="mt-3 mx-auto max-w-3xl text-sm text-gray-500 sm:text-base">
          We work alongside internationally recognised manufacturers, technology providers and
          main contractors to deliver every project to standard.
        </p>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((file, index) => (
          <div
            key={file}
            className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-shadow duration-200 hover:shadow-md sm:h-28"
          >
            <Image
              src={`/Supply & Services/${file}`}
              alt={`Partner logo ${index + 1}`}
              width={160}
              height={80}
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
