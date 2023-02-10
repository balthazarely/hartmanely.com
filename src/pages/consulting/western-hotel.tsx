import {
  ProjectHero,
  ProjectDetails,
} from "@/components/SingleProjectElements";
import { ProjectMedia } from "@/components/SingleProjectElements/ProjectMedia";
import { NextSeo } from "next-seo";
import React from "react";

export default function WesternHotel() {
  const aboutText = [
    "The historic Western Hotel in Ouray is being restored by Zeppelin, an innovative Denver based Developer. ",

    "Hartman Ely Investments is the Historic Consultant for the project.",
  ];

  const media = [
    {
      mediaName: "Zeppelin Website",
      link: "  https://www.zeppelindevelopment.com/",
    },
  ];

  return (
    <>
      <NextSeo title="Western Hotel" description="" />
      <ProjectHero
        heroImage="/images/western-hotel/western-hotel-hero.jpg"
        alt="the western hotel hero image"
      />
      <ProjectDetails
        title="Western Hotel"
        location="Ouray, CO"
        tagline=""
        aboutText={aboutText}
        showSidePanel={false}
      />
      <ProjectMedia media={media} />
    </>
  );
}
