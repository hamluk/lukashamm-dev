import scrollToSection from "../../hooks/scrollToSection";
import PrimaryButton from "../form/PrimaryButton";

type Props = {
  id: number;
  title: string;
  body: string;
  sub_body: string;
  img?: string;
  button_text: string;
};

function PackageEntry({ id, title, body, sub_body, img, button_text }: Props) {
  return (
    <div className="bg-highlight-section flex flex-col md:flex-row gap-4 justify-between px-8 py-3 rounded-lg shadow-lg md:text-left md:h-90 md:w-full">
      <div className="flex flex-col justify-between w-auto md:w-100 xl:w-150">
        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-semibold">
          {title}
        </div>
        <p className="lg:text-lg pt-4 max-w-200 lg:max-w-250">{body}</p>
        <p className="lg:text-lg pt-4 max-w-200 lg:max-w-250">{sub_body}</p>
        <PrimaryButton
          title={button_text}
          handleClick={scrollToSection}
          section_id="contact"
          addClassName="max-w-40 text-center"
        ></PrimaryButton>
      </div>
      <div
        className={`object-contain flex-1 -order-1 ${id == 2 ? "" : "md:order-1"}`}
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-80 md:h-full"
        />
      </div>
    </div>
  );
}

export default PackageEntry;
