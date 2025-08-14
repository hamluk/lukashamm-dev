import { useLanguage } from "../../context/LanguageContext";
import PrimaryButton from "../form/PrimaryButton";
import SecondaryButton from "../form/SecondaryButton";
import ProfilImage from "../../assets/LukasHammProfil.jpeg";

function Hero({}: {}) {
  const { language, setLanguage, texts } = useLanguage();

  if (!texts) return <p>Loading Hero....</p>;

  return (
    <section className="flex flex-col lg:flex-row items-center bg-highlight-section inset-shadow-sm gap-10 text-dark-text h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] py-5 sm:py-10 md:py-15 px-7 xl:px-20 2xl:px-35">
      <div className="flex flex-col gap-6 lg:gap-8 items-center">
        <div className="flex flex-col items-baseline gap-3 max-w-2xl">
          <div className="max-w-md sm:min-w-sm sm:max-w-lg">
            <h2 className="text-xl sm:text-2xl font-semibold font-serif">
              {texts.homepageTexts.Hero.greeting_head}
            </h2>
            <h2 className="text-xl sm:text-2xl font-semibold font-serif">
              {texts.homepageTexts.Hero.greeting_body}
            </h2>
            <h2 className="text-xl sm:text-2xl font-semibold font-serif">
              {texts.homepageTexts.Hero.greeting_footer}
            </h2>
          </div>
          <h4 className="sm:max-w-2xl text-base sm:text-xl">
            {texts.homepageTexts.Hero.body}
          </h4>
          <h3 className="text-l italic">{texts.homepageTexts.Hero.footer}</h3>
        </div>

        <div className="flex gap-6">
          <PrimaryButton
            title={texts.uiLabelsTexts.buttons.contact}
          ></PrimaryButton>
          <SecondaryButton
            title={texts.uiLabelsTexts.buttons.projects_link}
          ></SecondaryButton>
        </div>
      </div>

      <img
        src={ProfilImage}
        alt="Image"
        className="object-cover shadow-md w-110 sm:w-110 lg:w-120 xl:w-130 2xl:w-140 rounded-md"
      ></img>
    </section>
  );
}

export default Hero;
