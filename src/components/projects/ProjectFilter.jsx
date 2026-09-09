import { Search, X, LayoutGrid, ListFilter } from 'lucide-react';

export const ProjectFilter = ({
  categories,
  activeFilter,
  onSelectFilter,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  categoryCounts = {},
  filteredCount = 0,
  totalCount = 0,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        marginBottom: '2.5rem',
        maxWidth: '100%',
      }}
    >
      {/* Top Controls Row: Live Search Input & View Switcher */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Search Input Box */}
        <div
          style={{
            position: 'relative',
            flex: '1 1 300px',
            maxWidth: '480px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            <Search size={16} />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects by name, stack, or keyword..."
            style={{
              width: '100%',
              padding: '0.65rem 2.4rem 0.65rem 2.6rem',
              borderRadius: 'var(--border-radius-full)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              fontSize: '0.875rem',
              outline: 'none',
              transition: 'all var(--transition-fast)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
              e.target.style.boxShadow = '0 0 0 3px var(--color-primary-glow)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.boxShadow = 'none';
            }}
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0.2rem',
              }}
              title="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* View Mode Switcher & Results Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontSize: '0.825rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-muted)',
            }}
          >
            Showing <strong style={{ color: 'var(--color-primary)' }}>{filteredCount}</strong> of {totalCount}
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius-sm)',
              padding: '0.2rem',
              gap: '0.2rem',
            }}
          >
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.65rem',
                borderRadius: 'var(--border-radius-xs)',
                backgroundColor: viewMode === 'grid' ? 'var(--color-primary)' : 'transparent',
                color: viewMode === 'grid' ? '#07090e' : 'var(--color-text-muted)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              title="Grid View"
            >
              <LayoutGrid size={14} />
              <span className="hide-mobile">Grid</span>
            </button>

            <button
              type="button"
              onClick={() => onViewModeChange('list')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.65rem',
                borderRadius: 'var(--border-radius-xs)',
                backgroundColor: viewMode === 'list' ? 'var(--color-primary)' : 'transparent',
                color: viewMode === 'list' ? '#07090e' : 'var(--color-text-muted)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              title="Compact List View"
            >
              <ListFilter size={14} />
              <span className="hide-mobile">List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {categories.map((category) => {
          const isActive = activeFilter === category;
          const count = categoryCounts[category] || 0;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectFilter(category)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                borderRadius: 'var(--border-radius-full)',
                padding: '0.45rem 1.05rem',
                fontSize: '0.825rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                color: isActive ? '#07090e' : 'var(--color-text-secondary)',
                border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                boxShadow: isActive ? '0 4px 14px var(--color-primary-glow)' : 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              <span>{category}</span>
              <span
                style={{
                  fontSize: '0.725rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: 'var(--border-radius-full)',
                  backgroundColor: isActive ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#07090e' : 'var(--color-text-muted)',
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilter;

