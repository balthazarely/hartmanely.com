import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";

export default function Redevelopment() {
  return (
    <>
      <ProjectHero
        heading="Redevelopment"
        heroImage="/images/pancratia/pancratia-hero.jpg"
      />
      <ProjectGrid category="redevelopment" />
      <Contact />
    </>
  );
}
