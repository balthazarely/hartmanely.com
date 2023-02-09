import { Container } from "@/components/LayoutComponents";

export function HomeBlockOne() {
  return (
    <Container>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
        <img className="order-2 md:order-1" src="/images/fruitdale.jpg" />
        <div className="order-1 flex flex-col gap-4 md:order-2">
          <h1 className="font-OpenSans max-w-4xl text-center text-2xl font-bold md:text-left">
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
    </Container>
  );
}
