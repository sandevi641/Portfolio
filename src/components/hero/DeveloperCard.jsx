import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const DeveloperCard = () => {
  const [copied, setCopied] = useState(false);
  const { personal, availability, about } = portfolioData;

  const codeSnippet = `const candidate = {
  name: "${personal.name}",
  role: "IT Undergraduate & Software Engineer",
  education: "${about.degree}",
  specialization: "${about.specialization}",
  coreStack: ["React", "Node.js", "TypeScript", "SQL"],
  status: "${availability.text}",
  relocation: "Open / Remote Friendly",
  readyForInternship: true,
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
        maxWidth: '520px',
        backgroundColor: 'var(--color-code-bg)',
        borderRadius: 'var(--border-radius-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--card-shadow)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          </div>
          <span
            style={{
              marginLeft: '0.5rem',
              color: 'var(--color-text-muted)',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Terminal size={12} />
            developer.profile.ts
          </span>
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
            transition: 'color var(--transition-fast)',
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Body */}
      <div
        style={{
          padding: '1.25rem',
          overflowX: 'auto',
          lineHeight: '1.7',
          color: '#e2e8f0',
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <code>
            <span style={{ color: '#818cf8' }}>const</span>{' '}
            <span style={{ color: '#38bdf8' }}>candidate</span> = &#123;{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>name:</span>{' '}
            <span style={{ color: '#34d399' }}>"{personal.name}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>role:</span>{' '}
            <span style={{ color: '#34d399' }}>"IT Undergraduate &amp; Software Dev"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>education:</span>{' '}
            <span style={{ color: '#34d399' }}>"{about.degree}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>coreStack:</span> [
            <span style={{ color: '#f59e0b' }}>"React"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"Node.js"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"TypeScript"</span>,{' '}
            <span style={{ color: '#f59e0b' }}>"SQL"</span>],{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>status:</span>{' '}
            <span style={{ color: '#10b981', fontWeight: 600 }}>"{availability.text}"</span>,{'\n'}
            {'  '}<span style={{ color: '#94a3b8' }}>readyForInternship:</span>{' '}
            <span style={{ color: '#c084fc' }}>true</span>
            {'\n'}&#125;;
          </code>
        </pre>
      </div>

      {/* Bottom Status Footbar */}
      <div
        style={{
          padding: '0.5rem 1.25rem',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--color-text-dim)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-success)',
            }}
            className="animate-pulse-dot"
          />
          Ready to contribute
        </span>
        <span>UTF-8 • TypeScript</span>
      </div>
    </div>
  );
};

export default DeveloperCard;
