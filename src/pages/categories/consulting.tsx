import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  projects: ProjectGridItem[];
}

export default function Consulting({ projects }: Props) {
  return (
    <>
      <NextSeo title="Hartman Ely - Consulting" description="" />
      <ProjectHero
        heading="Consulting"
        heroImage="/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-hero.jpg"
      />
      <ProjectGrid category="consulting" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjectsForGrid("consulting");
  return { props: { projects }, revalidate: 60 };
};
