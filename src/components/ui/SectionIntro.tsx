type Props = {
  head: string;
  text: string;
};

function SectionIntro({ head, text }: Props) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto mb-10 lg:mb-14 px-8 sm:px-12 lg:px-0">
      <span className="text-dark-text text-3xl md:text-4xl font-semibold px-2 tracking-tight">
        {head}
      </span>
      <span className="text-dark-text mt-4 text-lg text-muted-foreground leading-relaxed">
        {text}
      </span>
    </div>
  );
}

export default SectionIntro;
