import { Container } from "@/components/LayoutComponents";
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
      <div className="flex flex-col items-start">
        {awards!.map((award: ProjectAwardsProps, idx: number) => {
          if (award.link) {
            return (
              <a
                key={idx}
                target="_BLANK"
                rel="noreferrer"
                href={award.link}
                className="block"
              >
                <p className="link-small ">{award.awardName}</p>
              </a>
            );
          } else {
            return (
              <p key={idx} className="small font-base  ">
                {award.awardName}
              </p>
            );
          }
        })}
      </div>
    </Container>
  );
}
