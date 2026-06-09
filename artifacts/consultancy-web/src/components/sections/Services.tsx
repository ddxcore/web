import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud, Users, Zap } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Layout, title: "Custom Software", desc: "End-to-end development of complex web and mobile applications." },
    { icon: Zap, title: "Product Strategy", desc: "Translating business goals into technical roadmaps that execute." },
    { icon: Server, title: "Architecture", desc: "Designing scalable, resilient systems that won't fall over." },
    { icon: Users, title: "Team Augmentation", desc: "Elite engineers embedded directly into your existing teams." },
    { icon: Database, title: "Rapid Prototyping", desc: "Validating concepts with high-fidelity, functional MVPs." },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Automated pipelines, infrastructure as code, and cloud migrations." },
  ];

  return (
    <section id="services" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground text-lg">We don't do everything. We specialize in complex product engineering and architecture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-border bg-card hover:bg-muted/30 transition-colors group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
