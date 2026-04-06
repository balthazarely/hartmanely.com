import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getCategoryPages, getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  heroImage: string;
  projects: ProjectGridItem[];
}

export default function Consulting({ heroImage, projects }: Props) {
  return (
    <>
      <NextSeo title="Hartman Ely - Consulting" description="" />
      <ProjectHero heading="Consulting" heroImage={heroImage} />
      <ProjectGrid category="consulting" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [categoryPages, projects] = await Promise.all([
    getCategoryPages(),
    getProjectsForGrid("consulting"),
  ]);
  return {
    props: {
      heroImage: categoryPages?.consulting.heroImage.url ?? "",
      projects,
    },
    revalidate: 60,
  };
};
