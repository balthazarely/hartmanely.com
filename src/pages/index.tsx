import { Contact } from "@/components/Elements";
import {
  HomeBlockTwo,
  HeroLarge,
  HomeBlockMission,
  HomeBlockThree,
} from "@/components/HomeElements";
import { NextSeo } from "next-seo";


export default function Home(): JSX.Element {
  const seo = {
    title: "Hartman Ely Investments",
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
          images: [
            {
              url: "https://hartmanely.com/images/fruitdale/fruitdale-hero.jpg",
              width: 1000,
              height: 667,
              alt: seo.title,
            },
          ],
        }}
      />
      <HeroLarge />
      <HomeBlockMission />
      <HomeBlockTwo />
      <HomeBlockThree />
      <Contact />
    </>
  );
}
