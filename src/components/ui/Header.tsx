import { useLanguage } from "../../context/LanguageContext";
import Links from "./Links";
import PrimaryButton from "../form/PrimaryButton";
import scrollToSection from "../../hooks/scrollToSection";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

export default function Header({}: {}) {
  const { texts } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      navigate("/#contact");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const SCROLL_THRESHOLD = window.innerHeight - 150;

      if (currentScrollY < SCROLL_THRESHOLD) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!texts) return <p>Loading Header....</p>;
  return (
    <div
      className={`fixed top-4 left-0 w-full z-50 text-dark-text transition-transform duration-600 will-change-transform
    ${showHeader ? "translate-y-0" : "-translate-y-24"}
  `}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="bg-highlight-section rounded-2xl h-16 flex items-center justify-between shadow-lg px-5 lg:px-8 transition-all">
          {/* LEFT */}
          <div className="flex items-center shrink-0">
            <a
              href="/"
              className="text-olive-green text-5xl md:text-7xl font-serif hover:cursor-pointer"
            >
              LH
            </a>
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Links addClassName="flex text-2xl gap-3" />
            <PrimaryButton
              title={texts.uiLabelsTexts.buttons.discovery}
              handleClick={handleContactClick}
              section_id="contact"
              addClassName="min-w-38 text-base bg-highlight-accent"
            ></PrimaryButton>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>

          <div
            className={`fixed top-0 right-0 h-screen w-72 bg-highlight-section shadow-2xl p-6 flex flex-col gap-8 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              className="self-end text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              <HiOutlineX />
            </button>

            <div className="flex flex-col items-center gap-4 text-xl">
              <Links addClassName="flex flex-col gap-4 text-4xl" />
            </div>

            <PrimaryButton
              title={texts.uiLabelsTexts.buttons.discovery}
              handleClick={handleContactClick}
              section_id="contact"
              addClassName="min-w-38 text-base bg-highlight-accent"
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
