import { Container } from "@/components/LayoutComponents";
import clsx from "clsx";
import { useState } from "react";
import styles from "./ProjectGrid.module.scss";

interface ProjectProps {
  name: string;
  img: string;
  type: string;
}

const projects = [
  {
    name: "Pancratia Hall Lofts",
    img: "/images/pancratia/pancratia-hero.jpg",
    type: "redevelopment",
  },
  {
    name: "Fruitdale School Lofts",
    img: "/images/fruitdale/fruitdale-hero.jpg",
    type: "redevelopment",
  },
  {
    name: "Eiber Village at Garrison Station",
    img: "/images/eiber-village/eiber-village-hero.jpg",
    type: "redevelopment",
  },
  {
    name: "Hanger 2 Lowry",
    img: "/images/hanger2/hanger-2-hero.jpeg",
    type: "redevelopment",
  },
  {
    name: "Steam Plant Lofts",
    img: "/images/steam-plant/steam-plant-hero.jpg",
    type: "redevelopment",
  },
  {
    name: "Steam Plant Row Homes",
    img: "/images/steam-plant-row-homes/steam-plant-row-homes-hero.jpg",
    type: "redevelopment",
  },
  {
    name: "Boulder Wastewater Treatment Facility",
    img: "/images/boulder-wastewater-treatment-facility/boulder-wastewater-treatment-facility-hero.jpeg",
    type: "renewable energy",
  },
  {
    name: "Community Solar",
    img: "/images/community-solar/community-solar-hero.jpg",
    type: "renewable energy",
  },
  {
    name: "Western Hotel",
    img: "/images/western-hotel/western-hotel-hero.jpg",
    type: "consulting",
  },
  {
    name: "Innovage Headquarters",
    img: "/images/innovage-headquarters/innovage-headquarters-hero.jpg",
    type: "consulting",
  },
  {
    name: "Courtyard by Marriott Hotel",
    img: "/images/courtyard-by-marriott-hotel/courtyard-by-marriott-hotel-hero.jpg",
    type: "consulting",
  },
  {
    name: "Boston Lofts",
    img: "/images/boston-lofts/boston-lofts-hero.jpg",
    type: "consulting",
  },
  {
    name: "The Bank Lofts",
    img: "/images/the-bank-lofts/the-bank-lofts-hero.jpg",
    type: "consulting",
  },
];

function ImageBlock({ img, name, type }: ProjectProps) {
  return (
    <div className="w-full text-center">
      <div className={clsx(styles.imageContainer, "group")}>
        <div className="absolute top-0 left-0 z-50 h-full w-full bg-cyan-600 opacity-0 transition-all duration-500 group-hover:opacity-30"></div>
        <img
          className={clsx(styles.image, "group-hover:scale-110")}
          src={img}
        />
      </div>
      <h4 className=" mt-2 cursor-pointer text-left text-base leading-tight tracking-wide">
        {name}
      </h4>
      <p className="xsmall mt-1 text-left capitalize ">{type}</p>
    </div>
  );
}

export function ProjectGrid() {
  const [selected, setSelected] = useState("all");

  let projectData = projects.filter((project: ProjectProps) => {
    if (selected === "all" || selected === "") {
      return projects;
    }
    if (selected !== "all") {
      return project.type === selected;
    }
  });

  function SelectSectionButton({ sectionName }: { sectionName: string }) {
    return (
      <button
        onClick={() => setSelected(sectionName)}
        className={clsx(
          selected === sectionName ? styles.sectionActive : "",
          "font-bold  capitalize hover:text-cyan-800"
        )}
      >
        {sectionName}
      </button>
    );
  }

  return (
    <Container noPadding={true}>
      <div className={styles.ProjectGridContainer}>
        <div className="mb-8 mt-8 flex items-center justify-start gap-4">
          <SelectSectionButton sectionName="all" />
          <SelectSectionButton sectionName="redevelopment" />
          <SelectSectionButton sectionName="renewable energy" />
          <SelectSectionButton sectionName="consulting" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {projectData?.map((project: ProjectProps) => (
            <ImageBlock
              key={project.name}
              name={project.name}
              img={project.img}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
