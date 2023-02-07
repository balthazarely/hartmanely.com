import { Contact } from "@/components/Elements";
import {
  HomeBlockTwo,
  HeroLarge,
  HomeBlockMission,
  HomeBlockThree,
} from "@/components/HomeElements";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroLarge />
      <HomeBlockMission />
      <HomeBlockTwo />
      <HomeBlockThree />
      <Contact />
    </>
  );
}
