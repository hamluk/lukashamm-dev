type Props = {
  header: string;
  body: string;
  image?: string;
};

function TravelEntry({ header, body, image }: Props) {
  return (
    <section className="grid grid-cols-3 grid-row-3 gap-4 justify-center text-black">
      <h2 className="row-span-1 col-span-2 text-2xl">{header}</h2>
      <p className="row-span-2 col-span-2">{body}</p>
      <img
        src={image}
        alt="Travel Image Vietnam"
        className="col-start-3 row-start-1 row-end-3 justify-self-end aspect-2/3 object-cover min-h-70 max-h-100 rounded-xl"
      ></img>
    </section>
  );
}

export default TravelEntry;
