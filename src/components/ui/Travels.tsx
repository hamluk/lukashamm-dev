import { useLanguage } from "../../context/LanguageContext";
import homepageEN from "../../data/homepage-texts.en.json";
import TravelEntry from "./TravelEntry";

type TravelsType = typeof homepageEN.Travels;
type TravelEntryType = TravelsType[number];

function Travels({}: {}) {
  const { texts } = useLanguage();

  if (!texts) return <p>Loading Travels....</p>;

  const travels: TravelsType = texts.homepageTexts.Travels;

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-5 py-10 px-5 sm:px-10 lg:px-15 xl:px-20 2xl:px-25">
      {travels &&
        travels.map((entry: TravelEntryType) => (
          <TravelEntry
            key={entry.id}
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
