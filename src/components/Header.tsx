import { useState, useEffect } from 'react';
import { Terminal, Mail, Menu, X, Download } from 'lucide-react';
import { usePortfolioStore } from '../store';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const executeCommand = usePortfolioStore((state) => state.executeCommand);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    executeCommand(`navigation --target ${id}`);
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-md border-white/5 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          {/* Futuristic geometric logo */}
          <div className="w-6 h-6 rounded bg-black border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-colors">
            <span className="font-mono text-[10px] font-semibold select-none group-hover:text-white transition-colors">▲</span>
          </div>
          <div className="text-left font-mono leading-none">
            <div className="text-[11px] font-bold text-white tracking-widest uppercase">PORTFOLIO</div>
            <div className="text-[8px] text-neutral-500 tracking-wider uppercase mt-0.5">FULL STACK DEVELOPER</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-mono text-xs text-neutral-400">
          <button 
            onClick={() => handleNavClick('infrastructure')} 
            className="hover:text-white transition-colors"
          >
            01. TECH STACK
          </button>
          
          <button 
            onClick={() => handleNavClick('deployments')} 
            className="hover:text-white transition-colors"
          >
            02. SELECTED PROJECTS
          </button>
          
          <button 
            onClick={() => handleNavClick('telemetry')} 
            className="hover:text-white transition-colors"
          >
            03. ABOUT ME
          </button>

          <button 
            onClick={() => handleNavClick('terminal-console')} 
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <Terminal size={12} className="text-neutral-400" />
            <span>04. CONSOLE</span>
          </button>
        </nav>

        {/* Action button - Contact CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="mailto:paipaithedev@gmail.com"
            onClick={() => executeCommand('contact')}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all text-white px-3.5 py-1.5 rounded-[2px] font-mono text-[11px]"
          >
            <Mail size={12} className="text-neutral-400" />
            <span>CONTACT ME</span>
          </a>
          <a
            href="/ZinMinLatt_CV.pdf"
            download="Zin_Min_Latt_CV.pdf"
            onClick={() => executeCommand('navigation --target resume')}
            className="inline-flex items-center space-x-2 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-white px-3.5 py-1.5 rounded-[2px] font-mono text-[11px]"
          >
            <Download size={12} className="text-neutral-400" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-neutral-400 hover:text-white transition-colors animate-fade-in"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/5 backdrop-blur-xl flex flex-col p-6 space-y-4 font-mono text-sm text-left">
          <button 
            onClick={() => handleNavClick('infrastructure')} 
            className="text-neutral-400 hover:text-white py-2 border-b border-white/5 text-left"
          >
            01. TECH STACK
          </button>
          <button 
            onClick={() => handleNavClick('deployments')} 
            className="text-neutral-400 hover:text-white py-2 border-b border-white/5 text-left"
          >
            02. SELECTED PROJECTS
          </button>
          <button 
            onClick={() => handleNavClick('telemetry')} 
            className="text-neutral-400 hover:text-white py-2 border-b border-white/5 text-left"
          >
            03. ABOUT ME
          </button>
          <button 
            onClick={() => handleNavClick('terminal-console')} 
            className="text-neutral-400 hover:text-white py-2 border-b border-white/5 text-left flex items-center space-x-2"
          >
            <Terminal size={14} className="text-neutral-400" />
            <span>04. CONSOLE</span>
          </button>
          
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="mailto:paipaithedev@gmail.com"
              className="w-full text-center inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 py-2.5 rounded-[2px] text-white hover:bg-white/10 transition-colors text-xs"
            >
              <Mail size={14} />
              <span>CONTACT</span>
            </a>
            <a
              href="/ZinMinLatt_CV.pdf"
              download="Zin_Min_Latt_CV.pdf"
              onClick={() => executeCommand('navigation --target resume')}
              className="w-full text-center inline-flex items-center justify-center space-x-2 bg-transparent border border-white/10 py-2.5 rounded-[2px] text-white hover:bg-white/5 transition-colors text-xs"
            >
              <Download size={14} className="text-neutral-400" />
              <span>RESUME</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
