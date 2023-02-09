import styles from "./ProjectHero.module.scss";
import { motion } from "framer-motion";

export function ProjectHero({ heroImage }: { heroImage: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className={styles.heroLargeContainer}>
        <img className={styles.HeroImage} src={heroImage} />
      </div>
    </motion.div>
  );
}
