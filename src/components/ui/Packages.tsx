import { useLanguage } from "../../context/LanguageContext";
import PackageEntry from "./PackageEntry";
import type { HomepageTexts } from "../../context/LanguageProvider";
import SectionIntro from "./SectionIntro";

type Props = {};

function Packages({}: Props) {
  const { texts } = useLanguage();

  const homepageTexts: HomepageTexts = texts.homepageTexts;

  return (
    <div id="packages">
      <SectionIntro
        head={texts.homepageTexts.Packages.head}
        text={texts.homepageTexts.Packages.text}
      />
      <section className="items-center flex flex-col text-dark-text gap-3 lg:gap-5 px-5 pb-5 sm:px-7 lg:px-10 2xl:px-25">
        {homepageTexts.Packages.offers.map(
          (entry: HomepageTexts["Packages"]["offers"][number]) => {
            return (
              <PackageEntry
                id={entry.id}
                title={entry.title}
                body={entry.body}
                sub_body={entry.sub_body}
                img={entry.img}
                button_text={entry.button_text}
              />
            );
          },
        )}
      </section>
    </div>
  );
}

export default Packages;
