import Image from "next/image";

type InscoaLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export default function InscoaLogo({
  className = "h-auto w-48 sm:w-64 md:w-80 lg:w-[500px] object-contain",
  width = 500,
  height = 220,
  alt = "INSCOA",
}: InscoaLogoProps) {
  return (
    <div className="flex justify-center px-4 py-8">
      <Image
        src="/Inscoa Logo.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}
