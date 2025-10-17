import ProgrammingSVG from "/assets/programming_illustration.svg";
import RemoteSVG from "/assets/remote_illustration.svg";
import { useLanguage } from "../../context/LanguageContext";

type Props = {};

function About({}: Props) {
  const { texts } = useLanguage();

  return (
    <section
      id="about"
      className="flex flex-col w-full items-center text-dark-text py-10"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center sm:flex-row px-2">
          <img
            src={ProgrammingSVG}
            className="object-contain aspect-1/1 w-20 sm:w-25 lg:w-30 xl:w-40"
          ></img>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-semibold max-w-110 lg:max-w-140  xl:max-w-160">
            <p>{texts.homepageTexts.About.head}</p>
            <p>{texts.homepageTexts.About.subhead}</p>
          </p>
          <img
            src={RemoteSVG}
            className="object-contain aspect-1/1 w-20 sm:w-25 lg:w-30 xl:w-40"
          ></img>
        </div>
        <p className="text-base lg:text-lg pt-4 px-5 max-w-200 lg:max-w-250">
          {texts.homepageTexts.About.body}
        </p>
      </div>
    </section>
  );
}

export default About;
