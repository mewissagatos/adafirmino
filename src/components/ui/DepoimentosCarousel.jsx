import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FEEDBACKS = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    id: n,
    src: `/FOTOS/FEEDBACKS/${n}.png`,
    alt: `Depoimento ${i + 1}`,
  };
});

const AUTOPLAY_MS = 4200;

const DepoimentosCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = FEEDBACKS.length;

  const goTo = (next) => {
    setIndex(((next % total) + total) % total);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, total]);

  const getOffset = (i) => {
    let diff = i - index;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[360px] sm:h-[400px] md:h-[440px] flex items-center justify-center overflow-hidden px-2">
        {FEEDBACKS.map((item, i) => {
          const offset = getOffset(i);
          if (Math.abs(offset) > 1) return null;

          const isCenter = offset === 0;
          const xPercent = offset * 52;

          return (
            <motion.div
              key={item.id}
              className={`absolute w-[68%] sm:w-[48%] md:w-[36%] max-w-xs ${
                isCenter ? 'z-20 cursor-grab active:cursor-grabbing' : 'z-10 pointer-events-none'
              }`}
              animate={{
                x: `${xPercent}%`,
                scale: isCenter ? 1 : 0.82,
                opacity: isCenter ? 1 : 0.55,
                rotate: isCenter ? 0 : offset * 2,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 28,
                mass: 0.85,
              }}
              drag={isCenter ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragStart={() => setPaused(true)}
              onDragEnd={(_, info) => {
                const dx = info.offset.x;
                const vx = info.velocity.x;
                if (dx < -80 || vx < -400) next();
                else if (dx > 80 || vx > 400) prev();
                setPaused(false);
              }}
            >
              <div
                className={`overflow-hidden rounded-lg ${
                  isCenter
                    ? 'shadow-2xl border border-acento/70'
                    : 'shadow-md border border-primaria/30'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-[300px] sm:max-h-[340px] md:max-h-[380px] object-contain pointer-events-none block"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {FEEDBACKS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Ir para depoimento ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-acento' : 'w-1.5 bg-primaria/50 hover:bg-primaria'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DepoimentosCarousel;
