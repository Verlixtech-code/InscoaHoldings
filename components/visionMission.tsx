export default function VisionMission() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 rounded-2xl p-8 bg-[#1B4C7E] text-white">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="h-[2px] w-8 bg-[#E8964A]" />
                        <h3 className="text-xl font-bold">Our Vision</h3>
                    </div>
                    <p className="text-base leading-relaxed text-white/90">
                        To be recognized as Sri Lanka&apos;s foremost professional project management, consultancy and infrastructure advisory company. Specializing in financial planning, detailed designing, contract management, construction supervision and EPC Construction, and Turnkey Engineering Services.
                    </p>
                </div>

                <div className="flex-1 rounded-2xl p-8 bg-white text-[#1B4C7E] border border-[#1B4C7E]/30">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="h-[2px] w-8 bg-[#E8964A]" />
                        <h3 className="text-xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                        To create consistent value for our customers and supply chain partners, through our professional human resource capabilities & experience, upholding the highest ethical standards, in the best interests of the communities we serve.
                    </p>
                </div>
            </div>
        </div>
    );
}