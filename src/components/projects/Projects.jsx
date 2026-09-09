import { useState, useMemo } from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData, projectCategories } from '../../data/projects';
import Button from '../common/Button';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: projectsData.length };
    projectCategories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projectsData.filter(
          (p) => p.category === cat || (p.tags && p.tags.includes(cat))
        ).length;
      }
    });
    return counts;
  }, []);

  // Filter projects by both active category AND search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // 1. Category check
      const matchesCategory =
        activeFilter === 'All' ||
        project.category === activeFilter ||
        (project.tags && project.tags.includes(activeFilter));

      if (!matchesCategory) return false;

      // 2. Search query check
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = project.title.toLowerCase().includes(q);
      const shortDescMatch = project.shortDescription?.toLowerCase().includes(q);
      const fullDescMatch = project.fullDescription?.toLowerCase().includes(q);
      const techMatch = project.technologies?.some((tech) => tech.toLowerCase().includes(q));
      const categoryMatch = project.category?.toLowerCase().includes(q);

      return titleMatch || shortDescMatch || fullDescMatch || techMatch || categoryMatch;
    });
  }, [activeFilter, searchQuery]);

  const handleResetFilters = () => {
    setActiveFilter('All');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Portfolio Showcase"
          title="Featured Software Engineering Projects"
          subtitle="Explore full-stack web applications, mobile tools, microservices, and academic systems built with clean code, scalable APIs, and modern architecture."
        />

        {/* Filter & Live Search Controls */}
        <ProjectFilter
          categories={projectCategories}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categoryCounts={categoryCounts}
          filteredCount={filteredProjects.length}
          totalCount={projectsData.length}
        />

        {/* Projects Showcase Container */}
        {filteredProjects.length > 0 ? (
          <div
            style={
              viewMode === 'grid'
                ? {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                    gap: '1.75rem',
                  }
                : {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }
            }
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div
            className="card-base"
            style={{
              padding: '3.5rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '520px',
              margin: '2rem auto',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SearchX size={26} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
                No matching projects found
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                We couldn't find any projects matching "{searchQuery}" under the "{activeFilter}" filter. Try searching for other technologies like React, Node.js, or Firebase.
              </p>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={handleResetFilters}
              icon={RotateCcw}
              iconPosition="left"
            >
              Reset Search &amp; Filters
            </Button>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

      <style>{`
        .project-card:hover .project-thumb-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Projects;

