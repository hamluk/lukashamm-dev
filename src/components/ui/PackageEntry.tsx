import { useEffect, useRef, useState } from "react";
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
  const [ref, isHovered] = useHover<HTMLDivElement>();

  function useHover<T extends HTMLElement>() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      // 3. Define event handlers for mouse enter and leave.
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      // 4. Add event listeners for mouse enter and leave.
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // 5. Cleanup: Remove event listeners when the component unmounts or dependencies change.
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [ref]);

    return [ref, isHovered] as const;
  }

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row bg-white shadow-xl gap-4 justify-between items-center w-full px-6 py-3 rounded-2xl md:text-left"
    >
      <div className="flex flex-col justify-between w-auto md:w-100 xl:w-200">
        <div className="text-3xl md:text-2xl font-semibold">{title}</div>
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
          addClassName="min-w-38 max-w-38 md:max-w-38 xl:max-w-45 mt-4 text-center text-sm lg:text-base border-2 border-dark-blue-2 text-dark-blue-2"
        ></PrimaryButton>
      </div>
      <div
        className={`object-contain w-60 lg:w-70 xl:w-80 h-50 lg:h-70s ${isHovered ? "scale-110" : ""} transition duration-300 ease-in-out -order-1 ${id == 2 ? "" : "md:order-1"}`}
      >
        <img src={img} alt={title} loading="lazy" className="h-full w-full" />
      </div>
    </div>
  );
}

export default PackageEntry;
