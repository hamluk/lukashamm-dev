import classNames from "classnames";
import { useLanguage } from "../../context/LanguageContext";

type Props = {
  activeView: string;
  onUpdate: (view: string) => void;
};

function SegmentedControl({ activeView, onUpdate }: Props) {
  const { texts } = useLanguage();

  if (!texts) return <p>Loading Segmented Control....</p>;

  return (
    <div className="flex flex-row p-5">
      <div className="flex flex-row items-center inset-shadow-sm rounded-lg bg-gray-100 gap-2 p-1">
        <button
          onClick={() => onUpdate("projects")}
          className={classNames(
            "rounded-lg transition-all duration-300 ease-in-out px-2 py-1 hover:cursor-pointer",
            {
              "bg-gray-100 text-olive-green": activeView === "travels",
              "bg-olive-green text-white": activeView === "projects",
            }
          )}
        >
          {texts.uiLabelsTexts.segmented_control.projects}
        </button>
        <p className="text-dark-text">&</p>
        <button
          onClick={() => onUpdate("travels")}
          className={classNames(
            "rounded-lg transition-all duration-300 ease-in-out px-2 py-1 hover:cursor-pointer",
            {
              "bg-gray-100 text-olive-green": activeView === "projects",
              "bg-olive-green text-white": activeView === "travels",
            }
          )}
        >
          {texts.uiLabelsTexts.segmented_control.travels}
        </button>
      </div>
    </div>
  );
}

export default SegmentedControl;
