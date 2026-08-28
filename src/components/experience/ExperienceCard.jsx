import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const ExperienceCard = ({ exp }) => {
  return (
    <div
      className="card-base"
      style={{
        padding: '1.75rem',
        backgroundColor: 'var(--color-surface-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
      }}
    >
      {/* Header Info */}
      <div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '0.5rem',
          }}
        >
          <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={13} />
            {exp.duration}
          </span>

          <span
            className="badge"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-primary)',
            }}
          >
            {exp.type}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '0.3rem',
          }}
        >
          {exp.role}
        </h3>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
            <Briefcase size={15} style={{ color: 'var(--color-primary)' }} />
            {exp.organization}
          </span>
          {exp.location && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={13} />
              {exp.location}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      {exp.description && (
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
          {exp.description}
        </p>
      )}

      {/* Responsibilities Bullets */}
      {exp.responsibilities && exp.responsibilities.length > 0 && (
        <div>
          <span
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--color-text-muted)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            Key Contributions &amp; Responsibilities
          </span>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}
          >
            {exp.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle size={15} style={{ color: 'var(--color-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {exp.technologies && exp.technologies.length > 0 && (
        <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {exp.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
