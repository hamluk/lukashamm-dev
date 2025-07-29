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
      <div>
        {activeView === "projects" && <div></div>}
        {activeView === "travels" && (
          <div>
            <Travels />
          </div>
        )}
      </div>
    </section>
  );
}

export default Achievments;
