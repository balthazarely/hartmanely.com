import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  projects: ProjectGridItem[];
}

export default function Redevelopment({ projects }: Props) {
  return (
    <>
      <NextSeo title="Hartman Ely - Redevelopment" description="" />
      <ProjectHero
        heading="Redevelopment"
        heroImage="/images/pancratia/pancratia-hero.jpg"
      />
      <ProjectGrid category="redevelopment" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjectsForGrid("redevelopment");
  return { props: { projects }, revalidate: 60 };
};
