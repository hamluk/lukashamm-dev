import SectionIntro from "./SectionIntro";
import { useLanguage } from "../../context/LanguageContext";
import ApplicationEntry from "./ApplicationEntry";
import type { HomepageTexts } from "../../context/LanguageProvider";
import { BiSolidOffer } from "react-icons/bi";
import type { IconType } from "react-icons";
import { HiChatBubbleLeftRight, HiDocumentText } from "react-icons/hi2";
import { FaInstagram, FaUsers } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";

type Props = {};

type IconKey = "offer" | "chat" | "crm" | "integration" | "document" | "social";

function Applications({}: Props) {
  const { texts } = useLanguage();
  const homepageTexts: HomepageTexts = texts.homepageTexts;

  const iconMap: Record<IconKey, IconType> = {
    offer: BiSolidOffer,
    chat: HiChatBubbleLeftRight,
    crm: FaUsers,
    integration: VscServerProcess,
    document: HiDocumentText,
    social: FaInstagram,
  };
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-soft-blue/30 via-soft-blue/20 to-soft-blue/40">
      <SectionIntro
        head={texts.homepageTexts.Applications.intro_head}
        text={texts.homepageTexts.Applications.intro_text}
      />
      <div className="max-w-6xl mx-auto text-white w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
          {homepageTexts.Applications.cards.map(
            (entry: HomepageTexts["Applications"]["cards"][number]) => {
              const Icon = iconMap[entry.icon as IconKey];
              return (
                <ApplicationEntry
                  Icon={Icon}
                  title={entry.title}
                  text={entry.text}
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
