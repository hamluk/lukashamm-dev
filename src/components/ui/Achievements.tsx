import { useState } from "react";
import Travels from "./Travels";
import SegmentedControl from "../form/SegmentedControl";
import Work from "./Work";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import ProgrammingSVG from "/assets/programming_illustration.svg";
import AdventureSVG from "/assets/adventure_illustration.svg";
import BeachSVG from "/assets/beach_illustration.svg";
import RemoteSVG from "/assets/remote_illustration.svg";

type Props = {};

function Achievements({}: Props) {
  const { texts } = useLanguage();
  const [activeView, setActiveView] = useState<string>("projects");

  return (
    <section
      id="achievements"
      className="flex flex-col w-full items-center text-dark-text py-10"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center sm:flex-row px-2">
          <img
            src={RemoteSVG}
            className="object-contain aspect-1/1 w-20 sm:w-25 lg:w-30 xl:w-40"
          ></img>
          <img
            src={ProgrammingSVG}
            className="object-contain aspect-1/1 w-20 sm:w-25 lg:w-30 xl:w-40"
          ></img>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-semibold max-w-110 lg:max-w-140  xl:max-w-160">
            <p>{texts.homepageTexts.WorkAndTravel.head}</p>
            <p>{texts.homepageTexts.WorkAndTravel.subhead}</p>
          </p>
          <img
            src={BeachSVG}
            className="object-contain aspect-1/1 w-20 sm:w-25 lg:w-30 xl:w-40"
          ></img>
          <img
            src={AdventureSVG}
            className="object-contain aspect-1/1 w-20 sm:w-25 lg:w-30 xl:w-40"
          ></img>
        </div>
        <p className="text-base lg:text-lg pt-4 px-5 max-w-200 lg:max-w-250">
          {texts.homepageTexts.WorkAndTravel.body}
        </p>
      </div>

      <div className="w-full h-px bg-dark-text opacity-50 my-10"></div>

      <div className="text-center font-serif font-semibold text-lg lg:text-xl px-2 pb-5">
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
