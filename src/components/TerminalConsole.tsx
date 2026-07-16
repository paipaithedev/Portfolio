import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, RefreshCw, ChevronRight, CornerDownLeft } from 'lucide-react';
import { usePortfolioStore } from '../store';

export default function TerminalConsole() {
  const { terminalLogs, executeCommand, clearTerminalLogs } = usePortfolioStore();
  const [inputVal, setInputVal] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const scrollBufferRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [typedLines, setTypedLines] = useState<string[]>([]);
  const linesToType = [
    "executing /help...",
    "Loading user modules: React, Node.js, Python...",
    "System ready. Type a command or scroll to explore."
  ];

  // Helper for timestamp formatting
  const getTimestamp = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  // Typewriter effect on mount
  useEffect(() => {
    let currentLineIdx = 0;
    let currentCharIdx = 0;
    let currentText = "";
    const tempTypedLines: string[] = ["", "", ""];

    const interval = setInterval(() => {
      if (currentLineIdx < linesToType.length) {
        const line = linesToType[currentLineIdx];
        if (currentCharIdx < line.length) {
          currentText += line[currentCharIdx];
          tempTypedLines[currentLineIdx] = currentText;
          setTypedLines([...tempTypedLines].filter(Boolean));
          currentCharIdx++;
        } else {
          currentLineIdx++;
          currentCharIdx = 0;
          currentText = "";
        }
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll to bottom of logs on new inserts (without scrolling the page)
  useEffect(() => {
    if (scrollBufferRef.current) {
      scrollBufferRef.current.scrollTo({
        top: scrollBufferRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [terminalLogs, typedLines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim();
    if (!cleanCmd) return;

    executeCommand(cleanCmd);
    setInputVal('');
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const timestampStr = getTimestamp();

  return (
    <div 
      id="terminal-console"
      className="relative px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-10"
    >
      {/* Connector glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Console Frame */}
      <div 
        onClick={handleContainerClick}
        className={`bg-black border transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-md cursor-text ${
          isFocused ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.04)]' : 'border-white/5'
        }`}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-white/5 font-mono text-[11px] select-none text-neutral-400">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            </div>
            <span className="text-neutral-600">|</span>
            <div className="flex items-center space-x-1.5 text-neutral-300">
              <Terminal size={12} className="text-neutral-400" />
              <span>paipaithedev@gmail.com ~ shell_session</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearTerminalLogs();
                setTypedLines([]);
              }}
              title="Purge logs buffer"
              className="hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw size={11} />
              <span>Purge</span>
            </button>
            <span className="text-neutral-400 flex items-center space-x-1">
              <Shield size={11} strokeWidth={2} />
              <span>SECURE_NODE</span>
            </span>
          </div>
        </div>

        {/* Output Screen Buffer */}
        <div 
          ref={scrollBufferRef}
          className="p-4 h-64 md:h-72 overflow-y-auto font-mono text-xs text-left space-y-2.5 select-text scrollbar-thin scrollbar-thumb-neutral-900"
        >
          {/* Render the Typewriter Help Sequence lines */}
          {typedLines.map((line, idx) => {
            let typeColor = 'text-neutral-400';
            let component = 'SYSTEM';
            if (idx === 0) {
              typeColor = 'text-neutral-300';
              component = 'EXEC';
            } else if (idx === 1) {
              typeColor = 'text-neutral-400';
              component = 'LOADER';
            } else if (idx === 2) {
              typeColor = 'text-neutral-300';
              component = 'READY';
            }

            return (
              <div key={`typewriter-${idx}`} className="whitespace-pre-wrap leading-relaxed animate-fade-in">
                <div className="flex items-start">
                  <span className="text-neutral-600 mr-2 shrink-0">[{timestampStr}]</span>
                  <span className={`${typeColor} uppercase mr-2 shrink-0 font-medium`}>
                    [{component}]
                  </span>
                  <span className="text-neutral-300 flex-1">{line}</span>
                </div>
              </div>
            );
          })}

          {/* Render any terminal log entries from store */}
          {terminalLogs.map((log) => {
            // Custom colors based on log level
            let typeColor = 'text-neutral-400';
            let msgColor = 'text-neutral-300';

            if (log.type === 'success') {
              typeColor = 'text-neutral-300';
              msgColor = 'text-neutral-300';
            } else if (log.type === 'warning') {
              typeColor = 'text-neutral-300';
              msgColor = 'text-neutral-300';
            } else if (log.type === 'error') {
              typeColor = 'text-neutral-300';
              msgColor = 'text-neutral-300';
            } else if (log.type === 'input') {
              typeColor = 'text-neutral-500';
              msgColor = 'text-white font-medium';
            }

            return (
              <div key={log.id} className="whitespace-pre-wrap leading-relaxed">
                {log.type !== 'input' ? (
                  <div className="flex items-start">
                    <span className="text-neutral-600 mr-2 shrink-0">[{log.timestamp}]</span>
                    <span className={`${typeColor} uppercase mr-2 shrink-0 font-medium`}>
                      [{log.component}]
                    </span>
                    <span className={`${msgColor} flex-1`}>{log.message}</span>
                  </div>
                ) : (
                  <div className="flex items-center text-neutral-300 font-medium">
                    <span className="text-neutral-600 mr-2 shrink-0">[{log.timestamp}]</span>
                    <span className="text-white flex-1">{log.message}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input Form Bar */}
        <form 
          onSubmit={handleSubmit}
          className="flex items-center border-t border-white/5 bg-black px-4 py-2"
        >
          <span className="font-mono text-xs text-neutral-400 font-bold mr-1 select-none shrink-0">
            $
          </span>
          <ChevronRight size={14} className="text-neutral-600 mr-1 shrink-0 animate-pulse" />
          
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Type 'help' for available procedures..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-neutral-700 py-1"
            autoComplete="off"
            spellCheck="false"
          />

          <div className="flex items-center space-x-2 shrink-0 select-none">
            <span className="font-mono text-[9px] text-neutral-600 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded flex items-center space-x-1">
              <span>RETURN</span>
              <CornerDownLeft size={8} />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
