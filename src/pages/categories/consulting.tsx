import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";

export default function Consulting() {
  return (
    <>
      <NextSeo title="Hartman Ely - Consulting" description="" />
      <ProjectHero
        heading="Consulting"
        heroImage="/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-hero.jpg"
      />
      <ProjectGrid category="consulting" />
      <Contact />
    </>
  );
}
