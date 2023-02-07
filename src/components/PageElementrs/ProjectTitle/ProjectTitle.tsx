import { Container } from "@/components/LayoutComponents";
import React from "react";

export function ProjectTitle() {
  return (
    <Container noPadding={true} className="py-8">
      <h1 className="font-OpenSans text-2xl  font-bold md:text-3xl">
        Fruitdale Lofts
      </h1>
      <p className=" font-OpenSans text-sm uppercase">Denver, CO</p>
      <div className="mt-10">
        <p className="font-bold text-gray-500">Type</p>
      </div>
    </Container>
  );
}
