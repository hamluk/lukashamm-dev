import SectionIntro from "./SectionIntro";
import { useLanguage } from "../../context/LanguageContext";
import type { HomepageTexts } from "../../context/LanguageProvider";
import type { IconType } from "react-icons";
import { TbFilesOff, TbHourglassLow } from "react-icons/tb";
import { FaRegCalendarTimes } from "react-icons/fa";
import { PiTreeStructure } from "react-icons/pi";

type Props = {};

type IconKey = "hours" | "manual" | "change" | "slow";

function PainPoints({}: Props) {
  const { texts } = useLanguage();

  const iconMap: Record<IconKey, IconType> = {
    hours: FaRegCalendarTimes,
    manual: TbFilesOff,
    change: PiTreeStructure,
    slow: TbHourglassLow,
  };

  return (
    <section className="py-24 lg:py-32 text-dark-text">
      <SectionIntro
        head={texts.homepageTexts.PainPoints.intro_head}
        text={texts.homepageTexts.PainPoints.intro_text}
      />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full text-lg leading-relaxed">
        {texts.homepageTexts.PainPoints.pains.map(
          (entry: HomepageTexts["PainPoints"]["pains"][number]) => {
            const Icon = iconMap[entry.icon as IconKey];
            return (
              <div>
                <span className="flex felx-row text-sm md:text-base xl:text-lg font-semibold text-white bg-dark-blue-2 items-center py-3 px-5 gap-2 rounded-2xl">
                  {" "}
                  <Icon className="text-soft-blue shrink-0 mx-2 text-5xl" />
                  {entry.text}
                </span>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}

export default PainPoints;
