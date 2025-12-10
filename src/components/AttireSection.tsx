import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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


  const inspiration = {
    women: [
      { title: "Soft florals", note: "Flowy fabrics, sage accessories", image: women1 },
      { title: "Champagne satin", note: "Bias cuts with pearl jewelry", image: women2 },
      { title: "Romantic sleeves", note: "Light sage & airy movement", image: women3 },
      { title: "Mixed neutrals", note: "Blush undertones + gold accents", image: women4 },
    ],
    men: [
      { title: "Sage suiting", note: "Monochrome with texture", image: men1 },
      { title: "Black-tie optional", note: "Ivory shirt, sage tie pocket square", image: men2 },
      { title: "Modern charcoal", note: "Sage tie, brown leather details", image: men3 },
      { title: "Casual luxe", note: "Open collar, linen layers in sage", image: men4 },
    ],
  };

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
          <p className="text-lg text-muted-foreground">
            Formal, garden-chic, and softly elevated — here’s the palette and inspiration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Card className="relative overflow-hidden border-none bg-card/90 p-8 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-transparent" />
              <div className="relative space-y-8">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">Dress Code</h3>
                    <div className="space-y-2 text-base text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Formal Attire</strong>
                      </p>
                      <p>We invite you to dress in your finest semi-formal to formal wear.</p>
                      <p>Think clean lines, light layers, and details that echo our garden setting.</p>
                    </div>
                    <div className="grid gap-3 rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground">What works great</p>
                        <p>Flowy dresses or jumpsuits, tailored suits, soft metallic accents.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Fabrics</p>
                        <p>Breezy chiffons, linen blends, silk, and crepe for warm weather comfort.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Footwear</p>
                        <p>Block heels or dressy flats for lawn-friendly steps.</p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-accent/20 p-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">Kind note:</strong> Please avoid wearing white, ivory, or
                      off-white to let our bride shine ✨
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Color direction</p>
                      <h4 className="text-xl font-semibold text-foreground">Sage, champagne, and soft neutrals</h4>
                      <p className="text-sm text-muted-foreground">
                        Feel free to incorporate any of these hues into your look.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-4 sm:gap-5">
                    {colorPalette.map((tone, index) => (
                      <motion.div
                        key={tone.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        className="flex items-center justify-center"
                      >
                        <span
                          className="inline-block h-14 w-14 rounded-full ring-2 ring-border shadow-lg"
                          style={{ backgroundColor: tone.color }}
                          aria-label={tone.name}
                        />
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
              <Tabs defaultValue="women" className="w-full">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Inspiration</p>
                    <h3 className="text-2xl font-semibold text-foreground">What to wear</h3>
                    <p className="text-sm text-muted-foreground">
                      Mood-board snapshots to match the palette. Save what you love.
                    </p>
                  </div>
                  <TabsList>
                    <TabsTrigger value="women">For her</TabsTrigger>
                    <TabsTrigger value="men">For him</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="women">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                    {inspiration.women.map((look, index) => (
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                              <Badge variant="secondary" className="mb-2 rounded-full bg-white/80 text-foreground">
                                {look.title}
                              </Badge>
                              <p className="text-sm text-white/90">{look.note}</p>
                            </div>
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
                          <div className="p-4">
                            <p className="text-lg font-semibold text-foreground">{look.title}</p>
                            <p className="text-sm text-muted-foreground">{look.note}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="men">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                    {inspiration.men.map((look, index) => (
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                              <Badge variant="secondary" className="mb-2 rounded-full bg-white/80 text-foreground">
                                {look.title}
                              </Badge>
                              <p className="text-sm text-white/90">{look.note}</p>
                            </div>
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
                          <div className="p-4">
                            <p className="text-lg font-semibold text-foreground">{look.title}</p>
                            <p className="text-sm text-muted-foreground">{look.note}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AttireSection;
