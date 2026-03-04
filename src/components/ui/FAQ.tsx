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
        <div className="w-full flex justify-center">
          <div className="w-full space-y-4">
            {homepageTexts.FAQ.questions.map(
              (
                item: HomepageTexts["FAQ"]["questions"][number],
                index: number,
              ) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className="w-full border border-gray-200 rounded-xl bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-6 py-4 flex justify-between items-center"
                    >
                      <span className="font-semibold text-lg md:text-3xl font-serif text-dark-text">
                        {item.question}
                      </span>

                      {/* Plus / Minus Icon */}
                      <span className="text-base md:text-xl font-light">
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
                          <div className="px-6 pb-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
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
        </div>
      </section>
    </div>
  );
}
