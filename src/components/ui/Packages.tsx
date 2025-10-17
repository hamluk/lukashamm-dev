import { useLanguage } from "../../context/LanguageContext";
import PackageEntry from "./PackageEntry";
import type { HomepageTexts } from "../../context/LanguageProvider";

type Props = {};

function Packages({}: Props) {
  const { texts } = useLanguage();

  const homepageTexts: HomepageTexts = texts.homepageTexts;

  return (
    <section
      id="packages"
      className="flex flex-col md:flex-row w-full items-center justify-center bg-highlight-section text-dark-text gap-3 lg:gap-5 py-10 px-5 sm:px-7 lg:px-10 2xl:px-25"
    >
      <div className="text-center md:text-left w-90 sm:w-130 md:w-100 lg:w-130">
        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-semibold">
          {texts.homepageTexts.Packages.head}
        </div>
        <p className="lg:text-lg pt-4  max-w-200 lg:max-w-250">
          {texts.homepageTexts.Packages.text}
        </p>
      </div>
      {homepageTexts.Packages.offers.map(
        (entry: HomepageTexts["Packages"]["offers"][number]) => {
          return (
            <PackageEntry
              title={entry.title}
              body={entry.body}
              img={entry.img}
              link_text={entry.link_text}
              link={entry.link}
            />
          );
        }
      )}
    </section>
  );
}

export default Packages;
