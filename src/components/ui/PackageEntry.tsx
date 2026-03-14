import { motion } from "framer-motion";
import scrollToSection from "../../hooks/scrollToSection";
import PrimaryButton from "../form/PrimaryButton";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {
  id: number;
  title: string;
  body: string;
  list_1: string;
  list_2: string;
  list_3: string;
  img?: string;
  button_text: string;
};

function PackageEntry({
  id,
  title,
  body,
  list_1,
  list_2,
  list_3,
  img,
  button_text,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center px-8 py-3 rounded-lg md:text-left">
      <div className="flex flex-col justify-between w-auto md:w-100 xl:w-150">
        <div className="text-3xl md:text-2xl font-serif font-semibold">
          {title}
        </div>
        <p className="text-lg pt-4 max-w-200 lg:max-w-250">{body}</p>
        <p className="text-lg pt-4 max-w-200 lg:max-w-250">
          <ul>
            <li>
              <span className="flex felx-row items-center-safe gap-2">
                <FaRegCheckCircle /> {list_1}
              </span>
            </li>
            <li>
              <span className="flex felx-row items-center-safe gap-2">
                <FaRegCheckCircle /> {list_2}
              </span>
            </li>
            <li>
              <span className="flex felx-row items-center-safe gap-2">
                <FaRegCheckCircle /> {list_3}
              </span>
            </li>
          </ul>
        </p>
        <PrimaryButton
          title={button_text}
          handleClick={scrollToSection}
          section_id="contact"
          addClassName="min-w-38 max-w-38 md:max-w-38 xl:max-w-45 mt-4 text-center text-sm lg:text-base bg-olive-green"
        ></PrimaryButton>
      </div>
      <div
        className={`object-contain w-60 lg:w-100 xl:w-120 h-50 lg:h-70 -order-1 ${id == 2 ? "" : "md:order-1"}`}
      >
        <img src={img} alt={title} loading="lazy" className="h-full w-full" />
      </div>
    </div>
  );
}

export default PackageEntry;
