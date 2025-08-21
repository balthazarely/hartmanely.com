import {
  ProjectHero,
  ProjectDetails,
} from "@/components/SingleProjectElements";
import { NextSeo } from "next-seo";
import React from "react";

export default function LorettoCommons() {
  return (
    <>
      <NextSeo title="Loretto Commons" description="" />
      <ProjectHero
        heroImageHeightClasses="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        heroImage="/images/loretto-commons/loretto-commons-web.png"
        alt="the bank lofts hero image. Credit Loretto Heritage Center."
      />
      <ProjectDetails
        title="Loretto Commons"
        location="Denver, CO"
        tagline=""
        showSidePanel={false}
      >
        <p className="small mt-2">
          HEI is providing redevelopment, historic preservation and concept
          design consulting services to Commun Denver for Loretto Commons. HEI
          has also provided investment capital for this important redevelopment
          of several historic buildings and a vacant land parcel at the core of
          Denver&apos;s new Loretto Heights community.
        </p>
        <p className="small mt-2">
          The iconic 1890 Administration Building shown in the historic photo
          above will be the focal point of Loretto Commons. This restored
          historic landmark will provide several unique and much-needed spaces
          and support services to the community (rent-to-own apartments at
          affordable and market rates, a restaurant and retail shops, community
          offices, a restored Chapel and Theater, new event space and a public
          observation deck with mountain views at the top of the historic
          tower).
        </p>
        <p className="small mt-2">
          Loretto Commons will also redevelop the historic Priest&apos;s House
          and Steam Plant and will construct a new, complementary apartment
          building, parking garage and transit plaza.
        </p>
        <p className="small mt-4">
          <a
            rel="noreferrer"
            className="link-small"
            href="https://www.communcampaign.org/about"
            target="_BLANK"
          >
            Learn more about Loretto Commons
          </a>
        </p>
        <p className="small mt-4 mb-8 italic">
          Photo credit: Loretto Heritage Center.
        </p>
      </ProjectDetails>
    </>
  );
}
