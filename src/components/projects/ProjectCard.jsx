import { ExternalLink, Eye, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import Button from '../common/Button';

export const ProjectCard = ({ project, onOpenDetails, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div
        className="card-base project-card-list-view"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          padding: '1.25rem 1.5rem',
          backgroundColor: 'var(--color-surface)',
          border: project.featured
            ? '1px solid rgba(56, 189, 248, 0.4)'
            : '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          transition: 'all var(--transition-fast)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-primary)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = project.featured ? 'rgba(56, 189, 248, 0.4)' : 'var(--color-border)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Left Info Column */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flex: '1 1 340px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--border-radius-sm)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-elevated)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--color-border)',
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <FolderGit2 size={24} style={{ color: 'var(--color-primary)' }} />
            )}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 600 }}>
                #{project.number}
              </span>
              <span className="badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                {project.category}
              </span>
              {project.featured && (
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: 'var(--color-warning)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <Sparkles size={11} /> Featured
                </span>
              )}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
              {project.title}
            </h3>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.4, maxWidth: '600px' }}>
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Middle Stack Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', flex: '1 1 200px' }}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="badge"
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: 'var(--color-surface-elevated)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="badge" style={{ fontSize: '0.72rem', color: 'var(--color-primary)' }}>
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Right Action Buttons */}
        <div className="project-card-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-sm"
              title="View GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon btn-sm"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenDetails(project)}
            icon={Eye}
            iconPosition="left"
          >
            Details
          </Button>
        </div>
      </div>
    );
  }

  // Grid Mode (Default)
  return (
    <div
      className="card-base project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--color-surface)',
        border: project.featured
          ? '1px solid rgba(56, 189, 248, 0.45)'
          : '1px solid var(--color-border)',
        boxShadow: project.featured
          ? '0 12px 35px -10px rgba(56, 189, 248, 0.2), 0 0 0 1px rgba(56, 189, 248, 0.3)'
          : 'var(--card-shadow)',
        borderRadius: 'var(--border-radius-lg)',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal)',
      }}
    >
      {/* Thumbnail Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '220px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-elevated)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: project.category === 'Mobile' ? 'contain' : 'cover',
            objectPosition: project.category === 'Mobile' ? 'center' : 'center top',
            padding: project.category === 'Mobile' ? '0.75rem 0' : '0',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="project-thumb-img"
          loading="lazy"
        />

        {/* Featured Badge */}
        {project.featured && (
          <div
            style={{
              position: 'absolute',
              top: '0.85rem',
              left: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.8rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              borderRadius: 'var(--border-radius-full)',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              color: '#07090e',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              letterSpacing: '0.04em',
            }}
          >
            <Sparkles size={12} />
            FEATURED PROJECT
          </div>
        )}

        {/* Category Pill */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            padding: '0.25rem 0.7rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: 'var(--border-radius-full)',
            backgroundColor: 'rgba(7, 9, 14, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            backdropFilter: 'blur(8px)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '1rem',
        }}
      >
        {/* Project Number & Title */}
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-primary)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.35rem',
              letterSpacing: '0.05em',
            }}
          >
            PROJECT // {project.number}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: 1.35,
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Short Description */}
        <p
          style={{
            fontSize: '0.925rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
          }}
        >
          {project.shortDescription}
        </p>

        {/* Tech Stack Chips */}
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
              display: 'block',
              marginBottom: '0.45rem',
              letterSpacing: '0.05em',
            }}
          >
            Stack:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="badge"
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-surface-elevated)',
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span
                className="badge"
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-primary)',
                  borderColor: 'rgba(56, 189, 248, 0.3)',
                }}
              >
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Key Contribution */}
        {project.contribution && (
          <div
            style={{
              padding: '0.85rem 1rem',
              borderRadius: 'var(--border-radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--color-border)',
              fontSize: '0.825rem',
              color: 'var(--color-text-secondary)',
              marginTop: 'auto',
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: 'var(--color-primary)' }}>Contribution: </strong>
            {project.contribution.length > 95
              ? `${project.contribution.substring(0, 95)}...`
              : project.contribution}
          </div>
        )}

        {/* Card Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon btn-sm"
                title="View Source on GitHub"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon btn-sm"
                title="Open Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenDetails(project)}
            icon={Eye}
            iconPosition="left"
          >
            Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

