import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getCategoryPages, getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  heroImage: string;
  projects: ProjectGridItem[];
}

export default function Redevelopment({ heroImage, projects }: Props) {
  return (
    <>
      <NextSeo title="Hartman Ely - Redevelopment" description="" />
      <ProjectHero heading="Redevelopment" heroImage={heroImage} />
      <ProjectGrid category="redevelopment" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [categoryPages, projects] = await Promise.all([
    getCategoryPages(),
    getProjectsForGrid("redevelopment"),
  ]);
  return {
    props: {
      heroImage: categoryPages?.redevelopment.heroImage.url ?? "",
      projects,
    },
    revalidate: 60,
  };
};
