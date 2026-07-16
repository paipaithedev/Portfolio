import { useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import GridBackground from './components/GridBackground';
import HeroSection from './components/HeroSection';
import InfrastructureSection from './components/InfrastructureSection';
import DeploymentsSection from './components/DeploymentsSection';
import TelemetrySection from './components/TelemetrySection';
import TerminalConsole from './components/TerminalConsole';
import Footer from './components/Footer';
import { usePortfolioStore } from './store';

export default function App() {
  const { setActiveSection } = usePortfolioStore();

  // Implement Intersection Observer to track active section highlights
  useEffect(() => {
    const sections = ['hero', 'infrastructure', 'deployments', 'telemetry', 'terminal-console'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Output initial welcome sequence in the console!

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [setActiveSection]);

  return (
    <div id="app-viewport" className="relative min-h-screen text-white bg-black font-sans selection:bg-white/20 selection:text-white">
      {/* 1. Interactive, Faint Grid Background */}
      <GridBackground />

      {/* 2. Sleek Fixed Header Navigation */}
      <Header />

      {/* 3. Main Container Layout */}
      <main id="scroll-wrapper" className="relative z-10 w-full overflow-hidden">
        
        {/* Hero Section (Asymmetric / Animated portrait with tracing border) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroSection />
        </motion.div>

        {/* Infrastructure Integrations Section (Bento box visual layout) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <InfrastructureSection />
        </motion.div>

        {/* Deployments Gallery Section (Live container database look) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <DeploymentsSection />
        </motion.div>

        {/* Telemetry Core About Me Section (Systems specs dashboard metrics) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <TelemetrySection />
        </motion.div>

        {/* Interactive CLI Console Widget */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <TerminalConsole />
        </motion.div>

      </main>

      {/* 4. Telemetry Status Footer */}
      <Footer />
    </div>
  );
}
