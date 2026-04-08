import styles from "./HeroLarge.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut",
      duration: 1,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: "30px",
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: "0px",
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

interface HeroLargeProps {
  image: string;
  eyebrow?: string;
  heading: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export function HeroLarge({ image, eyebrow, heading, ctaLabel, ctaLink }: HeroLargeProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div>
      <div className={styles.heroLargeContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isImageLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="relative min-h-full min-w-full"
        >
          <Image
            height={700}
            width={700}
            priority={true}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore — fetchPriority not in types for Next.js 13.1.6 but is forwarded to <img>
            fetchPriority="high"
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={image}
            alt={heading}
            onLoad={() => setIsImageLoaded(true)}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isImageLoaded ? "show" : "hidden"}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-cyan-700 opacity-40 "></div>
        </motion.div>
        <motion.div
          className={styles.heroTitleWrapper}
          variants={container}
          initial="hidden"
          animate={isImageLoaded ? "show" : "hidden"}
        >
          {eyebrow && (
            <motion.div variants={item}>
              <p className="mb-2 text-sm font-bold tracking-widest uppercase text-white">
                {eyebrow}
              </p>
            </motion.div>
          )}
          <motion.div variants={item}>
            <h1 className="uppercase tracking-wider text-white">{heading}</h1>
          </motion.div>
          {ctaLabel && ctaLink && (
            <motion.div variants={item}>
              <Link href={ctaLink}>
                <button
                  className="mt-4 rounded-md border-2 border-white bg-gray-800 bg-opacity-40 py-2 px-4 text-sm transition-colors duration-200 hover:bg-cyan-700"
                >
                  {ctaLabel}
                </button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
