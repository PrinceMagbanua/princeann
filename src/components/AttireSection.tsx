import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";

import men1 from "@/assets/attire/men-1.jpg";
import men2 from "@/assets/attire/men-2.jpg";
import men3 from "@/assets/attire/men-3.jpg";
import men4 from "@/assets/attire/men-4.jpg";
import women1 from "@/assets/attire/women-1.jpg";
import women2 from "@/assets/attire/women-2.jpg";
import women3 from "@/assets/attire/women-3.jpg";
import women4 from "@/assets/attire/women-4.jpg";

const AttireSection = () => {
  const colorPalette = [
    { name: "Deep Sage", color: "hsl(140, 28%, 32%)" },
    { name: "Sage", color: "hsl(140, 28%, 45%)" },
    { name: "Soft Sage", color: "hsl(140, 25%, 70%)" },
    { name: "Champagne", color: "hsl(45, 35%, 82%)" },
    { name: "Ivory", color: "hsl(0, 0%, 98%)" },
  ];


  const inspirationGroups = [
    {
      label: "For her",
      looks: [
        { title: "Soft florals", image: women1 },
        { title: "Champagne satin", image: women2 },
        { title: "Romantic sleeves", image: women3 },
        { title: "Mixed neutrals", image: women4 },
      ],
    },
    {
      label: "For him",
      looks: [
        { title: "Sage suiting", image: men1 },
        { title: "Black-tie optional", image: men2 },
        { title: "Modern charcoal", image: men3 },
        { title: "Casual luxe", image: men4 },
      ],
    },
  ];

  return (
    <section id="attire-section" className="py-20 px-4" style={{ background: "var(--gradient-sage)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-5xl"
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
          <h2 className="mb-3 text-5xl font-bold text-foreground md:text-6xl">
            Attire & Colors
          </h2>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Card className="relative overflow-hidden border-none bg-card/90 p-8 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-transparent" />
              <div className="relative space-y-8">
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Dress Code</p>
                    <h3 className="text-2xl font-semibold text-foreground">Semi-Formal</h3>
                    <div className="space-y-2 text-base text-muted-foreground">
                      <p>
                        We invite you to dress in your finest semi-formal to formal wear. Feel free to echo the sage green
                        color palette setting with soft tones and simple accents.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 sm:grid sm:grid-cols-5 sm:gap-5 sm:place-items-center">
                    {colorPalette.map((tone, index) => (
                      <motion.div
                        key={tone.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <span
                          className="inline-block h-14 w-14 rounded-full ring-2 ring-border shadow-lg"
                          style={{ backgroundColor: tone.color }}
                          aria-label={tone.name}
                        />
                        <p className="mt-2 text-xs font-medium text-foreground/80">{tone.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="overflow-hidden border-none bg-card/90 p-8 shadow-xl backdrop-blur">
              <div className="mb-4 space-y-1">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Inspiration</p>
                <h3 className="text-2xl font-semibold text-foreground">What to wear</h3>
              </div>

              <div className="space-y-6">
                {inspirationGroups.map((group) => (
                  <div key={group.label} className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {group.label}
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                      {group.looks.map((look, index) => (
                        <Dialog key={look.title}>
                          <DialogTrigger asChild>
                            <motion.button
                              type="button"
                              initial={{ opacity: 0, y: 16 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: index * 0.04 }}
                              className="group relative overflow-hidden rounded-2xl border bg-muted/40 shadow-sm"
                            >
                              <img
                                src={look.image}
                                alt={look.title}
                                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </motion.button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl overflow-hidden p-0">
                            <DialogClose asChild>
                              <button type="button" className="w-full">
                                <img
                                  src={look.image}
                                  alt={look.title}
                                  className="w-full max-h-[80vh] object-cover"
                                />
                              </button>
                            </DialogClose>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AttireSection;
