import React from 'react';
import {
  GraduationCap,
  MapPin,
  Compass,
  Target,
  Layers,
  Calendar,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const AboutContent = () => {
  const { about, personal } = portfolioData;

  const infoItems = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: about.degree,
      highlight: true,
    },
    {
      icon: Layers,
      label: 'University',
      value: about.university,
    },
    {
      icon: Calendar,
      label: 'Academic Year',
      value: about.academicYear,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
    },
    {
      icon: Compass,
      label: 'Specialization',
      value: about.specialization,
    },
    {
      icon: Target,
      label: 'Career Goal',
      value: about.careerGoals,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Narrative Paragraphs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {about.detailedBio && about.detailedBio.length > 0 ? (
          about.detailedBio.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
              }}
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p style={{ fontSize: '1.025rem', lineHeight: 1.75 }}>
            {about.introduction}
          </p>
        )}
      </div>

      {/* Structured Details Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
        }}
      >
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="card-base"
              style={{
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                backgroundColor: 'var(--color-surface)',
                border: item.highlight
                  ? '1px solid rgba(56, 189, 248, 0.35)'
                  : '1px solid var(--color-border)',
              }}
            >
              <div
                style={{
                  padding: '0.6rem',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'var(--color-badge-bg)',
                  border: '1px solid var(--color-badge-border)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.15rem',
                  boxShadow: '0 2px 8px rgba(var(--color-primary-rgb), 0.15)',
                }}
              >
                <Icon size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: item.highlight ? 'var(--color-primary)' : 'var(--color-text-primary)',
                    lineHeight: 1.45,
                    display: 'block',
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
