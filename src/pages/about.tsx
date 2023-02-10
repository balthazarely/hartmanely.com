import { ProjectHero } from "@/components/ProjectsElements";
import React from "react";
import { Container } from "@/components/LayoutComponents";
import { HomeBlockAbout } from "@/components/HomeElements";
import { Contact } from "@/components/Elements";
import { NextSeo } from "next-seo";
import clsx from "clsx";
import styles from "./About.module.scss";

export default function About() {
  const seo = {
    title: "About Hartman Ely ",
    description:
      "Hartman Ely Investments is a Development and Investment Company that specializes in Sustainable Redevelopment and Renewable Energy. ",
  };

  interface PersonProps {
    name: string;
    img: string;
    bio: string;
  }

  const team = [
    {
      name: "James Hartman",
      img: "/headshots/james-hartman.jpg",
      bio: "Jim is one of Colorado’s leading experts with historic building redevelopment, urban infill development and renewable energy. He received his architectural degree from University of Virginia in 1980 and practiced in Colorado for many years. His passion is creating sustainable communities that respect their historical roots and enhance their neighborhoods.",
    },
    {
      name: "Susan Ely",
      img: "/headshots/susan-ely.jpg",
      bio: "Susan Ely grew up in Australia and moved to Colorado in 1993. She received her architectural degree in 1986 from the University of Melbourne, Australia and practiced in Australia for several years. Susan is HEI's Business Manager and is in charge of all administrative efforts of the company.",
    },
  ];

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
        heading="About"
        heroImage="/images/pancratia/pancratia-gallery-11.jpg"
      />
      <Container noPadding={true} className="pt-10">
        <div className="mx-auto mb-2 grid  grid-cols-1 gap-8 pb-2">
          <div className="col-span-2">
            <h1 className="mt-2">Historic Buildings are our Passion</h1>
            <h4 className="mb-4 mt-4">
              Founded in 2000 by Jim Hartman and Susan Ely, Hartman Ely
              Investments is one of the most respected historic redevelopment
              firms in Colorado.
            </h4>
            <p className="mb-2">
              We are a development and investment company that specializes in
              redevelopment and renewable energy. Our related company, Hartman
              Ely Architecture provides design services for our developments.
            </p>
            <p className="mb-2">
              In addition, we have extensive experience with transit oriented
              and environmentally responsible, sustainable development. A major
              force behind all our work is a passion to help mitigate global
              climate change and to help communities become more energy
              independent
            </p>
            <p className="mb-2">
              A key part of our business philosophy is strategic partnerships
              with other firms to form a uniquely qualified team for each
              development opportunity. This partnership approach allows Jim and
              Susan’s extensive involvement in each development, better quality
              and lower cost services than most other development. Some examples
              of our partners include City Street Investors, Larimer Associates,
              Heitler Development, Harvard Communities, City of Wheat Ridge and
              Jefferson County.
            </p>
            <p className="-mb-8">
              Additionally, our extensive experience and skill with conceptual
              design, budgeting and scheduling is a tremendous asset in the
              early stages of any development. We can quickly analyze several
              options and create designs, budgets and schedules for any site or
              program that allows a landowner or entity to select the best
              option with minimal cost in the early due diligence or RFP phase.
            </p>
            <HomeBlockAbout teamMembers={team} />
          </div>
        </div>
      </Container>
      <Contact />
    </>
  );
}
