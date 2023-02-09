import styles from "./HeroLarge.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function HeroLarge() {
  return (
    <div>
      <div className={styles.heroLargeContainer}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={styles.HeroImage}
          src="images/fruitdale/fruitdale-hero.jpg"
        />
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="absolute top-0 left-0 h-full w-full  bg-sky-900 opacity-40 "></div>
        </motion.div>
        <motion.div
          className={styles.heroTitleWrapper}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h1 className="uppercase tracking-wider text-white">
              Creating Sustainable Communities
            </h1>
          </motion.div>
          <motion.div variants={item}>
            <Link href="/all-projects">
              <button className="mt-4 rounded-md border-2 border-white bg-gray-800 bg-opacity-40 py-2 px-4 text-sm transition-colors duration-200 hover:bg-cyan-600">
                See Our Work
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
