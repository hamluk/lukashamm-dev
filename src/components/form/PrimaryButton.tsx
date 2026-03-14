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
      className={` font-semibold text-white hover:bg-(image:--gradient-primary-button) hover:cursor-pointer px-3 py-3 rounded-4xl ${addClassName}`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
