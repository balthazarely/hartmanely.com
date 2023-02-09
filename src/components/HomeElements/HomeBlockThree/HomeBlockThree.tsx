import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import Link from "next/link";
import styles from "./TextBlockThree.module.scss";

function ImageBlock({ image, heading, body, link }: any) {
  return (
    <div className="w-full text-center">
      <Link href={link}>
        <div className={clsx(styles.imageContainer, "group")}>
          <div className="absolute top-0 left-0 z-50 h-full w-full bg-cyan-600 opacity-0 transition-all duration-500 group-hover:opacity-30"></div>
          <img
            className={clsx(styles.image, "group-hover:scale-110")}
            src={image}
          />
        </div>
      </Link>
      <Link href={link}>
        <h4 className="mt-2 cursor-pointer text-base">{heading}</h4>
      </Link>
      <p className="xsmall mt-2 ">{body}</p>
    </div>
  );
}

export function HomeBlockThree() {
  return (
    <div className={styles.HomeBlockThreeContainer}>
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <h5 className="mt-4">Portfolio</h5>
          <h2 className="mt-2 mb-4">Our Work</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ImageBlock
            image="/images/steam-plant/steam-plant-hero.jpg"
            heading="Redevelopment"
            link="/categories/redevelopment"
            body="Hartman Ely Investments is a Development and InvestmentHartman"
          />
          <ImageBlock
            image="/images/innovage-headquarters/innovage-headquarters-hero.jpg"
            heading="Consulting"
            link="/categories/consulting"
            body="Hartman Ely Investments is a Development and InvestmentHartman"
          />
          <ImageBlock
            image="/images/hanger2/hanger-2-gallery-3.jpg"
            heading="Renewable Energy"
            link="/categories/renewable-energy"
            body="Hartman Ely Investments is a Development and InvestmentHartman"
          />
        </div>
      </Container>
    </div>
  );
}
