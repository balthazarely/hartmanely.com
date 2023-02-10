import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { ProjectAwards } from "@/components/SingleProjectElements/ProjectAwards";
import React from "react";

export default function SteamPlantLofts() {
  const awards = [
    {
      awardName:
        "The Mayor's Design Award in 2009 in the category 'Buildings that Beckon'",
    },
  ];

  const photos = [
    {
      src: "/images/steam-plant/steam-plant-gallery-4.jpg",
      width: 500,
      height: 375,
      title: "Northwest view of Steam Plant Lofts",
      description: "",
    },
    {
      src: "/images/steam-plant/steam-plant-gallery-3.jpg",
      width: 500,
      height: 375,
      title: "Southwest view showing solar panels on garage roofs",
      description: "",
    },
    {
      src: "/images/steam-plant/steam-plant-gallery-2.jpg",
      width: 500,
      height: 320,
      title: "Garden of Loft 1B ",
      description: "",
    },
    {
      src: "/images/steam-plant/steam-plant-gallery-1.jpg",
      width: 500,
      height: 341,
      title: "Interior of Loft 1B",
      description: "",
    },
  ];

  const aboutText = [
    "Steam Plant Lofts is the creative conversion of the original 'Power House' of the Lowry Air Force Base into 14 custom-designed loft-style condominiums. The overall development also includes 9 single-family  Patio Homes that complement the historic Steam Plant building. Steam Plant Lofts has six individual loft solar power systems restoring the building's historic function as Lowry's Source of Energy.",
    ,
    "Hartman Ely Investments and Harvard Communities were ownership partners of the project. Hartman Ely Investments was Development Manager of the Steam Plant Lofts. Harvard Communities was Development Manager of the Steam Plant Patio Homes. ",
  ];

  return (
    <div>
      <ProjectHero
        alt="steam plant lofts hero image"
        heroImage="/images/steam-plant/steam-plant-hero.jpg"
      />
      <ProjectDetails
        title="Steam Plant Lofts"
        location="Denver, CO"
        tagline="Transformation of original Lowry Steam Plant"
        aboutText={aboutText}
        completedDate="1/10/23"
        size="140,000 Sq.Ft."
        projectType="Redevelopment"
      />
      <ProjectAwards awards={awards} />
      <ProjectImageGallery photos={photos} />
    </div>
  );
}
