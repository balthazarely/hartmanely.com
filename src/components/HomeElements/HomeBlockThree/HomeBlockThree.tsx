import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./TextBlockThree.module.scss";

interface Category {
  image: string;
  heading: string;
  body: string;
  link: string;
}

function ImageBlock({ image, heading, body, link }: Category) {
  return (
    <div className="w-full text-center">
      <Link href={link}>
        <div className={clsx(styles.imageContainer, "group")}>
          <div className="absolute top-0 left-0 z-50 h-full w-full bg-cyan-600 opacity-0 transition-all duration-500 group-hover:opacity-30"></div>
          <Image
            height={400}
            width={400}
            className={clsx(styles.image, "object-cover group-hover:scale-110")}
            src={image}
            alt={heading}
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

export function HomeBlockThree({ categories }: { categories: Category[] }) {
  return (
    <div className={styles.HomeBlockThreeContainer}>
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <h5 className="mt-4">Portfolio</h5>
          <h2 className="mt-2 mb-4">Our Work</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {categories.map((cat, idx) => (
            <ImageBlock key={idx} {...cat} />
          ))}
        </div>
      </Container>
    </div>
  );
}
