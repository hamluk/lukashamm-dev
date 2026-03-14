import SectionIntro from "./SectionIntro";
import { useLanguage } from "../../context/LanguageContext";
import ApplicationEntry from "./ApplicationEntry";
import type { HomepageTexts } from "../../context/LanguageProvider";
import { BiSolidOffer } from "react-icons/bi";
import type { IconType } from "react-icons";

type Props = {};

type IconKey = "offer" | "chat" | "crm" | "payment" | "document" | "social";

function Applications({}: Props) {
  const { texts } = useLanguage();
  const homepageTexts: HomepageTexts = texts.homepageTexts;

  const iconMap: Record<IconKey, IconType> = {
    offer: BiSolidOffer,
    chat: BiSolidOffer,
    crm: BiSolidOffer,
    payment: BiSolidOffer,
    document: BiSolidOffer,
    social: BiSolidOffer,
  };

  return (
    <section className="py-6">
      <SectionIntro head={texts.homepageTexts.About.intro_head} />
      <div className="text-white w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {homepageTexts.Applications.cards.map(
            (entry: HomepageTexts["Applications"]["cards"][number]) => {
              const Icon = iconMap[entry.icon as IconKey];
              return (
                <ApplicationEntry
                  Icon={Icon}
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
      </div>
    </section>
  );
}

export default Applications;
