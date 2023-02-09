import { Contact } from "@/components/Elements";
import { ProjectGrid, ProjectHero } from "@/components/ProjectsElements";
import { NextSeo } from "next-seo";

export default function AllProjects() {
  const seo = {
    title: "Hartman Ely - Our Projects",
    description:
      "Hartman Ely Investments is a Development and Investment Company that specializes in Sustainable Redevelopment and Renewable Energy. ",
  };

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          ...seo,
          url: "https://hartmanely.com/",
          // images: [
          //   {
          //     url: "https://hellotonic.com/images/photos/retreat.jpg",
          //     width: 1000,
          //     height: 667,
          //     alt: seo.title,
          //   },
          // ],
        }}
      />
      <ProjectHero
        heading="Our Work"
        heroImage="/images/fruitdale/fruitdale-hero.jpg"
      />
      <ProjectGrid category="all" />
      <Contact />
    </>
  );
}
