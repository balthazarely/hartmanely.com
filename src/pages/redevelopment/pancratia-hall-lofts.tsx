import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { ProjectAwards } from "@/components/SingleProjectElements/ProjectAwards";
import { ProjectMedia } from "@/components/SingleProjectElements/ProjectMedia";
import { NextSeo } from "next-seo";
import React from "react";

export default function PancratiaHall() {
  const awards = [
    {
      awardName: "2022 Historic Denver Award",
      link: "https://vimeo.com/751393546",
    },
    {
      awardName: "2022 Energize Denver Award",
      link: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Climate-Action-Sustainability-Resiliency/News-Events/News/2022/Energize-Denver-Awards-2022-Winners",
    },
  ];

  const media = [
    {
      mediaName:
        "The Story of Pancratia Hall Lofts Documentary (10 minute version)",
      link: "https://www.youtube.com/watch?v=HzgkyqwkStM",
    },
    {
      mediaName:
        "The Detailed Story of Pancratia Hall Lofts (30 minute version)",
      link: "https://spaces.hightail.com/receive/zT3S84UYl3/fi-93cf1ce8-1b1c-44c5-8d8e-d7c283f0b5a1/fv-92de2075-0c29-414a-8aa0-82a5b8e30ad3/Pancratia%2012-21%2015%20HD.mp4",
    },
  ];

  const photos = [
    {
      src: "/images/pancratia/pancratia-gallery-1.jpg",
      width: 1280,
      height: 854,
      title: "Pancratia Hall viewed from East",
      description: "Photo credit - The Unfound Door",
    },
    {
      src: "/images/pancratia/pancratia-gallery-2.jpeg",
      width: 1280,
      height: 854,
      title: "Pancratia Hall viewed from west",
      description: "Photo credit - The Unfound Door",
    },
    {
      src: "/images/pancratia/pancratia-gallery-3.jpeg",
      width: 1280,
      height: 854,
      title: "Lounge",
      description: "Photo credit - The Unfound Door",
    },
    {
      src: "/images/pancratia/pancratia-gallery-4.jpeg",
      width: 750,
      height: 501,
      title: "4th Floor original Chapel - 3 bedroom unit ",
      description: "Photo credit - The Unfound Door",
    },
    {
      src: "/images/pancratia/pancratia-gallery-5.jpeg",
      width: 1280,
      height: 854,
      title: "2nd floor original ballroom - 1 bedroom unit",
      description: "Photo credit - The Unfound Door",
    },
    {
      src: "/images/pancratia/pancratia-gallery-6.jpeg",
      width: 1280,
      height: 854,
      title:
        "Garden level original gymnasium - 3 bedroom unit with added patio",
      description: "Photo credit - The Unfound Door",
    },
    {
      src: "/images/pancratia/pancratia-gallery-7.jpg",
      width: 750,
      height: 289,
      title:
        "East Elevation with Administration Building, by Harry W.J.Edbrooke 1927",
      description: "",
    },
    {
      src: "/images/pancratia/pancratia-gallery-8.jpeg",
      width: 500,
      height: 784,
      title: "Pancratia Hall Chapel of Christ the King",
      description: "",
    },
    {
      src: "/images/pancratia/pancratia-gallery-9.jpg",
      width: 500,
      height: 696,
      title: "Mother Pancratia Bonfils",
      description: "",
    },
    {
      src: "/images/pancratia/pancratia-gallery-10.jpg",
      width: 750,
      height: 485,
      title: "",
      description: "",
    },
    {
      src: "/images/pancratia/pancratia-gallery-11.jpg",
      width: 1500,
      height: 910,
      title: "",
      description: "",
    },
  ];

  return (
    <>
      <NextSeo title="Pancratia Hall Lofts" description="" />
      <ProjectHero
        alt="pancratia hall hero image"
        heroImage="/images/pancratia/pancratia-hero-cropped-v2.jpg"
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
      />
      <ProjectDetails
        title="Pancratia Hall Lofts"
        location="Denver, CO"
        tagline="Affordable Housing at Historic Loretto Heights campus"
        logo="/images/pancratia/pancratia-logo.jpeg"
        completedDate="2021"
        size="63,000 Sq. Ft."
        projectType="Redevelopment"
      >
        <p className="small mt-2">
          Pancratia Hall Lofts is an adaptive use conversion of a vacant
          classroom and dormitory building at the historic Loretto Heights
          college campus in southwest Denver. Pancratia Hall is named after
          Mother Pancratia Bonfils, one of the key founders of Loretto Heights
          in the late 1800s. It was designed by master architect Harry W. J.
          Edbrooke in 1927 and was completed in 1930. The transformation of this
          important historic building created 74 affordable family apartments
          and an inviting courtyard. The building&apos;s location at the heart
          of the revitalized Loretto Heights community provides great additional
          amenities for residents. Key features of the historic building were
          integrated into the new lofts including refurbishing decorative
          terrazzo hallway flooring. The gym was converted into two, dramatic
          multi-level apartments, each with its own basketball backboard and
          restored clerestory windows. The Chapel&apos;s stained glass windows,
          decorative plaster walls, wood timber ceiling and decorative light
          fixtures are featured in a dramatic fourth floor apartment.
        </p>
        <p className="small mt-2">
          The project was a public/private partnership with the City and County
          of Denver, Denver Housing Authority, Colorado Housing and Finance
          Authority, Colorado Division of Housing, PNC Bank, ANB Bank and
          Commerce Bank.
        </p>
        <p className="small mt-2">
          Pancratia Hall Lofts is a development partnership between Hartman Ely
          Investments and{" "}
          <a
            rel="noreferrer"
            className="link-small"
            href="https://proximitygreen.com/places/pancratia"
            target="_BLANK"
          >
            Proximity Green
          </a>
          .{" "}
          <a
            rel="noreferrer"
            href="https://www.westsideinv.com/loretto-heights"
            target="_BLANK"
            className="link-small"
          >
            Westside Investment Partners
          </a>{" "}
          is the redeveloper for the entire Loretto Heights Community
        </p>
      </ProjectDetails>
      <ProjectAwards awards={awards} />
      <ProjectMedia media={media} />
      <ProjectImageGallery photos={photos} />
    </>
  );
}
