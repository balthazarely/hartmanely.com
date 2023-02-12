import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export function ProjectHero({
  heroImage,
  heading,
}: {
  heroImage: string;
  heading: string;
}) {
  return (
    <div>
      <div className={styles.heroLargeContainer}>
        <Image
          className={clsx("object-cover", styles.HeroImage)}
          src={heroImage}
          alt={heading}
          fill
        />

        <div className="absolute top-0 left-0 h-full w-full  bg-sky-900 opacity-40 "></div>
        <div className={styles.heroTitleWrapper}>
          <div>
            <h1 className="uppercase tracking-wider text-white">{heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
