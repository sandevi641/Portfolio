import React from 'react';
import { ArrowRight, FileDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { scrollToSection } from '../../utils/helpers';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';

export const HeroContent = () => {
  const { personal, availability, resume } = portfolioData;

  return (
    <div
      className="hero-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.25rem',
        maxWidth: '620px',
      }}
    >
      {/* Availability / Status Badge */}
      {availability?.active && (
        <div
          className="badge badge-success animate-fade-in"
          style={{
            padding: '0.4rem 0.9rem',
            fontSize: '0.8125rem',
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)',
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
          <span>{availability.text}</span>
        </div>
      )}

      {/* Greeting & Headline */}
      <div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: 'var(--color-primary)',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <Sparkles size={16} />
          Hi, I am
        </span>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.03em',
            marginBottom: '0.65rem',
          }}
        >
          {personal.name}
        </h1>
        <h2
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.3,
          }}
        >
          {personal.title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.925rem',
            color: 'var(--color-primary)',
            marginTop: '0.35rem',
          }}
        >
          {personal.subtitle}
        </p>
      </div>

      {/* Introduction paragraph */}
      <p
        style={{
          fontSize: '1.0625rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.65,
        }}
      >
        {portfolioData.about.introduction}
      </p>

      {/* CTA Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '0.5rem',
        }}
      >
        <Button
          variant="primary"
          onClick={() => scrollToSection('projects')}
          icon={ArrowRight}
          iconPosition="right"
        >
          View My Projects
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
          marginTop: '0.75rem',
        }}
      >
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Connect:
        </span>
        <SocialLinks iconSize={18} />
      </div>
    </div>
  );
};

export default HeroContent;
