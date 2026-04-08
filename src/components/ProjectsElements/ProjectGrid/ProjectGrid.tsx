import { Container } from "@/components/LayoutComponents";
import { ProjectGridItem } from "@/lib/payload";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ProjectGrid.module.scss";

function ImageBlock({ thumbnail, name, type, link }: ProjectGridItem) {
  return (
    <div className="w-full text-center">
      <div className={clsx(styles.imageContainer, "group")}>
        <div aria-hidden="true" className="absolute top-0 left-0 z-50 h-full w-full bg-cyan-700 opacity-0 transition-all duration-500 group-hover:opacity-30"></div>
        <Image
          className={clsx(styles.image, "object-cover group-hover:scale-110")}
          src={thumbnail}
          alt={name}
          fill
        />
      </div>
      <Link href={link}>
        <h2 className="mt-2 cursor-pointer text-left text-base leading-tight tracking-wide">
          {name}
        </h2>
      </Link>
      <p className="xsmall mt-1 text-left capitalize">{type.replace("-", " ")}</p>
    </div>
  );
}

interface ProjectGridProps {
  projects: ProjectGridItem[];
  category: string;
}

export function ProjectGrid({ projects, category }: ProjectGridProps) {
  const [selected, setSelected] = useState<string>(category);

  useEffect(() => {
    setSelected(category);
  }, [category]);

  const filtered = projects.filter((p) => {
    if (selected === "all" || selected === "") return true;
    return p.type === selected;
  });

  function SelectSectionButton({ sectionName, label }: { sectionName: string; label: string }) {
    return (
      <button
        onClick={() => setSelected(sectionName)}
        className={clsx(
          selected === sectionName ? styles.sectionActive : "",
          "font-bold capitalize hover:text-cyan-800"
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <Container noPadding={true}>
      <div className={styles.ProjectGridContainer}>
        {category === "all" && (
          <div className="mb-8 flex flex-col items-center justify-start gap-4 sm:flex-row">
            <SelectSectionButton sectionName="all" label="all" />
            <SelectSectionButton sectionName="redevelopment" label="redevelopment" />
            <SelectSectionButton sectionName="renewable-energy" label="renewable energy" />
            <SelectSectionButton sectionName="consulting" label="consulting" />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {filtered.map((project) => (
            <ImageBlock key={project.link} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
