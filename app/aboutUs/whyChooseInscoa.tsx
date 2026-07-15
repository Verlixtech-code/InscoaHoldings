import Image from "next/image";

interface whyChooseItem {
    title: string;
    description: string;
    image: string;
}


const WHY_CHOOSE_ITEMS: whyChooseItem[] = [
    {
        title: "Market Insight",
        description: "A deep understanding of the market we operate in, built over years of on-the-ground experience.",
        image: "/Market Insight.svg"
    },
    {
        title: "Industry Knowledge",
        description: "Strong working relationships with sector personnel and ongoing monitoring of activity, so we're positioned to secure business opportunities today and in the future.",
        image: "/Industry Knowledge.svg"
    },
    {
        title: "Integrated Project Management",
        description: "The ability to bring together multiple technical partners so each customer's specific requirements are met.",
        image: "/Integrated Project Management.svg"
    },
    {
        title: "A Trusted Network",
        description: "Solid contacts at every level of the industry, from government agencies to international main contractors.",
        image: "/A Trusted Network.svg"
    }
]

function WhyCooseCard({ title, description, image }: whyChooseItem) {
    return (
        <div className="flex flex-col h-full border border-[#9caed0] rounded-xl p-6 bg-white">
            <h3 className="text-[15px] font-bold text-[#1e293b] mb-3">{title}</h3>
            <p className="text-[13px] text-slate-500 leading-[1.7] mb-8">{description}</p>
            <div className="mt-auto w-full flex justify-center items-end">
                <Image
                    src={image}
                    alt={title}
                    width={220}
                    height={160}
                    className="object-contain max-h-[140px] w-auto"
                />
            </div>
        </div>
    )
}

export default function WhyChooseInscoa() {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-[32px] md:text-[36px] font-bold text-center mb-3 text-[#1e293b]">
                    Why Clients Choose INSCOA
                </div>
                <div className="text-[14px] md:text-[15px] text-center text-slate-500 mb-10 max-w-3xl mx-auto font-medium">
                    Our edge comes from four things we never compromise on:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {WHY_CHOOSE_ITEMS.map((item) => (
                        <WhyCooseCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}