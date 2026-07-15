import Image from "next/image";

export default function WhyChooseInscoa() {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 md:px-10 py-10">
                <div className="text-xl font-bold text-center">
                    Why Clients Choose INSCOA
                </div>
                <div className="text-base text-center">
                    Our edge comes from four things we never compromise on:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="">
                        <div>
                            <div className="text-lg"> Market Insight</div>
                            <div className="text-base">A deep understanding of the market we operate in, built over years of on-the-ground experience.</div>
                            <Image
                                src="/reliability.svg"
                                alt="Reliability"
                                width={44}
                                height={44}
                            />
                            <div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}