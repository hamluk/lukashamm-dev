type Props = {
  head: string;
};

function SectionIntro({ head }: Props) {
  return (
    <div className="text-center px-3 md:px-20 py-5">
      {/* Section Intro */}
      <div className="flex flex-row md:flex-row w-full items-center rounded-full">
        <div className="md:flex-1 w-3xs border-b border-dark-text"></div>
        <span className="text-dark-text font-serif font-semibold text-3xl md:text-4xl min-w-3xs leading-8 md:px-10 py-3">
          {head}
        </span>
        <div className="md:flex-1 w-3xs border-b border-dark-text"></div>
      </div>
    </div>
  );
}

export default SectionIntro;
