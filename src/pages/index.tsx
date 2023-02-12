import { Contact } from "@/components/Elements";
import {
  HomeBlockTwo,
  HeroLarge,
  HomeBlockMission,
  HomeBlockAbout,
  HomeBlockThree,
} from "@/components/HomeElements";
import { NextSeo } from "next-seo";

const team = [
  {
    name: "James Hartman",
    img: "/headshots/james-hartman.jpg",
    bio: "Jim is one of Colorado's leading experts with historic building redevelopment, urban infill development and renewable energy.",
  },
  {
    name: "Susan Ely",
    img: "/headshots/susan-ely.jpg",
    bio: "Susan is HEI's Business Manager, is in charge of all administrative efforts of the company.",
  },
];

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
      {/* <HomeBlockAbout teamMembers={team} /> */}
      <Contact />
    </>
  );
}
