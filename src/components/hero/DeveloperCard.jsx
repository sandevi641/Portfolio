import { useState, useEffect, useRef } from 'react';
import { Terminal, Copy, Check, Sparkles, FileCode, Layers, Play, CheckCircle2, CornerDownLeft, Clock, Zap, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { scrollToSection } from '../../utils/helpers';

export const DeveloperCard = () => {
  const [activeTab, setActiveTab] = useState('developer.ts'); // 'developer.ts' | 'stack.json' | 'terminal.sh'
  const [copied, setCopied] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to Sandevi Developer CLI v2.4.0' },
    { type: 'output', text: 'Type a command or click a quick action below. Type "help" for options.' }
  ]);
  const [commandInput, setCommandInput] = useState('');
  const [lastExecuted, setLastExecuted] = useState('');
  const [activeHoverLine, setActiveHoverLine] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  // 3D Tilt & Mouse Spotlight Ref
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const { personal, availability, about, resume } = portfolioData;

  // Live Colombo Time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3D Parallax Mouse Handlers
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  const tsCodeLines = [
    { num: 1, code: '<span style="color: #818cf8">const</span> <span style="color: #38bdf8">developer</span>: <span style="color: #f59e0b">SoftwareEngineer</span> = {' },
    { num: 2, code: '  <span style="color: #94a3b8">name:</span> <span style="color: #34d399">"' + personal.name + '"</span>,' },
    { num: 3, code: '  <span style="color: #94a3b8">institution:</span> <span style="color: #34d399">"' + about.university + '"</span>,' },
    { num: 4, code: '  <span style="color: #94a3b8">degree:</span> <span style="color: #34d399">"' + about.degree + '"</span>,' },
    { num: 5, code: '  <span style="color: #94a3b8">role:</span> <span style="color: #34d399">"IT Undergraduate & Software Engineer"</span>,' },
    { num: 6, code: '  <span style="color: #94a3b8">seekingInternship:</span> <span style="color: #c084fc">true</span>,' },
    { num: 7, code: '  <span style="color: #94a3b8">status:</span> <span style="color: #10b981; font-weight: 600">"' + availability.text + '"</span>,' },
    { num: 8, code: '  <span style="color: #94a3b8">coreStack:</span> [<span style="color: #f59e0b">"React"</span>, <span style="color: #f59e0b">"Node.js"</span>, <span style="color: #f59e0b">"TypeScript"</span>, <span style="color: #f59e0b">"MongoDB"</span>],' },
    { num: 9, code: '  <span style="color: #94a3b8">location:</span> <span style="color: #34d399">"Colombo, Sri Lanka"</span>,' },
    { num: 10, code: '  <span style="color: #94a3b8">contact:</span> () => <span style="color: #38bdf8">connectViaWhatsApp</span>()' },
    { num: 11, code: '};' },
  ];

  const jsonCodeLines = [
    { num: 1, code: '{' },
    { num: 2, code: '  <span style="color: #38bdf8">"developer"</span>: <span style="color: #34d399">"' + personal.name + '"</span>,' },
    { num: 3, code: '  <span style="color: #38bdf8">"university"</span>: <span style="color: #34d399">"' + about.university + '"</span>,' },
    { num: 4, code: '  <span style="color: #38bdf8">"stack"</span>: {' },
    { num: 5, code: '    <span style="color: #818cf8">"frontend"</span>: [<span style="color: #34d399">"React"</span>, <span style="color: #34d399">"JavaScript (ES6+)"</span>, <span style="color: #34d399">"TypeScript"</span>],' },
    { num: 6, code: '    <span style="color: #818cf8">"backend"</span>: [<span style="color: #34d399">"Node.js"</span>, <span style="color: #34d399">"Express.js"</span>, <span style="color: #34d399">"REST APIs"</span>],' },
    { num: 7, code: '    <span style="color: #818cf8">"databases"</span>: [<span style="color: #34d399">"MongoDB"</span>, <span style="color: #34d399">"MySQL"</span>, <span style="color: #34d399">"PostgreSQL"</span>],' },
    { num: 8, code: '    <span style="color: #818cf8">"tools"</span>: [<span style="color: #34d399">"Git"</span>, <span style="color: #34d399">"GitHub"</span>, <span style="color: #34d399">"Docker"</span>, <span style="color: #34d399">"Vite"</span>, <span style="color: #34d399">"Postman"</span>]' },
    { num: 9, code: '  },' },
    { num: 10, code: '  <span style="color: #38bdf8">"availableForHire"</span>: <span style="color: #c084fc">true</span>,' },
    { num: 11, code: '  <span style="color: #38bdf8">"targetGraduation"</span>: <span style="color: #34d399">"2027"</span>' },
    { num: 12, code: '}' },
  ];

  const handleCopy = () => {
    const rawTs = tsCodeLines.map(l => l.code.replace(/<[^>]+>/g, '')).join('\n');
    const rawJson = jsonCodeLines.map(l => l.code.replace(/<[^>]+>/g, '')).join('\n');
    const codeToCopy = activeTab === 'developer.ts' ? rawTs : activeTab === 'stack.json' ? rawJson : 'npx sandevi-portfolio';
    
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    setLastExecuted(cleanCmd);

    const newEntries = [{ type: 'input', text: `$ ${cmdStr}` }];

    if (cleanCmd === 'help') {
      newEntries.push({
        type: 'output',
        text: 'Available commands:\n• projects    - View featured engineering projects\n• whatsapp    - Launch WhatsApp direct chat\n• education   - Display University of Moratuwa info\n• skills      - Output technical stack summary\n• cv          - Download developer resume (PDF)\n• time        - Get live Sri Lanka local time\n• clear       - Clear terminal console',
      });
    } else if (cleanCmd === 'projects' || cleanCmd === 'npm run projects') {
      newEntries.push({ type: 'output', text: 'Navigating to Featured Projects section...' });
      setTimeout(() => scrollToSection('projects'), 400);
    } else if (cleanCmd === 'whatsapp' || cleanCmd === 'npx whatsapp' || cleanCmd === 'contact') {
      newEntries.push({ type: 'output', text: 'Opening WhatsApp direct conversation...' });
      setTimeout(() => {
        if (personal.whatsapp) {
          window.open(`https://wa.me/${personal.whatsapp}`, '_blank', 'noopener,noreferrer');
        } else {
          scrollToSection('contact');
        }
      }, 500);
    } else if (cleanCmd === 'education' || cleanCmd === 'cat education.txt') {
      newEntries.push({
        type: 'output',
        text: `Institution: ${about.university}\nDegree: ${about.degree}\nFaculty: ${about.faculty}\nAcademic Year: ${about.academicYear}`,
      });
    } else if (cleanCmd === 'skills' || cleanCmd === 'stack') {
      newEntries.push({
        type: 'output',
        text: 'Core Stack: React, Node.js, Express, MongoDB, MySQL, TypeScript, Firebase, Docker, Git',
      });
    } else if (cleanCmd === 'cv' || cleanCmd === 'open cv.pdf' || cleanCmd === 'download cv') {
      newEntries.push({ type: 'output', text: 'Downloading resume / CV...' });
      setTimeout(() => {
        window.open(resume.path, '_blank');
      }, 500);
    } else if (cleanCmd === 'time' || cleanCmd === 'date') {
      newEntries.push({ type: 'output', text: `Current Sri Lanka Time: ${currentTime} (Asia/Colombo, GMT+5:30)` });
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setCommandInput('');
      return;
    } else if (cleanCmd === '') {
      // blank line
    } else {
      newEntries.push({
        type: 'error',
        text: `command not found: "${cmdStr}". Type "help" for a list of available commands.`,
      });
    }

    setTerminalHistory((prev) => [...prev, ...newEntries]);
    setCommandInput('');
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (commandInput.trim()) {
      executeCommand(commandInput);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
      {/* Floating Dynamic Orbit Badge 1 (Top-Right) */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '-15px',
          right: '-12px',
          zIndex: 4,
          padding: '0.4rem 0.85rem',
          borderRadius: 'var(--border-radius-full)',
          backgroundColor: 'rgba(7, 9, 14, 0.88)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-primary)',
          pointerEvents: 'none',
        }}
      >
        <Zap size={13} style={{ color: 'var(--color-warning)' }} />
        <span>Open for Internships</span>
      </div>

      {/* Floating Dynamic Orbit Badge 2 (Bottom-Left) */}
      <div
        className="animate-float-reverse"
        style={{
          position: 'absolute',
          bottom: '-14px',
          left: '-10px',
          zIndex: 4,
          padding: '0.4rem 0.85rem',
          borderRadius: 'var(--border-radius-full)',
          backgroundColor: 'rgba(7, 9, 14, 0.88)',
          border: '1px solid rgba(129, 140, 248, 0.4)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(129, 140, 248, 0.25)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-secondary)',
          pointerEvents: 'none',
        }}
      >
        <Cpu size={13} />
        <span>React • Node • TypeScript</span>
      </div>

      {/* 3D Interactive Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="developer-card-container"
        style={{
          width: '100%',
          backgroundColor: 'var(--color-code-bg)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid rgba(56, 189, 248, 0.28)',
          boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.75), 0 0 35px -5px rgba(56, 189, 248, 0.18)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          backdropFilter: 'blur(24px)',
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.12s ease-out',
          position: 'relative',
        }}
      >
        {/* Mouse Spotlight Glow Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(56, 189, 248, ${spotlight.opacity}) 0%, transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'opacity 0.2s ease',
          }}
        />

        {/* Titlebar & Tab Navigation */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.65rem 1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            borderBottom: '1px solid var(--color-border)',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          {/* Window controls and tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.45rem', marginRight: '0.25rem' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b', boxShadow: '0 0 8px rgba(245, 158, 11, 0.5)' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <button
                type="button"
                onClick={() => setActiveTab('developer.ts')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--border-radius-xs)',
                  backgroundColor: activeTab === 'developer.ts' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  border: activeTab === 'developer.ts' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
                  color: activeTab === 'developer.ts' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <FileCode size={13} />
                <span>developer.ts</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('stack.json')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--border-radius-xs)',
                  backgroundColor: activeTab === 'stack.json' ? 'rgba(129, 140, 248, 0.15)' : 'transparent',
                  border: activeTab === 'stack.json' ? '1px solid rgba(129, 140, 248, 0.35)' : '1px solid transparent',
                  color: activeTab === 'stack.json' ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Layers size={13} />
                <span>stack.json</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('terminal.sh')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--border-radius-xs)',
                  backgroundColor: activeTab === 'terminal.sh' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                  border: activeTab === 'terminal.sh' ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid transparent',
                  color: activeTab === 'terminal.sh' ? 'var(--color-success)' : 'var(--color-text-muted)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Terminal size={13} />
                <span>terminal.sh</span>
              </button>
            </div>
          </div>

          {/* Right Header Bar: Live Clock & Copy button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {currentTime && (
              <span
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
                title="Sri Lanka Local Time (Asia/Colombo)"
              >
                <Clock size={11} style={{ color: 'var(--color-primary)' }} />
                <span>{currentTime}</span>
              </span>
            )}

            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy snippet"
              title="Copy code"
              style={{
                color: copied ? 'var(--color-success)' : 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.22rem 0.55rem',
                borderRadius: 'var(--border-radius-xs)',
                backgroundColor: copied ? 'var(--color-success-bg)' : 'rgba(255, 255, 255, 0.04)',
                border: copied ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--color-border)',
                transition: 'all var(--transition-fast)',
                cursor: 'pointer',
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Code Body Area */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '1.25rem 1.4rem',
            minHeight: '275px',
            maxHeight: '340px',
            overflowY: 'auto',
            lineHeight: '1.7',
            color: '#e2e8f0',
            backgroundColor: 'rgba(11, 15, 25, 0.88)',
          }}
        >
          {/* Developer TypeScript Tab with Line Numbers & Hover Highlight */}
          {activeTab === 'developer.ts' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {tsCodeLines.map((line) => {
                const isHovered = activeHoverLine === line.num;
                return (
                  <div
                    key={line.num}
                    onMouseEnter={() => setActiveHoverLine(line.num)}
                    onMouseLeave={() => setActiveHoverLine(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.1rem 0.35rem',
                      borderRadius: 'var(--border-radius-xs)',
                      backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                      transition: 'background-color 0.1s ease',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        textAlign: 'right',
                        fontSize: '0.75rem',
                        color: isHovered ? 'var(--color-primary)' : '#475569',
                        userSelect: 'none',
                      }}
                    >
                      {line.num}
                    </span>
                    <span
                      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', flex: 1 }}
                      dangerouslySetInnerHTML={{ __html: line.code }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* JSON Stack Tab with Line Numbers */}
          {activeTab === 'stack.json' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {jsonCodeLines.map((line) => {
                const isHovered = activeHoverLine === line.num;
                return (
                  <div
                    key={line.num}
                    onMouseEnter={() => setActiveHoverLine(line.num)}
                    onMouseLeave={() => setActiveHoverLine(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.1rem 0.35rem',
                      borderRadius: 'var(--border-radius-xs)',
                      backgroundColor: isHovered ? 'rgba(129, 140, 248, 0.08)' : 'transparent',
                      transition: 'background-color 0.1s ease',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        textAlign: 'right',
                        fontSize: '0.75rem',
                        color: isHovered ? 'var(--color-secondary)' : '#475569',
                        userSelect: 'none',
                      }}
                    >
                      {line.num}
                    </span>
                    <span
                      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', flex: 1 }}
                      dangerouslySetInnerHTML={{ __html: line.code }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Interactive Live Terminal Tab */}
          {activeTab === 'terminal.sh' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Quick Action Suggestion Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {[
                  { label: 'npm run projects', cmd: 'projects', color: 'var(--color-primary)' },
                  { label: 'npx whatsapp', cmd: 'whatsapp', color: '#25D366' },
                  { label: 'cat education.txt', cmd: 'education', color: 'var(--color-secondary)' },
                  { label: 'open cv.pdf', cmd: 'cv', color: 'var(--color-warning)' },
                ].map((btn) => (
                  <button
                    key={btn.cmd}
                    type="button"
                    onClick={() => executeCommand(btn.cmd)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.725rem',
                      padding: '0.3rem 0.6rem',
                      borderRadius: 'var(--border-radius-xs)',
                      backgroundColor: lastExecuted === btn.cmd ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${lastExecuted === btn.cmd ? btn.color : 'rgba(255, 255, 255, 0.1)'}`,
                      color: btn.color,
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <Play size={10} />
                    <span>{btn.label}</span>
                  </button>
                ))}
              </div>

              {/* Terminal Log Console */}
              <div
                style={{
                  padding: '0.75rem 0.9rem',
                  borderRadius: 'var(--border-radius-xs)',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.78rem',
                  minHeight: '130px',
                  maxHeight: '170px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {terminalHistory.map((entry, idx) => (
                  <div
                    key={idx}
                    style={{
                      whiteSpace: 'pre-wrap',
                      color: entry.type === 'input'
                        ? 'var(--color-primary)'
                        : entry.type === 'error'
                        ? 'var(--color-danger)'
                        : '#34d399',
                    }}
                  >
                    {entry.text}
                  </div>
                ))}
              </div>

              {/* Interactive Command Input Prompt */}
              <form onSubmit={handleCommandSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="type a command (e.g. projects, whatsapp, help)..."
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--border-radius-xs)',
                    padding: '0.4rem 0.65rem',
                    color: '#f8fafc',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                />
                <button
                  type="submit"
                  className="btn btn-icon btn-sm"
                  style={{ borderRadius: 'var(--border-radius-xs)', padding: '0.4rem' }}
                  title="Run Command"
                >
                  <CornerDownLeft size={14} />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Status Footbar */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0.55rem 1.25rem',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--color-text-dim)',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-success)', fontWeight: 500 }}>
            <CheckCircle2 size={13} style={{ color: 'var(--color-success)' }} />
            Available for Internships
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Sparkles size={11} style={{ color: 'var(--color-primary)' }} />
            git: master • UTF-8 • TypeScript
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;


