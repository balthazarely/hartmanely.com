import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";
import React from "react";

export default function SteamPlantRowHomes() {
  const photos = [
    {
      src: "/images/steam-plant-row-homes/steam-plant-row-homes-gallery-4.jpg",
      width: 500,
      height: 375,
      title: "",
      description: "",
    },
    {
      src: "/images/steam-plant-row-homes/steam-plant-row-homes-gallery-3.jpg",
      width: 500,
      height: 375,
      title: "",
      description: "",
    },
    {
      src: "/images/steam-plant-row-homes/steam-plant-row-homes-gallery-2.jpg",
      width: 500,
      height: 320,
      title: "",
      description: "",
    },
    {
      src: "/images/steam-plant-row-homes/steam-plant-row-homes-gallery-1.jpg",
      width: 500,
      height: 341,
      title: "",
      description: "",
    },
  ];

  return (
    <>
      <NextSeo title="Steam Plant Row Homes" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        alt="steam plant row hoems hero image"
        heroImage="/images/steam-plant-row-homes/steam-plant-row-homes-hero.jpg"
      />
      <ProjectDetails
        title="Steam Plant Row Homes"
        location="Denver, CO"
        tagline="First Live-work facility at Lowry"
        completedDate="2006"
        size="39,000 Sq. Ft."
        projectType="Redevelopment"
      >
        <p className="small mt-2">
          Steam Plant Row Homes is a 10-unit townhome building that is the first
          live/work facility at Lowry. The live/work concept provides a flexible
          ground floor commercial space with a separate storefront entrance and
          living space above. The Row Home building is a key anchor of the
          overall 40-unit Steam Plant Community. Its design has industrial
          features and large windows that complement the historic Steam Plant
          building.
        </p>
        <p className="small mt-2">
          Hartman Ely Investments was Development Manager and was an ownership
          partner with Harvard Communities.
        </p>
      </ProjectDetails>
      <ProjectImageGallery photos={photos} />
    </>
  );
}
