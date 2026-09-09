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
        backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.08) 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
      }}
    >
      {/* High-tech radial gradient vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 40%, transparent 20%, var(--color-bg-primary) 85%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dynamic Ambient Background Glow Elements */}
      <div
        className="glow-orb animate-float"
        style={{
          top: '8%',
          left: '-5%',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 70%)',
        }}
      />
      <div
        className="glow-orb animate-float-reverse"
        style={{
          bottom: '8%',
          right: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.18) 0%, rgba(168, 85, 247, 0) 70%)',
        }}
      />
      <div
        className="glow-orb"
        style={{
          top: '35%',
          left: '42%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, transparent 70%)',
          opacity: 0.5,
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
