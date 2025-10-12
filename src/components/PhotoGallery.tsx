import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const PhotoGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textScrollProgress = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Text animation transforms
  const titleY = useTransform(textScrollProgress, [0, 0.3, 0.6, 1], [50, 0, 0, -20]);
  const titleOpacity = useTransform(textScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const subtitleY = useTransform(textScrollProgress, [0.1, 0.4, 0.7, 1], [30, 0, 0, -15]);
  const subtitleOpacity = useTransform(textScrollProgress, [0.1, 0.3, 0.9, 1], [0, 1, 1, 0.8]);

  const contentY = useTransform(textScrollProgress, [0.2, 0.5, 0.8, 1], [40, 0, 0, -10]);
  const contentOpacity = useTransform(textScrollProgress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-20 px-4 bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2 }}
        className="container mx-auto max-w-6xl"
      >
        {/* Greeting Content Section */}
        <motion.div
          ref={textRef}
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-8"
          >
            <motion.h1
              style={{
                y: titleY,
                opacity: titleOpacity,
              }}
              className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            >
              Hello, Family & Friends!
            </motion.h1>

            <motion.div
              style={{
                y: subtitleY,
                opacity: subtitleOpacity,
              }}
              className="space-y-4 max-w-3xl mx-auto"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                After 7 wonderful years of love and laughter, we're thrilled to celebrate this special moment with you. Here you'll find all the details about our big day—from the venue to what to wear—to make things easy and memorable for everyone.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg font-medium text-primary/90"
              >
                Your presence means everything to us. Let's create unforgettable memories together! ♡
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.div
          ref={photosRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Journey Together
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Moments that tell our story
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.7, rotateX: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative h-[500px] overflow-hidden"
              >
                <img
                  src={gallery1}
                  alt="Prince and Ann together"
                  className="h-full w-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    First adventures
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.7, rotateX: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative h-[500px] overflow-hidden"
              >
                <img
                  src={gallery2}
                  alt="Prince and Ann moments"
                  className="h-full w-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    Beautiful memories
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              initial={{ opacity: 0, scale: 0.7, rotateX: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative h-[500px] overflow-hidden"
              >
                <img
                  src={gallery3}
                  alt="Prince and Ann celebration"
                  className="h-full w-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    Forever begins
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
