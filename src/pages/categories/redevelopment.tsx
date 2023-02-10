import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";

export default function Redevelopment() {
  return (
    <>
      <NextSeo title="Hartman Ely - Redevelopment" description="" />
      <ProjectHero
        heading="Redevelopment"
        heroImage="/images/pancratia/pancratia-hero.jpg"
      />
      <ProjectGrid category="redevelopment" />
      <Contact />
    </>
  );
}
