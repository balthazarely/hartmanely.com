import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/PageElementrs";
import React from "react";

export default function TheBankLofts() {
  const photos = [
    {
      src: "/images/the-bank-lofts/the-bank-lofts-gallery-3.jpg",
      width: 400,
      height: 300,
      title: "View from 16th Street Mall",
      description: "",
    },
    {
      src: "/images/the-bank-lofts/the-bank-lofts-gallery-4.jpeg",
      width: 300,
      height: 217,
      title: "View from 16th Street Mall",
      description: "",
    },
    {
      src: "/images/the-bank-lofts/the-bank-lofts-gallery-1.jpeg",
      width: 400,
      height: 300,
      title: "View from 16th Street Mall",
      description: "",
    },
  ];

  const aboutText = [
    "The Bank Lofts is a conversion of the 1921 United States National Bank Building to an affordable rental loft community of 126 units and other ground floor retail tenants, including the conversion of the original banking hall into a Restaurant. The project was financed with a $100,000 grant from the Colorado State Historical Fund, retail sales tax increment financing from the Denver Urban Renewal Authority, historic preservation tax credits, low income housing credits, a 40 year HUD mortgage and owner equity. ",
    "Jim Hartman was Development Manager for National Properties. Hartman Ely Investments was an investor in the project via National Properties..",
  ];

  return (
    <div>
      <ProjectHero heroImage="/images/the-bank-lofts/the-bank-lofts-hero.jpg" />
      <ProjectDetails
        title="The Bank Lofts "
        location="Denver, CO"
        tagline=""
        aboutText={aboutText}
        showSidePanel={false}
      />

      <ProjectImageGallery photos={photos} />
    </div>
  );
}