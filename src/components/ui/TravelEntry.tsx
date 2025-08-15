type Props = {
  header: string;
  dates: string;
  body: string;
  subbody?: string;
  image?: string;
};

function TravelEntry({ header, dates, body, subbody, image }: Props) {
  return (
    <section className="flex flex-col lg:flex-row gap-4 text-black">
      <div className="flex flex-col gap-1">
        <p className="row-span-1 col-span-3 text-xs italic">{dates}</p>
        <h2 className="max-h-30 row-span-1 col-span-3 text-3xl">{header}</h2>
        <p className="row-span-1 col-span-3 lg:pt-7">{body}</p>
        {subbody !== undefined && (
          <p className="row-span-1 col-span-3">{subbody}</p>
        )}
      </div>
      <img
        src={image}
        alt="Travel Image Vietnam"
        loading="eager"
        className="object-cover object-[25%_85%] min-h-70 max-h-100 lg:aspect-[2/3] rounded-xl "
      ></img>
    </section>
  );
}

export default TravelEntry;
