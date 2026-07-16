import ContactBanner from "@/components/contactBanner";
import PageHero from "@/components/pageHero";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div  className="pt-20">
      <PageHero
        image="/Project_Hero_Image.svg"
        title="Our Projects"
        description="A record of the infrastructure and supply work INSCOA Holdings has delivered for government agencies, state institutions and international main contractors across Sri Lanka."
      />

      <ContactBanner
        title="Have a Project of This Scale?"
        description="Our engineering and supply teams are ready to bring the same rigour to your next project."
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
    </div>
  );
}
