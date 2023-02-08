import { Container } from "@/components/LayoutComponents";
import Link from "next/link";
import React from "react";
import { BiMoviePlay } from "react-icons/bi";

interface ProjectDetailsProps {
  media: ProjectAwardsProps[];
}

interface ProjectAwardsProps {
  mediaName: string;
  link?: string;
}

export function ProjectMedia({ media }: ProjectDetailsProps) {
  return (
    <Container noPadding={true} className="mt-8 pb-8">
      <div className="mb-2 flex items-center">
        <BiMoviePlay className="mr-1 text-xl" />
        <h3>Media</h3>
      </div>
      {media?.map((media: any) => {
        return (
          <Link href={media.link}>
            <p className="small font-bold italic">{media.mediaName}</p>
          </Link>
        );
      })}
    </Container>
  );
}
