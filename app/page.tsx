import Aboutsection from "@/components/AboutSection";
import NavbarSection from "@/components/NavbarSection";

import ProjectSection from "@/components/projectSection";
import SkillSection from "@/components/SkillSection";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <NavbarSection />
      <Aboutsection/>
      <ProjectSection />
      <SkillSection />

      
      
      
      
      <h1>My portfolio</h1>
    </div>
  );
}
