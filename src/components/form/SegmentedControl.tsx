import classNames from "classnames";

type Props = {
  activeView: string;
  onUpdate: (view: string) => void;
};

function SegmentedControl({ activeView, onUpdate }: Props) {
  return (
    <div className="flex flex-row justify-center p-5">
      <div className="flex flex-row inset-shadow-sm rounded-lg bg-gray-100 gap-2 p-1">
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
          Projekte 👨‍💻
        </button>
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
          Reisen 🌍
        </button>
      </div>
    </div>
  );
}

export default SegmentedControl;
