import { Container } from "@/components/LayoutComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectDetailsProps {
  title: string;
  tagline: string;
  location: string;
  completedDate?: string;
  size?: string;
  projectType?: string;
  logo?: string;
  showSidePanel?: boolean;
  children: any;
  website?: string;
}

export function ProjectDetails({
  title,
  tagline,
  location,
  completedDate,
  size,
  projectType,
  logo,
  showSidePanel = true,
  children,
  website,
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
            {logo && (
              <Image
                alt="logo"
                src={logo}
                width={200}
                height={100}
                className="h-20 object-contain"
              />
            )}
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 gap-8  md:grid-cols-3">
        <div className="col-span-2 ">
          <h4 className="">{tagline}</h4>
          {children}
        </div>
        {showSidePanel && (
          <div className="col-span-1 bg-slate-100 p-4">
            <div className="mb-4">
              <h5>Location</h5>
              <p className="small mt-1 font-medium">{location}</p>
            </div>
            <div className="mb-4">
              <h5>Year Completed</h5>
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
            {website && (
              <div className="mb-4">
                <h5>Website</h5>
                <a
                  rel="noreferrer"
                  href="https://hangar2lowry.com/"
                  target="_BLANK"
                >
                  <p className="small link-small mt-1 font-medium">
                    Hanger 2 at Lowry
                  </p>
                </a>{" "}
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
