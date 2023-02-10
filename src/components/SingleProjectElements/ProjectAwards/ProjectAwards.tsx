import { Container } from "@/components/LayoutComponents";
import Link from "next/link";
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
      <div className="flex flex-col">
        {awards!.map((award: ProjectAwardsProps, idx: number) => {
          if (award.link) {
            return (
              <Link key={idx} href={award.link}>
                <p className="link-small inline-block">{award.awardName}</p>
              </Link>
            );
          } else {
            return (
              <p key={idx} className="small font-base  inline-block ">
                {award.awardName}
              </p>
            );
          }
        })}
      </div>
    </Container>
  );
}
