import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import venueImage from "@/assets/venue.jpg";

const VenueSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const maskOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.5, 1]);

  // Generate confetti circles for mask
  const confettiCircles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    initialY: -10 - Math.random() * 20,
  }));

  return (
    <section ref={containerRef} className="relative h-[600px] overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <motion.img
          src={venueImage}
          alt="Hampton Court Venue"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full w-full object-cover"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-hero-overlay/40 via-transparent to-hero-overlay/40"
        />
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h2 className="mb-4 text-5xl font-bold tracking-wide md:text-6xl drop-shadow-lg">
            Garden Estate Venue
          </h2>
          <p className="text-xl font-light tracking-wide drop-shadow-md">
            Where our forever begins
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
