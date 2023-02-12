import { Container } from "@/components/LayoutComponents";
import { projects } from "@/lib/projects";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ProjectGrid.module.scss";

interface ProjectProps {
  name: string;
  img: string;
  type: string;
  link: string;
}

function ImageBlock({ img, name, type, link }: ProjectProps) {
  return (
    <div className="w-full text-center">
      <div className={clsx(styles.imageContainer, "group")}>
        <Link href={link}>
          <div className=" absolute top-0 left-0 z-50 h-full w-full bg-cyan-600 opacity-0 transition-all duration-500 group-hover:opacity-30"></div>
        </Link>
        <Image
          className={clsx(styles.image, "object-cover group-hover:scale-110")}
          src={img}
          alt={name}
          fill
        />
      </div>
      <Link href={link}>
        <h4 className=" mt-2 cursor-pointer text-left text-base leading-tight tracking-wide">
          {name}
        </h4>
      </Link>
      <p className="xsmall mt-1 text-left capitalize ">{type}</p>
    </div>
  );
}

export function ProjectGrid({ category }: { category: string }) {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setSelected(category);
  }, [category]);

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
        {category === "all" ? (
          <div className="mb-8  flex flex-col items-center justify-start gap-4 sm:flex-row ">
            <SelectSectionButton sectionName="all" />
            <SelectSectionButton sectionName="redevelopment" />
            <SelectSectionButton sectionName="renewable energy" />
            <SelectSectionButton sectionName="consulting" />
          </div>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-2 gap-4  md:grid-cols-3">
          {projectData?.map((project: ProjectProps) => (
            <ImageBlock
              key={project.name}
              name={project.name}
              img={project.img}
              type={project.type}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
