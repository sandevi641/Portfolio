import React from 'react';
import SectionTitle from '../common/SectionTitle';
import AboutContent from './AboutContent';
import Statistics from './Statistics';
import profileImg from '../../assets/images/profile/profile-placeholder.jpg';

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
              className="card-base"
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '1 / 1',
                padding: '0.75rem',
                backgroundColor: 'var(--color-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={profileImg}
                alt="Profile Placeholder"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--border-radius)',
                }}
                loading="lazy"
              />
            </div>

            {/* Quick Status Pill */}
            <div
              style={{
                textAlign: 'center',
                maxWidth: '300px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
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
