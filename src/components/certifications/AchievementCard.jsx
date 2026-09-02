import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, Users, Zap, Eye, ExternalLink, X, Award } from 'lucide-react';
import Button from '../common/Button';

export const AchievementCard = ({ achievement }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Hackathon':
        return Trophy;
      case 'Leadership & Community':
        return Users;
      default:
        return Zap;
    }
  };

  const Icon = getCategoryIcon(achievement.category);
  const targetUrl = achievement.certificateUrl || achievement.verificationUrl;

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
        {/* Header Bar */}
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
          <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
            <Icon size={13} />
            {achievement.category}
          </span>

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
            {achievement.date}
          </span>
        </div>

        {/* Card Body */}
        <div
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '0.9rem',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                marginBottom: '0.35rem',
              }}
            >
              {achievement.title}
            </h4>
            
            <span
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-primary)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Award size={14} />
              {achievement.organization}
            </span>
          </div>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {achievement.description}
          </p>

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
            {achievement.image ? (
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
            ) : targetUrl ? (
              <Button
                variant="primary"
                size="sm"
                href={targetUrl}
                target="_blank"
                icon={ExternalLink}
                iconPosition="right"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                View Certificate
              </Button>
            ) : null}

            {targetUrl && achievement.image && (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon btn-sm"
                title="Open Official Event/Portal Link"
                aria-label="Official Link"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isImageOpen && achievement.image && (
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
                  {achievement.title}
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {achievement.organization} • {achievement.date}
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
                src={achievement.image}
                alt={achievement.title}
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
                  justifyContent: 'flex-end',
                  backgroundColor: 'var(--color-surface-elevated)',
                }}
              >
                <Button
                  variant="primary"
                  size="sm"
                  href={targetUrl}
                  target="_blank"
                  icon={ExternalLink}
                  iconPosition="right"
                >
                  Visit Official Event Portal
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementCard;
