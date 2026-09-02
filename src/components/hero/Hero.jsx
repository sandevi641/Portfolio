import React from 'react';
import HeroContent from './HeroContent';
import DeveloperCard from './DeveloperCard';

export const Hero = () => {
  return (
    <section
      id="home"
      className="section hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2.5rem)',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Ambient Background Glow Elements */}
      <div
        className="glow-orb animate-float"
        style={{
          top: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 70%)',
        }}
      />
      <div
        className="glow-orb animate-float-reverse"
        style={{
          bottom: '10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.18) 0%, rgba(168, 85, 247, 0) 70%)',
        }}
      />
      <div
        className="glow-orb"
        style={{
          top: '45%',
          left: '40%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          <HeroContent />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <DeveloperCard />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            gridTemplateColumns: 1.12fr 0.88fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
