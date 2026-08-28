import React from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';

export const CertificationCard = ({ cert }) => {
  return (
    <div
      className="card-base"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-surface-card)',
        padding: '0',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Certificate Header Banner */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: 'var(--color-surface-elevated)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-primary)' }}>
          <ShieldCheck size={22} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {cert.issuer}
          </span>
        </div>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
          {cert.date}
        </span>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '1rem',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: 1.4,
              marginBottom: '0.35rem',
            }}
          >
            {cert.title}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              display: 'block',
            }}
          >
            Credential ID: {cert.credentialId}
          </span>
        </div>

        {cert.description && (
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            {cert.description}
          </p>
        )}

        {cert.skillsCovered && cert.skillsCovered.length > 0 && (
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-text-muted)',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              Skills Validated
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {cert.skillsCovered.map((skill) => (
                <span key={skill} className="badge">
                  <CheckCircle2 size={12} style={{ color: 'var(--color-primary)' }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
          {cert.verificationUrl && (
            <Button
              variant="outline"
              size="sm"
              href={cert.verificationUrl}
              target="_blank"
              icon={ExternalLink}
              iconPosition="right"
              className="w-full"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Verify Credential
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
