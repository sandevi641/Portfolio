import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, AlertCircle, Award } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import Button from '../common/Button';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--modal-backdrop)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'modalBackdropFade 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="modal-content card-base"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--card-shadow)',
          padding: '0',
          position: 'relative',
          animation: 'modalContentZoom 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--color-bg-secondary)',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="section-tag" style={{ margin: 0 }}>
              {project.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              Project {project.number}
            </span>
          </div>

          <button
            type="button"
            className="btn btn-icon"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Hero Preview */}
        <div
          style={{
            width: '100%',
            height: '280px',
            backgroundColor: 'var(--color-surface-elevated)',
            overflow: 'hidden',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '6px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            }}
          />
        </div>

        {/* Modal Main Body Content */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Title & Overview */}
          <div>
            <h3 style={{ fontSize: '1.65rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1.025rem', lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {project.problem && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-warning)' }}>
                  <AlertCircle size={18} />
                  <h4 style={{ fontSize: '0.95rem' }}>The Problem</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                  <Layers size={18} />
                  <h4 style={{ fontSize: '0.95rem' }}>The Solution &amp; Architecture</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                Key Technical Features
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.65rem',
                }}
              >
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.925rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Role & Contribution */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--border-radius)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
              My Role &amp; Contribution ({project.role || 'Developer'})
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {project.contribution}
            </p>
            {project.outcomes && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--color-success)' }}>
                <Award size={16} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{project.outcomes}</span>
              </div>
            )}
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {project.liveDemo && (
              <Button
                variant="primary"
                href={project.liveDemo}
                target="_blank"
                icon={ExternalLink}
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}

            {project.github && (
              <Button
                variant="secondary"
                href={project.github}
                target="_blank"
                icon={GithubIcon}
                iconPosition="left"
              >
                View GitHub Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
