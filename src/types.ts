export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Mobile' | 'Desktop' | 'Systems & APIs';
  projectType: 'Professional' | 'Personal';
  tags: string[];
  runtime: string;
  repoUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  features: string[];
  techStack: string[];
  details: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  projectType: 'Professional' | 'Personal';
  tags: string[];
  runtime: string;
  role: string;
  techStack: string[];
  overview: string;
  contributions: {
    title: string;
    desc: string;
  }[];
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'languages' | 'tools';
  description: string;
  metric: string; // e.g. "Library", "Framework", "Database", "Runtime"
  iconName: string; // For Lucide icons mapping
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'input';
  component: string;
  message: string;
}
