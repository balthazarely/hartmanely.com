import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  HomeBlockOne,
  HomeBlockTwo,
  HomeBlockAbout,
  HeroLarge,
  HomeBlockMission,
  HomeBlockThree,
  Contact,
} from "@/components/Elements";
// import "./styles.css";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroLarge />
      <HomeBlockMission />
      <HomeBlockTwo />
      <HomeBlockThree />
      <Contact />
      {/* <HomeBlockAbout /> */}
    </>
  );
}
