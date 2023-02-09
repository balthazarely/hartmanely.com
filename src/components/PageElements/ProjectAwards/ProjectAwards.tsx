import { Container } from "@/components/LayoutComponents";
import Link from "next/link";
import React from "react";
import { FaAward } from "react-icons/fa";

interface ProjectDetailsProps {
  awards: ProjectAwardsProps[];
}

interface ProjectAwardsProps {
  awardName: string;
  link?: string;
}

export function ProjectAwards({ awards }: ProjectDetailsProps) {
  return (
    <Container noPadding={true} className="mt-16">
      <div className="mb-2 flex items-center">
        <FaAward className="mr-1 text-xl" />
        <h3>Awards</h3>
      </div>
      {awards!.map((award: ProjectAwardsProps, idx: number) => {
        if (award.link) {
          return (
            <Link key={idx} href={award.link}>
              <p className="small font-bold italic">{award.awardName}</p>
            </Link>
          );
        } else {
          return (
            <p key={idx} className="small font-base italic">
              {award.awardName}
            </p>
          );
        }
      })}
    </Container>
  );
}
