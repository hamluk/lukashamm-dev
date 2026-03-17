type Props = {
  title: string;
  handleClick?: (project_id: string) => void;
  section_id?: string;
  addClassName?: string;
};

function PrimaryButton({
  title,
  handleClick,
  section_id,
  addClassName,
}: Props) {
  return (
    <button
      onClick={() => handleClick?.(section_id ?? "")}
      className={`font-semibold hover:bg-dark-blue-2 hover:text-white hover:cursor-pointer px-3 py-3 rounded-4xl ${addClassName}`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
