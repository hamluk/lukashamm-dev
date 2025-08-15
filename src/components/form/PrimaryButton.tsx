type Props = {
  title: string;
  route?: string;
};

function PrimaryButton({ title, route }: Props) {
  return (
    <a href={route}>
      <button className="bg-olive-green font-semibold text-white hover:bg-(image:--gradient-primary-button) hover:cursor-pointer text-sm sm:text-base px-3 py-1.5 rounded-lg hover:">
        {title}
      </button>
    </a>
  );
}

export default PrimaryButton;
