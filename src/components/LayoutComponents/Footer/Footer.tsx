import { Container } from "../Container";

export function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  console.log(getYear);

  return (
    <div className="bg-gray-900 ">
      <Container noPadding={true}>
        <div className="flex flex-col items-center justify-between py-8 md:flex-row">
          <p className="xsmall py-4 text-white">
            Copyright © {getYear()} Hartman Ely Investments. All rights
            reserved.
          </p>
          <div className="text-center md:text-right">
            <p className="xsmall text-white">Hartman Ely Investments</p>
            <p className="xsmall text-white">2120 Bluebell Ave</p>
            <p className="xsmall text-white">Boulder, CO 80302</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
