import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function CardStack({ cards }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[500vh]">

      <div className="sticky top-0 h-screen flex items-center justify-center">

        {cards.map((card, index) => {

          const start = index / cards.length;
          const end = (index + 1) / cards.length;

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [index * 30, -100]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1 - index * 0.03, 1]
          );
          return (
            <motion.div
              key={index}
              style={{
                y,
                scale,
                zIndex: cards.length - index,
              }}
              className="
                absolute
                w-[90%]
                max-w-6xl
                rounded-3xl
                bg-zinc-900
                border border-white/10
                shadow-2xl
                p-8
              "
            >
              {card}
            </motion.div>
          );
        })}

      </div>

    </div>
  );
}

export default CardStack;