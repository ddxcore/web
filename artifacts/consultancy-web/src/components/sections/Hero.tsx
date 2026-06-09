import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden noise-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-6"
          >
            <Terminal size={16} />
            <span>Elite Software Execution</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8"
          >
            We build what <br className="hidden md:block" />
            others <span className="text-muted-foreground">cannot.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            NexaBuild is a boutique engineering studio trusted by ambitious companies to architect, design, and ship high-performance software. We don't just write code; we solve hard product problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-base font-medium group"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-medium border-border/50 hover:bg-muted/50"
              onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex justify-end">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="w-full aspect-square border border-border/50 bg-card p-6 flex flex-col justify-between"
           >
             <div className="flex justify-between items-center border-b border-border pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">system_status</span>
             </div>
             <div className="flex-1 py-4 font-mono text-xs text-primary/80 flex flex-col gap-2">
               <p>{">"} Initialize NexaBuild Core...</p>
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>{">"} Loading engineering protocols...</motion.p>
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>{">"} Systems operational.</motion.p>
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-4 text-foreground/80">Ready for architecture design.</motion.p>
               <motion.div 
                 animate={{ opacity: [0, 1, 0] }} 
                 transition={{ repeat: Infinity, duration: 1 }}
                 className="w-2 h-4 bg-primary mt-1"
               />
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
