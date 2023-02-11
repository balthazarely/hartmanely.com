import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { ProjectAwards } from "@/components/SingleProjectElements/ProjectAwards";
import { ProjectMedia } from "@/components/SingleProjectElements/ProjectMedia";
import { NextSeo } from "next-seo";
import React from "react";

export default function InnvoageHeadquarters() {
  const awards = [
    {
      awardName:
        "2011 - 1st Place Award Colorado Sustainable Design Awards: Commercial November",
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

  return (
    <>
      <NextSeo title="Innovage Headquarters" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        heroImage="/images/innovage-headquarters/innovage-headquarters-hero.jpg"
        alt="the boston lofts hero image"
      />
      <ProjectDetails
        title="Innovage Headquarters"
        location="Denver, CO"
        tagline="LEED Platinum Headquarters building"
        showSidePanel={false}
      >
        <p className="small mt-2">
          InnovAge (previously called Total Longterm Care) is a non-profit,
          senior care program whose mission is to enable frail individuals to
          live with dignity in their own homes and communities as long as
          possible.
        </p>
        <p className="small mt-2">
          The Office Facility has many &apos;green&apos; features, including a
          111 kW solar energy system that has allowed the facility to achieve a
          &apos;platinum&apos; LEED rating from the US Green Building Council.
          The Office Facility uses only 28% of the energy that a typical similar
          facility would use. It also has some atypical &apos;green&apos;
          features such as a fruit orchard in the parking lot and an interior
          herb/vegetable garden.
        </p>
        <p className="small mt-2">
          Hartman Ely Investments was Development Manager and a Development
          Partner with Heitler Development.
        </p>
      </ProjectDetails>
      <ProjectAwards awards={awards} />
      <ProjectImageGallery photos={photos} />
    </>
  );
}
