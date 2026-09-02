import React from 'react';
import { FolderGit2, Cpu, Award, Hourglass } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Statistics = () => {
  const { statistics } = portfolioData;

  const stats = [
    {
      id: 'projects',
      label: 'Projects Built',
      value: statistics.projects,
      icon: FolderGit2,
      color: 'var(--color-primary)',
    },
    {
      id: 'technologies',
      label: 'Technologies',
      value: statistics.technologies,
      icon: Cpu,
      color: 'var(--color-secondary)',
    },
    {
      id: 'learningExperience',
      label: 'Years Learning',
      value: statistics.learningExperience,
      icon: Hourglass,
      color: 'var(--color-accent)',
    },
    {
      id: 'certifications',
      label: 'Certifications',
      value: statistics.certifications,
      icon: Award,
      color: 'var(--color-success)',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '1rem',
        marginTop: '2.5rem',
      }}
    >
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="card-base"
            style={{
              padding: '1.4rem 1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-surface)',
              position: 'relative',
            }}
          >
            <div
              style={{
                color: item.color,
                marginBottom: '0.6rem',
                opacity: 0.95,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
              }}
            >
              <Icon size={20} />
            </div>
            
            <span
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
              className="text-gradient"
            >
              {item.value}
            </span>
            
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                marginTop: '0.35rem',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
