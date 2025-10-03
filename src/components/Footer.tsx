import { motion } from "framer-motion";
import { Heart, Calendar, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex mb-6"
          >
            <Heart className="h-12 w-12 fill-current" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Prince & Ann</h2>
          <p className="text-xl font-light opacity-90">
            Join us in celebrating our love
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Calendar className="h-8 w-8 mx-auto mb-3 opacity-80" />
            <h3 className="font-semibold mb-2">Date</h3>
            <p className="opacity-90">Saturday, June 15, 2024</p>
            <p className="opacity-90">4:00 PM</p>
          </div>

          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-3 opacity-80" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="opacity-90">Garden Estate Venue</p>
            <p className="opacity-90">123 Wedding Lane</p>
            <p className="opacity-90">Paradise Valley</p>
          </div>

          <div className="text-center">
            <Heart className="h-8 w-8 mx-auto mb-3 opacity-80" />
            <h3 className="font-semibold mb-2">Dress Code</h3>
            <p className="opacity-90">Formal Attire</p>
            <p className="opacity-90">Sage Green Palette</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-75 text-sm">
            We can't wait to celebrate this special day with you
          </p>
          <p className="opacity-75 text-sm mt-2">
            © 2024 Prince & Ann
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
