import React from 'react';
import SectionTitle from '../common/SectionTitle';
import AboutContent from './AboutContent';
import Statistics from './Statistics';
import profileImg from '../../assets/images/profile/profile-placeholder.png';
import { Award, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="About Me"
          title="Academic Background & Engineering Passion"
          subtitle="A snapshot of my educational journey, foundational skills, and what drives my pursuit of software excellence."
        />

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Profile Card & Avatar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                position: 'relative',
                padding: '4px',
                borderRadius: 'calc(var(--border-radius-lg) + 4px)',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
                boxShadow: '0 12px 35px -10px rgba(56, 189, 248, 0.3)',
                maxWidth: '340px',
                width: '100%',
              }}
            >
              <div
                className="card-base"
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  padding: '0.5rem',
                  backgroundColor: 'var(--color-bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: 'var(--border-radius-lg)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Sandevi de Silva Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'calc(var(--border-radius-lg) - 4px)',
                    transition: 'transform var(--transition-slow)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  loading="lazy"
                />
              </div>

              {/* Status Indicator Floating Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-surface-elevated)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--border-radius-full)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} />
                <span>Undergraduate @ UoM</span>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div
              style={{
                textAlign: 'center',
                maxWidth: '300px',
                marginTop: '0.5rem',
              }}
            >
              <span
                className="badge badge-primary"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  padding: '0.35rem 0.9rem',
                  letterSpacing: '0.02em',
                }}
              >
                Seeking 2026/2027 Internships
              </span>
            </div>
          </div>

          {/* About Content & Statistics */}
          <div>
            <AboutContent />
            <Statistics />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            gridTemplateColumns: 340px 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
