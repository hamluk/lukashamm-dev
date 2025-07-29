type Props = {
  header: string;
  dates: string;
  body: string;
  subbody?: string;
  image?: string;
};

function TravelEntry({ header, dates, body, subbody, image }: Props) {
  return (
    <section className="grid grid-cols-5 grid-rows-[80px_20px_auto_auto] text-black">
      <h2 className="max-h-30 row-span-1 col-span-3 text-2xl">{header}</h2>
      <p className="row-span-1 col-span-3 text-xs italic">{dates}</p>
      <p className="row-span-1 col-span-3">{body}</p>
      {subbody !== undefined && (
        <p className="row-span-1 col-span-3">{subbody}</p>
      )}
      <img
        src={image}
        alt="Travel Image Vietnam"
        className="col-start-4 col-span-2 row-start-1 row-span-4 justify-self-end aspect-2/3 object-cover min-h-70 max-h-100 rounded-xl"
      ></img>
    </section>
  );
}

export default TravelEntry;
