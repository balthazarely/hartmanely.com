import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";
import React from "react";

export default function BoulderWastewaterTreamtmentPlant() {
  const photos = [
    {
      src: "/images/boulder-wastewater-treatment-facility/boulder-wastewater-treatment-facility-gallery-1.jpg",
      width: 500,
      height: 375,
      title: "Boulder County officials at ribbon cutting ceremony",
      description: "",
    },
    {
      src: "/images/boulder-wastewater-treatment-facility/boulder-wastewater-treatment-facility-gallery-2.jpeg",
      width: 500,
      height: 375,
      title: "View from east",
      description: "",
    },
  ];

  return (
    <>
      <NextSeo title="Boulder Wastewater" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        alt="boulder wastewater hero image"
        heroImage="/images/boulder-wastewater-treatment-facility/boulder-wastewater-treatment-facility-hero.jpeg"
      />
      <ProjectDetails
        title="Solar Array at Boulder Wastewater Treatment Facility"
        location="Boulder, CO"
        tagline="Solar Array at Boulder Wastewater Treatment Facility"
        completedDate="2009"
        size="1MW on 7 acres"
        projectType="Renewable Energy"
      >
        <p className="small mt-2">
          The solar energy system for the Boulder Wastewater Treatment Facility
          was the largest solar power system in Boulder County as of 2009. This
          1 megawatt system is an important part of the City’s Climate Action
          Plan and provides approximately 20% of the facility’s power
          requirements. The system is financed using a Power Purchase Agreement
          (PPA) with the City of Boulder. Financing was achieved during the
          difficult economic times of late 2008 and early 2009. Entitlements,
          final design and construction involved complex prairie dog relocation,
          wetland mitigation and construction phasing. Hartman Ely Investments
          provided investment capital and project management services for this
          solar development.
        </p>
      </ProjectDetails>
      <ProjectImageGallery photos={photos} />
    </>
  );
}
