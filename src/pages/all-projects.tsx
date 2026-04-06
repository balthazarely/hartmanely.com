import { Contact } from "@/components/Elements";
import { ProjectGrid, ProjectHero } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  projects: ProjectGridItem[];
}

export default function AllProjects({ projects }: Props) {
  return (
    <>
      <NextSeo
        title="Hartman Ely - Our Projects"
        description="Hartman Ely Investments is a Development and Investment Company that specializes in Sustainable Redevelopment and Renewable Energy."
        openGraph={{ url: "https://hartmanely.com/" }}
      />
      <ProjectHero
        heading="Our Work"
        heroImage="/images/fruitdale/fruitdale-hero.jpg"
      />
      <ProjectGrid category="all" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjectsForGrid();
  return { props: { projects }, revalidate: 60 };
};
