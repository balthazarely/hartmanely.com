import {
  ProjectHero,
  ProjectDetails,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";

export default function LowellSchoolRedevelopment() {
  return (
    <>
      <NextSeo title="Lowell School Redevelopment" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        heroImage="/images/lowell/lowell-hero.jpg"
        alt="the lowell school redevelopment hero image"
      />
      <ProjectDetails
        title="Lowell School Redevelopment"
        location="Grand Junction, CO"
        tagline=""
        showSidePanel={false}
      >
        <p className="small mt-2 mb-16">
          The Lowell School redevelopment is the transformation of the 1925
          elementary school into a neighborhood hub, 36 new townhomes and public
          space/community gardens on a full city block site in downtown Grand
          Junction, CO. HEI provided redevelopment and historic preservation
          consulting services to Regeneration Development Strategies.{" "}
          <a
            rel="noreferrer"
            href="https://www.lowellvillage.com/"
            target="_BLANK"
            className="link-small"
          >
            Learn more about the Lowell School
          </a>
          .
        </p>
      </ProjectDetails>
    </>
  );
}
