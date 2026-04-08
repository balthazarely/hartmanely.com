import { Container } from "@/components/LayoutComponents";
import Image from "next/image";

interface HomeBlockTwoProps {
  image: string;
  heading: string;
  body: string;
}

export function HomeBlockTwo({ image, heading, body }: HomeBlockTwoProps) {
  return (
    <Container>
      <div className="grid grid-cols-1 relative gap-6 md:grid-cols-2">
        <div className="">
          <Image
            width={400}
            height={400}
            className="order-2 w-full h-full object-cover md:order-1"
            src={image}
            alt={heading}
          />
        </div>
        <div>
          <p className="mt-2 text-center md:mt-0 md:text-left text-sm font-bold tracking-wider uppercase text-cyan-700">About</p>
          <h3 className="mt-2 mb-4 max-w-none text-center md:max-w-sm md:text-left">
            {heading}
          </h3>
          <p className="text-center md:text-left">{body}</p>
        </div>
      </div>
    </Container>
  );
}
