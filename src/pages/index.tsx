import { Contact } from "@/components/Elements";
import {
  HomeBlockTwo,
  HeroLarge,
  HomeBlockMission,
  HomeBlockThree,
} from "@/components/HomeElements";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { getHomePage, HomePage } from "@/lib/payload";

interface Props {
  page: HomePage;
}

export default function Home({ page }: Props): JSX.Element {
  return (
    <>
      <NextSeo
        title={page.meta?.title || "Hartman Ely Investments"}
        description={page.meta?.description || ""}
        openGraph={{
          title: page.meta?.title || "Hartman Ely Investments",
          description: page.meta?.description || "",
          url: "https://hartmanely.com/",
          images: [
            {
              url: page.hero.image.url,
              alt: page.hero.heading,
            },
          ],
        }}
      />
      <HeroLarge
        image={page.hero.image.url}
        eyebrow={page.hero.eyebrow}
        heading={page.hero.heading}
        ctaLabel={page.hero.ctaLabel}
        ctaLink={page.hero.ctaLink}
      />
      <HomeBlockMission statement={page.mission.statement} />
      <HomeBlockTwo
        image={page.about.image.url}
        heading={page.about.heading}
        body={page.about.body}
      />
      <HomeBlockThree categories={page.portfolio.categories.map((cat) => ({
        image: cat.image.url,
        heading: cat.heading,
        body: cat.body,
        link: cat.link,
      }))} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page = await getHomePage();
  if (!page) return { notFound: true };
  return { props: { page }, revalidate: 60 };
};
