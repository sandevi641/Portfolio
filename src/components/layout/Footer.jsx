import { Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { NAV_LINKS } from '../../utils/constants';
import { getCurrentYear, scrollToSection } from '../../utils/helpers';
import SocialLinks from '../common/SocialLinks';

export const Footer = () => {
  const currentYear = getCurrentYear();
  const { personal } = portfolioData;

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
        padding: '4rem 0 2rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Column 1: Brand & Tagline */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a0d14',
                }}
              >
                <Code2 size={18} strokeWidth={2.5} />
              </div>
              <span>
                {personal.shortName || personal.name}
                <span style={{ color: 'var(--color-primary)' }}>.dev</span>
              </span>
            </a>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem', maxWidth: '320px' }}>
              {personal.tagline || 'IT Undergraduate & Aspiring Software Engineer building scalable modern applications.'}
            </p>
            <SocialLinks iconSize={18} />
          </div>

          {/* Column 2: Navigation Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.65rem',
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Status */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Get In Touch
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Email:</strong> {personal.email}
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Location:</strong> {personal.location}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span className="badge badge-success">
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success)',
                  }}
                  className="animate-pulse-dot"
                />
                {portfolioData.availability.text}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            © {currentYear} {personal.name}. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with React, Vite &amp; Vanilla CSS Design System
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
