import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectHero({
  heroImage,
  alt,
  fullHeroHeight,
  imageWidth,
  imageHeight,
}: {
  heroImage: string;
  alt: string;
  fullHeroHeight?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const containerStyle = fullHeroHeight && imageWidth && imageHeight
    ? { aspectRatio: `${imageWidth} / ${imageHeight}` }
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="bg-gray-100"
    >
      <div
        className={`${styles.heroContainer} ${fullHeroHeight ? styles.fullHeight : ''}`}
        style={containerStyle}
      >
        <Image
          fill
          className={fullHeroHeight ? "object-contain" : "object-cover"}
          src={heroImage}
          alt={alt}
        />
      </div>
    </motion.div>
  );
}
