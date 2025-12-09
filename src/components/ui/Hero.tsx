import { useLanguage } from "../../context/LanguageContext";
import PrimaryButton from "../form/PrimaryButton";
import SecondaryButton from "../form/SecondaryButton";
import ProfilImage from "/assets/LukasHamm.jpg";
import { motion } from "framer-motion";

function Hero({}: {}) {
  const { texts } = useLanguage();

  const scrollToProjects = (section_id: string) => {
    const section = document.getElementById(section_id);
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

  const handleSendEmail = () => {
    const mailtoLink = texts.uiLabelsTexts.buttons.discovery_link;
    window.location.href = mailtoLink;
  };

  if (!texts) return <p>Loading Hero....</p>;

  return (
    <motion.section
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      className="relative bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-center inset-shadow-sm gap-10 text-dark-text sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-130px)] py-5 sm:py-10 md:py-15 px-7 xl:px-20 2xl:px-35"
      style={{ backgroundImage: "url('/assets/hero_cover.jpeg')" }}
    >
      <motion.div
        {...{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        className="flex flex-col bg-highlight-section p-2.5 opacity-96 shadow-md rounded-lg gap-6 lg:gap-8 items-center"
      >
        <div className="flex flex-col items-baseline gap-2 max-w-2xl px-2">
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
            <h4 className="sm:max-w-2xl text-s sm:text-base md:text-lg sm:h-45 md:h-45 lg:h-65">
              {texts.homepageTexts.Hero.body}
            </h4>
            <div className="flex items-baseline justify-between">
              <h3 className="text-l italic pt-2">
                {texts.homepageTexts.Hero.footer}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex gap-6 flex-wrap items-center justify-center">
          <PrimaryButton
            title={texts.uiLabelsTexts.buttons.discovery}
            handleClick={handleSendEmail}
            section_id="packages"
            addClassName="min-w-38"
          ></PrimaryButton>
          <PrimaryButton
            title={texts.uiLabelsTexts.buttons.contact}
            handleClick={scrollToProjects}
            section_id="packages"
            addClassName="min-w-38"
          ></PrimaryButton>
          <SecondaryButton
            title={texts.uiLabelsTexts.buttons.projects_link}
            handleClick={scrollToProjects}
            section_id="about"
            addClassName="min-w-30"
          ></SecondaryButton>
        </div>
      </motion.div>

      <motion.img
        {...{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        src={ProfilImage}
        alt="Image"
        className="object-contain shadow-md w-65 sm:w-70 lg:w-90 xl:w-90 rounded-lg"
      ></motion.img>
    </motion.section>
  );
}

export default Hero;
