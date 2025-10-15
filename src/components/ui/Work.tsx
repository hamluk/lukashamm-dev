import { useLanguage } from "../../context/LanguageContext";
import {
  type HomepageTexts,
  type UILabelsTexts,
} from "../../context/LanguageProvider";
import WorkEntry from "./WorkEntry";

export default function Work({}: {}) {
  const { texts } = useLanguage();

  if (!texts) return <p>Loading Work....</p>;

  const homepageTexts: HomepageTexts = texts.homepageTexts;
  const uiLabelsTexts: UILabelsTexts = texts.uiLabelsTexts;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-20 py-10 px-10 lg:px-15 xl:px-20 2xl:px-25">
      {homepageTexts.Work &&
        uiLabelsTexts &&
        homepageTexts.Work.map((entry: HomepageTexts["Work"][number]) => {
          return (
            <WorkEntry
              key={entry.id}
              header={entry.head}
              body={entry.body}
              dates={entry.dates}
              subbody={entry.subbody}
              image={entry.img}
              link={entry.link}
              discover_text={uiLabelsTexts.buttons.discover}
            />
          );
        })}
    </section>
  );
}
