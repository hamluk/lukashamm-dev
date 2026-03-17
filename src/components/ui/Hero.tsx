import { PiArrowCircleDownFill } from "react-icons/pi";
import { useLanguage } from "../../context/LanguageContext";
import scrollToSection from "../../hooks/scrollToSection";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";

function Hero({}: {}) {
  const { texts } = useLanguage();
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBounce(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!texts) return <p>Loading Hero....</p>;

  return (
    <motion.section
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      className="relative bg-cover bg-center bg-no-repeat inset-shadow-sm text-dark-text min-h-screen flex items-center"
      style={{ backgroundImage: "url('/assets/hero_cover.jpeg')" }}
    >
      <motion.div
        {...{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
        className=" bg-highlight-section w-auto mx-6 lg:mx-auto px-6 py-10 shadow-md rounded-lg items-center my-23 md:my-0 translate-y-0 md:-translate-y-4 xl:-translate-y-8"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-3xl font-serif font-semibold tracking-tight">
            <span>{texts.homepageTexts.Hero.greeting_head}</span>
            <span className=" text-highlight-accent">
              {texts.homepageTexts.Hero.greeting_head_color}
            </span>
          </h2>
          <div>
            <h4 className="max-w-2xl text-xl md:text-xl xl:text-2xl">
              {texts.homepageTexts.Hero.body}
            </h4>
          </div>
          <ul className="max-w-xl text-base lg:text-lg font-bold text-muted leading-relaxed">
            <li>
              <span className="flex felx-row items-start gap-2">
                <HiArrowRight className="shrink-0 mt-1.5" />{" "}
                {texts.homepageTexts.Hero.list_1}
              </span>
            </li>
            <li>
              <span className="flex felx-row items-start gap-2">
                <HiArrowRight className="shrink-0 mt-1.5" />{" "}
                {texts.homepageTexts.Hero.list_2}
              </span>
            </li>
            <li>
              <span className="flex felx-row items-start gap-2">
                <HiArrowRight className="shrink-0 mt-1.5" />{" "}
                {texts.homepageTexts.Hero.list_3}
              </span>
            </li>
            <li>
              <span className="flex felx-row items-start gap-2">
                <HiArrowRight className="shrink-0 mt-1.5" />{" "}
                {texts.homepageTexts.Hero.list_4}
              </span>
            </li>
            <li>
              <span className="flex felx-row items-start gap-2">
                <HiArrowRight className="shrink-0 mt-1.5" />{" "}
                {texts.homepageTexts.Hero.list_5}
              </span>
            </li>
          </ul>
        </div>

        <PiArrowCircleDownFill
          className={`w-full m-auto text-5xl text-highlight-accent hover:text-dark-blue-2 hover:cursor-pointer 
              ${bounce ? "animate-bounce" : ""}
            `}
          onClick={() => scrollToSection("packages")}
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
