type Props = {
  head: string;
  text: string;
};

function SectionIntro({ head, text }: Props) {
  return (
    <div className="flex flex-col gap-3 max-w-7xl m-auto px-10 pt-3 lg:px-10 2xl:px-25 items-start">
      <span className="text-dark-text font-serif font-semibold text-3xl md:text-4xl">
        {head}
      </span>
      <span className="text-dark-text text-lg md:text-xl">{text}</span>
    </div>
  );
}

export default SectionIntro;
