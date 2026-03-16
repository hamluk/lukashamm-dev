import SectionIntro from "./SectionIntro";
import { useLanguage } from "../../context/LanguageContext";
import type { HomepageTexts } from "../../context/LanguageProvider";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";

type Props = {};

function PainPoints({}: Props) {
  const { texts } = useLanguage();

  return (
    <section className="py-24 lg:py-32 text-dark-text">
      <SectionIntro
        head={texts.homepageTexts.PainPoints.intro_head}
        text={texts.homepageTexts.PainPoints.intro_text}
      />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-lg leading-relaxed">
        {texts.homepageTexts.PainPoints.pains.map(
          (entry: HomepageTexts["PainPoints"]["pains"][number]) => (
            <div>
              <span className="flex felx-row font-semibold text-white bg-dark-blue-2 items-center my-2 py-3 px-6 gap-2 rounded-2xl">
                {" "}
                <HiMiniArrowTrendingDown className="text-soft-blue shrink-0 mt-1 text-7xl" />
                {entry}
              </span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default PainPoints;
