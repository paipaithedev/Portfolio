import { motion } from 'motion/react';
import { Network, Shield, User, Activity } from 'lucide-react';

export default function TelemetrySection() {
  return (
    <section 
      id="telemetry" 
      className="relative px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20 border-t border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Grid Pattern Accent lines */}
      <div className="absolute right-0 top-10 w-48 h-48 opacity-10 border-r border-t border-dashed border-white/10 pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 text-left">
        <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-2">
          [PROFILE: ABOUT_ME]
        </div>
        <h2 className="text-3xl font-sans font-medium text-white tracking-tight">
          About Me
        </h2>
        <p className="text-sm text-neutral-400 max-w-lg mt-1">
          Detailed background, core development principles, and biography.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column (col-span-7): Bio and Core Focus areas */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Operator Bio */}
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-medium text-white flex items-center space-x-2">
              <User size={16} className="text-neutral-400" strokeWidth={1.5} />
              <span>Profile Overview</span>
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I am a dedicated Full Stack Developer with 3 years of experience building scalable web and mobile applications from the ground up. I approach front-end execution with the same performance constraints as database engineering—leveraging lightweight state management, modular design patterns, and responsive, fluid interfaces.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              My engineering philosophy revolves around creating simple, elegant codebases that are highly maintainable. I focus on bridging the gap between elegant client-side visual assemblies and robust backend controllers with unified TypeScript structures.
            </p>
          </div>

          {/* Key Engineering Values */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-sans font-medium text-white flex items-center space-x-2">
              <Network size={16} className="text-neutral-400" strokeWidth={1.5} />
              <span>Key Focus Areas</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="group bg-black border border-white/5 hover:border-blue-500/30 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center space-x-2 font-mono text-xs text-neutral-300 group-hover:text-blue-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-blue-500 transition-colors" />
                  <span>REST APIs & DATABASES</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Structuring robust APIs using Node.js or Python. Highly adept at designing data schemas for NoSQL MongoDB collections or relational PostgreSQL databases.
                </p>
              </div>

              <div className="group bg-black border border-white/5 hover:border-blue-500/30 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center space-x-2 font-mono text-xs text-neutral-300 group-hover:text-blue-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-blue-500 transition-colors" />
                  <span>CROSS-PLATFORM MOBILE</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Compiling robust React Native apps with Expo. Implementing secure local storage keychain integrations, offline synchronization, and responsive styling.
                </p>
              </div>

              <div className="group bg-black border border-white/5 hover:border-blue-500/30 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center space-x-2 font-mono text-xs text-neutral-300 group-hover:text-blue-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-blue-500 transition-colors" />
                  <span>MODERN FRONTEND LAYOUTS</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Crafting rich web layouts in React. Leveraging clean Tailwind utility styles, lightweight state slices, and optimized rendering configurations.
                </p>
              </div>

              <div className="group bg-black border border-white/5 hover:border-blue-500/30 rounded-xl p-4 space-y-2 transition-colors">
                <div className="flex items-center space-x-2 font-mono text-xs text-neutral-300 group-hover:text-blue-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-blue-500 transition-colors" />
                  <span>AUTOMATION & ACTIONS</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Streamlining deployments with automated workflows. Configuring standard build procedures, styling validations, and production-ready bundles.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Right column (col-span-5): Professional Specifications Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Tech specs display */}
          <div className="group bg-black border border-white/10 hover:border-blue-500/30 rounded-xl p-5 shadow-xl text-left transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
              <span className="font-mono text-xs text-neutral-400 flex items-center space-x-1.5">
                <Activity size={12} className="text-neutral-400 group-hover:text-blue-300 transition-colors" />
                <span>PROFILE DETAILS</span>
              </span>
              <span className="font-mono text-[9px] text-neutral-300 group-hover:text-blue-200 font-medium flex items-center space-x-1 transition-colors">
                <span className="w-1.5 h-1.5 bg-neutral-300 group-hover:bg-blue-500 rounded-full animate-pulse mr-1 transition-colors"></span>
                <span>AVAILABLE NOW</span>
              </span>
            </div>

            {/* Profile specifications list */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black border border-white/5 rounded-lg p-3">
                <span className="font-mono text-[9px] text-neutral-500 block uppercase">Preferred Role</span>
                <span className="font-sans text-xs text-white font-medium mt-1 block">Full Stack Developer</span>
              </div>
              <div className="bg-black border border-white/5 rounded-lg p-3">
                <span className="font-mono text-[9px] text-neutral-500 block uppercase">Core Frameworks</span>
                <span className="font-sans text-xs text-white font-medium mt-1 block">React, React Native</span>
              </div>
              <div className="bg-black border border-white/5 rounded-lg p-3">
                <span className="font-mono text-[9px] text-neutral-500 block uppercase">Core Languages</span>
                <span className="font-sans text-xs text-white font-medium mt-1 block">TypeScript, Python</span>
              </div>
              <div className="bg-black border border-white/5 rounded-lg p-3">
                <span className="font-mono text-[9px] text-neutral-500 block uppercase">Primary Databases</span>
                <span className="font-sans text-xs text-white font-medium mt-1 block">MongoDB, PostgreSQL</span>
              </div>
            </div>

            {/* Technical Parameters Table */}
            <div className="mt-5 pt-4 border-t border-white/5 font-mono text-[10px] space-y-2.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">CONTACT EMAIL</span>
                <span className="text-neutral-300">paipaithedev@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">PRIMARY FOCUS</span>
                <span className="text-neutral-300">Web & Mobile Apps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">EXPERIENCE LEVEL</span>
                <span className="text-neutral-300">Full Stack (3 Years)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">PREFERRED METHOD</span>
                <span className="text-neutral-300">Agile & Clean Code</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">WORK ENVIRONMENT</span>
                <span className="text-neutral-300">Remote & Hybrid</span>
              </div>
            </div>
          </div>

          {/* Code Delivery Guarantee Statement */}
          <div className="group bg-black border border-white/5 hover:border-blue-500/30 rounded-xl p-4 flex items-start space-x-3 text-left transition-colors">
            <Shield size={16} className="text-neutral-400 group-hover:text-blue-300 shrink-0 mt-0.5 transition-colors" strokeWidth={1.5} />
            <div className="space-y-1">
              <h4 className="font-sans text-xs font-medium text-white">Code Quality Standard</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Every feature is delivered with strict TypeScript structures, clean repository history, complete documentation, and fully validated responsive views. Clean code is a non-negotiable standard.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
