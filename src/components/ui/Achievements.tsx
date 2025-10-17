import { useState } from "react";
import Travels from "./Travels";
import SegmentedControl from "../form/SegmentedControl";
import Work from "./Work";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

type Props = {};

function Achievements({}: Props) {
  const { texts } = useLanguage();
  const [activeView, setActiveView] = useState<string>("projects");

  return (
    <section
      id="achievements"
      className="flex flex-col w-full items-center text-dark-text py-10"
    >
      <div className="text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-semibold px-2 pb-5">
        {texts.homepageTexts.Projects.head}
      </div>
      <SegmentedControl activeView={activeView} onUpdate={setActiveView} />

      <AnimatePresence mode="wait">
        {activeView === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Work />
          </motion.div>
        )}

        {activeView === "travels" && (
          <motion.div
            key="travels"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Travels />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achievements;
