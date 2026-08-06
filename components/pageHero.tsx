import Image from "next/image";

interface pageHeroProps {
    image : string;
    title: string;
    description : string;
}

export default function PageHero({image,title,description}:pageHeroProps) {
    return (
        <div className="relative w-full h-[345px]">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <div className="text-4xl md:text-5xl font-bold">
                    {title}
                </div>
                <div className="text-md md:text-lg mt-4 max-w-4xl">
                    {description}
                </div>
            </div>
        </div>
    )
}