import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  projects: ProjectGridItem[];
}

export default function RenewableEnergy({ projects }: Props) {
  return (
    <>
      <NextSeo title="Hartman Ely - Renewable Energy" description="" />
      <ProjectHero
        heading="Renewable Energy"
        heroImage="/images/community-solar/community-solar-hero.jpg"
      />
      <ProjectGrid category="renewable-energy" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjectsForGrid("renewable-energy");
  return { props: { projects }, revalidate: 60 };
};
