import { Container } from "@/components/LayoutComponents";
import Link from "next/link";
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
      <div className="flex flex-col">
        {media?.map((media: ProjectAwardsProps, idx: number) => {
          if (media.link) {
            return (
              <Link href={media.link} key={idx}>
                <p className="link-small inline-block">{media.mediaName}</p>
              </Link>
            );
          } else {
            <p key={idx} className="small inline-block  font-bold ">
              {media.mediaName}
            </p>;
          }
        })}
      </div>
    </Container>
  );
}
