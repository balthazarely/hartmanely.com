import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/PageElementrs";
import { ProjectAwards } from "@/components/PageElementrs/ProjectAwards";
import React from "react";

export default function Fruitdale() {
  const awards = [
    {
      awardName:
        "2018 Community Development award: National Association of Housing and Redevelopment Officials",
    },
    {
      awardName:
        "2018 Residential Development that Overcame Significant Obstacles award: Novogradac & Company",
    },
    {
      awardName:
        "2018 Reinvestment Award & Special Congressional Recognition: City of Wheat Ridge and US Congressman Ed Perlmutter",
    },
    {
      awardName:
        "2019 Stephen H. Hart Award for Historic Preservation by History",
      link: "https://www.youtube.com/watch?v=Hp29SSsbFDg&list=PLl68fplNJM8BiezBVP4lQ7mo_zh9jjWwU&index=2",
    },
    {
      awardName: "2019 ULI Impact Award - Infill Category",
      link: "https://www.youtube.com/watch?v=nDiRsbtbM-E",
    },
  ];

  const photos = [
    {
      src: "/images/fruitdale/fruitdale-gallery-1.jpg",
      width: 1000,
      height: 668,
      title: "",
      description: "Historic Hall with educational displays",
    },
    {
      src: "/images/fruitdale/fruitdale-gallery-3.jpg",
      width: 640,
      height: 750,
      title: "",
      description: "Interior of loft in original gymnasium",
    },
    {
      src: "/images/fruitdale/fruitdale-gallery-2.jpg",
      width: 750,
      height: 750,
      title: "",
      description: "Interior of loft in original classroom",
    },
  ];

  const aboutText = [
    "A public/private partnership between Fruitdale School Partners, The City of Wheat Ridge and The Wheat Ridge Housing Authority created a unique residential community of 16 affordable rental apartments. Historic interior features such as huge operable windows, high ceilings,chalk boards and basketball hoops from the prior school are featured.",
    ,
    "The entire property is solar-powered and has numerous energy efficiency features to minimize operational costs as well as to provide community education on sustainable development. The site includes a fruit orchard, low-water-use edible landscaping and free electric vehicle charging.",
  ];

  return (
    <div>
      <ProjectHero heroImage="/images/fruitdale/fruitdale-hero.jpg" />
      <ProjectDetails
        title="Fruitdale School Lofts"
        location="Denver, CO"
        tagline="Adaptive Use of National Register Historic Building"
        aboutText={aboutText}
        logo="/images/fruitdale/fruitdale-logo.jpeg"
        completedDate="1/10/23"
        size="140,000 Sq.Ft."
        projectType="Redevelopment"
      />
      <ProjectAwards awards={awards} />
      <ProjectImageGallery photos={photos} />
    </div>
  );
}
