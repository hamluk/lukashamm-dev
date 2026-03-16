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
    <div className="flex flex-row">
      <div className="flex flex-row items-center text-lg sm:text-base md:text-lg font-semibold inset-shadow-sm rounded-4xl bg-gray-100 gap-2 p-2">
        <button
          onClick={() => onUpdate("form")}
          className={classNames(
            "rounded-4xl transition-all duration-300 ease-in-out px-3 py-3 hover:cursor-pointer",
            {
              "bg-gray-100 text-dark-blue-2 hover:bg-dark-blue-2/50 hover:text-white":
                activeView === "meeting",
              "bg-dark-blue-2 text-white": activeView === "form",
            },
          )}
        >
          {texts.uiLabelsTexts.segmented_control.projects}
        </button>
        <p className="text-dark-text">|</p>
        <button
          onClick={() => onUpdate("meeting")}
          className={classNames(
            "rounded-3xl transition-all duration-300 ease-in-out px-3 py-2 hover:cursor-pointer",
            {
              "bg-gray-100 text-dark-blue-2 hover:bg-dark-blue-2/50 hover:text-white":
                activeView === "form",
              "bg-dark-blue-2 text-white": activeView === "meeting",
            },
          )}
        >
          {texts.uiLabelsTexts.segmented_control.travels}
        </button>
      </div>
    </div>
  );
}

export default SegmentedControl;
