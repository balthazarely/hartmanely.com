import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from "@/components/SingleProjectElements";
import { ProjectMedia } from "@/components/SingleProjectElements/ProjectMedia";
import { NextSeo } from "next-seo";

export default function WesternHotel() {
  const media = [
    {
      mediaName: "Zeppelin Website",
      link: "  https://www.zeppelindevelopment.com/",
    },
  ];
  const photos = [
    {
      src: "/images/western-hotel/western-hotel-hero.jpg",
      width: 1509,
      height: 1027,
      title: "",
      description: "",
    },
    {
      src: "/images/western-hotel/western-hotel-gallery-2.webp",
      width: 1034,
      height: 668,
      title: "",
      description: "",
    },
    {
      src: "/images/western-hotel/western-hotel-gallery-3.jpg",
      width: 730,
      height: 582,
      title: "",
      description: "",
    },
    {
      src: "/images/western-hotel/western-hotel-gallery-4.jpg",
      width: 800,
      height: 1000,
      title: "",
      description: "",
    },
    {
      src: "/images/western-hotel/western-hotel-gallery-5.jpg",
      width: 800,
      height: 1000,
      title: "",
      description: "",
    },
    {
      src: "/images/western-hotel/western-hotel-gallery-6.jpg",
      width: 800,
      height: 1000,
      title: "",
      description: "",
    },
  ];

  return (
    <>
      <NextSeo title="Western Hotel" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        heroImage="/images/western-hotel/western-hotel-gallery-1.webp"
        alt="the western hotel hero image"
      />
      <ProjectDetails
        title="Western Hotel"
        location="Ouray, CO"
        tagline=""
        showSidePanel={false}
      >
        <p className="small mt-2">
          The historic Western Hotel in Ouray, CO was built in 1891 and has been
          transformed into a luxury hotel and spa with 16 guest suites, meeting
          rooms and dining facilities. HEI provided historic preservation
          consulting services to Denver-based Zeppelin Development.{" "}
          <a
            rel="noreferrer"
            href="https://www.thewesternouray.com/"
            target="_BLANK"
            className="link-small"
          >
            Learn more about the Western Hotel
          </a>
          .
        </p>
      </ProjectDetails>
      <ProjectMedia media={media} />
      <ProjectImageGallery photos={photos} />
    </>
  );
}
