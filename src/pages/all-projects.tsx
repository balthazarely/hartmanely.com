import { Contact } from "@/components/Elements";
import { ProjectGrid, ProjectHero } from "@/components/ProjectsElements";

export default function AllProjects() {
  return (
    <>
      <ProjectHero
        heading="Our Work"
        heroImage="/images/fruitdale/fruitdale-hero.jpg"
      />
      <ProjectGrid category="all" />
      <Contact />
    </>
  );
}
