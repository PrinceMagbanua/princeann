import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const GreetingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [gallery1, gallery2, gallery3];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative py-20 px-4" style={{ background: "var(--gradient-sage)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Stacked Card Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {photos.map((photo, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                
                return (
                  <motion.div
                    key={index}
                    animate={{
                      x: offset * 20,
                      y: offset * 15,
                      scale: 1 - absOffset * 0.1,
                      zIndex: photos.length - absOffset,
                      opacity: absOffset === 0 ? 1 : 0.3,
                      rotateZ: offset * 3,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="absolute inset-0 w-full"
                  >
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={photo}
                        alt={`Couple photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-50">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPhoto}
                className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPhoto}
                className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Hello, Family & Friends!
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                We are absolutely thrilled to celebrate this special moment with all of you! 
                After nine beautiful years of love, laughter, and growing together, 
                we're ready to begin the next chapter of our journey.
              </p>
              <p>
                This website holds everything you need to know about our big day. 
                From the venue details to dress code suggestions, we've gathered 
                all the important information to make your experience as wonderful as possible.
              </p>
              <p className="font-medium text-primary">
                Your presence means the world to us, and we can't wait to create 
                unforgettable memories together. See you soon! ♡
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GreetingSection;
