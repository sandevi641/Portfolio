import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData, projectCategories } from '../../data/projects';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category === activeFilter ||
            (project.tags && project.tags.includes(activeFilter))
        );

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Portfolio Showcase"
          title="Featured Software Engineering Projects"
          subtitle="Explore full-stack web applications, mobile tools, microservices, and academic systems built with clean code and modern architecture."
        />

        {/* Filter Navigation */}
        <ProjectFilter
          categories={projectCategories}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* Project Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

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
