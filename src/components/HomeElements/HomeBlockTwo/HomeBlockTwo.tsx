import { Container } from "@/components/LayoutComponents";

export function HomeBlockTwo() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <img className="" src="/images/pancratia/pancratia-gallery-1.jpg" />
        </div>
        <div>
          <h5 className="mt-4 text-center md:text-left">About</h5>

          <h3 className="mt-2 mb-4 text-center md:text-left">
            Hartman Ely Investments is a Development and Investment
          </h3>
          <p className="text-center md:text-left">
            Hartman Ely Investments is a Development and InvestmentHartman Ely
            Investments is a Development and InvestmentHartman Ely Investments
            is a Development and InvestmentHartman Ely Investments is a
            Development and Investment
          </p>
        </div>
      </div>
    </Container>
  );
}
