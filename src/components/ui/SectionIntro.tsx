type Props = {
  head: string;
  text: string;
};

function SectionIntro({ head, text }: Props) {
  return (
    <div className="text-center px-10 py-5">
      {/* Section Intro */}
      <div className="flex w-full items-center rounded-full">
        <div className="flex-1 border-b border-dark-text"></div>
        <span className="text-dark-text font-serif font-semibold text-4xl leading-8 px-8 py-3">
          {head}
        </span>
        <div className="flex-1 border-b border-dark-text"></div>
      </div>
      <div className="text-dark-text text-2xl leading-8 px-8 py-3">{text}</div>
    </div>
  );
}

export default SectionIntro;
