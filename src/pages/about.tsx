import { ProjectHero } from "@/components/ProjectsElements";
import React from "react";
import { Container } from "@/components/LayoutComponents";
import { HomeBlockAbout } from "@/components/HomeElements";
import { Contact } from "@/components/Elements";
import { NextSeo } from "next-seo";
import { getAboutPage, AboutPage } from "@/lib/payload";
import { GetStaticProps } from "next";
import { SerializedRichText } from "@/lib/serializeRichText";

interface Props {
  page: AboutPage;
}

export default function About({ page }: Props) {
  const team =
    page.team?.map((member) => ({
      name: member.name,
      img: member.photo.url,
      bio: member.bio,
      linkedInLink: member.linkedInLink,
    })) ?? [];

  return (
    <>
      <NextSeo
        title={page.meta?.title || "About Hartman Ely"}
        description={page.meta?.description || ""}
        openGraph={{
          title: page.meta?.title || "About Hartman Ely",
          description: page.meta?.description || "",
          url: "https://hartmanely.com/about",
        }}
      />
      <ProjectHero heading="About" heroImage={page.heroImage.url} />
      <Container noPadding={true} className=" pt-10">
        <div className="mx-auto mb-2 grid grid-cols-1 gap-8 pb-2">
          <div className="col-span-2">
            <h1 className="mt-2">{page.heading}</h1>
            {page.subheading && (
              <h2 className="mb-4 mt-4 text-lg">{page.subheading}</h2>
            )}
            {page.body && <SerializedRichText content={page.body} />}
            {team.length > 0 && <HomeBlockAbout teamMembers={team} />}
          </div>
        </div>
      </Container>
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page = await getAboutPage();
  if (!page) return { notFound: true };
  return { props: { page }, revalidate: 60 };
};
