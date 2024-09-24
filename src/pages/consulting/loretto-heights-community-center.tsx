import {
  ProjectHero,
  ProjectDetails,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";

export default function LorettoHeightsCommunityCenter() {
  return (
    <>
      <NextSeo title="Loretto Heights Community Center" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        heroImage="/images/machebeuf/machebeuf-hero-2.jpg"
        alt="Loretto Heights Community Center hero image"
      />
      <ProjectDetails
        title="Loretto Heights Community Center"
        location="Denver, CO"
        tagline=""
        showSidePanel={false}
      >
        <p className="small mt-2 mb-16">
          The historic Machebeuf Hall at Loretto Heights in Denver, CO was built
          in 1950 and is in the process of being converted into a community
          center for the surrounding neighborhoods of southwest Denver. HEI is
          providing redevelopment and historic preservation consulting services
          to Commun Denver.{" "}
          <a
            rel="noreferrer"
            href="  https://commundenver.org/community-center-at-loretto-heights//"
            target="_BLANK"
            className="link-small"
          >
            Learn more about the Loretto Heights Community Center
          </a>
        </p>
      </ProjectDetails>
    </>
  );
}
