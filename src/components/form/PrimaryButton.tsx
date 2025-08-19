type Props = {
  title: string;
  route?: string;
  handleClick?: () => void;
  addClassName?: string;
};

function PrimaryButton({ title, route, handleClick, addClassName }: Props) {
  return (
    <button
      className={`bg-olive-green font-semibold text-white hover:bg-(image:--gradient-primary-button) hover:cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg ${addClassName}`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
