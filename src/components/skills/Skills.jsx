import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillCategory from './SkillCategory';
import SkillCard from './SkillCard';
import { skillsData, skillCategories } from '../../data/skills';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          tag="Technical Skills"
          title="Technologies, Languages & Tools"
          subtitle="Core programming languages, full-stack frameworks, databases, and DevOps workflows applied across academic coursework and personal development."
        />

        {/* Category Tabs */}
        <SkillCategory
          categories={skillCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '1rem',
          }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
