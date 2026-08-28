import React from 'react';
import { Trophy, Calendar, Users, Zap } from 'lucide-react';

export const AchievementCard = ({ achievement }) => {
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

  return (
    <div
      className="card-base"
      style={{
        padding: '1.5rem',
        backgroundColor: 'var(--color-surface-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
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

      <div>
        <h4
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '0.25rem',
          }}
        >
          {achievement.title}
        </h4>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
          {achievement.organization}
        </span>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: 'auto' }}>
        {achievement.description}
      </p>
    </div>
  );
};

export default AchievementCard;
