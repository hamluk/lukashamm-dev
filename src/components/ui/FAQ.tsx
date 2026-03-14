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
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full text-dark-text px-5 py-5 sm:px-7 lg:px-10 2xl:px-25 bg-gradient-to-br from-soft-blue/30 via-soft-blue/20 to-soft-blue/40">
      <SectionIntro head={texts.homepageTexts.FAQ.intro_head} />
      <div className="space-y-4">
        {homepageTexts.FAQ.questions.map(
          (item: HomepageTexts["FAQ"]["questions"][number], index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`w-full rounded-xl
                    ${isOpen ? "bg-light-green shadow-md" : "bg-white"}
                    `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 lg:px-4 py-4 flex gap-3 justify-between items-center"
                >
                  <span className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl font-serif text-dark-text">
                    {item.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span className="text-lg md:text-2xl lg:text-xl text-olive-green">
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
                      <div className="px-6 pb-6 text-lg sm:text-lg md:text-lg leading-relaxed">
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
  );
}
