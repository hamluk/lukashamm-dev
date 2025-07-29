import { useState } from "react";
import Travels from "./Travels";
import classNames from "classnames";
import SegmentedControl from "../form/SegmentedControl";

type Props = {};

function Achievments({}: Props) {
  const [activeView, setActiveView] = useState<string>("projects");

  return (
    <section className="flex flex-col w-full">
      <SegmentedControl activeView={activeView} onUpdate={setActiveView} />
      <div className="bg-amber-200">
        {activeView === "projects" && (
          <div>
            <h2>Meine Projekte</h2>
          </div>
        )}
        {activeView === "travels" && (
          <div>
            <h2>Meine Reisen</h2>
            <Travels />
          </div>
        )}
      </div>
    </section>
  );
}

export default Achievments;
