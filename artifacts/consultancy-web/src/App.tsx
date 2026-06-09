import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Stack from "./components/sections/Stack";
import WhyUs from "./components/sections/WhyUs";
import Process from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <NavBar />
          <main>
            <Hero />
            <Services />
            <Stack />
            <WhyUs />
            <Process />
            <Portfolio />
            <Testimonials />
            <Team />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
