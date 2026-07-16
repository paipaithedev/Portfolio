import { create } from 'zustand';
import { Project, TerminalLog } from './types';
import { PROJECTS, SYSTEM_INFO } from './data';

interface PortfolioState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  terminalLogs: TerminalLog[];
  addTerminalLog: (log: Omit<TerminalLog, 'id' | 'timestamp'>) => void;
  clearTerminalLogs: () => void;
  executeCommand: (cmdText: string) => void;
  hoveredProject: string | null;
  setHoveredProject: (id: string | null) => void;
}

const getTimestamp = () => {
  const d = new Date();
  return d.toTimeString().split(' ')[0];
};

const INITIAL_LOGS: TerminalLog[] = [];

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  terminalLogs: INITIAL_LOGS,
  addTerminalLog: (log) => set((state) => ({
    terminalLogs: [
      ...state.terminalLogs,
      {
        ...log,
        id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        timestamp: getTimestamp()
      }
    ].slice(-50) // Keep last 50 logs for memory efficiency
  })),
  clearTerminalLogs: () => set({ terminalLogs: [] }),
  hoveredProject: null,
  setHoveredProject: (id) => set({ hoveredProject: id }),
  executeCommand: (cmdText) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    // Log the user input command
    get().addTerminalLog({
      type: 'input',
      component: 'USER',
      message: `$ ${rawCmd}`
    });

    const parts = rawCmd.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    setTimeout(() => {
      switch (cmd) {
        case 'help':
          get().addTerminalLog({
            type: 'info',
            component: 'CLI_HELP',
            message: 'Available commands:\n  help        - Display list of core portfolio procedures.\n  about       - View professional developer biography.\n  projects    - Query list of selected projects.\n  tech_stack  - Output active software integrations.\n  contact     - Reveal outbound channel email details.\n  navigation  - Route the display viewport to a target section.\n  resume      - Download professional CV/Resume (PDF).\n  clear       - Purge terminal console screen buffer.'
          });
          break;

        case 'about':
        case 'whoami':
          get().addTerminalLog({
            type: 'info',
            component: 'BIO_SUMMARY',
            message: 'PROFESSIONAL DEVELOPER PROFILE:\n  A Full Stack Developer with 3 years of experience building scalable web and mobile applications from the ground up.\n  Committed to clean code quality, type safety, modular API design, and beautiful, high-contrast visual user interfaces.'
          });
          break;

        case 'sys_info':
          get().addTerminalLog({
            type: 'success',
            component: 'DEV_ENVIRONMENT',
            message: `Node Status  : ${SYSTEM_INFO.status}\nDeveloper    : ${SYSTEM_INFO.hostname}\nService Region: ${SYSTEM_INFO.location}\nCore Focus    : ${SYSTEM_INFO.kernel}\nAvailability  : ${SYSTEM_INFO.memory}\nArchitecture  : ${SYSTEM_INFO.architecture}\nFrameworks    : ${SYSTEM_INFO.buildVersion}`
          });
          break;

        case 'projects':
        case 'deployments':
          if (args.length > 0) {
            const targetId = args[0];
            const matched = PROJECTS.find(p => 
              p.id.toLowerCase().includes(targetId) || 
              p.title.toLowerCase().includes(targetId)
            );
            if (matched) {
              get().addTerminalLog({
                type: 'success',
                component: 'PROJECT_SPECS',
                message: `PROJECT SPECIFICATIONS: ${matched.title}\n----------------------------------\n  Title     : ${matched.title}\n  Category  : ${matched.category}\n  Runtime   : ${matched.runtime}\n  Description: ${matched.description}\n  Repository: ${matched.repoUrl}\n----------------------------------`
              });
              break;
            }
          }
          
          const projList = PROJECTS.map(p => `  - [${p.category}] ${p.title} (${p.runtime})`).join('\n');
          get().addTerminalLog({
            type: 'success',
            component: 'PORTFOLIO_QUERY',
            message: `Selected Projects Registry:\n${projList}\n\nType "projects <id>" to fetch details (e.g., "projects vectodb-analytics").`
          });
          break;

        case 'tech_stack':
          get().addTerminalLog({
            type: 'success',
            component: 'TECH_MATRIX',
            message: 'INTEGRATED TECHNOLOGY MATRIX:\n  * FRONTEND : React, React Native, Tailwind CSS, Zustand State\n  * BACKEND  : Node.js, Python (FastAPI)\n  * DATABASES: MongoDB Document Collections, PostgreSQL\n  * DEVOPS   : Postman, GitHub, GitLab CI/CD'
          });
          break;

        case 'contact':
          get().addTerminalLog({
            type: 'info',
            component: 'CONTACT_INFO',
            message: 'OUTBOUND COMMUNICATION PROTOCOLS:\n  * Email: paipaithedev@gmail.com\n  * Status: Available for full-stack & mobile development opportunities.\n  * Contact handshake ready. Feel free to send an email.'
          });
          break;

        case 'resume':
        case 'download_resume':
        case 'resume_download':
          get().addTerminalLog({
            type: 'success',
            component: 'DOWNLOAD',
            message: 'Initiating download request for Zin_Min_Latt_CV.pdf... Status: 200 OK'
          });
          try {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'Zin_Min_Latt_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (e) {
            get().addTerminalLog({
              type: 'error',
              component: 'DOWNLOAD',
              message: 'Failed to initiate download context. Please use the download button directly.'
            });
          }
          break;

        case 'navigation': {
          let target = 'unknown';
          const targetIdx = args.indexOf('--target');
          if (targetIdx !== -1 && args[targetIdx + 1]) {
            target = args[targetIdx + 1];
          } else if (args[0]) {
            target = args[0];
          }
          get().addTerminalLog({
            type: 'success',
            component: 'SYSTEM',
            message: `Routing to ${target} module... Status: 200 OK`
          });
          break;
        }

        case 'clear':
          get().clearTerminalLogs();
          break;

        default:
          if (cmd === 'projects' || cmd === 'project' || cmd === 'deployments' || cmd === 'deployment') {
            const targetId = args[0];
            if (targetId) {
              const matched = PROJECTS.find(p => 
                p.id.toLowerCase().includes(targetId) || 
                p.title.toLowerCase().includes(targetId)
              );
              if (matched) {
                get().addTerminalLog({
                  type: 'success',
                  component: 'PROJECT_SPECS',
                  message: `PROJECT SPECIFICATIONS: ${matched.title}\n----------------------------------\n  Title     : ${matched.title}\n  Category  : ${matched.category}\n  Runtime   : ${matched.runtime}\n  Description: ${matched.description}\n  Repository: ${matched.repoUrl}\n----------------------------------`
                });
                break;
              }
            }
          }
          get().addTerminalLog({
            type: 'error',
            component: 'SHELL_ENGINE',
            message: `Command "${cmd}" not recognized. Type "help" to view validated list of commands.`
          });
      }
    }, 100);
  }
}));
