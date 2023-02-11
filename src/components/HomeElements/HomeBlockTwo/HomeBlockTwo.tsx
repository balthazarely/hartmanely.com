import { Container } from "@/components/LayoutComponents";

export function HomeBlockTwo() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
        <div>
          <img
            className=""
            src="/images/pancratia/pancratia-hero-cropped.jpg"
          />
        </div>
        <div>
          <h5 className="mt-2 text-center md:mt-0 md:text-left">About</h5>

          <h3 className="mt-2 mb-4 max-w-none text-center md:max-w-sm md:text-left">
            We specialize in the redevelopment of historic buildings.
          </h3>
          <p className="text-center md:text-left">
            Our redevelopments help create vibrant and sustainable communities,
            utilizing tax credits and other creative ways to reuse and adapt
            buildings. We are Architects by training so have extensive
            experience with conceptual design, budgeting and scheduling and can
            quickly analyze options in the early stages of a project.
          </p>
        </div>
      </div>
    </Container>
  );
}
