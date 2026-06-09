import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery & Architecture", desc: "Mapping the domain, defining data models, and selecting the optimal stack." },
    { num: "02", title: "Rapid Prototyping", desc: "Building vertical slices to de-risk technical unknowns early." },
    { num: "03", title: "Iterative Engineering", desc: "Sprints focused on delivering shippable increments with automated testing." },
    { num: "04", title: "Hardening & Launch", desc: "Load testing, security audits, and production deployment." }
  ];

  return (
    <section id="process" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Execution Protocol</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-6xl font-black text-border mb-4">{step.num}</div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
