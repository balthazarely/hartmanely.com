import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import styles from "./HomeBlockAbout.module.scss";

function ImageBlock({ image, heading, body }: any) {
  return (
    <div className="w-full text-center">
      <div className={clsx(styles.imageContainer, "group")}>
        <img
          className={clsx(styles.image, "group-hover:scale-110")}
          src={image}
        />
      </div>
      <h4 className="mt-2 cursor-pointer text-base ">{heading}</h4>
      <p className="small mt-2 text-left">{body}</p>
    </div>
  );
}

export function HomeBlockAbout() {
  return (
    <div className={styles.HomeBlockAboutContainer}>
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <h5 className="mt-4">About</h5>
          <h2 className="mt-2 mb-4">Our Team</h2>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-start  ">
            <div className={clsx(styles.imageContainer)}>
              <img
                className={clsx(styles.image)}
                src="/headshots/james-hartman.jpg"
              />
            </div>
            <div>
              <h4 className="cursor-pointertext-center mt-2 text-center">
                James Hartman
              </h4>
              <p className="small mt-2 text-center ">
                Jim is one of Colorado's leading experts with historic building
                redevelopment, urban infill development and renewable energy.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start  ">
            <div className={clsx(styles.imageContainer)}>
              <img
                className={clsx(styles.image)}
                src="/headshots/susan-ely.jpg"
              />
            </div>
            <div>
              <h4 className="mt-2 cursor-pointer text-center text-base ">
                Susan Ely
              </h4>
              <p className="small mt-2 text-center ">
                Susan is a trained architect and is HEI's Business Manager, is
                in charge of all administrative efforts of the company.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
