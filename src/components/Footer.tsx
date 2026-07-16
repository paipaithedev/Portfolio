import { Shield, Mail, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/20 backdrop-blur-md py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-500">
        
        {/* Left Side: Professional Developer Profile metadata */}
        <div className="flex items-center space-x-2.5">
          <Mail size={12} className="text-neutral-600" />
          <span>EMAIL: <strong className="text-neutral-400 font-normal">paipaithedev@gmail.com</strong></span>
          <span className="text-neutral-800">|</span>
          <CheckCircle size={12} className="text-neutral-400" />
          <span>STATUS: <strong className="text-neutral-400 font-normal">OPEN TO OPPORTUNITIES</strong></span>
        </div>

        {/* Center: Copyright and standard disclaimer */}
        <div className="text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} PAPAITHEDEV. ALL RIGHTS RESERVED.</span>
        </div>

        {/* Right Side: Technology Stack framework tags */}
        <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-2.5 py-1 rounded-[2px]">
          <Shield size={10} className="text-neutral-400" />
          <span className="text-[9px] text-neutral-400">REACT 19 // TAILWIND CSS</span>
        </div>

      </div>
    </footer>
  );
}
