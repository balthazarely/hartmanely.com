import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/PageElements";
import { ProjectAwards } from "@/components/PageElements/ProjectAwards";
import { ProjectMedia } from "@/components/PageElements/ProjectMedia";
import React from "react";

export default function InnvoageHeadquarters() {
  const awards = [
    {
      awardName:
        "1st Place Award Colorado Sustainable Design Awards: Commercial November 2011",
    },
  ];
  const photos = [
    {
      src: "/images/innovage-headquarters/innovage-headquarters-gallery-1.jpg",
      width: 750,
      height: 563,
      title: "View from south",
      description: "",
    },
    {
      src: "/images/innovage-headquarters/innovage-headquarters-gallery-2.jpg",
      width: 500,
      height: 375,
      title: "",
      description: "Custom solar canopy at entry",
    },
    {
      src: "/images/innovage-headquarters/innovage-headquarters-gallery-3.jpg",
      width: 500,
      height: 375,
      title: "",
      description: "Landscaped entry",
    },
  ];

  const aboutText = [
    "InnovAge (previously called Total Longterm Care) is a non-profit, senior care program whose mission is to enable frail individuals to live  with dignity in their own homes and communities as long as possible.",

    "The Office Facility has many 'green' features, including a 111 kW solar  energy system that has allowed the facility to achieve a 'platinum' LEED  rating from the US Green Building Council. The Office Facility uses only 28% of the energy that a typical similar facility would use. It also has some atypical 'green' features such as a fruit orchard in the parking lot and an interior herb/vegetable garden.",
    "Hartman Ely Investments was Development Manager and a Development Partner with Heitler Development.",
  ];

  const media = [
    {
      mediaName: "Zeppelin Website",
      link: "  https://www.zeppelindevelopment.com/",
    },
  ];

  return (
    <div>
      <ProjectHero heroImage="/images/innovage-headquarters/innovage-headquarters-hero.jpg" />
      <ProjectDetails
        title="Innovage Headquarters"
        location="Denver, CO"
        tagline="LEED Platinum Headquarters building"
        aboutText={aboutText}
        showSidePanel={false}
      />
      <ProjectAwards awards={awards} />
      <ProjectMedia media={media} />
      <ProjectImageGallery photos={photos} />
    </div>
  );
}
