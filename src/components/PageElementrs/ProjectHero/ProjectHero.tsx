import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";

export function ProjectHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className={styles.heroLargeContainer}>
        <img className={styles.HeroImage} src="/images/fruitdale.jpg" />
        {/* <div className="absolute top-0 left-0 h-full w-full  bg-sky-900 opacity-40 "></div> */}
      </div>
    </motion.div>
  );
}
