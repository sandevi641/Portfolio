import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { WhatsAppIcon } from '../common/Icons';
import SocialLinks from '../common/SocialLinks';

export const ContactInfo = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { personal, availability } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}
    >
      <div>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '0.6rem',
          }}
        >
          Let's discuss opportunities
        </h3>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
          }}
        >
          I am actively exploring software engineering, full-stack, and technology internship positions for upcoming terms.
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Email Card */}
        <div
          className="card-base"
          style={{
            padding: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-badge-bg)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Mail size={20} />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-muted)',
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                Email
              </span>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                }}
              >
                {personal.email}
              </a>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-icon"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            title="Copy email"
          >
            {copiedEmail ? <Check size={16} style={{ color: 'var(--color-success)' }} /> : <Copy size={16} />}
          </button>
        </div>

        {/* Phone / WhatsApp Card */}
        {personal.phone && (
          <div
            className="card-base"
            style={{
              padding: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'var(--color-badge-bg)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-muted)',
                    fontWeight: 600,
                    display: 'block',
                  }}
                >
                  Phone / WhatsApp
                </span>
                <a
                  href={personal.whatsapp ? `https://wa.me/${personal.whatsapp}` : `tel:${personal.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-primary)')}
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            {personal.whatsapp && (
              <a
                href={`https://wa.me/${personal.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  fontSize: '0.8rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--border-radius-xs)',
                  gap: '0.4rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                title="Chat directly on WhatsApp"
              >
                <WhatsAppIcon size={15} />
                <span>Chat</span>
              </a>
            )}
          </div>
        )}

        {/* Location Card */}
        {personal.location && (
          <div
            className="card-base"
            style={{
              padding: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-badge-bg)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-muted)',
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                Location &amp; Timezone
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {personal.location}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Internship Availability Pill & Socials */}
      <div style={{ marginTop: '0.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <span className="badge badge-success" style={{ padding: '0.4rem 0.85rem' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
              }}
              className="animate-pulse-dot"
            />
            {availability.text}
          </span>
        </div>

        <SocialLinks iconSize={18} />
      </div>
    </div>
  );
};

export default ContactInfo;
