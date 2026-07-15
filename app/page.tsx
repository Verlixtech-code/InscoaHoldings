import Image from "next/image";

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
      </main>
    </div>
  );
}
