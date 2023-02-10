import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectHero({
  heroImage,
  alt,
}: {
  heroImage: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className={styles.heroLargeContainer}>
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
