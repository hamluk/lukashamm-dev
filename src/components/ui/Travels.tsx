import hompageText from "../../data/homepage-texts.json";
import type { TravelsInterface } from "../../types/TravelInterface";
import TravelEntry from "./TravelEntry";
import VietnamImage from "../../assets/Vietnam.jpeg";
import SEAImage from "../../assets/SEA.jpeg";

const travels: TravelsInterface = hompageText.Travels;

type Props = {};

function Travels({}: Props) {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-5 sm:px-10 lg:px-30 xl:px-60 2xl:px-80">
      <TravelEntry
        header={travels["SEA-Travel"].head}
        body={travels["SEA-Travel"].body}
        image={SEAImage}
      />
      <TravelEntry
        header={travels["Vietnam"].head}
        body={travels["Vietnam"].body}
        image={VietnamImage}
      />
    </section>
  );
}

export default Travels;
