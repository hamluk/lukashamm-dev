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
      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-white tracking-tight">
        {title}
      </h3>

      <div className="text-light-green font-bold mt-3 text-muted-foreground leading-relaxed">
        <p className="text-sm md:text-base xl:text-lg">{text}</p>

        <ul className="flex flex-col gap-1 mt-1 text-sm md:text-base xl:text-lg">
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
