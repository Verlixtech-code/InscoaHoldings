import ContactBanner from "@/components/contactBanner";
import MainHero from "@/components/mainHero";
import ProjectsSection from "@/components/Projectssection";

import Divisions from "@/components/Divisions";

import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <div>
      <main >
        <MainHero /> 
        <Divisions />
        <AboutCard/>
        <ProjectsSection/>
        <ContactBanner
          title = "Have a Project in Mind?"
          description = "Planning an infrastructure investment or looking for an engineering partner with a proven track record? Our team is ready to talk."
 />
      </main>
    </div>
  );
}
