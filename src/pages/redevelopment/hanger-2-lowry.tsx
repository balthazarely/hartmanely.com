import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { ProjectAwards } from "@/components/SingleProjectElements/ProjectAwards";
import { NextSeo } from "next-seo";
import React from "react";

export default function Hanger2Lowry() {
  const awards = [
    {
      awardName: "2015 Colorado Innovation Award: Urban Land Institute ",
      link: "https://www.youtube.com/watch?v=WwQ_NHuocP0&t=6s",
    },
    {
      awardName: "2013 Community Preservation Award: Historic Denver.",
    },
    {
      awardName: "2011 Mayor's Design Award.",
    },
  ];

  const photos = [
    {
      src: "/images/hanger2/hanger-2-gallery-1.jpg",
      width: 750,
      height: 581,
      title: "",
      description: "Patio of North County Restaurant",
    },
    {
      src: "/images/hanger2/hanger-2-gallery-3.jpg",
      width: 500,
      height: 740,
      title: "",
      description: "Solar panels on roof of Hangar 2",
    },
    {
      src: "/images/hanger2/hanger-2-gallery-2.jpg",
      width: 500,
      height: 667,
      title: "",
      description: "Rocket Ice Cream",
    },
  ];

  return (
    <>
      <NextSeo title="Hanger 2 Lowry" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        alt="hanger 2 hero image"
        heroImage="/images/hanger2/hanger-2-hero.jpeg"
      />
      <ProjectDetails
        title="Hangar 2 Lowry"
        location="Denver, CO"
        tagline="Vibrant Redevelopment of Historic Hangar"
        completedDate="2010"
        size="125,000 Sq. Ft."
        projectType="Redevelopment"
        website="https://hangar2lowry.com/"
      >
        <p className="small mt-2">
          The transformation of the historic 1939 Hangar 2 at Lowry into a
          vibrant neighborhood meeting place includes restaurants, public art,
          small entrepreneurial office and retail suites as well as Montessri
          Casa International School. The hangar interior provides climate
          controlled storage space for Lowry’s homes and local businesses. The
          entire property creates a pedestrian-friendly streetscape and outdoor
          dining areas connecting the massive historic hangar with the
          surrounding community. The renovated hangar has a 105kW solar power
          system for the building and an energy efficient design. It also
          incorporates a 400kW community solar array allowing solar panels to be
          purchased by Denver residents to offset their power needs.
        </p>
        <p className="small mt-2">
          Hartman Ely Investments was Development Manager and is an ownership
          partner with Larimer Associates and{" "}
          <a
            rel="noreferrer"
            href="https://www.citystreetinvestors.com/"
            target="_BLANK"
            className="link-small"
          >
            City Street Investors
          </a>{" "}
          .
        </p>
      </ProjectDetails>
      <ProjectAwards awards={awards} />

      <ProjectImageGallery photos={photos} />
    </>
  );
}
