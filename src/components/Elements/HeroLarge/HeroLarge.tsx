import styles from "./HeroLarge.module.scss";
import { motion } from "framer-motion";

export function HeroLarge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className={styles.heroLargeContainer}>
        <img className={styles.HeroImage} src="images/fruitdale.jpg" />
        <div className="absolute top-0 left-0 h-full w-full  bg-sky-900 opacity-40 "></div>
        <div className={styles.heroTitleWrapper}>
          <h1 className="text-3xl font-bold lg:text-5xl ">
            Creating Sustainable Communities
          </h1>

          <div className="flex justify-center gap-3 border-2 border-red-400 p-2">
            <div className="w-32 border-2 border-white py-2 px-6 text-sm font-bold">
              Our Work
            </div>
            <div className="w-32 border-2 border-white py-2 px-6 text-sm font-bold">
              Contact
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
