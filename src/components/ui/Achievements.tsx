import { useState } from "react";
import Travels from "./Travels";
import SegmentedControl from "../form/SegmentedControl";
import Work from "./Work";

type Props = {};

function Achievements({}: Props) {
  const [activeView, setActiveView] = useState<string>("projects");

  return (
    <section id="achievements" className="flex flex-col w-full">
      <SegmentedControl activeView={activeView} onUpdate={setActiveView} />
      <div>
        {activeView === "projects" && <Work />}
        {activeView === "travels" && <Travels />}
      </div>
    </section>
  );
}

export default Achievements;
