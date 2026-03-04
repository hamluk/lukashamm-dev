import { useLanguage } from "../../context/LanguageContext";
import scrollToSection from "../../hooks/scrollToSection";
import PrimaryButton from "../form/PrimaryButton";
import SecondaryButton from "../form/SecondaryButton";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

function Hero({}: {}) {
  const { texts } = useLanguage();

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
        className="flex flex-col bg-highlight-section p-2.5 shadow-md rounded-lg gap-6 lg:gap-8 items-center"
      >
        <div className="flex flex-col items-baseline gap-2 px-2">
          <div className="lg:max-w-250">
            <h2 className="text-2xl text-dark-text font-semibold sm:text-7xl font-serif">
              {texts.homepageTexts.Hero.greeting_head}
            </h2>
          </div>
          <div>
            <h4 className="text-s sm:text-base md:text-lg lg:text-2xl">
              {texts.homepageTexts.Hero.body}
            </h4>
          </div>
          <div className="text-s sm:text-base md:text-xl font-bold">
            <ul>
              <li>
                <span className="flex felx-row items-center gap-2">
                  <HiArrowRight /> {texts.homepageTexts.Hero.list_1}
                </span>
              </li>
              <li>
                <span className="flex felx-row items-center gap-2">
                  <HiArrowRight /> {texts.homepageTexts.Hero.list_2}
                </span>
              </li>
              <li>
                <span className="flex felx-row items-center gap-2">
                  <HiArrowRight /> {texts.homepageTexts.Hero.list_3}
                </span>
              </li>
              <li>
                <span className="flex felx-row items-center gap-2">
                  <HiArrowRight /> {texts.homepageTexts.Hero.list_4}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <PrimaryButton
            title={texts.uiLabelsTexts.buttons.discovery}
            handleClick={scrollToSection}
            section_id="contact"
            addClassName="min-w-38 "
          ></PrimaryButton>
          <SecondaryButton
            handleClick={scrollToSection}
            section_id="packages"
            title={texts.uiLabelsTexts.buttons.contact}
            addClassName="min-w-38"
          ></SecondaryButton>
        </div>
      </motion.div>

      {/* <motion.img
        {...{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        src={texts.homepageTexts.Hero.img}
        alt="Image"
        className="object-contain flex-1 rounded-lg max-w-150"
      ></motion.img> */}
    </motion.section>
  );
}

export default Hero;
