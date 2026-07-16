import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ShieldCheck, Cpu, Sparkles, Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyDrawerProps {
  project: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyDrawer({ project, isOpen, onClose }: CaseStudyDrawerProps) {
  // Prevent scrolling on body when drawer is open
  useEffect(() => {
    if (isOpen && project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, project]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-transparent backdrop-blur-[3px] backdrop-brightness-50 z-[90] cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 h-full w-full sm:max-w-xl md:w-[600px] bg-[#0A0A0A] border-l border-white/10 z-[100] flex flex-col shadow-2xl overflow-hidden text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0F0F0F]/50">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-sans font-semibold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 scrollbar-thin scrollbar-thumb-neutral-800">
              
              {/* Project Visual Proof Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="space-y-3.5">
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    <ImageIcon size={14} className="text-neutral-400" />
                    <span>Visual Evidence & Diagnostics</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((imgSrc, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className="group/img relative aspect-video rounded-lg overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 bg-black shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                      >
                        <img 
                          src={imgSrc} 
                          alt={`${project.title} screenshot ${imgIdx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105 filter contrast-[1.02] brightness-90 group-hover/img:brightness-100"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-300" />
                        <div className="absolute bottom-2 left-2 font-mono text-[9px] text-neutral-400 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/5 tracking-wider">
                          SYS_IMG_REF_{imgIdx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Section 1: Overview */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-neutral-400" />
                  <span>Overview</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {project.overview}
                </p>
              </div>

              {/* Section 2: Role & Stack */}
              <div className="group bg-black border border-white/5 hover:border-blue-500/30 rounded-lg p-5 space-y-4 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Project Metadata</span>
                  <span className="text-[10px] px-2 py-0.5 bg-white/10 text-neutral-300 border border-white/15 group-hover:border-blue-500/25 group-hover:text-blue-200 rounded font-mono font-medium uppercase transition-colors">
                    {project.category}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm font-sans font-medium text-white">
                    Role: <span className="text-neutral-300 font-normal">{project.role}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    Primary Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded animate-fade-in"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 3: Key Engineering Contributions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  <Cpu size={14} className="text-neutral-400" />
                  <span>Key Engineering Contributions</span>
                </div>

                <ul className="space-y-4">
                  {project.contributions.map((contribution, idx) => (
                    <li key={idx} className="group flex items-start space-x-3 text-sm text-neutral-300">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-neutral-300 border border-white/15 group-hover:border-blue-500/25 group-hover:text-blue-300 transition-colors">
                        <ChevronRight size={12} />
                      </span>
                      <div className="space-y-1">
                        <strong className="text-white font-medium block">{contribution.title}</strong>
                        <span className="text-neutral-400 leading-relaxed font-sans">
                          {contribution.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: The Outcome */}
              <div className="space-y-3 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  <Sparkles size={14} className="text-neutral-400" />
                  <span>The Outcome</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {project.outcome}
                </p>
              </div>

              {/* Optional Section 5: Action Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5 font-mono text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all py-2.5 rounded font-sans font-medium text-xs cursor-pointer"
                    >
                      <Github size={14} />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-white text-black border border-white hover:bg-black hover:text-blue-200 hover:border-blue-500/40 transition-colors py-2.5 rounded font-sans font-medium text-xs cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      <span>Visit Live Demo</span>
                    </a>
                  )}
                </div>
              )}

            </div>

            {/* Footer Status Indicators */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0A0A0A] flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                <span>
                  {project.projectType === 'Professional' ? 'INTERNAL SYSTEM SECURE PROFILE' : 'SANDBOX / PUBLIC CASE STUDY'}
                </span>
              </span>
              <span>PORTFOLIO CONTEXT</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    ,
    document.body
  );
}
