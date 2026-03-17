import { useLanguage } from "../../context/LanguageContext";
import Links from "./Links";
import PrimaryButton from "../form/PrimaryButton";
import scrollToSection from "../../hooks/scrollToSection";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function Header({}: {}) {
  const { texts } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      navigate("/#contact");
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full z-50 text-dark-text transition-transform duration-600 will-change-transform">
      <div className="mx-auto w-full bg-highlight-section shadow-lg">
        <div className=" h-16 flex items-center justify-between py-10 px-5 max-w-7xl m-auto transition-all">
          <div className="flex items-center shrink-0">
            <a
              href="/"
              className="text-olive-green text-5xl md:text-7xl font-serif hover:cursor-pointer"
            >
              LH
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Links addClassName="flex text-2xl gap-3" />
            <PrimaryButton
              title={texts.uiLabelsTexts.buttons.discovery}
              handleClick={handleContactClick}
              section_id="contact"
              addClassName="min-w-38 text-base bg-highlight-accent text-white"
            ></PrimaryButton>
          </div>

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
              addClassName="min-w-38 text-base bg-highlight-accent text-white"
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
