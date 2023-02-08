import { ProjectHero, ProjectDetails } from "@/components/PageElementrs";
import { ProjectMedia } from "@/components/PageElementrs/ProjectMedia";
import React from "react";

export default function WesternHotel() {
  const aboutText = [
    "The historic Western Hotel in Ouray is being restored by Zeppelin, an innovative Denver based Developer. ",

    "Hartman Ely Investments is the Historic Consultant for the project.",
  ];

  const media = [
    {
      mediaName: "Zeppelin Website",
      link: "  https://www.zeppelindevelopment.com/",
    },
  ];

  return (
    <div>
      <ProjectHero heroImage="/images/western-hotel/western-hotel-hero.jpg" />
      <ProjectDetails
        title="Western Hotel"
        location="Ouray, CO"
        tagline=""
        aboutText={aboutText}
        showSidePanel={false}
      />
      <ProjectMedia media={media} />
    </div>
  );
}
