import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";

export default function RenewableEnergy() {
  return (
    <>
      <NextSeo title="Hartman Ely - Renewable Energy" description="" />
      <ProjectHero
        heading="Renewable Energy"
        heroImage="/images/community-solar/community-solar-hero.jpg"
      />
      <ProjectGrid category="renewable energy" />
      <Contact />
    </>
  );
}
