import { motion } from "framer-motion";

export default function Testimonials() {
  const quotes = [
    { quote: "NexaBuild didn't just write code; they completely re-architected our data pipeline. Our query times dropped by 90%.", author: "Sarah Jenkins", role: "CTO, DataFlow Inc." },
    { quote: "The rare engineering team that actually understands business context. They pushed back when we asked for the wrong things.", author: "Michael Chen", role: "Founder, LedgerTech" }
  ];

  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {quotes.map((q, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 border border-border/50 bg-background relative"
            >
              <div className="text-4xl text-primary font-serif mb-4 leading-none absolute -top-4 -left-2">"</div>
              <p className="text-xl leading-relaxed mb-8 relative z-10">{q.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted border border-border rounded-full" />
                <div>
                  <div className="font-bold">{q.author}</div>
                  <div className="text-sm text-muted-foreground">{q.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
