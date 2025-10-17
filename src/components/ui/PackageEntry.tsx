type Props = {
  title: string;
  body: string;
  img?: string;
  link_text: string;
  link: string;
};

function PackageEntry({ title, body, img, link_text, link }: Props) {
  return (
    <a href={link}>
      <div className="flex flex-col rounded-2xl overflow-hidden bg-olive-green text-white shadow-lg w-80 md:w-60 lg:w-80 xl:w-90 h-75 md:h-90 hover:cursor-pointer group">
        <div className="h-1/2 w-full">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-around h-1/2 px-3 pb-3">
          <h3 className="text-base md:text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{body}</p>
          <button className="mx-auto px-3 py-0.5 bg-light-green text-olive-green rounded-full transition-transform duration-300 ease-in-out hover:cursor-pointer group-hover:scale-110">
            {link_text}
          </button>
        </div>
      </div>
    </a>
  );
}

export default PackageEntry;
