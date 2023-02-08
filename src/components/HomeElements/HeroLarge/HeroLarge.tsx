import styles from "./HeroLarge.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroLarge() {
  return (
    <div>
      <div className={styles.heroLargeContainer}>
        <img
          className={styles.HeroImage}
          src="images/fruitdale/fruitdale-hero.jpg"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 h-full w-full  bg-sky-900 opacity-40 "></div>
        </motion.div>
        <div className={styles.heroTitleWrapper}>
          <motion.div
            initial={{ opacity: 0, y: "20px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
          >
            <h1 className="uppercase tracking-wider text-white">
              Creating Sustainable Communities
            </h1>
            <Link href="/all-projects">
              <button className="mt-4 rounded-md border-2 border-white bg-gray-800 bg-opacity-40 py-2 px-4 text-sm transition-colors duration-200 hover:bg-cyan-600">
                See Our Work
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
