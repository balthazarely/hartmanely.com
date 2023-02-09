import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";

export default function Consulting() {
  return (
    <>
      <ProjectHero
        heading="Consulting"
        heroImage="/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-hero.jpg"
      />
      <ProjectGrid category="consulting" />
      <Contact />
    </>
  );
}
