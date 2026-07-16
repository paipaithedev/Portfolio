import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, ChevronRight } from 'lucide-react';
import { usePortfolioStore } from '../store';

export default function HeroSection() {
  const executeCommand = usePortfolioStore((state) => state.executeCommand);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    executeCommand(`navigation --target ${id}`);
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-16 md:py-24 text-left"
    >
      {/* Structural Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left z-10">
          
          {/* Status Indicator Badge */}
          <div className="flex animate-fade-in">
            <div 
              id="status-badge"
              className="px-3 py-1 border border-white/15 rounded-full flex items-center gap-2 bg-white/5 backdrop-blur-md"
            >
              <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-pulse"></div>
              <span className="font-mono text-[10px] text-neutral-300 tracking-wider uppercase">
                Available for New Projects
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-[0.3em] mb-2 block">
              [ROLE: FULL STACK DEVELOPER]
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Building scalable web <br />
              <span className="text-neutral-500">
                and mobile experiences.
              </span>
            </h1>
          </div>

          {/* Subtitle / Paragraph */}
          <p className="text-base md:text-lg text-neutral-400 max-w-lg leading-relaxed">
            I am a Full Stack Developer with 3 years of experience building scalable web and mobile applications from the ground up.
          </p>

          {/* Terminal Hint inline */}
          <div className="hidden sm:flex items-center space-x-3 text-xs font-mono text-neutral-500">
            <Terminal size={14} className="text-neutral-400 animate-pulse" />
            <span>Interactive console terminal available below: type</span>
            <code className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-neutral-300">
              help
            </code>
            <span>or</span>
            <code className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-neutral-300">
              projects
            </code>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => scrollToSection('deployments')}
              className="px-8 py-3 bg-white text-black font-bold text-sm tracking-tight border border-white hover:bg-black hover:text-blue-200 hover:border-blue-500/40 transition-all rounded-[2px] cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_24px_rgba(59,130,246,0.18)] inline-flex items-center justify-center space-x-2"
            >
              <span>View Selected Projects</span>
              <ArrowUpRight size={14} />
            </button>
            
            <button
              onClick={() => scrollToSection('telemetry')}
              className="px-8 py-3 border border-white/10 bg-white/5 text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-all rounded-[2px] cursor-pointer inline-flex items-center justify-center space-x-2"
            >
              <span>Learn About Me</span>
              <ChevronRight size={14} />
            </button>
          </div>


          {/* Professional Core Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 max-w-lg">
            <div>
              <div className="font-mono text-lg text-white font-medium">3 Years</div>
              <div className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase">Professional Experience</div>
            </div>
            <div>
              <div className="font-mono text-lg text-white font-medium">15+ Built</div>
              <div className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase">Completed Projects</div>
            </div>
            <div>
              <div className="font-mono text-lg text-white font-medium">100%</div>
              <div className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase">Type-Safe Coverage</div>
            </div>
          </div>

        </div>

        {/* Right Side: The Interactive Portrait with Tracing SVG Border */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 sm:w-80 md:w-96 max-w-md mx-auto aspect-[4/5] bg-black rounded-xl border border-white/10 p-1 shadow-2xl"
          >
            {/* The SVG Tracing Animated Laser Border */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="0.75"
                width="calc(100% - 1.5px)"
                height="calc(100% - 1.5px)"
                rx="12"
                fill="none"
                stroke="url(#laser-gradient)"
                strokeWidth="1.5"
                strokeDasharray="140 480"
                className="animate-[trace-border_4s_linear_infinite]"
              />
              <defs>
                <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#d4d4d4" stopOpacity="0.55" />
                  <stop offset="65%" stopColor="#a3a3a3" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
                </linearGradient>
              </defs>
            </svg>

            {/* Static tracing corners */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-30">
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-white/20"></div>
              <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-white/15"></div>
              <div className="absolute top-0 right-0 h-24 w-[1px] bg-white/20"></div>
              <div className="absolute bottom-0 left-0 h-24 w-[1px] bg-white/15"></div>
            </div>

            {/* Glassy Inner Frame Container */}
            <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-black flex items-center justify-center group">
              
              {/* Dynamic Overlays */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-white/50 bg-black/80 border border-white/10 px-2 py-0.5 rounded tracking-widest uppercase">
                [PORTFOLIO OVERVIEW]
              </div>
              
              {/* Card Metadata Overlay */}
              <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-white/50 space-y-1 bg-black/75 backdrop-blur-sm p-2 rounded-lg border border-white/5">
                <div className="flex gap-2"><span>DEVELOPER:</span> <span className="text-white">Zin Min Latt</span></div>
                <div className="flex gap-2"><span>NICKNAME:</span> <span className="text-white">Pai Pai</span></div>
                <div className="flex gap-2"><span>LOCATION:</span> <span className="text-white">REMOTE-FRIENDLY</span></div>
              </div>

              <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] text-neutral-500 bg-black/80 border border-white/10 px-2 py-0.5 rounded tracking-wider flex items-center space-x-1">
                <span className="inline-block w-1 h-1 rounded-full bg-neutral-300 animate-pulse"></span>
                <span>STATUS: ACTIVE</span>
              </div>

              {/* Portrait Image with slow scale/pan animation */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="/profile_porfolio.jpg"
                  alt="Full Stack Developer Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 transition-transform duration-[6s] ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Abstract Target Crosshairs */}
              <div className="absolute inset-0 border border-white/5 m-12 pointer-events-none rounded-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white/10 font-sans font-light select-none text-xs">
                +
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Styled Laser Border Animation Keyframe Style Block */}
      <style>{`
        @keyframes trace-border {
          0% {
            stroke-dashoffset: 620;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
