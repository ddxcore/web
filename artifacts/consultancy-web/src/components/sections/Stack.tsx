import { motion } from "framer-motion";

export default function Stack() {
  const techs = ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "AWS", "Kubernetes", "Docker", "Terraform", "Next.js", "GraphQL", "gRPC"];

  return (
    <section id="stack" className="py-24 bg-muted/20 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">We use boring technology to build exciting products. Predictability at scale matters more than the latest framework.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 border border-border/50 bg-background font-mono text-sm tracking-wide text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
