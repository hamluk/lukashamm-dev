import { useEffect, useState } from "react";
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
    <section id="achievements" className="flex flex-col w-full items-center">
      <div className="flex flex-col text-center items-center text-dark-text p-5 m-auto">
        <p className="text-2xl ">{texts.homepageTexts.WorkAndTravel.head}</p>
        <p>{texts.homepageTexts.WorkAndTravel.body}</p>
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
