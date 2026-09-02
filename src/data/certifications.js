/**
 * Certifications & Achievements Data Source
 * 
 * Easily add or edit your certificates below.
 * Each certificate entry includes:
 *  - id: Unique identifier (e.g. 'cert-01')
 *  - title: Full Certificate Title (prominently displayed)
 *  - issuer: Issuing Organization or Platform (e.g. 'Microsoft & LinkedIn')
 *  - date: Completion / Issue Date (e.g. 'Jan 2025')
 *  - description: Short one-line summary of skills & concepts learned
 *  - image: Certificate Thumbnail Preview (imported or URL)
 *  - certificateUrl: Full certificate view link (opens in new tab or viewer)
 *  - skillsCovered: List of primary tags/skills validated
 */

import cert01Img from '../assets/images/certificates/certificate-01.png';
import cert02Img from '../assets/images/certificates/certificate-02.png';
import cert03Img from '../assets/images/certificates/certificate-03.png';
import cert04Img from '../assets/images/certificates/certificate-04.png';
import cert05Img from '../assets/images/certificates/certificate-05.png';
import cert06Img from '../assets/images/certificates/certificate-06.png';

export const certificationsData = [
  {
    id: 'cert-01',
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    date: 'Jan 2025',
    credentialId: '84e8d881f2aa9b89d8c6f588bf9c1353681a8cd651b6b4a996baa2650775babc',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/84e8d881f2aa9b89d8c6f588bf9c1353681a8cd651b6b4a996baa2650775babc/',
    image: cert01Img,
    skillsCovered: ['Data Analysis', 'Data Visualization', 'Business Analytics'],
    description: 'Mastered core data analysis workflows, exploratory data visualization, and data-backed technical decision making.',
  },
  {
    id: 'cert-02',
    title: 'SQL Essential Training',
    issuer: 'LinkedIn Learning (NASBA Certified)',
    date: 'Jan 2025',
    credentialId: 'af2526955024e2834bc77d6664b8a528a31ef3658b344cdc63dd863d73c83f3f',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/1fb755623957fe9c6163b80e9a07e6f48a04772a8b331bcd85b6349667aa174c',
    image: cert02Img,
    skillsCovered: ['SQL', 'Relational Databases', 'Complex Queries', 'Database Design'],
    description: 'Built practical proficiency in SQL relational queries, complex joins, indexing, aggregate functions, and database design fundamentals.',
  },
  {
    id: 'cert-03',
    title: 'The Frontend Developer Path',
    issuer: 'Scrimba',
    date: 'Jan 2025',
    credentialId: 'UC-908234-JS',
    certificateUrl: 'https://scrimba.com/certificate-cert2uNjfK9m1kv3A4drq2cBkxJTcxQebL4fLX2',
    image: cert03Img,
    skillsCovered: ['React.js', 'Firebase', 'Modular Components', 'REST APIs', 'Frontend Architecture'],
    description: 'Developed modern full-stack web applications using React.js and Firebase with responsive UI components, state management, and API integrations.',
  },
];

export const achievementsData = [
  {
    id: 'ach-01',
    title: 'AI Fundamentals Skill Verification',
    organization: 'DataCamp',
    date: 'March 2025',
    category: 'Badge',
    image: cert04Img,
    certificateUrl: 'https://www.datacamp.com/',
    description: 'Demonstrated proficiency in foundational AI concepts, neural networks, machine learning paradigms, and prompt engineering.',
  },
  {
    id: 'ach-02',
    title: 'MoraXtreme 2025 Algorithmic Hackathon',
    organization: 'University of Moratuwa',
    date: 'Oct 2025',
    category: 'Hackathon',
    image: cert05Img,
    certificateUrl: 'https://ieee.uom.lk/',
    description: 'Solved complex algorithmic challenges covering dynamic programming, graph traversal, and combinatorics against 120+ university teams.',
  },
  {
    id: 'ach-03',
    title: 'JapuraXtreme Competitive Programming Sprint',
    organization: 'University of Sri Jayewardenepura',
    date: 'Oct 2025',
    category: 'Hackathon',
    image: cert06Img,
    certificateUrl: '',
    description: 'Collaborated in a time-constrained competitive programming sprint tackling data structures, trees, and optimization algorithms.',
  },
];
