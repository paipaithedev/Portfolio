import React, { useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../types';
import { usePortfolioStore } from '../store';
import CaseStudyDrawer from './CaseStudyDrawer';

const projectsData: CaseStudy[] = [
  {
    id: 'dtis-desktop',
    title: 'Drug Treatment Information System',
    subtitle: 'Drug Treatment Information System',
    description: 'Engineered the complete frontend architecture and complex UI components (including a customized, collapsible navigation sidebar) for a medical application. Integrated seamlessly with a C# .NET and MySQL backend.',
    category: 'Desktop',
    projectType: 'Professional',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Internal Desktop App'],
    runtime: 'React / Electron',
    role: 'Frontend Developer',
    techStack: ['React', 'TypeScript', 'Zustand', 'TanStack Query'],
    overview: 'DTIS is a secure, web-based healthcare operations system designed for drug treatment centers. It centralizes patient registration, treatment workflows, medication dispensing, and facility-level analytics to replace disconnected, manual hospital workflows.',
    contributions: [
      {
        title: 'Complex Form Architecture',
        desc: 'Built robust patient registration and treatment flows handling demographic data with strict schema validation using React Hook Form and Zod.'
      },
      {
        title: 'Hardware UI Integration',
        desc: 'Designed a custom UI control panel to directly interface with physical medication dispensers.'
      },
      {
        title: 'Advanced State & API Management',
        desc: 'Centralized data fetching using TanStack Query and Axios. Implemented custom API interceptors to translate backend errors into localized Burmese toast notifications.'
      }
    ],
    outcome: 'Delivered a highly responsive, data-driven interface that successfully simplified daily operations for healthcare staff. The modular frontend architecture easily handles massive amounts of complex patient statuses and stock workflows without compromising speed or usability.',
    images: [
      'login-dtis.png',
      'dashboard-dtis.png'
    ]
  },
{
    id: 'elearning-platform',
    title: 'Full-Stack E-Learning Platform',
    subtitle: 'Comprehensive Online Education System',
    description: 'A centralized educational platform with a student-facing portal and a secure administrative backend for instructors.',
    category: 'Full-Stack',
    projectType: 'Personal',
    tags: ['React', 'Node.js', 'MongoDB', 'Vercel', 'Render'], // Added deployment tags
    runtime: 'MERN Stack',
    role: 'Full-Stack Developer',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    overview: 'A centralized, dual-architecture educational platform designed to manage the complete online learning lifecycle. The frontend is deployed via Vercel for instant edge delivery, while the RESTful Express API and MongoDB database are hosted on Render.',
    contributions: [
      {
        title: 'Role-Based Access Control',
        desc: 'Engineered a scalable RESTful Node.js API with strict RBAC, ensuring secure boundaries between students, instructors, and admins.'
      },
      {
        title: 'Complex Data Modeling',
        desc: 'Designed MongoDB schemas using Mongoose to handle deeply relational data, including enrollments, quizzes, and payments.'
      },
      {
        title: 'Cloud Deployment Architecture', // Updated this contribution to highlight your new hosting!
        desc: 'Successfully deployed a decoupled architecture using Vercel for the React frontend and Render for the Express backend API.'
      }
    ],
    outcome: 'Successfully delivered a robust, feature-rich platform capable of running an entire online education business.',
    githubUrl: 'https://github.com/paipaithedev/ELearning_Frontend', // Don't forget your GitHub link
    liveUrl: 'https://e-learning-frontend-sepia.vercel.app/', // Your new live link!
    images: [
      'user-elearning.png',
      'admin-elearning.png'
    ]
  },
{
  id: 'parabyte-learning',
  title: 'Parabyte Media Learning Hub',
  subtitle: 'Bilingual Educational CMS Platform',
  description: 'Designed the complete user interface, responsive layout architectures, and multi-language translation flows for a live education platform using WordPress and custom frontend injections.',
  category: 'Web',
  projectType: 'Professional',
  tags: ['WordPress', 'Elementor', 'HTML/CSS/JS Snippets', 'UI/UX Design', 'Localization'],
  runtime: 'WordPress',
  role: 'Frontend UI Developer & Designer',
  techStack: ['WordPress', 'Elementor', 'CSS3', 'JavaScript', 'WPML/Localization Tools'],
  overview: 'A production-ready educational portal built to showcase Parabyte Media\'s core activities, plans, and student learning paths. I was responsible for transforming the user experience by building modern UI layers, configuring operational modules like forms and pricing tiers, and implementing a flawless English-to-Burmese translation infrastructure.',
  contributions: [
    {
      title: 'Advanced UI Customization',
      desc: 'Crafted custom page layouts, structured pricing grids, and designed interactive sections using Elementor combined with custom HTML/CSS styles to bypass typical template limits.'
    },
    {
      title: 'Bilingual Localization Framework',
      desc: 'Implemented and managed a comprehensive dual-language layout system, ensuring all UI typography, navigation blocks, and course content map perfectly between English and Burmese scripts.'
    },
    {
      title: 'Operational Form & Plugin Integration',
      desc: 'Configured dynamic data capture forms and multi-step inquiry modules via specialized plugins, utilizing vanilla JavaScript snippets to manage subtle field validations and custom layout styling.'
    }
  ],
  outcome: 'Successfully delivered a polished, live educational platform that effectively drives brand awareness and student inquiries for Parabyte Media.',
  liveUrl: 'https://learning.parabyte.media',
  // Note: Hiding githubUrl because it is a professional closed-source CMS project
  images: [
    '/parabyte-en.png',
    '/parabyte-grid.png',
    '/parabyte-mm.png'
  ]
},
{
    id: 'finance-productivity-dashboard',
    title: 'Finance & Productivity Console',
    subtitle: 'Unified Financial Analytics & Task Workspace',
    description: 'Architected a comprehensive personal operations dashboard combining relational financial tracking, monthly budgeting pipelines, and daily task workflows powered by a serverless SQL backend.',
    category: 'Full-Stack',
    projectType: 'Personal',
    tags: ['React', 'Supabase', 'PostgreSQL', 'Zustand'],
    runtime: 'React / Supabase',
    role: 'Full-Stack Developer',
    techStack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Recharts'],
    overview: 'A unified personal dashboard engineered to eliminate the friction between disjointed finance tracking and productivity apps. It merges deep relational spending analytics with real-time task operations, relying entirely on a cloud serverless architecture for instant data syncing and secure storage.',
    contributions: [
      {
        title: 'Relational Database Design & RLS',
        desc: 'Designed a highly structured PostgreSQL database schema inside Supabase, enforcing strict Row-Level Security (RLS) policies to ensure absolute user data isolation and secure transaction querying.'
      },
      {
        title: 'Financial Aggregations & Analytics',
        desc: 'Leveraged Recharts to build fluid, interactive spending charts, writing optimized client-side filtering and data aggregation structures to display real-time monthly budget metrics and savings velocity.'
      },
      {
        title: 'Serverless Storage Integration',
        desc: 'Implemented secure receipt image uploading using Supabase Storage buckets, handling file type validation, compression references, and mapping public URL metadata to transaction records.'
      }
    ],
    outcome: 'Delivered a lightning-fast, highly responsive analytics application that successfully bridges the gap between financial tracking and operational task management.',
    githubUrl: 'https://github.com/paipaithedev/Finance_Personal_Console', 
    liveUrl: 'https://finance-personal-console.vercel.app/',
    images: [
      '/fpd_desk.png',
      '/fpd_auth.png',
      '/fpd_mob.png'
    ]
  },
];

interface ProjectCardProps {
  project: CaseStudy;
  onClick: () => void;
  key?: string;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const setHoveredProject = usePortfolioStore((state) => state.setHoveredProject);
  
  // Track mouse position for the individual spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative cursor-pointer bg-black hover:bg-[#050505] border border-white/5 hover:border-blue-500/30 rounded-xl p-6 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px] text-left"
    >
      {/* Dynamic Spotlight Tracking */}
      <motion.div
        className="absolute -inset-px rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.12), transparent 70%)`
        }}
      />

      {/* Subtle bottom accent gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

      {/* Card Header Category & Type Badge */}
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pb-3 border-b border-white/5">
          <span className="text-neutral-300 font-medium uppercase tracking-wider transition-colors group-hover:text-blue-300">{project.category}</span>
          <span className={`px-2 py-0.5 rounded text-[8px] tracking-wider uppercase font-medium ${
            project.projectType === 'Professional' 
              ? 'bg-white/10 text-neutral-200 border border-white/15 group-hover:border-blue-500/25 group-hover:text-blue-100' 
              : 'bg-black text-neutral-400 border border-white/10 group-hover:border-blue-500/20 group-hover:text-blue-200'
          }`}>
            {project.projectType} Work
          </span>
        </div>

        {/* Title and Runtime */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-sans font-medium text-white tracking-tight group-hover:text-blue-100 transition-colors flex items-center gap-1.5">
              <span>{project.title}</span>
            </h3>
            <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-blue-300 transition-colors shrink-0" />
          </div>
          <div className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase mt-1">
            Stack: {project.runtime}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-neutral-400 mt-3 leading-relaxed font-sans">
          {project.description}
        </p>
      </div>

      {/* Card Footer Tech Badges */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag} 
              className="font-mono text-[8px] text-neutral-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded transition-colors group-hover:border-blue-500/20"
            >
              #{tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[8px] text-neutral-500 bg-black border border-white/10 px-1.5 py-0.5 rounded transition-colors group-hover:border-blue-500/20">
              +{project.tags.length - 4} MORE
            </span>
          )}
        </div>

        <span className="font-mono text-[10px] text-neutral-400 group-hover:text-blue-300 transition-colors flex items-center space-x-1 shrink-0">
          <span>View Details</span>
          <ArrowUpRight size={10} />
        </span>
      </div>
    </div>
  );
}

export default function DeploymentsSection() {
  const [filter, setFilter] = useState<'All' | 'Professional' | 'Personal'>('All');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const executeCommand = usePortfolioStore((state) => state.executeCommand);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'All') return true;
    return p.projectType === filter;
  });

  const handleProjectClick = (project: CaseStudy) => {
    setSelectedProject(project);
    executeCommand(`projects ${project.id}`);
  };

  return (
    <section 
      id="deployments" 
      className="relative px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20 border-t border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 space-y-6 lg:space-y-0">
        <div className="text-left">
          <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-2">
            [PORTFOLIO: SELECTED_PROJECTS]
          </div>
          <h2 className="text-3xl font-sans font-medium text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg mt-1">
            A showcase of my actual work, representing a balanced mix of professional company systems and open-source personal applications.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="inline-flex bg-black p-1 border border-white/10 rounded-lg backdrop-blur-md self-start lg:self-auto font-mono text-[11px]">
          {(['All', 'Professional', 'Personal'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                filter === cat 
                  ? 'bg-white/10 text-white border border-white/10' 
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Drawer rendered once outside loop */}
      <CaseStudyDrawer 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
