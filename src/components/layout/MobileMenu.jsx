import React, { useEffect } from 'react';
import { FileDown, X } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { portfolioData } from '../../data/portfolio';
import SocialLinks from '../common/SocialLinks';

export const MobileMenu = ({ isOpen, onClose, activeSection, onNavClick }) => {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-menu-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--modal-backdrop)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 110,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'modalBackdropFade 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="mobile-menu-drawer"
        style={{
          width: '80%',
          maxWidth: '320px',
          height: '100%',
          backgroundColor: 'var(--color-bg-secondary)',
          borderLeft: '1px solid var(--color-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'fadeIn 0.25s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>
              Navigation
            </span>
            <button
              type="button"
              className="btn btn-icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items */}
          <nav>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(link.id);
                      }}
                      style={{
                        display: 'block',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--border-radius-sm)',
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '1rem',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                        backgroundColor: isActive ? 'var(--color-badge-bg)' : 'transparent',
                        borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
          <a
            href={portfolioData.resume.path}
            download={portfolioData.resume.fileName || 'CV.pdf'}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={onClose}
          >
            <FileDown size={18} />
            <span>Download CV</span>
          </a>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SocialLinks iconSize={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
