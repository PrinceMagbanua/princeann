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
            We invite you to share in our special day
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div variants={itemVariants}>
            <Card className="group h-full border-none bg-card p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex justify-center"
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </motion.div>
              <h3 className="mb-3 text-2xl font-semibold">Date</h3>
              <p className="text-lg text-muted-foreground">
                Saturday, June 15, 2024
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="group h-full border-none bg-card p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex justify-center"
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </motion.div>
              <h3 className="mb-3 text-2xl font-semibold">Time</h3>
              <p className="text-lg text-muted-foreground">
                4:00 PM
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ceremony followed by reception
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="group h-full border-none bg-card p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex justify-center"
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </motion.div>
              <h3 className="mb-3 text-2xl font-semibold">Location</h3>
              <p className="text-lg text-muted-foreground">
                Garden Estate Venue
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                123 Wedding Lane, Paradise Valley
              </p>
              <div className="mt-4 flex gap-3 justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Garden+Estate+Venue+123+Wedding+Lane+Paradise+Valley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                >
                  Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=Garden+Estate+Venue+123+Wedding+Lane+Paradise+Valley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                >
                  Waze
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
