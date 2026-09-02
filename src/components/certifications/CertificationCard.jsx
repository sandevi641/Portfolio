import React, { useState, useEffect } from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck, Maximize2, X, Calendar, Eye } from 'lucide-react';
import Button from '../common/Button';

export const CertificationCard = ({ cert }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const targetUrl = cert.certificateUrl || cert.verificationUrl;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsImageOpen(false);
      }
    };

    if (isImageOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isImageOpen]);

  return (
    <>
      <div
        className="card-base"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--color-surface)',
          padding: '0',
          overflow: 'hidden',
          height: '100%',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius-lg)',
        }}
      >
        {/* Certificate Header Banner */}
        <div
          style={{
            padding: '1rem 1.35rem',
            backgroundColor: 'var(--color-surface-elevated)',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
            <ShieldCheck size={18} />
            <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '0.01em' }}>
              {cert.issuer}
            </span>
          </div>
          
          <span
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <Calendar size={12} />
            {cert.date}
          </span>
        </div>

        {/* Card Body */}
        <div
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '1rem',
          }}
        >
          {/* Certificate Name */}
          <div>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                marginBottom: '0.35rem',
              }}
            >
              {cert.title}
            </h3>
          </div>

          {/* Short One-line Description */}
          {cert.description && (
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              {cert.description}
            </p>
          )}

          {/* Skills Covered Tags */}
          {cert.skillsCovered && cert.skillsCovered.length > 0 && (
            <div style={{ marginTop: '0.25rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="badge"
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'var(--color-surface-elevated)',
                    }}
                  >
                    <CheckCircle2 size={12} style={{ color: 'var(--color-primary)' }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Button Section */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsImageOpen(true)}
              icon={Eye}
              iconPosition="left"
              style={{
                width: '100%',
                justifyContent: 'center',
                fontWeight: 700,
              }}
            >
              View Certificate
            </Button>

            {targetUrl && (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon btn-sm"
                title="Verify Credential on Official Portal"
                aria-label="Verify on Official Portal"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full Certificate Lightbox Modal */}
      {isImageOpen && (
        <div
          className="modal-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'modalBackdropFade 0.2s ease-out',
          }}
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="modal-content card-base"
            style={{
              width: '100%',
              maxWidth: '880px',
              maxHeight: '92vh',
              overflowY: 'auto',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--border-radius-lg)',
              boxShadow: 'var(--card-shadow)',
              padding: '0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              animation: 'modalContentZoom 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.2rem 1.5rem',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                backgroundColor: 'var(--color-surface-elevated)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {cert.title}
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {cert.issuer} • {cert.date}
                </span>
              </div>
              
              <button
                onClick={() => setIsImageOpen(false)}
                aria-label="Close modal"
                className="btn btn-icon"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image View */}
            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-bg-primary)',
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '65vh',
                  borderRadius: 'var(--border-radius-sm)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Modal Footer */}
            {targetUrl && (
              <div
                style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--color-surface-elevated)',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  Credential ID: {cert.credentialId || 'Verified'}
                </span>
                
                <Button
                  variant="primary"
                  size="sm"
                  href={targetUrl}
                  target="_blank"
                  icon={ExternalLink}
                  iconPosition="right"
                >
                  Verify on Issuing Portal
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationCard;
