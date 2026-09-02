import React from 'react';

export const SkillCategory = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.6rem',
        marginBottom: '2.5rem',
      }}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
            style={{
              borderRadius: 'var(--border-radius-full)',
              padding: '0.5rem 1.15rem',
              fontSize: '0.85rem',
              fontWeight: isActive ? 700 : 500,
              boxShadow: isActive
                ? '0 4px 15px var(--color-primary-glow)'
                : 'none',
              transition: 'all var(--transition-fast)',
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default SkillCategory;
