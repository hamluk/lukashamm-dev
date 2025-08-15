import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header({}: {}) {
  const { language, setLanguage, texts } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const dynamicHeaderHeight = isLargeScreen
    ? isScrolled
      ? "6.25rem"
      : "11.25rem"
    : isScrolled
    ? "6.25rem"
    : "6.25rem";

  const dynamicPadding = isLargeScreen ? "2.25rem" : "1.75rem";

  const dynamicDividerHeight = isLargeScreen
    ? isScrolled
      ? "4.5rem"
      : "6.5rem"
    : isScrolled
    ? "3.25rem"
    : "4.5rem";

  if (!texts) return <p>Loading Header....</p>;

  return (
    <motion.header
      {...{
        initial: {
          height: dynamicHeaderHeight,
          paddingLeft: dynamicPadding,
          paddingRight: dynamicPadding,
        },
        animate: {
          height: dynamicHeaderHeight,
          paddingLeft: dynamicPadding,
          paddingRight: dynamicPadding,
        },
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="flex justify-between items-center sticky top-0 z-50 text-olive-green bg-white shadow-md "
    >
      <motion.div
        {...{
          animate: {
            justifyContent: isScrolled ? "center" : "flex-start",
          },
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="flex flex-col h-auto lg:gap-1"
      >
        <div className="flex items-center gap-4 lg:gap-10">
          <h1 className="text-2xl lg:text-6xl font-serif ">LH</h1>
          <h1 className="text-2xl lg:text-4xl font-serif font-semibold text-dark-text">
            {texts.homepageTexts.Header.head}
          </h1>
        </div>
        <div>
          <motion.h2
            {...{
              animate: {
                opacity: isScrolled ? 0 : 1,
                y: isScrolled ? -20 : 0,
                height: isScrolled ? 0 : "auto",
              },
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="text-sm md:text-lg text-wrap text-dark-text"
          >
            {texts.homepageTexts.Header.description}
          </motion.h2>
        </div>
      </motion.div>

      <div className="flex items-center gap-2">
        <motion.div
          {...{
            animate: {
              height: dynamicDividerHeight,
            },
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="bg-gray-400 w-0.5"
        ></motion.div>
        <motion.div
          {...{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="flex flex-col sm:flex-row gap-1 sm:gap-3"
        >
          <a
            className="hover:cursor-pointer"
            href="https://github.com/hamluk"
            target="_blank"
          >
            <FaGithub className="sm:size-6" />
          </a>
          <a
            className="hover:cursor-pointer"
            href="https://www.linkedin.com/in/lukashamm-dev"
            target="_blank"
          >
            <FaLinkedin className="sm:size-6" />
          </a>
          <a className="hover:cursor-pointer" href="mailto:lukas@lukashamm.dev">
            <FaEnvelope className="sm:size-6" />
          </a>
          <button
            className="cursor-pointer text-xs sm:text-xl text-dark-blue font-bold rounded-md"
            onClick={() => {
              console.log("button clicked");
              setLanguage(language === "en" ? "de" : "en");
            }}
          >
            {texts.uiLabelsTexts.buttons.change_language}
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
