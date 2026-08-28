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
    },
    {
      id: 'technologies',
      label: 'Technologies',
      value: statistics.technologies,
      icon: Cpu,
    },
    {
      id: 'learningExperience',
      label: 'Years Learning',
      value: statistics.learningExperience,
      icon: Hourglass,
    },
    {
      id: 'certifications',
      label: 'Certifications',
      value: statistics.certifications,
      icon: Award,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="card-base"
            style={{
              padding: '1.25rem 1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <div
              style={{
                color: 'var(--color-primary)',
                marginBottom: '0.5rem',
                opacity: 0.9,
              }}
            >
              <Icon size={22} />
            </div>
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.2,
              }}
            >
              {item.value}
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                marginTop: '0.25rem',
                fontWeight: 500,
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
