import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { HomepageTexts } from "../../context/LanguageProvider";
import { AnimatePresence, motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function FAQ() {
  const { texts } = useLanguage();
  const homepageTexts: HomepageTexts = texts.homepageTexts;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <SectionIntro
        head={texts.homepageTexts.FAQ.intro_head}
        text={texts.homepageTexts.FAQ.intro_text}
      />
      <section className="w-full bg-gradient-to-br from-[#84a8b8]/30 via-[#84a8b8]/20 to-[#84a8b8]/40 text-dark-text px-5 py-5 sm:px-7 lg:px-10 2xl:px-25">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {homepageTexts.FAQ.questions.map(
            (
              item: HomepageTexts["FAQ"]["questions"][number],
              index: number,
            ) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className={`w-sm sm:w-xl md:w-2xl lg:w-4xl xl:w-6xl rounded-xl
                    ${isOpen ? "bg-light-green shadow-md" : "bg-white"}
                    `}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-4 flex gap-3 justify-between items-center"
                  >
                    <span className="font-semibold text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-serif text-dark-text">
                      {item.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <span className="text-lg md:text-2xl text-olive-green">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="bg-dark-text border-t mx-5 mb-2"></div>
                        <div className="px-6 pb-6 text-base sm:text-lg md:text-lg leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            },
          )}
        </div>
      </section>
    </div>
  );
}
