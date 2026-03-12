import { motion } from "framer-motion";
import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export type Card = {
  id: number;
  title: string;
  text: string;
};

type Props = {
  cards: Card[];
};

function CardStackCarousel({ cards }: Props) {
  const [active, setActive] = useState(0);

  const prev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const next = () => {
    if (active < cards.length - 1) {
      setActive(active + 1);
    }
  };

  const getPosition = (index: number) => {
    const diff = index - active;

    if (diff === 0) return "translate-x-0 scale-100 opacity-100 z-20";

    if (diff === -1) return "-translate-x-[260px] scale-90 opacity-70 z-10";

    if (diff === 1) return "translate-x-[260px] scale-90 opacity-70 z-10";

    return "opacity-0 pointer-events-none";
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-[300px] h-[400px]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute w-[350px] h-[375px] bg-white rounded-xl shadow-xl flex items-center justify-center text-xl font-semibold transition-all duration-500 ${getPosition(index)}`}
          >
            {card.title}
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-4xl">
        <button
          onClick={prev}
          disabled={active === 0}
          className="rounded-3xl text-olive-green hover:text-light-green hover:cursor-pointer disabled:text-light-green disabled:opacity-70"
        >
          <IoIosArrowDropleftCircle />
        </button>

        <button
          onClick={next}
          disabled={active === cards.length - 1}
          className="rounded-3xl text-olive-green  hover:text-light-green hover:cursor-pointer disabled:text-light-green disabled:opacity-70"
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </motion.div>
  );
}

export default CardStackCarousel;
