import { motion } from "framer-motion";

export default function WhyUs() {
  const points = [
    { title: "No Juniors", desc: "You work directly with senior engineers and architects who have shipped production code for millions of users." },
    { title: "Radical Candor", desc: "If a feature shouldn't be built, we will tell you. We act as partners, not order-takers." },
    { title: "Engineering Rigor", desc: "Test coverage, CI/CD, and monitoring aren't afterthoughts—they are the default." }
  ];

  return (
    <section className="py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why NexaBuild?</h2>
          <p className="text-xl text-muted-foreground mb-8">Most agencies optimize for billable hours. We optimize for shipping robust, maintainable systems.</p>
        </div>
        <div className="space-y-8">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border-l-2 border-primary pl-6"
            >
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
