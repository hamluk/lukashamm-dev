import { useLanguage } from "../../context/LanguageContext";
import ProfilImage from "/assets/LukasHamm.jpg";
import SectionIntro from "./SectionIntro";

type Props = {};

function About({}: Props) {
  const { texts } = useLanguage();

  return (
    <>
      <SectionIntro
        head={texts.homepageTexts.About.intro_head}
        text={texts.homepageTexts.About.intro_text}
      />
      <section
        id="about"
        className="relative bg-cover bg-center items-center justify-around flex flex-col md:flex-row text-dark-text gap-3 py-10 px-5 sm:px-7 lg:px-10 2xl:px-25"
        style={{ backgroundImage: "url('/assets/package_cover.jpeg')" }}
      >
        <div className="flex flex-col gap-2 bg-highlight-section p-4 w-auto md:w-110 lg:w-130 xl:w-170 shadow-md rounded-lg">
          <h2 className="text-2xl text-dark-text font-semibold md:text-4xl font-serif">
            {texts.homepageTexts.About.head}
          </h2>
          <h4 className="text-lg md:text-xl">
            {texts.homepageTexts.About.body}
          </h4>
          <h4 className="text-lg md:text-xl">
            {texts.homepageTexts.About.sub_body}
          </h4>
          <h4 className="text-lg md:text-xl">
            {texts.homepageTexts.About.end_body}
          </h4>
          <div className="pt-1 text-lg md:text-2xl">
            <div className="flex flex-row justify-between items-center">
              <span>{texts.homepageTexts.About.cta}</span>
            </div>
          </div>
        </div>

        <img
          src={ProfilImage}
          alt="Image"
          className="object-contain shadow-md flex-1 max-w-80 overflow-auto rounded-xl"
        ></img>
      </section>
    </>
  );
}

export default About;
