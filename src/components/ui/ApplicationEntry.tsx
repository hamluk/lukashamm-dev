import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";

type Props = {
  title: string;
  text: string;
  before: string;
  after: string;
  examples: string[];
};

function ApplicationEntry({ title, text, before, after, examples }: Props) {
  return (
    <div className="flex flex-col justify-around bg-dark-blue rounded-4xl shadow-md p-6">
      {/* Title */}
      <h3 className="text-2xl font-bold">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-base">{text}</p>

      {/* Before / After */}
      <div className="mt-4 flex flex-col gap-2 text-base">
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
      </div>

      {/* Examples */}
      <ul className="mt-4 flex flex-col gap-1">
        {examples.map((entry) => (
          <li>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationEntry;
