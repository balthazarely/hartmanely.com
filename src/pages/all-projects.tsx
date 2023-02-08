import { Contact } from "@/components/Elements";
import { HomeBlockAbout } from "@/components/HomeElements";
import { Container } from "@/components/LayoutComponents";
import { ProjectGrid, ProjectHero } from "@/components/ProjectsElements";

export default function AllProjects() {
  return (
    <>
      <ProjectHero />
      <ProjectGrid />
      <Contact />
    </>
  );
}
