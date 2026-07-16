import { Project, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'dtis-desktop',
    title: 'DTIS Desktop App 🔒',
    description: 'Engineered the complete frontend architecture and complex UI components (including a customized, collapsible navigation sidebar) for a medical application. Integrated seamlessly with a C# .NET and MySQL backend.',
    category: 'Desktop',
    projectType: 'Professional',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Internal Desktop App'],
    runtime: 'React / Electron',
    liveUrl: 'https://dtis-info-system.dev', // Simulated live demo/landing
    caseStudyUrl: 'https://paipaithedev.medium.com/case-study-dtis', // Simulated case study
    features: [
      'Designed a dense, highly interactive custom React AppSidebar component for patient navigation',
      'Implemented local patient file cache for seamless desktop workflows',
      'Configured automated treatment plan validation helpers reducing operator data entry errors',
      'Optimized interface state rendering with windowing libraries for long patient logs'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    details: 'Engineered the complete frontend architecture and complex UI components (including a customized, collapsible navigation sidebar) for a medical application. Integrated seamlessly with a C# .NET and MySQL backend.'
  },
  {
    id: 'vectodb-analytics',
    title: 'VectoDB Analytics Platform',
    description: 'An interactive open-source analytics dashboard for high-dimensional vector databases, featuring real-time cluster visualization and query analysis.',
    category: 'Full-Stack',
    projectType: 'Personal',
    tags: ['React', 'Node.js', 'MongoDB', 'D3.js', 'Tailwind CSS'],
    runtime: 'Node.js / MongoDB',
    repoUrl: 'https://github.com/developer/vectodb-analytics',
    liveUrl: 'https://vectodb-analytics.vercel.app',
    features: [
      'Interactive vector search query visualizer using customized t-SNE algorithms and D3 graphs',
      'Asynchronous query caching system built over an Express API layer, minimizing database overhead',
      'Highly responsive UI with fully customized filter controls, pagination, and multi-region selection'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'D3.js', 'Tailwind CSS', 'Express'],
    details: 'VectoDB Analytics was built as a personal tool to easily visualize high-dimensional query spaces. It serves as a unified console for developers to track query throughput and optimize distance metrics.'
  },
  {
    id: 'synapse-native',
    title: 'Synapse Core Mobile Client',
    description: 'Cross-platform mobile application that aggregates dashboard analytics and provides offline support for distributed teams.',
    category: 'Mobile',
    projectType: 'Personal',
    tags: ['React Native', 'TypeScript', 'Zustand', 'Expo'],
    runtime: 'React Native / Expo',
    repoUrl: 'https://github.com/developer/synapse-native',
    liveUrl: 'https://synapse-native.vercel.app',
    features: [
      'Lightweight, atomic Zustand state slices driving real-time view updates with zero re-render lag',
      'Secure local data synchronization leveraging iOS Keychain and Android Keystore cryptography',
      'Responsive styling and theme configurations optimized for various handheld device displays'
    ],
    techStack: ['React Native', 'TypeScript', 'Zustand', 'Tailwind CSS (NativeWind)', 'Expo'],
    details: 'This project is a mobile companion that keeps teams aligned. Leveraging native performance optimizations, it ensures layout responsiveness and maintains fluid interactions even on lower-end devices.'
  },
  {
    id: 'gitlab-pipeline',
    title: 'GitLab Pipeline Companion',
    description: 'A powerful custom dashboard and CLI utility to orchestrate, analyze, and monitor multi-stage GitLab CI/CD pipelines.',
    category: 'Systems & APIs',
    projectType: 'Personal',
    tags: ['Python', 'FastAPI', 'GitLab API', 'Tailwind'],
    runtime: 'Python / FastAPI',
    repoUrl: 'https://gitlab.com/developer/gitlab-pipeline-companion',
    liveUrl: 'https://gitlab-companion.dev',
    features: [
      'FastAPI backend service integrating directly with the GitLab REST API and Webhooks',
      'Visual timeline representation of multi-stage job sequences with dynamic reload states',
      'Custom environment parameter builder allowing pipeline runs to be started with a single click'
    ],
    techStack: ['Python', 'FastAPI', 'GitLab REST API', 'Tailwind CSS', 'Docker'],
    details: 'An interface designed to speed up deployment reviews. By aggregating pipeline logs and presenting fail logs front-and-center, it saves development teams valuable debugging cycles.'
  }
];

export const TECH_ITEMS: TechItem[] = [
  {
    name: 'React',
    category: 'frontend',
    description: 'Component-driven reactive UI architecture with optimized client-side state handling and reusable view elements.',
    metric: 'Frontend Library',
    iconName: 'Atom'
  },
  {
    name: 'React Native',
    category: 'frontend',
    description: 'Cross-platform mobile development framework compiling high-fidelity iOS and Android views with responsive touch mechanics.',
    metric: 'Mobile Framework',
    iconName: 'Smartphone'
  },
  {
    name: 'Node.js',
    category: 'backend',
    description: 'Asynchronous event-driven JavaScript backend environment hosting robust REST APIs and custom server controllers.',
    metric: 'Backend Runtime',
    iconName: 'Server'
  },
  {
    name: 'MongoDB',
    category: 'database',
    description: 'Document-oriented database optimized for flexible data structures, high query throughput, and rapid iterations.',
    metric: 'NoSQL Database',
    iconName: 'Database'
  },
  {
    name: 'Python',
    category: 'languages',
    description: 'Versatile scripting language utilized to build fast web services (FastAPI) and handle server-side automation tasks.',
    metric: 'Programming Language',
    iconName: 'Cpu'
  },
  {
    name: 'Postman',
    category: 'devops',
    description: 'Comprehensive API development platform utilized for rigorous endpoint validation, automated collection testing, and mock servers.',
    metric: 'API Development',
    iconName: 'FileCheck'
  },
  {
    name: 'GitLab',
    category: 'devops',
    description: 'Integrated DevOps platform used for continuous integration, pipeline automation, issue tracking, and software security scans.',
    metric: 'CI/CD & Repository',
    iconName: 'Gitlab'
  },
  {
    name: 'WordPress',
    category: 'tools',
    description: 'Professional content management system utilized for custom theme integrations, page architecture, and responsive client interfaces.',
    metric: 'CMS Platform',
    iconName: 'Globe'
  }
];

export const SYSTEM_INFO = {
  hostname: 'paipaithedev@gmail.com',
  location: 'Remote-Friendly',
  kernel: 'Full-Stack Developer',
  memory: '3 Years Experience',
  architecture: 'Clean & Modern Code',
  status: 'ACTIVE',
  buildVersion: 'React 19 / Node.js'
};
