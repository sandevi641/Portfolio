/**
 * Skills Data Source
 * 
 * Organized by category with professional proficiency labels.
 * Levels: "Familiar", "Working Knowledge", "Intermediate", "Advanced"
 */

export const skillCategories = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Tools & DevOps',
];

export const skillsData = [
  // Programming Languages
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 'Advanced', highlight: true },
  { name: 'TypeScript', category: 'Languages', level: 'Intermediate', highlight: true },
  { name: 'Java', category: 'Languages', level: 'Intermediate', highlight: true },
  { name: 'Python', category: 'Languages', level: 'Working Knowledge', highlight: false },
  { name: 'C / C++', category: 'Languages', level: 'Working Knowledge', highlight: false },
  { name: 'SQL', category: 'Languages', level: 'Intermediate', highlight: true },

  // Frontend
  { name: 'React.js', category: 'Frontend', level: 'Advanced', highlight: true },
  { name: 'HTML5 & Semantic Web', category: 'Frontend', level: 'Advanced', highlight: false },
  { name: 'CSS3 & CSS Variables', category: 'Frontend', level: 'Advanced', highlight: false },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Intermediate', highlight: true },
  { name: 'React Native', category: 'Frontend', level: 'Working Knowledge', highlight: false },
  { name: 'Redux Toolkit / Context', category: 'Frontend', level: 'Intermediate', highlight: false },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Advanced', highlight: true },
  { name: 'Express.js', category: 'Backend', level: 'Advanced', highlight: true },
  { name: 'RESTful API Design', category: 'Backend', level: 'Advanced', highlight: true },
  { name: 'JWT & OAuth Auth', category: 'Backend', level: 'Intermediate', highlight: false },
  { name: 'Spring Boot (Java)', category: 'Backend', level: 'Working Knowledge', highlight: false },
  { name: 'WebSocket (Socket.io)', category: 'Backend', level: 'Intermediate', highlight: false },

  // Databases
  { name: 'MongoDB & Mongoose', category: 'Databases', level: 'Advanced', highlight: true },
  { name: 'MySQL & PostgreSQL', category: 'Databases', level: 'Intermediate', highlight: true },
  { name: 'Firebase Firestore', category: 'Databases', level: 'Intermediate', highlight: false },
  { name: 'Redis (Caching)', category: 'Databases', level: 'Working Knowledge', highlight: false },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'Tools & DevOps', level: 'Advanced', highlight: true },
  { name: 'Docker & Containers', category: 'Tools & DevOps', level: 'Working Knowledge', highlight: true },
  { name: 'Postman & API Testing', category: 'Tools & DevOps', level: 'Advanced', highlight: false },
  { name: 'VS Code & Linux CLI', category: 'Tools & DevOps', level: 'Advanced', highlight: false },
  { name: 'Vite & Webpack', category: 'Tools & DevOps', level: 'Intermediate', highlight: false },
  { name: 'Figma UI/UX Prototyping', category: 'Tools & DevOps', level: 'Working Knowledge', highlight: false },
];
