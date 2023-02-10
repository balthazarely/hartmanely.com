import { Container } from "@/components/LayoutComponents";
import Link from "next/link";
import React from "react";

interface ProjectDetailsProps {
  title: string;
  tagline: string;
  location: string;
  aboutText: any;
  completedDate?: string;
  size?: string;
  projectType?: string;
  logo?: string;
  showSidePanel?: boolean;
}

export function ProjectDetails({
  title,
  tagline,
  location,
  aboutText,
  completedDate,
  size,
  projectType,
  logo,
  showSidePanel = true,
}: ProjectDetailsProps) {
  return (
    <Container noPadding={true} className="pt-10">
      <div className="mb-2 grid grid-cols-3 gap-8 pb-2 ">
        <div className="col-span-2">
          <h1 className="mt-2">{title}</h1>
          <p className="small mt-2 uppercase tracking-wider">{location}</p>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center">
            {logo && <img src={logo} className="h-20 object-contain" />}
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 gap-8  md:grid-cols-3">
        <div className="col-span-2 ">
          <h4 className="">{tagline}</h4>
          {aboutText?.map((text: string, idx: number) => {
            return (
              <p key={idx} className="small mt-2">
                {text}
              </p>
            );
          })}
        </div>
        {showSidePanel && (
          <div className="col-span-1 bg-slate-100 p-4">
            <div className="mb-4">
              <h5>Location</h5>
              <p className="small mt-1 font-medium">{location}</p>
            </div>
            <div className="mb-4">
              <h5>Date Completed</h5>
              <p className="small mt-1 font-medium">{completedDate}</p>
            </div>
            <div className="mb-4">
              <h5>Size</h5>
              <p className="small mt-1 font-medium">{size}</p>
            </div>
            {projectType && (
              <div className="mb-4">
                <h5>Project Type</h5>

                <Link
                  href={`/categories/${projectType
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <p className="link-small mt-1 font-medium">{projectType}</p>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
