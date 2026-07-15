import PageHero from "@/components/pageHero";
import WhyChooseInscoa from "./whyChooseInscoa";

export default function AboutUsPage() {
    return (
        <div className="pt-20">
            <PageHero
                image="/AboutUs_Hero_Image.svg"
                title="About INSCOA Holdings"
                description="A Sri Lankan engineering and construction group built on trust, technical expertise and long-standing relationships with government agencies and international partners."
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-5xl font-bold mb-8 text-center">
                    Our Story
                </div>
                <div className="space-y-6 text-center">
                    <p className="text-lg text-gray-600 ">INSCOA Holdings has built a reputation as one of Sri Lanka's most accomplished corporations, active across project development, engineering and construction management, real estate and property development, import-export and manufacturing, and distribution.</p>
                    <p className="text-lg text-gray-600 ">We've operated in Sri Lanka for over a decade under a professional management team, and that experience gives us a solid understanding of the local business environment. Our people are our edge: we place real emphasis on analytical insight and innovative practice in everything we deliver.</p>
                    <p className="text-lg text-gray-600 ">Today, INSCOA Holdings is the parent company to a growing group of businesses spanning diverse industries. That track record has earned the confidence of international investors, and we're proud of the collaborative ventures we've built with foreign firms from North America, South Africa, the Middle East, Europe and East Asia. Our goal is simple: to become the most sought-after business partner in Sri Lanka for strategic investment ventures.</p>
                </div>
            </div>

            <WhyChooseInscoa/>

            

        </div>
    )
}