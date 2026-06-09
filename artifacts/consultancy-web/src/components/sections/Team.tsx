import { motion } from "framer-motion";
import t1 from "@/assets/team-1.png";
import t2 from "@/assets/team-2.png";
import t3 from "@/assets/team-3.png";

export default function Team() {
  const team = [
    { name: "David Vance", role: "Principal Architect", img: t1 },
    { name: "Elena Rostova", role: "Technical Lead", img: t2 },
    { name: "Marcus Thorne", role: "Infrastructure Eng", img: t3 }
  ];

  return (
    <section className="py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">The Engineering Core</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="aspect-square bg-muted mb-6 overflow-hidden border border-border">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-muted-foreground font-mono text-xs mt-1 uppercase">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
