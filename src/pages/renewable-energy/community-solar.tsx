import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";
import React from "react";

export default function CommunitySolar() {
  const photos = [
    {
      src: "/images/community-solar/community-solar-gallery-2.jpg",
      width: 500,
      height: 375,
      title: "145 kW array, Green Mountain Power, Putney VT",
      description: "",
    },
    {
      src: "/images/community-solar/community-solar-gallery-3.jpg",
      width: 500,
      height: 375,
      title: "115 kW array, PVREA headquarters, Windsor CO",
      description: "",
    },
  ];

  return (
    <>
      <NextSeo title="Community Solar" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        alt="community solar hero image"
        heroImage="/images/community-solar/community-solar-hero.jpg"
      />
      <ProjectDetails
        title="Community Solar"
        location="Windsor CO, Taos NM, Putney VT"
        tagline=" Community Solar Developments"
        completedDate="2010-2012"
        size="100 kW - 500 kW "
        projectType="Renewable Energy"
      >
        <p className="small mt-2">
          Community-owned solar arrays are a unique concept that uses a large,
          centrally located solar power plant to serve many community members.
          The array is connected to the community's electricity system and
          indirectly provides energy for homes, offices, farms and other
          facilities. Any community member that wants to participate can
          purchase a part of the array and receive credit on their monthly
          utility bill for the solar electricity produced by their part of the
          array. A community solar array provides clean, renewable energy and a
          hedge against rising energy costs.
        </p>
        <p className="small mt-2">
          Hartman Ely Investments joined forces with the Clean Energy Collective
          to bring community-owned solar power to many states and was the Clean
          Energy Collective's equity investor for the first community-owned
          solar arrays in Vermont, New Mexico and Northern Colorado.
        </p>
      </ProjectDetails>
      <ProjectImageGallery photos={photos} />
    </>
  );
}
