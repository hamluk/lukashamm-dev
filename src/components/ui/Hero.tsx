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
      className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center inset-shadow-sm gap-10 text-dark-text sm:h-[calc(100vh-100px)] py-5 sm:py-10 md:py-15 px-7 xl:px-20 2xl:px-35"
      style={{ backgroundImage: "url('/assets/hero_cover.jpeg')" }}
    >
      <motion.div
        {...{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        className="flex flex-col bg-highlight-section my-8 p-2.5 shadow-md rounded-lg gap-4 lg:gap-8 items-center"
      >
        <div className="flex flex-col items-baseline gap-6 md:gap-2 px-2 md:w-2xl xl:w-4xl">
          <div className="">
            <h2 className="text-4xl lg:mb-8 text-dark-text font-semibold md:text-4xl xl:text-5xl font-serif">
              {texts.homepageTexts.Hero.greeting_head}
            </h2>
          </div>
          <div>
            <h4 className="text-2xl lg:mb-2 md:text-2xl xl:text-3xl">
              {texts.homepageTexts.Hero.body}
            </h4>
          </div>
          <div className="text-xl md:text-xl xl:text-2xl font-bold">
            <ul>
              <li>
                <span className="flex felx-row items-start gap-2">
                  <HiArrowRight className="shrink-0 mt-1" />{" "}
                  {texts.homepageTexts.Hero.list_1}
                </span>
              </li>
              <li>
                <span className="flex felx-row items-start gap-2">
                  <HiArrowRight className="shrink-0 mt-1" />{" "}
                  {texts.homepageTexts.Hero.list_2}
                </span>
              </li>
              <li>
                <span className="flex felx-row items-start gap-2">
                  <HiArrowRight className="shrink-0 mt-1" />{" "}
                  {texts.homepageTexts.Hero.list_3}
                </span>
              </li>
              <li>
                <span className="flex felx-row items-start gap-2">
                  <HiArrowRight className="shrink-0 mt-1" />{" "}
                  {texts.homepageTexts.Hero.list_4}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center justify-center">
          <PrimaryButton
            title={texts.uiLabelsTexts.buttons.discovery}
            handleClick={scrollToSection}
            section_id="contact"
            addClassName="min-w-38 text-sm lg:text-base"
          ></PrimaryButton>
          <SecondaryButton
            handleClick={scrollToSection}
            section_id="packages"
            title={texts.uiLabelsTexts.buttons.contact}
            addClassName="min-w-38 text-sm lg:text-base"
          ></SecondaryButton>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
