import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { TECH_ITEMS } from '../data';
import { TechItem } from '../types';

// Dynamic icon resolver using lucide-react
const TechIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} strokeWidth={1} />;
};

export default function InfrastructureSection() {
  return (
    <section 
      id="infrastructure" 
      className="relative px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20 border-t border-white/5"
    >
      {/* Grid Pattern Behind Section */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
        <div className="text-left">
          <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-2">
            [PORTFOLIO: TECHNICAL_MATRIX]
          </div>
          <h2 className="text-3xl font-sans font-medium text-white tracking-tight">
            My Tech Stack
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg mt-1">
            Proven technologies, frameworks, and languages I use daily to build robust, scalable applications.
          </p>
        </div>
        
        <div className="font-mono text-[10px] text-neutral-400 bg-black border border-white/10 px-3 py-1.5 rounded flex items-center space-x-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-300 animate-pulse" />
          <span>PORTFOLIO COMPILATION: SUCCESSFUL</span>
        </div>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Left tall card / info block */}
        <div className="md:col-span-2 lg:col-span-1 bg-black border border-white/5 hover:border-blue-500/30 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="space-y-4 relative z-10 text-left">
            <div className="w-10 h-10 rounded-lg bg-black border border-white/10 group-hover:border-blue-500/25 flex items-center justify-center text-neutral-300 group-hover:text-blue-300 shadow-[0_0_15px_rgba(255,255,255,0.04)] transition-colors">
              <LucideIcons.Settings size={18} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-sans font-medium text-white">Development Philosophy</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every codebase I construct is built on strong software engineering foundations: rigorous type safety, modular design, clean separation of concerns, and robust automated workflows. I aim for responsive, fluid user interfaces backed by performant, secure web APIs.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 mt-8 relative z-10 text-left">
            <div className="font-mono text-[10px] text-neutral-500 mb-2">ENGINEERING PRINCIPLES</div>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">Type Safety</span>
                  <span className="text-neutral-300 group-hover:text-blue-200 transition-colors">TypeScript</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded overflow-hidden">
                  <div className="bg-neutral-300 group-hover:bg-blue-500 h-full w-full transition-colors" />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">Responsive UX</span>
                  <span className="text-neutral-300 group-hover:text-blue-200 transition-colors">Tailwind CSS</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded overflow-hidden">
                  <div className="bg-neutral-400 group-hover:bg-blue-500 h-full w-[95%] transition-colors" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">Continuous Integration</span>
                  <span className="text-neutral-300 group-hover:text-blue-200 transition-colors">GitLab CI/CD</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded overflow-hidden">
                  <div className="bg-neutral-500 group-hover:bg-blue-500 h-full w-[95%] transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Items Grid (the remaining columns) */}
        <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {TECH_ITEMS.map((item: TechItem, index: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-black hover:bg-[#050505] border border-white/5 hover:border-blue-500/30 rounded-xl p-5 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Radial gradient spotlight on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="w-9 h-9 rounded-lg bg-black border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-blue-300 group-hover:border-blue-500/25 transition-colors">
                  <TechIcon name={item.iconName} className="w-5 h-5" />
                </div>
                
                {/* Monospace Badge Tag */}
                <div className="font-mono text-[9px] text-neutral-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded uppercase">
                  {item.metric}
                </div>
              </div>

              <div className="mt-4 relative z-10 text-left">
                <h4 className="text-sm font-sans font-medium text-white tracking-tight group-hover:text-blue-100 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500 relative z-10">
                <span>Focus Area</span>
                <span className="text-neutral-300 group-hover:text-blue-300 capitalize transition-colors">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
