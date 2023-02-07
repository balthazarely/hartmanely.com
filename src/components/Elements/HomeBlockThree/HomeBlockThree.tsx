import { Container } from "@/components/LayoutComponents";
import styles from "./TextBlockThree.module.scss";

export function HomeBlockThree() {
  return (
    <div className={styles.HomeBlockThreeContainer}>
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <h5 className="mt-4">Portfolio</h5>
          <h2 className="mt-2 mb-4">Our Work</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="w-full text-center">
            <div className={styles.imageContainer}>
              <img className={styles.image} src="/images/fruitdale.jpg" />
            </div>
            <h4 className="mt-2">Redevelopment</h4>
            <p className="small mt-2">
              Hartman Ely Investments is a Development and InvestmentHartman E
            </p>
          </div>
          <div className="w-full text-center">
            <div className={styles.imageContainer}>
              <img className={styles.image} src="/images/fruitdale.jpg" />
            </div>
            <h4 className="mt-2"> Renewabled Energy</h4>
            <p className="small mt-2">
              Hartman Ely Investments is a Development and InvestmentHartman E
            </p>
          </div>
          <div className="w-full text-center">
            <div className={styles.imageContainer}>
              <img className={styles.image} src="/images/fruitdale.jpg" />
            </div>
            <h4 className="mt-2">Consulting</h4>
            <p className="small mt-2">
              Hartman Ely Investments is a Development and InvestmentHartman E
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
