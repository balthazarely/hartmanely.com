import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="h-96 bg-red-100">
        <h1>Home</h1>
      </div>
      <div className="h-96 bg-blue-100">
        <h1>Home</h1>
      </div>
      <div className="h-96 bg-red-100">
        <h1>Home</h1>
      </div>
    </>
  );
}
