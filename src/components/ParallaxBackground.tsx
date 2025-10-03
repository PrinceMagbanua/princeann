import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import leaf1 from "@/assets/leaf-1.png";
import leaf2 from "@/assets/leaf-2.png";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left leaf */}
      <motion.img
        src={leaf1}
        alt=""
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -left-20 w-64 h-64 opacity-10"
      />

      {/* Top right floral */}
      <motion.img
        src={leaf2}
        alt=""
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-40 -right-32 w-80 h-80 opacity-10"
      />

      {/* Middle left floral */}
      <motion.img
        src={leaf2}
        alt=""
        style={{ y: y3 }}
        className="absolute top-1/3 -left-24 w-72 h-72 opacity-8"
      />

      {/* Middle right leaf */}
      <motion.img
        src={leaf1}
        alt=""
        style={{ y: y4, rotate: rotate1 }}
        className="absolute top-1/2 -right-20 w-56 h-56 opacity-8"
      />

      {/* Bottom left leaf */}
      <motion.img
        src={leaf1}
        alt=""
        style={{ y: y2 }}
        className="absolute bottom-20 -left-28 w-96 h-96 opacity-10"
      />

      {/* Bottom right floral */}
      <motion.img
        src={leaf2}
        alt=""
        style={{ y: y1, rotate: rotate2 }}
        className="absolute bottom-40 -right-24 w-64 h-64 opacity-8"
      />
    </div>
  );
};

export default ParallaxBackground;
