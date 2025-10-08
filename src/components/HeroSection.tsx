import { motion, useScroll, useTransform } from "framer-motion";
import heroCoupleImage from "@/assets/hero-couple.jpg";
import { Button } from "./ui/button";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const maskY = useTransform(scrollY, [0, 300], ["0%", "100%"]);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById("rsvp-section");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate confetti circles for mask
  const confettiCircles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.8,
    size: 20 + Math.random() * 40,
  }));

  return (
    <section className="relative h-screen overflow-hidden">
      {/* SVG Mask Definition */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <mask id="confetti-mask">
            <rect width="100%" height="100%" fill="white" />
            {confettiCircles.map((circle) => (
              <motion.circle
                key={circle.id}
                cx={`${circle.x}%`}
                cy="0%"
                r={circle.size}
                fill="black"
                initial={{ cy: "-10%", opacity: 1 }}
                animate={{ cy: "110%", opacity: 0 }}
                transition={{
                  duration: 2 + Math.random(),
                  delay: circle.delay,
                  ease: "easeIn",
                }}
              />
            ))}
          </mask>
        </defs>
      </svg>

      {/* Parallax Background Image with Mask */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 parallax"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${heroCoupleImage})`,
            maskImage: "url(#confetti-mask)",
            WebkitMaskImage: "url(#confetti-mask)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            background: "var(--gradient-hero)",
            maskImage: "url(#confetti-mask)",
            WebkitMaskImage: "url(#confetti-mask)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full items-center justify-center text-center text-white"
      >
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="mb-4 text-6xl font-bold tracking-wide md:text-8xl">
              Prince & Ann
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl font-light tracking-widest md:text-2xl">
              ARE GETTING MARRIED
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-8 text-lg font-light tracking-wide md:text-xl">
              Join us in celebrating our love
            </p>
            <Button
              onClick={scrollToRSVP}
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              RSVP Now
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
