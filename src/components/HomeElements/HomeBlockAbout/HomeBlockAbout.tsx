import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import Image from "next/image";
import styles from "./HomeBlockAbout.module.scss";

interface PersonProps {
  name: string;
  img: string;
  bio: string;
}

const team = [
  {
    name: "James Hartman",
    img: "/headshots/james-hartman.jpg",
    bio: "Jim is one of Colorado's leading experts with historic building redevelopment, urban infill development and renewable energy.",
  },
  {
    name: "Susan Ely",
    img: "/headshots/susan-ely.jpg",
    bio: "Susan is a trained architect and is HEI's Business Manager, is in charge of all administrative efforts of the company.",
  },
];

export function HomeBlockAbout() {
  return (
    <div className={styles.HomeBlockAboutContainer}>
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <h5 className="mt-4">About</h5>
          <h2 className="mt-2 mb-4">Our Team</h2>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-6">
          {team.map((person: PersonProps, idx: number) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-start"
              >
                <div className={clsx(styles.imageContainer)}>
                  <Image
                    fill
                    className={clsx(styles.image, "object-cover")}
                    src={person.img}
                    alt={person.name}
                  />
                </div>
                <div>
                  <h4 className="cursor-pointertext-center mt-2 text-center">
                    {person.name}
                  </h4>
                  <p className="small mt-2 text-center ">{person.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
