import { Container } from "@/components/LayoutComponents";

export function HomeBlockOne() {
  return (
    <Container>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
        <img className="order-2 md:order-1" src="/images/fruitdale.jpg" />
        <div className="order-1 flex flex-col gap-4 md:order-2">
          <h1 className="max-w-4xl text-center font-OpenSans text-2xl font-bold md:text-left">
            About Us
          </h1>
          <p className="text-md">
            Hartman Ely Investments is a Development and Investment Company that
            specializes in Sustainable Redevelopment and Renewable Energy.
            Hartman Ely Investments is a Development and Investment Company that
            specializes in Sustainable Redevelopment and Renewable Energy.
          </p>
          <p className="text-md ">
            Hartman Ely Investments is a Development and Investment Company that
            specializes in Sustainable Redevelopment and Renewable Energy.
          </p>
        </div>
      </div>

      {/* <div className="mx-auto mt-6 flex max-w-2xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-44 w-44  rounded-full bg-red-400 "></div>
          <h4 className="text-lg font-bold">Redevelopment</h4>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 h-44 w-44  rounded-full bg-red-400 "></div>
          <h4 className="text-lg font-bold">Renewable Energy</h4>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 h-44 w-44  rounded-full bg-red-400 "></div>
          <h4 className="text-lg font-bold">Consulting</h4>
        </div>
      </div> */}
    </Container>
  );
}
