import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const AttireSection = () => {
  const colorPalette = [
    { name: "Dark Sage", color: "hsl(140, 28%, 35%)" },
    { name: "Sage Green", color: "hsl(140, 28%, 45%)" },
    { name: "Light Sage", color: "hsl(140, 20%, 75%)" },
    { name: "Ivory", color: "hsl(0, 0%, 98%)" },
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
            <div className="grid gap-8 md:gap-10 md:grid-cols-2 items-start">
              {/* Dress Code */}
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Dress Code</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Formal Attire</strong>
                  </p>
                  <p>
                    We invite you to dress in your finest formal wear — elegant evening gowns, cocktail dresses, suits, or tuxedos.
                  </p>
                </div>
                <div className="mt-6 rounded-lg bg-accent/20 p-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Kind note:</strong> Please avoid wearing white, ivory, or off-white to let our bride shine ✨
                  </p>
                </div>
              </div>

              {/* Color Palette */}
              <div>
                <h3 className="mb-4 text-2xl font-semibold">Color Palette</h3>
                <p className="mb-4 text-base md:text-lg text-muted-foreground">
                  Feel free to incorporate any of these hues into your look.
                </p>
                <div className="flex gap-3 justify-start md:justify-center flex-wrap">
                  {colorPalette.map((color, index) => (
                    <motion.div
                      key={color.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      whileHover={{ scale: 1.08 }}
                      className="text-center"
                    >
                      <div
                        className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-lg ring-2 ring-border transition-transform mb-2"
                        style={{ backgroundColor: color.color }}
                      />
                      <p className="text-xs font-medium">{color.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default AttireSection;
