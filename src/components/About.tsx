import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from "figma:asset/aae589a91122a2c9f18d42921178298c939525c9.png";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary/60 mb-2 block">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                <ImageWithFallback
                  src={exampleImage}
                  alt="Ghdifi Abdslem"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/70 leading-relaxed">
              Currently pursuing a Software Engineering degree at Tech-Up University (1st year), 
              with a Bachelor's degree in Information Technologies from ISET Zaghouan.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Education</h3>
                  <p className="text-sm text-foreground/60">
                    Software Engineering @ Tech-Up University<br />
                    Bachelor in IT @ ISET Zaghouan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Experience</h3>
                  <p className="text-sm text-foreground/60">
                    Specializing in web and mobile development with modern frameworks and technologies
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Passion</h3>
                  <p className="text-sm text-foreground/60">
                    Motivated, rigorous, and passionate about software development and modern web technologies
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-3xl mb-1">3+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1">20+</div>
                <div className="text-sm text-foreground/60">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1">15+</div>
                <div className="text-sm text-foreground/60">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
