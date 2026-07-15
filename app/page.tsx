import ContactBanner from "@/components/contactBanner";
import MainHero from "@/components/mainHero";
import ProjectsSection from "@/components/Projectssection";

import Divisions from "@/components/Divisions";

import AboutCard from "@/components/AboutCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main >
        <MainHero />
        <Divisions />
        <AboutCard />
        <ProjectsSection />
        <ContactBanner
          title="Have a Project in Mind?"
          description="Planning an infrastructure investment or looking for an engineering partner with a proven track record? Our team is ready to talk."
        />

        <div className="flex justify-center py-10">
          <Image
            src="/Inscoa Logo.png"
            alt="INSCOA"
            width={500}
            height={220}
            className="w-full max-w-lg object-contain"
          />
        </div>
      </main>
    </div>
  );
}
