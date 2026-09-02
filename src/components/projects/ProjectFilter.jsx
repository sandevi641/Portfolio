import React from 'react';

export const ProjectFilter = ({ categories, activeFilter, onSelectFilter }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.65rem',
        marginBottom: '3rem',
      }}
    >
      {categories.map((category) => {
        const isActive = activeFilter === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectFilter(category)}
            className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
            style={{
              borderRadius: 'var(--border-radius-full)',
              padding: '0.5rem 1.25rem',
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

export default ProjectFilter;
