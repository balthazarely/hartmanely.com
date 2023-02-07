import { Container } from "@/components/LayoutComponents";
import React from "react";

export function ProjectDetails() {
  return (
    <Container noPadding={true} className="pt-10">
      <h1 className="mt-2">Fruitdale Lofts</h1>
      <p className="small mt-2 uppercase tracking-wider">Denver, CO</p>
      <div className="grid  grid-cols-1 gap-8  md:grid-cols-3">
        <div className="col-span-2">
          <p className="mt-8">
            A public/private partnership between Fruitdale School Partners, The
            City of Wheat Ridge and The Wheat Ridge Housing Authority created a
            unique residential community of 16 affordable rental apartments.
            Historic interior features such as huge operable windows, high
            ceilings,chalk boards and basketball hoops from the prior school are
            featured.
          </p>
          <p className="mt-4">
            The entire property is solar-powered and has numerous energy
            efficiency features to minimize operational costs as well as to
            provide community education on sustainable development. The site
            includes a fruit orchard, low-water-use edible landscaping and free
            electric vehicle charging.
          </p>
        </div>
        <div className="col-span-1 bg-slate-100 p-4">
          <div className="mb-4">
            <h5>Location</h5>
            <p className=" mt-1 font-medium">Denver, CO</p>
          </div>
          <div className="mb-4">
            <h5>Date Completed</h5>
            <p className="xsmall mt-1 font-medium">1/10/23</p>
          </div>
          <div className="mb-4">
            <h5>Size</h5>
            <p className="xsmall mt-1 font-medium">120,000 Sq. Ft.</p>
          </div>
          <div className="mb-4">
            <h5>Project Type</h5>
            <p className="xsmall mt-1 font-medium">Redevlopement</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3>Awards</h3>
        <p className="small mt-1 font-medium italic">
          2018 Community Development award: National Association of Housing and
          Redevelopment Officials
        </p>
        <p className="small mt-2 font-medium italic">
          2018 Residential Development that Overcame Significant Obstacles
          award: Novogradac & Company
        </p>
        <p className="small mt-2 font-medium italic">
          2018 Reinvestment Award & Special Congressional Recognition: City of
          Wheat Ridge and US Congressman Ed Perlmutter
        </p>
      </div>
    </Container>
  );
}
