import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SkillCard = ({ skill }) => {
  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Advanced':
        return 'badge-primary';
      case 'Intermediate':
        return 'badge-success';
      default:
        return '';
    }
  };

  return (
    <div
      className="card-base"
      style={{
        padding: '1.25rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-surface-card)',
        border: skill.highlight
          ? '1px solid rgba(var(--color-primary-rgb), 0.3)'
          : '1px solid var(--color-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <CheckCircle2
          size={18}
          style={{
            color: skill.highlight ? 'var(--color-primary)' : 'var(--color-text-muted)',
            flexShrink: 0,
          }}
        />
        <div>
          <h4
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '0.15rem',
            }}
          >
            {skill.name}
          </h4>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {skill.category}
          </span>
        </div>
      </div>

      <span
        className={`badge ${getLevelBadgeClass(skill.level)}`}
        style={{
          fontSize: '0.75rem',
          padding: '0.2rem 0.6rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {skill.level}
      </span>
    </div>
  );
};

export default SkillCard;
