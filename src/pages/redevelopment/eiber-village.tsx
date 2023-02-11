import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { ProjectAwards } from "@/components/SingleProjectElements/ProjectAwards";
import { ProjectMedia } from "@/components/SingleProjectElements/ProjectMedia";
import { NextSeo } from "next-seo";
import React from "react";

export default function EiberVillage() {
  const awards = [
    {
      awardName: "2020 Lakewood Community Sustainability Award Winner",
      link: "https://www.mwhsolutions.org/uploads/8/6/8/9/8689629/everett_court_partners_llc.pdf",
    },
  ];

  const photos = [
    {
      src: "/images/eiber-village/eiber-village-gallery-1.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-2.jpeg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-3.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-4.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-5.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-6.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-7.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-8.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-9.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-10.jpeg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-11.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
    {
      src: "/images/eiber-village/eiber-village-gallery-12.jpg",
      width: 300,
      height: 225,
      title: "",
      description: "",
    },
  ];

  const media = [
    {
      mediaName: "Eiber Village at Garrison Station",
      link: "https://www.youtube.com/watch?v=QfjfJE3gjQk",
    },
  ];

  return (
    <>
      <NextSeo title="Eiber Village" description="" />
      <ProjectHero
        heroImage="/images/eiber-village/eiber-village-hero.jpg"
        alt="eiber village hero image"
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
      />
      <ProjectDetails
        title="Eiber Village at Garrison Station"
        location="Lakewood, CO"
        tagline=" Affordable Senior Housing on Light Rail"
        completedDate="2020"
        size="39,000 Sq. Ft."
        projectType="Redevelopment"
        logo="/images/eiber-village/eiber-village-logo.jpeg"
      >
        <p className="small mt-2">
          Eiber Village is an adaptive use conversion of three vacant, abandoned
          buildings to 50 affordable rental senior apartments. The original
          1960s buildings operated most recently as the Hospice of Saint John
          and this important property was designated by the City of Lakewood as
          a local historic site. The property’s adjacency to Garrison Station
          along RTD’s West light rail line and it’s proximity to West Colfax
          Avenue provides great transit and shopping opportunities for
          residents. Enhanced existing gardens, private resident patios and free
          Electric Vehicle charging stations are available on the balance of the
          site.
        </p>
        <p className="small mt-2">
          The project was a public/private partnership with the City of
          Lakewood, Metro West Housing Solutions, Jefferson County Community
          Development, Raymond James Tax Credit Funds, Colorado Division of
          Housing and Commerce Bank. Hartman Ely Investments was Development
          Manager and an ownership partner with Giving Tree Partnerships.
        </p>
        <p className="small mt-2">
          Eiber Village is owned and managed by{" "}
          <a
            rel="noreferrer"
            href="https://www.mwhsolutions.org/eiber-village.html"
            target="_BLANK"
            className="link-small"
          >
            Metro West Housing Solutions
          </a>
          .
        </p>
      </ProjectDetails>
      <ProjectAwards awards={awards} />
      <ProjectMedia media={media} />
      <ProjectImageGallery photos={photos} />
    </>
  );
}
