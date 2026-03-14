type Props = {
  head: string;
};

function SectionIntro({ head }: Props) {
  return (
    <div className="text-center px-3 md:px-20 py-5">
      {/* Section Intro */}
      <div className="items-center rounded-full">
        <span className="text-dark-text font-serif font-semibold text-3xl md:text-4xl min-w-3xs md:pr-10 py-3">
          {head}
        </span>
      </div>
    </div>
  );
}

export default SectionIntro;
