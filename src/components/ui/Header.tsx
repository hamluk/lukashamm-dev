import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import PrimaryButton from "../form/PrimaryButton";
import scrollToSection from "../../hooks/scrollToSection";
import { useNavigate } from "react-router-dom";

export default function Header({}: {}) {
  const { texts } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      navigate("/#contact");
    }
  };

  const dynamicHeaderHeight = isLargeScreen
    ? isScrolled
      ? "8.25rem"
      : "8.25rem"
    : isScrolled
      ? "8.25rem"
      : "8.25rem";

  const dynamicPadding = isLargeScreen ? "4.5rem" : "1.75rem";

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
      id="header"
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
      className="flex justify-between items-center sticky top-0 z-50 text-olive-green bg-white shadow-md"
    >
      <motion.div
        {...{
          animate: {
            justifyContent: isScrolled ? "center" : "flex-start",
          },
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="flex flex-col h-auto"
      >
        <div className="flex items-center gap-4 lg:gap-10">
          <a
            href="/"
            className="text-5xl xl:text-7xl font-serif hover:cursor-pointer"
          >
            LH
          </a>
          <a
            href="/"
            className="hidden md:block text-3xl xl:text-5xl font-serif font-semibold text-olive-green hover:cursor-pointer"
          >
            {texts.homepageTexts.Header.head}
          </a>
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
            className="hidden lg:flex text-sm md:text-lg lg:text-xl xl:text-2xl text-wrap text-olive-green"
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
          className="flex flex-row items-center sm:flex-row gap-1 sm:gap-3"
        >
          <PrimaryButton
            title={texts.uiLabelsTexts.buttons.discovery}
            handleClick={handleContactClick}
            section_id="contact"
            addClassName="min-w-38 text-sm lg:text-base"
          ></PrimaryButton>
          <Links addClassName="hidden md:flex" />
        </motion.div>
      </div>
    </motion.header>
  );
}
