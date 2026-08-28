import React from 'react';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import Button from '../common/Button';

export const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div
      className="card-base project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--color-surface-card)',
        border: project.featured
          ? '1px solid rgba(var(--color-primary-rgb), 0.4)'
          : '1px solid var(--color-border)',
        boxShadow: project.featured
          ? '0 8px 30px rgba(var(--color-primary-rgb), 0.12)'
          : 'var(--card-shadow)',
      }}
    >
      {/* Thumbnail Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-tertiary)',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
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
              padding: '0.3rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              borderRadius: 'var(--border-radius-full)',
              backgroundColor: 'var(--color-primary)',
              color: '#0a0d14',
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
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
            padding: '0.25rem 0.65rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: 'var(--border-radius-full)',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            color: '#e2e8f0',
            backdropFilter: 'blur(4px)',
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
              fontSize: '0.8rem',
              color: 'var(--color-primary)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.3rem',
            }}
          >
            PROJECT {project.number}
          </span>
          <h3
            style={{
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
              display: 'block',
              marginBottom: '0.4rem',
              letterSpacing: '0.05em',
            }}
          >
            Technologies
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="badge" style={{ color: 'var(--color-primary)' }}>
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Key Contribution */}
        {project.contribution && (
          <div
            style={{
              padding: '0.75rem',
              borderRadius: 'var(--border-radius-sm)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
              marginTop: 'auto',
            }}
          >
            <strong style={{ color: 'var(--color-text-primary)' }}>Contribution: </strong>
            {project.contribution.length > 90
              ? `${project.contribution.substring(0, 90)}...`
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
                className="btn btn-icon"
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
                className="btn btn-icon"
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
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
