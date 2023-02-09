import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/PageElements";
import React from "react";

export default function BostonLofts() {
  const photos = [
    {
      src: "/images/boston-lofts/boston-lofts-gallery-1.jpeg",
      width: 500,
      height: 332,
      title: "View from 16th Street Mall",
      description: "",
    },
  ];

  const aboutText = [
    "The Boston Lofts is a conversion of the historic Boston Building and Kistler Building into an affordable rental loft community of 158 units with ground floor retail shops. The project involved extensive interior revisions to combine different floor elevations and layouts of two adjacent buildings into one cohesive plan surrounding a restored interior courtyard. An adjacent parking garage was also acquired as part of the project scope. The project was financed with a 40 year HUD mortgage, a grant from the Colorado State Historical Fund, tax increment financing from retail sales from the Denver Urban Renewal Authority, historic preservation tax credits and owner equity.",
    "Jim Hartman was Development Manager for National Properties. Hartman Ely Investments was an investor in the project via National Properties.",
  ];

  return (
    <div>
      <ProjectHero heroImage="/images/boston-lofts/boston-lofts-hero.jpg" />
      <ProjectDetails
        title="Bostom Lofts "
        location="Denver, CO"
        tagline=""
        aboutText={aboutText}
        showSidePanel={false}
      />

      <ProjectImageGallery photos={photos} />
    </div>
  );
}
