import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import styles from "./HomeBlockAbout.module.scss";

interface PersonProps {
  name: string;
  img: string;
  bio: string;
  linkedInLink?: string;
}

export function HomeBlockAbout({
  teamMembers,
}: {
  teamMembers: PersonProps[];
}) {
  return (
    <div className={styles.HomeBlockAboutContainer}>
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <p className="mt-4 text-sm font-bold tracking-wider uppercase text-cyan-700">About</p>
          <h3 className="mt-2 mb-4">Our Team</h3>
        </div>
        <div className="mx-auto grid max-w-xs grid-cols-1 gap-6 sm:max-w-lg sm:grid-cols-2">
          {teamMembers.map((person: PersonProps, idx: number) => {
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
                  <div className="mt-2 flex items-center justify-center gap-1 ">
                    <h4 className="text-center">
                      {person.name}
                    </h4>
                    {person.linkedInLink && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={person.linkedInLink}
                        aria-label={`${person.name} on LinkedIn`}
                      >
                        <FaLinkedin className="text-xl" aria-hidden="true" />
                      </a>
                    )}
                  </div>
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
