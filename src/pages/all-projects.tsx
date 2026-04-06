import { Contact } from "@/components/Elements";
import { ProjectGrid, ProjectHero } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getCategoryPages, getProjectsForGrid, ProjectGridItem } from "@/lib/payload";

interface Props {
  heroImage: string;
  projects: ProjectGridItem[];
}

export default function AllProjects({ heroImage, projects }: Props) {
  return (
    <>
      <NextSeo
        title="Hartman Ely - Our Projects"
        description="Hartman Ely Investments is a Development and Investment Company that specializes in Sustainable Redevelopment and Renewable Energy."
        openGraph={{ url: "https://hartmanely.com/" }}
      />
      <ProjectHero heading="Our Work" heroImage={heroImage} />
      <ProjectGrid category="all" projects={projects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [categoryPages, projects] = await Promise.all([
    getCategoryPages(),
    getProjectsForGrid(),
  ]);
  return {
    props: {
      heroImage: categoryPages?.allProjects?.heroImage?.url ?? "",
      projects,
    },
    revalidate: 60,
  };
};
