type Props = {
  title: string;
  handleClick?: (project_id: string) => void;
  section_id?: string;
  addClassName?: string;
};

function SecondaryButton({
  title,
  handleClick,
  section_id,
  addClassName,
}: Props) {
  return (
    <button
      onClick={() => handleClick?.(section_id ?? "")}
      className=" font-semibold hover:cursor-pointer px-3 py-2 lg:py-3 rounded-lg hover:"
    >
      <p
        className={`inline-block text-transparent bg-clip-text bg-olive-green hover:bg-(image:--gradient-primary-button) ${addClassName}`}
      >
        {title}
      </p>
    </button>
  );
}

export default SecondaryButton;
