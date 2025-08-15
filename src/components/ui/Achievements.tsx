import { useEffect, useState } from "react";
import Travels from "./Travels";
import SegmentedControl from "../form/SegmentedControl";
import Work from "./Work";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

function Achievements({}: Props) {
  const [activeView, setActiveView] = useState<string>("projects");
  const [isTravelsPreloaded, setTravelsPreloaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTravelsPreloaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="achievements" className="flex flex-col w-full">
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
