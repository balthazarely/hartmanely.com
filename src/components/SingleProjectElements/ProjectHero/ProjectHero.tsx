import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export function ProjectHero({
  heroImage,
  heroImageHeightClasses,
  alt,
}: {
  heroImage: string;
  alt: string;
  heroImageHeightClasses: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className={clsx(styles.heroLargeContainer, heroImageHeightClasses)}>
        <Image
          priority={true}
          fill
          className="object-cover"
          src={heroImage}
          alt={alt}
        />
      </div>
    </motion.div>
  );
}
