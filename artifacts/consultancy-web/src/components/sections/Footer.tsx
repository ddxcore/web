import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-primary">
          <Terminal size={20} />
          <span className="font-bold tracking-tight text-foreground">NexaBuild.</span>
        </div>
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} NexaBuild Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
