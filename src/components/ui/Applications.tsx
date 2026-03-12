import SectionIntro from "./SectionIntro";
import { useLanguage } from "../../context/LanguageContext";
import ApplicationEntry from "./ApplicationEntry";
import type { HomepageTexts } from "../../context/LanguageProvider";

type Props = {};

function Applications({}: Props) {
  const { texts } = useLanguage();
  const homepageTexts: HomepageTexts = texts.homepageTexts;

  return (
    <>
      <SectionIntro head={texts.homepageTexts.About.intro_head} />
      <section className="text-white w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {homepageTexts.Applications.cards.map(
            (entry: HomepageTexts["Applications"]["cards"][number]) => {
              return (
                <ApplicationEntry
                  title={entry.title}
                  text={entry.text}
                  before={entry.before}
                  after={entry.after}
                  examples={entry.examples}
                />
              );
            },
          )}
        </div>
      </section>
    </>
  );
}

export default Applications;
