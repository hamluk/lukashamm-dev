import type { IconType } from "react-icons";
import { PiDotFill } from "react-icons/pi";

type Props = {
  Icon: IconType;
  title: string;
  text: string;
  examples: string[];
};

function ApplicationEntry({ title, text, examples, Icon }: Props) {
  return (
    <div className="flex flex-col justify-start bg-dark-blue-2 rounded-4xl shadow-md p-6">
      <div className="text-4xl text-light-green mb-3">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>

      <div className="text-light-green font-bold mt-3 text-muted-foreground leading-relaxed">
        <p className="text-base">{text}</p>

        {/* <div className="mt-4 flex flex-col gap-2 text-base">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-red-500">
              <FaRegThumbsDown />
            </span>
            <span>{before}</span>
          </div>

          <div className="flex gap-2 items-center">
            <span className="font-semibold text-light-green">
              <FaRegThumbsUp />
            </span>
            <span>{after}</span>
          </div>
        </div> */}

        <ul className="flex flex-col gap-1">
          {examples.map((entry) => (
            <li>
              <span className="flex felx-row items-start gap-2">
                <PiDotFill className="shrink-0 mt-1" />
                {entry}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ApplicationEntry;
