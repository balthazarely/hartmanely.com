import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";

export default function RenewableEnergy() {
  return (
    <>
      <ProjectHero
        heading="Renewable Energy"
        heroImage="/images/community-solar/community-solar-hero.jpg"
      />
      <ProjectGrid category="renewable energy" />
      <Contact />
    </>
  );
}
