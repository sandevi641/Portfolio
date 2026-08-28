import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data/experience';

export const Experience = () => {
  if (!experienceData || experienceData.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          tag="Practical Experience"
          title="Experience &amp; Leadership Activities"
          subtitle="Internships, undergraduate teaching mentorship, capstone project leadership, and engineering community contributions."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
