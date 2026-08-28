/**
 * Experience & Leadership Activities Data Source
 * 
 * Supports formal internships, freelance work, university capstone leadership,
 * student societies, and open-source contributions.
 */

export const experienceData = [
  {
    id: 'exp-01',
    role: 'Software Development Intern / Trainee',
    organization: '[TECH COMPANY / STARTUP NAME]',
    location: '[CITY, COUNTRY / REMOTE]',
    duration: 'Jun 2025 – Aug 2025',
    type: 'Internship',
    description:
      'Contributed to the frontend and microservices API layer of a customer-facing web application in an Agile/Scrum engineering environment.',
    responsibilities: [
      'Developed 8+ responsive React components with custom CSS design tokens and cross-browser compatibility',
      'Integrated REST API endpoints and optimized state caching, reducing initial page load time by 18%',
      'Collaborated in daily stand-ups, code reviews, and sprint planning sessions with senior engineers',
      'Wrote comprehensive Jest unit tests achieving 80%+ coverage for core user onboarding flows',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Git', 'Jira'],
  },
  {
    id: 'exp-02',
    role: 'Undergraduate Teaching Assistant (DSA)',
    organization: '[YOUR UNIVERSITY / COMPUTING FACULTY]',
    location: '[UNIVERSITY CAMPUS]',
    duration: 'Feb 2025 – Jun 2025',
    type: 'Academic Leadership',
    description:
      'Assisted the lead professor in conducting weekly lab sessions and mentoring 40+ second-year undergraduate students in Data Structures & Algorithms.',
    responsibilities: [
      'Guided students through complex algorithmic problems including binary search trees, graph algorithms, and dynamic programming in Java',
      'Evaluated programming assignments, provided actionable code quality feedback, and held weekly office hours',
      'Created supplementary code walkthrough guides and automated test grading test suites',
    ],
    technologies: ['Java', 'Algorithms', 'Data Structures', 'Git', 'JUnit'],
  },
  {
    id: 'exp-03',
    role: 'Technical Team Lead – Capstone Software Project',
    organization: 'University Engineering Showcase',
    location: '[UNIVERSITY CAMPUS]',
    duration: 'Sep 2024 – Dec 2024',
    type: 'Project Lead',
    description:
      'Led a 4-person student engineering team to design and deliver a full-stack smart campus resource booking platform.',
    responsibilities: [
      'Defined system architecture, REST API contracts, database ER diagrams, and Git branching workflows',
      'Managed sprint backlogs and code reviews ensuring adherence to Clean Code principles',
      'Presented the final working application and architecture documentation to the departmental evaluation panel',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Postman'],
  },
];
