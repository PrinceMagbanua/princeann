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
    <section className="relative py-20 px-4" style={{ background: "var(--gradient-sage)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto max-w-5xl"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
            The Celebration
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us as we exchange vows and celebrate our love
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Church Ceremony */}
          <motion.div variants={itemVariants}>
            <Card className="border-none bg-card p-8 md:p-10 shadow-xl">
              <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="rounded-full bg-primary/10 p-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Date</h3>
                  <p className="text-muted-foreground">
                    Saturday, February 7, 2026
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="rounded-full bg-primary/10 p-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Church Ceremony</h3>
                  <p className="text-lg font-medium text-primary">1:30 PM</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="rounded-full bg-primary/10 p-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground mb-1">
                    Sacred Heart Of Jesus Parish
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Muntinlupa
                  </p>
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
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
            </Card>
          </motion.div>

          {/* Wedding Reception */}
          <motion.div variants={itemVariants}>
            <Card className="border-none bg-card p-8 md:p-10 shadow-xl">
              <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="rounded-full bg-primary/10 p-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Date</h3>
                  <p className="text-muted-foreground">
                    Saturday, February 7, 2026
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="rounded-full bg-primary/10 p-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Wedding Reception</h3>
                  <p className="text-lg font-medium text-primary">4:00 PM</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="rounded-full bg-primary/10 p-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground mb-1">
                    Hampton Court
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hillsborough Village, Muntinlupa
                  </p>
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
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
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
