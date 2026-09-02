import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const DeveloperCard = () => {
  const [copied, setCopied] = useState(false);
  const { personal, availability, about } = portfolioData;

  const codeSnippet = `const developer = {
  name: "${personal.name}",
  role: "IT Undergraduate & Software Engineer",
  institution: "${about.university}",
  degree: "${about.degree}",
  coreStack: ["React", "Node.js", "TypeScript", "SQL", "MongoDB"],
  status: "${availability.text}",
  relocation: "Colombo, Sri Lanka / Remote Ready",
  seekingInternship: true,
  contact: () => window.location.href = "#contact"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="developer-card-container animate-float"
      style={{
        width: '100%',
        maxWidth: '540px',
        backgroundColor: 'var(--color-code-bg)',
        borderRadius: 'var(--border-radius-lg)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(56, 189, 248, 0.15)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '0.45rem' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 8px rgba(239, 68, 68, 0.4)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b', boxShadow: '0 0 8px rgba(245, 158, 11, 0.4)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)' }} />
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.2rem 0.65rem',
              borderRadius: 'var(--border-radius-xs)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
            }}
          >
            <Terminal size={12} style={{ color: 'var(--color-primary)' }} />
            <span>developer.profile.ts</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code snippet"
          title="Copy code"
          style={{
            color: copied ? 'var(--color-success)' : 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.75rem',
            padding: '0.25rem 0.6rem',
            borderRadius: 'var(--border-radius-xs)',
            backgroundColor: copied ? 'var(--color-success-bg)' : 'transparent',
            border: copied ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer',
          }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Body */}
      <div
        style={{
          padding: '1.4rem',
          overflowX: 'auto',
          lineHeight: '1.75',
          color: '#e2e8f0',
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <code>
            <span style={{ color: '#818cf8' }}>const</span>{' '}
            <span style={{ color: '#38bdf8' }}>developer</span> = &#123;{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>name:</span>{' '}
            <span style={{ color: '#34d399' }}>"{personal.name}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>role:</span>{' '}
            <span style={{ color: '#34d399' }}>"IT Undergraduate &amp; Software Dev"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>institution:</span>{' '}
            <span style={{ color: '#34d399' }}>"{about.university}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>degree:</span>{' '}
            <span style={{ color: '#34d399' }}>"{about.degree}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>coreStack:</span> [
            <span style={{ color: '#f59e0b' }}>"React"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"Node.js"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"TypeScript"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"SQL"</span>],{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>status:</span>{' '}
            <span style={{ color: '#10b981', fontWeight: 600 }}>"{availability.text}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>seekingInternship:</span>{' '}
            <span style={{ color: '#c084fc' }}>true</span>
            {'\n'}&#125;;
          </code>
        </pre>
      </div>

      {/* Bottom Status Footbar */}
      <div
        style={{
          padding: '0.6rem 1.4rem',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--color-text-dim)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success)', fontWeight: 500 }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-success)',
              boxShadow: '0 0 8px var(--color-success)',
            }}
            className="animate-pulse-dot"
          />
          Available for Internships
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Sparkles size={11} style={{ color: 'var(--color-primary)' }} />
          TypeScript • UTF-8
        </span>
      </div>
    </div>
  );
};

export default DeveloperCard;
