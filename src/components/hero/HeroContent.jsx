import { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Sparkles, Code2, GraduationCap, FolderGit2, Award, Zap } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { scrollToSection } from '../../utils/helpers';
import { WhatsAppIcon } from '../common/Icons';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';

export const HeroContent = () => {
  const { personal, availability, resume, statistics } = portfolioData;

  const roles = [
    "IT Undergraduate @ University of Moratuwa",
    "Full-Stack Software Developer",
    "React, Node.js & TypeScript Enthusiast",
    "Mobile & Web Application Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedRole === currentFullRole) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(35);
      }, 2200);
    } else if (isDeleting && displayedRole === '') {
      // Switch to next text
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(70);
    } else {
      // Typing or deleting
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentFullRole.substring(0, displayedRole.length - 1)
          : currentFullRole.substring(0, displayedRole.length + 1);
        setDisplayedRole(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, typingSpeed]);

  const quickSkills = [
    { name: 'React', color: '#38bdf8' },
    { name: 'Node.js', color: '#22c55e' },
    { name: 'Express', color: '#94a3b8' },
    { name: 'MongoDB', color: '#10b981' },
    { name: 'MySQL', color: '#0284c7' },
    { name: 'TypeScript', color: '#60a5fa' },
  ];

  return (
    <div
      className="hero-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.25rem',
        maxWidth: '100%',
        width: '100%',
      }}
    >
      {/* Availability / Status Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', width: '100%' }}>
        {availability?.active && (
          <div
            className="badge badge-success animate-fade-in"
            style={{
              padding: '0.4rem 0.85rem',
              fontSize: '0.78rem',
              boxShadow: '0 2px 14px rgba(16, 185, 129, 0.22)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              borderRadius: 'var(--border-radius-full)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
              }}
              className="animate-pulse-dot"
            />
            <span style={{ fontWeight: 600 }}>{availability.text}</span>
          </div>
        )}

        <span
          className="badge"
          style={{
            padding: '0.4rem 0.75rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-primary)',
            borderColor: 'var(--color-border)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            borderRadius: 'var(--border-radius-full)',
          }}
        >
          <Zap size={12} style={{ color: 'var(--color-warning)' }} />
          <span>Colombo, Sri Lanka</span>
        </span>
      </div>

      {/* Greeting & Headline */}
      <div style={{ width: '100%' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--color-primary)',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.35rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          <Sparkles size={14} />
          <span>Hello, I'm</span>
        </div>
        
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 5.8vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '0.65rem',
            wordBreak: 'break-word',
          }}
        >
          <span className="text-gradient">{personal.name}</span>
        </h1>
        
        {/* Dynamic Typewriter Subheading */}
        <div
          style={{
            minHeight: '2.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(0.95rem, 3.4vw, 1.4rem)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.35,
              fontFamily: 'var(--font-display)',
              wordBreak: 'break-word',
            }}
          >
            {displayedRole}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.15rem',
              backgroundColor: 'var(--color-primary)',
              animation: 'pulse 1s infinite',
              flexShrink: 0,
            }}
          />
        </div>
        
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.825rem',
            color: 'var(--color-text-muted)',
            fontWeight: 500,
            marginTop: '0.35rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.45rem',
            lineHeight: 1.5,
            wordBreak: 'break-word',
          }}
        >
          <Code2 size={15} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '2px' }} />
          <span>{personal.tagline || 'Building scalable, efficient web & mobile applications with modern technologies.'}</span>
        </p>
      </div>

      {/* Introduction paragraph */}
      <p
        style={{
          fontSize: '1.025rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
        }}
      >
        {portfolioData.about.introduction}
      </p>

      {/* Quick Stack Badges with Color Accents */}
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
            letterSpacing: '0.05em',
          }}
        >
          Stack:
        </span>
        {quickSkills.map((skill) => (
          <span
            key={skill.name}
            className="badge"
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              padding: '0.22rem 0.65rem',
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = skill.color;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: skill.color }} />
            {skill.name}
          </span>
        ))}
      </div>

      {/* CTA Action Buttons */}
      <div
        className="hero-cta-group"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.85rem',
          marginTop: '0.35rem',
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

        {personal.whatsapp && (
          <a
            href={`https://wa.me/${personal.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: 'rgba(37, 211, 102, 0.12)',
              color: '#25D366',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.15rem',
              borderRadius: 'var(--border-radius-sm)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.12)';
              e.currentTarget.style.color = '#25D366';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <WhatsAppIcon size={17} />
            <span>Chat on WhatsApp</span>
          </a>
        )}
      </div>

      {/* Quick Metrics Bar */}
      <div
        className="quick-metrics-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '0.75rem',
          width: '100%',
          padding: '0.85rem 1.1rem',
          borderRadius: 'var(--border-radius-sm)',
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid var(--color-border)',
          marginTop: '0.5rem',
        }}
      >
        <div className="metric-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <FolderGit2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <div>
            <div className="metric-val" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
              {statistics?.projects || '3+'}
            </div>
            <div className="metric-lbl" style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Projects
            </div>
          </div>
        </div>

        <div className="metric-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Code2 size={18} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
          <div>
            <div className="metric-val" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
              {statistics?.technologies || '5+'}
            </div>
            <div className="metric-lbl" style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Tech Stack
            </div>
          </div>
        </div>

        <div className="metric-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Award size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          <div>
            <div className="metric-val" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
              {statistics?.certifications || '4+'}
            </div>
            <div className="metric-lbl" style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Certifications
            </div>
          </div>
        </div>

        <div className="metric-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <GraduationCap size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
          <div>
            <div className="metric-val" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
              Moratuwa
            </div>
            <div className="metric-lbl" style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              IT Undergrad
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Connect:
        </span>
        <SocialLinks iconSize={17} />
      </div>
    </div>
  );
};

export default HeroContent;

