import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillCard = ({ skill }) => {
  const getLevelConfig = (level) => {
    switch (level) {
      case 'Advanced':
        return {
          badgeClass: 'badge-primary',
          dotColor: 'var(--color-primary)',
          bars: 3,
        };
      case 'Intermediate':
        return {
          badgeClass: 'badge-success',
          dotColor: 'var(--color-success)',
          bars: 2,
        };
      default:
        return {
          badgeClass: '',
          dotColor: 'var(--color-secondary)',
          bars: 1,
        };
    }
  };

  const config = getLevelConfig(skill.level);

  return (
    <div
      className="card-base"
      style={{
        padding: '1.2rem 1.3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-surface)',
        border: skill.highlight
          ? '1px solid rgba(56, 189, 248, 0.35)'
          : '1px solid var(--color-border)',
        boxShadow: skill.highlight
          ? '0 4px 20px rgba(56, 189, 248, 0.08)'
          : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--border-radius-sm)',
            backgroundColor: skill.highlight
              ? 'rgba(var(--color-primary-rgb), 0.12)'
              : 'rgba(255, 255, 255, 0.04)',
            border: skill.highlight
              ? '1px solid rgba(var(--color-primary-rgb), 0.25)'
              : '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: skill.highlight ? 'var(--color-primary)' : 'var(--color-text-muted)',
            flexShrink: 0,
          }}
        >
          {skill.highlight ? <Sparkles size={16} /> : <CheckCircle2 size={16} />}
        </div>
        
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

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
        <span
          className={`badge ${config.badgeClass}`}
          style={{
            fontSize: '0.72rem',
            padding: '0.2rem 0.55rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
          }}
        >
          {skill.level}
        </span>
        
        {/* Visual Proficiency Meter (3 bars) */}
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
          {[1, 2, 3].map((barIndex) => (
            <span
              key={barIndex}
              style={{
                width: '12px',
                height: '3px',
                borderRadius: '2px',
                backgroundColor:
                  barIndex <= config.bars
                    ? config.dotColor
                    : 'rgba(255, 255, 255, 0.12)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
