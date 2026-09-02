import React from 'react';
import { ArrowRight, FileDown, Sparkles, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { scrollToSection } from '../../utils/helpers';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';

export const HeroContent = () => {
  const { personal, availability, resume } = portfolioData;

  const quickSkills = ['React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'TypeScript'];

  return (
    <div
      className="hero-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.4rem',
        maxWidth: '640px',
      }}
    >
      {/* Availability / Status Badge */}
      {availability?.active && (
        <div
          className="badge badge-success animate-fade-in"
          style={{
            padding: '0.45rem 1rem',
            fontSize: '0.8125rem',
            boxShadow: '0 2px 12px rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-success)',
            }}
            className="animate-pulse-dot"
          />
          <span style={{ fontWeight: 600 }}>{availability.text}</span>
        </div>
      )}

      {/* Greeting & Headline */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.05rem',
            color: 'var(--color-primary)',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.5rem',
            letterSpacing: '0.02em',
          }}
        >
          <Sparkles size={16} />
          <span>Hi, I'm</span>
        </div>
        
        <h1
          style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '0.65rem',
          }}
        >
          <span className="text-gradient">{personal.name}</span>
        </h1>
        
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            lineHeight: 1.35,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span>{personal.title}</span>
        </h2>
        
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.925rem',
            color: 'var(--color-secondary)',
            fontWeight: 500,
            marginTop: '0.4rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <Code2 size={16} />
          {personal.subtitle}
        </p>
      </div>

      {/* Introduction paragraph */}
      <p
        style={{
          fontSize: '1.0625rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
        }}
      >
        {portfolioData.about.introduction}
      </p>

      {/* Quick Stack Badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            fontWeight: 600,
            marginRight: '0.25rem',
          }}
        >
          Core Stack:
        </span>
        {quickSkills.map((skill) => (
          <span
            key={skill}
            className="badge"
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              padding: '0.2rem 0.6rem',
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* CTA Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '0.25rem',
        }}
      >
        <Button
          variant="primary"
          onClick={() => scrollToSection('projects')}
          icon={ArrowRight}
          iconPosition="right"
        >
          Explore Projects
        </Button>

        <Button
          variant="secondary"
          href={resume.path}
          download={resume.fileName || 'CV.pdf'}
          icon={FileDown}
          iconPosition="left"
        >
          {resume.label || 'Download CV'}
        </Button>
      </div>

      {/* Social Links Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '0.5rem',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Find Me:
        </span>
        <SocialLinks iconSize={18} />
      </div>
    </div>
  );
};

export default HeroContent;
