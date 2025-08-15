type Props = {
  header: string;
  dates: string;
  body: string;
  subbody?: string;
  image?: string;
  link: string;
  discover_text: string;
};

export default function WorkEntry({
  header,
  dates,
  body,
  subbody,
  image,
  link,
  discover_text,
}: Props) {
  return (
    <a href={link}>
      <section className="flex flex-col gap-4 text-black">
        <div className="flex items-center overflow-hidden rounded-xl h-80 sm:h-60 lg:h-70">
          <img
            src={image}
            alt="Travel Image Vietnam"
            className="object-contain object-center transition-transform duration-300 ease-in-out hover:scale-105"
          ></img>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-baseline px-1">
            <h2 className="max-h-30 text-2xl font-semibold">{header}</h2>
            <p className="rtext-xs italic">{dates}</p>
          </div>
          <p className="">{body}</p>
          {subbody !== undefined && <p className="">{subbody}</p>}
          <p className="hover:bg-highlight-section w-35 px-2 py-0.5 rounded-2xl text-center font-semibold border-2 border-olive-green text-olive-green">
            {discover_text}
          </p>
        </div>
      </section>
    </a>
  );
}
