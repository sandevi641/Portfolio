import React from 'react';
import SectionTitle from '../common/SectionTitle';
import CertificationCard from './CertificationCard';
import AchievementCard from './AchievementCard';
import { certificationsData, achievementsData } from '../../data/certifications';

export const Certifications = () => {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        {/* Certifications Subsection */}
        <div>
          <SectionTitle
            tag="Certifications"
            title="Industry Recognized Certifications"
            subtitle="Specialized credentials validating practical competence in cloud infrastructure, front-end architecture, and backend engineering."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
              marginBottom: '5rem',
            }}
          >
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* Achievements Subsection */}
        {achievementsData && achievementsData.length > 0 && (
          <div id="achievements">
            <SectionTitle
              tag="Honors &amp; Milestones"
              title="Hackathons &amp; Extracurricular Achievements"
              subtitle="Competitive programming sprints, community workshops, and leadership milestones."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {achievementsData.map((item) => (
                <AchievementCard key={item.id} achievement={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
