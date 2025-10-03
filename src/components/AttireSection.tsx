import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const AttireSection = () => {
  const colorPalette = [
    { name: "Sage Green", color: "hsl(140, 28%, 45%)" },
    { name: "Champagne", color: "hsl(45, 35%, 82%)" },
    { name: "Blush", color: "hsl(350, 35%, 85%)" },
    { name: "Ivory", color: "hsl(45, 20%, 95%)" },
  ];

  return (
    <section className="py-20 px-4" style={{ background: "var(--gradient-sage)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex"
          >
            <Sparkles className="h-12 w-12 text-primary" />
          </motion.div>
          <h2 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
            Attire & Colors
          </h2>
          <p className="text-lg text-muted-foreground">
            Help us make our day beautiful
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-none bg-card p-8 shadow-xl md:p-10">
            <h3 className="mb-4 text-2xl font-semibold">Dress Code</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Formal Attire</strong>
              </p>
              <p>
                We invite you to dress in your finest formal wear. Think elegant evening gowns, 
                cocktail dresses, suits, and tuxedos.
              </p>
              <div className="mt-6 rounded-lg bg-secondary/20 p-6">
                <p className="mb-2 font-semibold text-foreground">Please Note:</p>
                <ul className="list-inside list-disc space-y-2">
                  <li>The ceremony will be outdoors on grass - choose footwear accordingly</li>
                  <li>The venue has both indoor and outdoor spaces</li>
                  <li>Evening temperatures may be cool - consider bringing a wrap or jacket</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="border-none bg-card p-8 shadow-xl md:p-10">
            <h3 className="mb-6 text-2xl font-semibold">Color Palette</h3>
            <p className="mb-6 text-lg text-muted-foreground">
              We'd love for you to incorporate these beautiful colors into your attire. 
              Feel free to mix and match or choose your favorite!
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div
                    className="mb-3 aspect-square w-full rounded-xl shadow-lg ring-2 ring-border transition-transform"
                    style={{ backgroundColor: color.color }}
                  />
                  <p className="font-medium">{color.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-lg bg-accent/30 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Friendly reminder:</strong> Please avoid wearing 
                white, ivory, or off-white to allow our bride to shine ✨
              </p>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default AttireSection;
