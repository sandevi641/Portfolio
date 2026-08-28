import React from 'react';
import SectionTitle from '../common/SectionTitle';
import EducationTimeline from './EducationTimeline';

export const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle
          tag="Academic Journey"
          title="Education &amp; Qualifications"
          subtitle="A comprehensive record of my university degree, academic milestones, GPA, and foundational computer science coursework."
        />

        <EducationTimeline />
      </div>
    </section>
  );
};

export default Education;
