type Props = {
  title: string;
  route?: string;
  handleClick?: (section_id: string) => void;
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
      className={`bg-olive-green font-semibold text-white hover:bg-(image:--gradient-primary-button) hover:cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg ${addClassName}`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
