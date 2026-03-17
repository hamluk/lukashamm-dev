import { useLanguage } from "../../context/LanguageContext";
import PackageEntry from "./PackageEntry";
import type { HomepageTexts } from "../../context/LanguageProvider";
import SectionIntro from "./SectionIntro";

type Props = {};

function Packages({}: Props) {
  const { texts } = useLanguage();
  const homepageTexts: HomepageTexts = texts.homepageTexts;

  return (
    <section
      id="packages"
      className="py-24 lg:py-32 bg-gradient-to-br from-soft-blue/30 via-soft-blue/20 to-soft-blue/40"
    >
      <SectionIntro
        head={texts.homepageTexts.Packages.intro_head}
        text={texts.homepageTexts.Packages.intro_text}
      />
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-6 items-center flex flex-col text-dark-text gap-3 lg:gap-5">
        {homepageTexts.Packages.offers.map(
          (entry: HomepageTexts["Packages"]["offers"][number]) => {
            return (
              <PackageEntry
                id={entry.id}
                title={entry.title}
                body={entry.body}
                list_1={entry.list_1}
                list_2={entry.list_2}
                list_3={entry.list_3}
                img={entry.img}
                button_text={entry.button_text}
              />
            );
          },
        )}
      </div>
    </section>
  );
}

export default Packages;
