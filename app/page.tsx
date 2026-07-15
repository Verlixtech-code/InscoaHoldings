import ContactBanner from "@/components/contactBanner";
import MainHero from "@/components/mainHero";
import ProjectsSection from "@/components/Projectssection";

import Divisions from "@/components/Divisions";

import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <div>
      <main >
       <div >
        Hello world
        <Divisions />
        <AboutCard/>
       </div>
       <MainHero /> 
       <ProjectsSection/>
       <ContactBanner />
      </main>
    </div>
  );
}
