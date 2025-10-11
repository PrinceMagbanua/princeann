import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card } from "./ui/card";

const EventDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-14 md:py-16 px-4" style={{ background: "var(--gradient-sage)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto max-w-5xl"
      >
        {/* Section heading with single date */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-10 text-center">
          <h2 className="mb-2 text-4xl md:text-5xl font-bold text-foreground">The Celebration</h2>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm md:text-base text-foreground shadow-sm ring-1 ring-white/30 backdrop-blur">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Saturday, February 7, 2026</span>
          </div>
        </motion.div>

        {/* Single compact card with two columns */}
        <motion.div variants={itemVariants}>
          <Card className="border-none bg-card/90 p-6 md:p-8 shadow-2xl">
            <div className="grid gap-6 md:gap-10 md:grid-cols-2">
              {/* Church Ceremony */}
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <div className="rounded-full bg-primary/10 p-3 md:p-4">
                    <Clock className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Church Ceremony</h3>
                  <p className="text-primary font-medium mb-2 md:mb-3">1:30 PM</p>
                  <div className="text-muted-foreground">
                    <p className="mb-1">Sacred Heart Of Jesus Parish</p>
                    <p className="text-sm">Muntinlupa</p>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <a
                      href="https://maps.app.goo.gl/VJ1KjEXoYPBhK1wW7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?ll=14.4086,121.0398&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Waze
                    </a>
                  </div>
                </div>
              </div>

              {/* Wedding Reception */}
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <div className="rounded-full bg-primary/10 p-3 md:p-4">
                    <Clock className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Wedding Reception</h3>
                  <p className="text-primary font-medium mb-2 md:mb-3">4:00 PM</p>
                  <div className="text-muted-foreground">
                    <p className="mb-1">Hampton Court</p>
                    <p className="text-sm">Hillsborough Village, Muntinlupa</p>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <a
                      href="https://maps.app.goo.gl/7nGpDrZPyCf8wumy7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?ll=14.4378,121.0416&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Waze
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
