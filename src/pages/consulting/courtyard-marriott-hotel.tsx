import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import React from "react";

export default function CourtyardMarriottHotel() {
  const photos = [
    {
      src: "/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-gallery-1.jpg",
      width: 750,
      height: 563,
      title: "View from 16th Street Mall",
      description: "",
    },
    {
      src: "/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-gallery-2.jpg",
      width: 500,
      height: 667,
      title: "",
      description: "View of atrium stair",
    },
    {
      src: "/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-gallery-3.jpg",
      width: 500,
      height: 375,
      title: "",
      description: "View of lobby",
    },
  ];

  const aboutText = [
    "The Courtyard Hotel involved an extensive renovation and conversion of the historic Joslins Department Store to become one of Denver's most popular boutique hotels. The project included extensive exterior renovation to  remove 1960's metal panels, restore the historic masonry and windows, integrate a 1960's blank wall into a historic facade and add a setback sixth floor. The interior renovation included removal of existing escalators and the insertion of a new atrium, stairs and elevators to convert the department store floor plan to an efficient hotel layout. The Rialto Cafe is a 250 seat restaurant and is the project's main ground floor retail tenant.",
    "Jim Hartman was the the Project Architect for Fentress Bradburn Architects. Later in the project he became the Development Manager for National Properties. Hartman Ely Investments was an investor in the project via National Properties.",
  ];

  return (
    <div>
      <ProjectHero
        heroImage="/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-hero.jpg"
        alt="the courtyard at marriott hero image"
      />
      <ProjectDetails
        title="Courtyard by Marriott Hotel "
        location="Denver, CO"
        tagline=""
        aboutText={aboutText}
        showSidePanel={false}
      />

      <ProjectImageGallery photos={photos} />
    </div>
  );
}
