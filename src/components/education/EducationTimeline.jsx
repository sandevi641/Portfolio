import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { educationData } from '../../data/education';

export const EducationTimeline = () => {
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '860px',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        borderLeft: '2px solid var(--color-border)',
      }}
    >
      {educationData.map((item, index) => (
        <div
          key={item.id}
          style={{
            position: 'relative',
            marginBottom: index === educationData.length - 1 ? 0 : '3rem',
            paddingLeft: '1.5rem',
          }}
        >
          {/* Timeline Dot Indicator */}
          <div
            style={{
              position: 'absolute',
              left: '-2.15rem',
              top: '0.25rem',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-primary)',
              border: '3px solid var(--color-primary)',
              boxShadow: '0 0 10px var(--color-primary-glow)',
            }}
          />

          {/* Education Card */}
          <div
            className="card-base"
            style={{
              padding: '1.75rem',
              backgroundColor: 'var(--color-surface-card)',
            }}
          >
            {/* Header / Meta */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                marginBottom: '0.75rem',
              }}
            >
              <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={13} />
                {item.duration}
              </span>

              {item.gpa && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-success)',
                  }}
                >
                  GPA: {item.gpa}
                </span>
              )}
            </div>

            {/* Degree & University */}
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '0.35rem',
              }}
            >
              {item.degree}
            </h3>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem',
                marginBottom: '1rem',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                <GraduationCap size={16} />
                {item.university}
              </span>
              {item.faculty && <span>• {item.faculty}</span>}
              {item.location && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} />
                  {item.location}
                </span>
              )}
            </div>

            {/* Description */}
            {item.description && (
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                {item.description}
              </p>
            )}

            {/* Relevant Coursework */}
            {item.coursework && item.coursework.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <h4
                  style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <BookOpen size={14} />
                  Relevant Coursework
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.coursework.map((course) => (
                    <span key={course} className="badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Academic Achievements */}
            {item.achievements && item.achievements.length > 0 && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Award size={14} />
                  Academic Honors &amp; Activities
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  {item.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: 'var(--color-primary)', marginTop: '0.1rem' }}>›</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
