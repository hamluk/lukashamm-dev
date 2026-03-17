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
    if (openIndex === index) return;
    setOpenIndex(index);
  };

  return (
    <section className="flex flex-col lg:flex-row md:gap-4 w-full text-dark-text py-24 lg:py-32 px-6 sm:px-7 lg:px-20 2xl:px-45 bg-gradient-to-br from-soft-blue/30 via-soft-blue/20 to-soft-blue/40">
      <SectionIntro
        head={texts.homepageTexts.FAQ.intro_head}
        text={texts.homepageTexts.FAQ.intro_text}
      />
      <div className="space-y-4 lg:w-600 h-185 sm:h-158 md:h-138">
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
                  className="w-full text-left px-6 lg:px-4 py-4 flex gap-3 justify-between items-center hover:cursor-pointer"
                >
                  <span className="font-semibold text-base md:text-lg lg:text-xl text-dark-text tracking-tight">
                    {item.question}
                  </span>

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
                      <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
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
