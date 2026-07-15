import ContactBanner from "@/components/contactBanner";
import PageHero from "@/components/pageHero";
import Image from "next/image";

export default function WhatWeDo() {
    return (
        <div className="pt-20">
            <PageHero
                image="/WhatWeDo_Hero_Image.svg"
                title="What We Do"
                description="Four divisions, one standard of delivery, from the first advisory conversation through to construction and supply."
            />







            <ContactBanner
                title="Ready to Work With INSCOA?"
                description="Whichever division fits your project, our team is ready to talk it through."
            />

            <div className="flex justify-center py-10">
                <Image
                    src="/Inscoa Logo.png"
                    alt="INSCOA"
                    width={500}
                    height={220}
                    className="w-full max-w-lg h-auto object-contain"
                />
            </div>
        </div>

        
    )
}