import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
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
          <h5 className="mt-4">About</h5>
          <h2 className="mt-2 mb-4">Our Team</h2>
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
                    <h4 className="cursor-pointertext-center  text-center">
                      {person.name}
                    </h4>
                    {person.linkedInLink && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={person.linkedInLink}
                      >
                        <FaLinkedin className="text-xl" />
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
