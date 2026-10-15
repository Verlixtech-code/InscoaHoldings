import ContactBanner from "@/components/contactBanner";
import MainHero from "@/components/mainHero";
import ProjectsSection from "@/components/Projectssection";
import TrustedBy from "@/components/TrustedBy";

import Divisions from "@/components/Divisions";

import AboutCard from "@/components/AboutCard";
import VisionMission from "@/components/visionMission";
import InscoaLogo from "@/components/InscoaLogo";

export default function Home() {
  return (
    <div>
      <main >
        <MainHero />
        <Divisions />
        <AboutCard />
        <VisionMission/>
        <ProjectsSection />
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h3 className="font-Headings text-2xl font-semibold text-gray-900 sm:text-3xl">
                Trusted By Global and Local Leaders
              </h3>
              <p className="mt-3 mx-auto max-w-3xl text-sm text-gray-500 sm:text-base">
                We work alongside internationally recognised manufacturers, technology providers and
                main contractors to deliver every project to standard.
              </p>
            </div>
            <TrustedBy includePartnerLogos />
          </div>
        </section>
        <ContactBanner
          title="Have a Project in Mind?"
          description="Planning an infrastructure investment or looking for an engineering partner with a proven track record? Our team is ready to talk."
        />

         <InscoaLogo />
      </main>
    </div>
  );
}
