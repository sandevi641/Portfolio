import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../../data/education';

export const EducationTimeline = () => {
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '860px',
        margin: '0 auto',
        paddingLeft: '1.75rem',
        borderLeft: '2px solid rgba(56, 189, 248, 0.3)',
      }}
    >
      {educationData.map((item, index) => (
        <div
          key={item.id}
          style={{
            position: 'relative',
            marginBottom: index === educationData.length - 1 ? 0 : '3.5rem',
            paddingLeft: '1.5rem',
          }}
        >
          {/* Glowing Timeline Node */}
          <div
            style={{
              position: 'absolute',
              left: '-2.45rem',
              top: '0.4rem',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-bg-primary)',
              border: '3px solid var(--color-primary)',
              boxShadow: '0 0 15px var(--color-primary), inset 0 0 6px var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
          </div>

          {/* Education Card */}
          <div
            className="card-base"
            style={{
              padding: '1.85rem',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
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
                marginBottom: '0.85rem',
              }}
            >
              <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                <Calendar size={13} />
                {item.duration}
              </span>

              {item.gpa && (
                <span
                  className="badge badge-success"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
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
                marginBottom: '0.45rem',
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
                marginBottom: '1.2rem',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                <GraduationCap size={17} />
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
                  lineHeight: 1.65,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.35rem',
                }}
              >
                {item.description}
              </p>
            )}

            {/* Relevant Coursework */}
            {item.coursework && item.coursework.length > 0 && (
              <div style={{ marginBottom: '1.35rem' }}>
                <h4
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  <BookOpen size={14} style={{ color: 'var(--color-secondary)' }} />
                  Relevant Coursework
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="badge"
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--color-surface-elevated)',
                      }}
                    >
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
                  padding: '1.1rem',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <Award size={15} />
                  Academic Honors &amp; Activities
                </h4>
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
                  {item.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle size={14} style={{ color: 'var(--color-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
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
