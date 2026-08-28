import React from 'react';

export const ProjectFilter = ({ categories, activeFilter, onSelectFilter }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.6rem',
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
              padding: '0.45rem 1.1rem',
              fontSize: '0.875rem',
              fontWeight: isActive ? 600 : 500,
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
