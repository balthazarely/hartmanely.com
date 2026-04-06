import { Contact } from "@/components/Elements";
import { ProjectHero, ProjectGrid } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getCategoryPages, getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  heroImage: string;
  projects: ProjectGridItem[];
}

export default function RenewableEnergy({ heroImage, projects }: Props) {
  return (
    <>
      <NextSeo title="Hartman Ely - Renewable Energy" description="" />
      <ProjectHero heading="Renewable Energy" heroImage={heroImage} />
      <ProjectGrid category="renewable-energy" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [categoryPages, projects] = await Promise.all([
    getCategoryPages(),
    getProjectsForGrid("renewable-energy"),
  ]);
  return {
    props: {
      heroImage: categoryPages?.renewableEnergy.heroImage.url ?? "",
      projects,
    },
    revalidate: 60,
  };
};
