import { IoLanguage } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { useLanguage, type Language } from "../../context/LanguageContext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function LanguageDropdown({}: Props) {
  const { language, setLanguage, texts } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const options = [
    { value: "en", label: "EN" },
    { value: "de", label: "DE" },
  ];

  const handleSelect = (value: string) => {
    setLanguage(value as Language);
    setOpen(false);
  };

  return (
    <div className="bg-highlight-section rounded-md">
      <div className="relative text-left">
        <button
          className="flex items-center p-0.5 shadow-inner cursor-pointer text-xs sm:text-xl text-dark-blue font-bold rounded-md"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {/* {texts.uiLabelsTexts.buttons.change_language} */}
          <IoLanguage className="size-4 sm:size-6" />
          <TiArrowSortedDown />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div className="flex flex-col items-baseline absolute pl-1 bg-highlight-section w-full">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                >
                  <div
                    className={`text-sm sm:text-base hover:cursor-pointer ${
                      language === option.value
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {option.label}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
