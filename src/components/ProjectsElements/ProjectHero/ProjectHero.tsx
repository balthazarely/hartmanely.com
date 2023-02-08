import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectHero() {
  return (
    <div>
      <div className={styles.heroLargeContainer}>
        <img
          className={styles.HeroImage}
          src="images/fruitdale/fruitdale-hero.jpg"
        />
        <div className="absolute top-0 left-0 h-full w-full  bg-sky-900 opacity-40 "></div>
        <div className={styles.heroTitleWrapper}>
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <h1 className="uppercase tracking-wider text-white">Projects</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
