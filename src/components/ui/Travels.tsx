import hompageText from "../../data/homepage-texts.json";
import type { TravelEntriesType } from "../../types/TravelInterface";
import TravelEntry from "./TravelEntry";

const travels: TravelEntriesType = hompageText.Travels;

type Props = {};

function Travels({}: Props) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-5 py-10 px-5 sm:px-10 lg:px-15 xl:px-20 2xl:px-25">
      {travels &&
        travels.map((entry) => (
          <TravelEntry
            header={entry.head}
            body={entry.body}
            dates={entry.dates}
            subbody={entry.subbody}
            image={entry.img}
          />
        ))}
    </section>
  );
}

export default Travels;
