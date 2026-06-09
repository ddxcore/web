import { motion } from "framer-motion";
import saasImg from "@/assets/portfolio-saas.png";
import fintechImg from "@/assets/portfolio-fintech.png";
import logisticsImg from "@/assets/portfolio-logistics.png";
import healthImg from "@/assets/portfolio-healthcare.png";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    { title: "Global Logistics Routing", category: "Fleet Management", img: logisticsImg, desc: "Real-time routing algorithms for 5,000+ commercial vehicles." },
    { title: "High-Frequency Trading Desk", category: "FinTech", img: fintechImg, desc: "Sub-millisecond execution platform handling $2B+ daily volume." },
    { title: "Enterprise Health Dashboard", category: "Healthcare SaaS", img: healthImg, desc: "HIPAA-compliant patient data aggregation system." },
    { title: "B2B Analytics Platform", category: "Data Infrastructure", img: saasImg, desc: "Distributed query engine processing 50TB of event data daily." }
  ];

  return (
    <section id="work" className="py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-xl">Systems engineered for scale, reliability, and precision.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="overflow-hidden bg-muted aspect-video mb-6 border border-border relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-primary font-mono text-xs uppercase tracking-wider mb-2">{p.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </div>
                <div className="p-3 bg-muted rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors ml-4 shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
