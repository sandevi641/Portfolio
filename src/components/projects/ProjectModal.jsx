import { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, AlertCircle, Award, FileCode, CheckSquare, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import Button from '../common/Button';

export const ProjectModal = ({ project, onClose }) => {
  const [modalTab, setModalTab] = useState('overview'); // 'overview' | 'features' | 'stack'

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
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'modalBackdropFade 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="modal-content card-base"
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(56, 189, 248, 0.2)',
          padding: '0',
          position: 'relative',
          animation: 'modalContentZoom 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          border: '1px solid var(--color-border)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.1rem 1.5rem',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--color-bg-secondary)',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="badge badge-primary" style={{ padding: '0.2rem 0.65rem' }}>
              {project.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              Project #{project.number}
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
            height: '270px',
            backgroundColor: 'var(--color-surface-elevated)',
            overflow: 'hidden',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
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
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
            }}
          />
        </div>

        {/* Modal Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid var(--color-border)',
            padding: '0 1.5rem',
            backgroundColor: 'var(--color-surface)',
            gap: '0.5rem',
            overflowX: 'auto',
          }}
        >
          <button
            type="button"
            onClick={() => setModalTab('overview')}
            style={{
              padding: '0.85rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: modalTab === 'overview' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              borderBottom: modalTab === 'overview' ? '2px solid var(--color-primary)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <Layers size={15} />
            <span>Overview &amp; Problem</span>
          </button>

          <button
            type="button"
            onClick={() => setModalTab('features')}
            style={{
              padding: '0.85rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: modalTab === 'features' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              borderBottom: modalTab === 'features' ? '2px solid var(--color-primary)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <CheckSquare size={15} />
            <span>Features &amp; Impact</span>
          </button>

          <button
            type="button"
            onClick={() => setModalTab('stack')}
            style={{
              padding: '0.85rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: modalTab === 'stack' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              borderBottom: modalTab === 'stack' ? '2px solid var(--color-primary)' : '2px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <FileCode size={15} />
            <span>Tech Stack &amp; Repos</span>
          </button>
        </div>

        {/* Modal Main Body Content */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Title Bar */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Tab 1: Overview */}
          {modalTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
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
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>The Problem</h4>
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
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>The Solution &amp; Architecture</h4>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Key Features & Impact */}
          {modalTab === 'features' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
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
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
                  Engineering Contribution ({project.role || 'Full-Stack Developer'})
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.contribution || 'Designed and implemented full-stack components, database models, and API integrations.'}
                </p>
                {project.outcomes && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--color-success)' }}>
                    <Award size={16} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{project.outcomes}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 3: Tech Stack & Repositories */}
          {modalTab === 'stack' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Technologies &amp; Libraries
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.challenges && (
                <div
                  style={{
                    padding: '1.1rem',
                    borderRadius: 'var(--border-radius)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem', color: 'var(--color-warning)' }}>
                    <Sparkles size={15} />
                    <strong style={{ fontSize: '0.9rem' }}>Technical Challenge Overcome:</strong>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {project.challenges}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action Links Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
              marginTop: '0.5rem',
            }}
          >
            {project.github && (
              <Button
                variant="primary"
                href={project.github}
                target="_blank"
                icon={GithubIcon}
                iconPosition="left"
              >
                View Repository on GitHub
              </Button>
            )}

            {project.liveDemo && (
              <Button
                variant="secondary"
                href={project.liveDemo}
                target="_blank"
                icon={ExternalLink}
                iconPosition="right"
              >
                Live Application Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

