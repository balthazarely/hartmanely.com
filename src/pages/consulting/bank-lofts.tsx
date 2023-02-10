import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";
import React from "react";

export default function TheBankLofts() {
  const photos = [
    {
      src: "/images/the-bank-lofts/the-bank-lofts-gallery-3.jpg",
      alt: "the bank lofts gallery image 1",
      width: 400,
      height: 300,
      title: "View from 16th Street Mall",
      description: "",
    },
    {
      src: "/images/the-bank-lofts/the-bank-lofts-gallery-4.jpeg",
      alt: "the bank lofts gallery image 2",
      width: 300,
      height: 217,
      title: "View from 16th Street Mall",
      description: "",
    },
    {
      src: "/images/the-bank-lofts/the-bank-lofts-gallery-1.jpeg",
      alt: "the bank lofts gallery image 3",
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
    <>
      <NextSeo title="The Bank Lofts" description="" />
      <ProjectHero
        heroImage="/images/the-bank-lofts/the-bank-lofts-hero.jpg"
        alt="the bank lofts hero image"
      />
      <ProjectDetails
        title="The Bank Lofts "
        location="Denver, CO"
        tagline=""
        aboutText={aboutText}
        showSidePanel={false}
      />

      <ProjectImageGallery photos={photos} />
    </>
  );
}
