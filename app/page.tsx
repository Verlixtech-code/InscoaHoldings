import ContactBanner from "@/components/contactBanner";
import MainHero from "@/components/mainHero";
import ProjectsSection from "@/components/Projectssection";

export default function Home() {
  return (
    <div>
      <main >
       <MainHero /> 
       <ProjectsSection/>
       <ContactBanner />
      </main>
    </div>
  );
}
