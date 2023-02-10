import { Container } from "../Container";

export function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="bg-gray-800 ">
      <Container noPadding={true}>
        <div className="flex flex-col items-center justify-between py-8 md:flex-row">
          <p className="xsmall inverse py-4 text-center text-white md:text-left">
            Copyright © {getYear()} Hartman Ely Investments. All rights
            reserved.
          </p>
          <div className="text-center md:text-right">
            <p className=" inverse xsmall text-white">
              Hartman Ely Investments
            </p>
            <p className="inverse xsmall text-white">2120 Bluebell Ave</p>
            <p className="inverse xsmall text-white">Boulder, CO 80302</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
