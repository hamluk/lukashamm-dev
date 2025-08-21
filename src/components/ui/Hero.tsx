import { useLanguage } from "../../context/LanguageContext";
import PrimaryButton from "../form/PrimaryButton";
import SecondaryButton from "../form/SecondaryButton";
import ProfilImage from "/assets/LukasHammProfil.jpeg";
import { motion } from "framer-motion";

function Hero({}: {}) {
  const { texts } = useLanguage();

  const scrollToProjects = () => {
    const section = document.getElementById("achievements");
    const header = document.getElementById("header");

    if (!section || !header) return;

    const headerHeight = header.clientHeight;

    const elementPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      const newElementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: newElementPosition - headerHeight,
        behavior: "smooth",
      });
    }, 40);
  };

  if (!texts) return <p>Loading Hero....</p>;

  return (
    <motion.section
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      className="flex flex-col lg:flex-row items-center bg-highlight-section inset-shadow-sm gap-10 text-dark-text sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] py-5 sm:py-10 md:py-15 px-7 xl:px-20 2xl:px-35"
    >
      <div className="flex flex-col gap-6 lg:gap-8 items-center">
        <div className="flex flex-col items-baseline gap-3 max-w-2xl">
          <div className="max-w-md sm:min-w-sm sm:max-w-lg">
            <h2 className="text-l sm:text-2xl font-semibold font-serif">
              {texts.homepageTexts.Hero.greeting_head}
            </h2>
            <h2 className="text-l sm:text-2xl font-semibold font-serif">
              {texts.homepageTexts.Hero.greeting_body}
            </h2>
            <h2 className="text-l sm:text-2xl font-semibold font-serif">
              {texts.homepageTexts.Hero.greeting_footer}
            </h2>
          </div>
          <div>
            <h4 className="sm:max-w-2xl text-base sm:text-xl h-55 sm:h-45 lg:h-65">
              {texts.homepageTexts.Hero.body}
            </h4>
            <h3 className="text-l italic">{texts.homepageTexts.Hero.footer}</h3>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="mailto:lukas@lukashamm.dev">
            <PrimaryButton
              title={texts.uiLabelsTexts.buttons.contact}
              addClassName="min-w-38"
            ></PrimaryButton>
          </a>
          <SecondaryButton
            title={texts.uiLabelsTexts.buttons.projects_link}
            handleClick={scrollToProjects}
            addClassName="min-w-30"
          ></SecondaryButton>
        </div>
      </div>

      <motion.img
        {...{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.2, ease: "easeInOut" },
        }}
        src={ProfilImage}
        alt="Image"
        className="object-cover shadow-md w-110 sm:w-110 lg:w-120 xl:w-130 2xl:w-140 rounded-md"
      ></motion.img>
    </motion.section>
  );
}

export default Hero;
