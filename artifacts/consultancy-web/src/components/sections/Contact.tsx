import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Initiate Dialogue</h2>
            <p className="text-muted-foreground">Describe your technical challenge. We will evaluate if we are the right partners.</p>
          </motion.div>
          
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                <Input className="bg-background border-border h-12" placeholder="John Doe" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Company</label>
                <Input className="bg-background border-border h-12" placeholder="Acme Corp" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                <Input type="email" className="bg-background border-border h-12" placeholder="john@example.com" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Budget Range</label>
                <select className="flex h-12 w-full items-center justify-between rounded-none border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="" disabled selected>Select a range...</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k-250k">$100k - $250k</option>
                  <option value="250k-500k">$250k - $500k</option>
                  <option value="500k+">$500k+</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Project Scope</label>
              <Textarea className="bg-background border-border min-h-[150px] resize-none" placeholder="Briefly describe the architecture or product needs..." />
            </div>
            <Button size="lg" className="w-full h-14 text-base font-mono uppercase tracking-widest mt-4">
              Submit Inquiry
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
