/**
 * Projects Data Source
 * 
 * Add, edit, or categorize your portfolio projects here.
 * The Projects section and ProjectModal dynamically consume this file.
 */

import project01Img from '../assets/images/projects/project-01.jpg';
import project02Img from '../assets/images/projects/project-02.png';
import project03Img from '../assets/images/projects/project-03.png';
import project04Img from '../assets/images/projects/project-04.png';


export const projectCategories = [
  'All',
  'Full-Stack',
  'Web',
  'Mobile',
  'Backend'
];

export const projectsData = [
  {
    id: 'project-01',
    number: '01',
    title: 'StrayCare Mobile Application',
    featured: true,
    category: 'Mobile',
    tags: ['Mobile', 'Full-Stack'],
    shortDescription:
      'Full-stack animal rescue & community mobile platform for incident reporting, pet adoptions, lost & found alerts, real-time WebRTC calls, and location-based veterinary/shelter discovery with admin dashboard.',
    fullDescription:
      'StrayCare – Animal Rescue & Community Platform. Developed a full-stack animal rescue and community platform using React Native (Expo) for mobile and React for the web-based administrative dashboard. The platform enables users to report stray animals, post lost & found alerts, manage pet adoptions, and discover nearby veterinary clinics and shelters through location-based services. Implemented secure authentication and role-based access control using Firebase Authentication, with MongoDB for data management and Node.js with Express.js for backend API development. Integrated real-time communication features including instant messaging, forum discussions, WebRTC peer-to-peer calls, and push notifications using Socket.io and Firebase.',
    problem:
      'Stray animals often lack a centralized platform for reporting, rescue coordination, adoption, and finding nearby veterinary or shelter services. This leads to delayed rescue responses and fragmented communication.',
    solution:
      'Developed StrayCare, a centralized ecosystem connecting users, rescuers, veterinarians, and shelters. Features real-time rescue tracking, geolocation matching, adoption portal, and comprehensive admin moderation.',
    technologies: ['React Native', 'Expo', 'React', 'Firebase', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC'],
    keyFeatures: [
      'Stray animal rescue reporting and real-time incident tracking',
      'Secure Firebase authentication with role-based access control (RBAC)',
      'Lost & found alerts, pet adoption, and location-based shelter/vet discovery',
      'Real-time messaging, community forum, WebRTC calls, and push notifications',
      'Web-based administrative dashboard for user verification and rescue operations'
    ],
    contribution:
      'Implemented distance-based nearest rescuer matching, rescue request acceptance/rejection workflows, and real-time case status updates. Developed rescuer profile and case history management, along with discussion threads and interaction notifications.',
    role: 'Full-Stack & Mobile Developer',
    challenges:
      'Ensuring low-latency real-time synchronization for emergency rescue notifications and WebRTC call handshakes under varying mobile network conditions.',
    outcomes:
      'Delivered a fully integrated mobile & web platform improving rescue response times, nearest-rescuer coordination, and community engagement.',
    image: project01Img,
    github: 'https://github.com/orgs/TeamTechForge/dashboard',
    liveDemo: '',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'BlogNet – Content Publishing Web Application',
    featured: false,
    category: 'Web',
    tags: ['Web', 'Full-Stack', 'Backend'],
    shortDescription:
      'Full-stack multi-user blogging platform for creating, managing, and discovering technical articles with role-based authentication, social engagement features, real-time notifications, and admin moderation.',
    fullDescription:
      'Developed as an academic software engineering project to provide a centralized blogging platform for content creation and community engagement, featuring secure authentication, post management, social interactions, real-time notifications, and administrative content moderation.',
    problem:
      'Managing blog content, user interactions, comments, and moderation while providing a secure and engaging publishing experience.',
    solution:
      'Developed a centralized blogging platform with secure authentication, content publishing, social interactions, real-time notifications, and an admin dashboard for efficient content and user management.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Apache', 'Git'],
    keyFeatures: [
      'Secure authentication and role-based access control',
      'Rich text blog creation and categorized content management',
      'Interactive comments, likes, bookmarks, and user following',
      'Real-time notifications and administrative moderation dashboard',
    ],
    contribution:
      'Independently designed and developed the entire database schema, backend architecture, session authentication, CRUD operations, and moderation dashboard.',
    role: 'Full-Stack Developer',
    challenges:
      'Designing an optimized relational database schema in MySQL with indexed queries to handle high-frequency comments and post interactions.',
    outcomes:
      'Delivered a robust, scalable multi-user blogging platform with responsive design, secure authentication, and administrative moderation.',
    image: project02Img,
    github: 'https://github.com/sandevi641/Blog-Appp',
    liveDemo: '',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'ApiHub – Codebase API Analyzer & Doc Generator',
    featured: true,
    category: 'Backend',
    tags: ['Backend', 'Web', 'Full-Stack'],
    shortDescription:
      'Developer productivity platform that imports project codebases, automatically detects REST API endpoints, generates interactive documentation, and assists developers in testing and improving APIs.',
    fullDescription:
      'APIHub is a developer platform that allows users to import existing project folders, analyze their codebase, and automatically detect API endpoints. It generates API documentation, supports endpoint testing, and helps developers create new feature specifications and code suggestions to improve their projects.',
    problem:
      'Developers often struggle to quickly understand, document, and test endpoints across complex or legacy codebases without manual documentation overhead.',
    solution:
      'Built an automated code analysis engine that parses repository files, identifies HTTP route handlers, generates interactive OpenAPI specifications, and allows live endpoint testing.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'OpenAPI/Swagger', 'Docker', 'Vite'],
    keyFeatures: [
      'Import project folders or ZIP archives for automated route analysis',
      'Automatic endpoint detection across Express and Node frameworks',
      'Interactive OpenAPI / Swagger documentation generation',
      'Live endpoint testing sandbox with response inspection',
      'Docker containerized architecture for reliable deployment'
    ],
    contribution:
      'Designed the full-stack architecture, route parsing heuristics, Prisma database integration, and interactive testing interface.',
    role: 'Full-Stack / Backend Developer',
    challenges:
      'Building robust code parsing algorithms capable of identifying nested router configurations and HTTP verbs accurately.',
    outcomes:
      'Created an end-to-end automated API cataloging tool that cuts documentation and endpoint testing setup time significantly.',
    image: project03Img,
    github: 'https://github.com/sandevi641',
    liveDemo: '',
  },
  {
    id: 'project-04',
    number: '04',
    title: 'SpendWise – Personal Finance & Expense Tracker',
    featured: false,
    category: 'Web',
    tags: ['Web', 'Full-Stack'],
    shortDescription:
      'Full-stack personal finance application for tracking income & expenses, budget planning, savings goals, and visualizing spending habits through interactive dashboards and analytics.',
    fullDescription:
      'SpendWise is a full-stack personal finance and daily spending management web application designed to help users organize and manage their financial activities. It allows users to record income and expenses, categorize transactions, set budgets, track savings goals, and monitor spending habits through interactive dashboards and analytics. The system also provides personalized financial insights and budget alerts to support better financial planning and decision-making.',
    problem:
      'Individuals struggle to track daily expenses, control unnecessary spending, and keep track of long-term savings goals due to cluttered tools or lack of visual analytics.',
    solution:
      'SpendWise provides a clean, intuitive centralized web dashboard to record financial transactions, enforce category-specific budgets, and monitor progress with real-time charts.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Recharts', 'Tailwind CSS', 'Vite'],
    keyFeatures: [
      'Income & Expense Tracking – Instant categorization and transaction logging',
      'Budget & Savings Management – Set spending thresholds with automated limit alerts',
      'Interactive Financial Analytics – Visual expenditure breakdowns powered by Recharts',
      'Personalized Insights – Smart recommendations on spending habits and recurring patterns',
    ],
    contribution:
      'Architected full-stack application using React, TypeScript, Express, and Prisma ORM, integrating JWT authentication and dynamic charts.',
    role: 'Full-Stack Developer',
    challenges:
      'Implementing flexible aggregations in PostgreSQL for dynamic weekly, monthly, and yearly financial summaries.',
    outcomes:
      'Delivered a modern, user-friendly finance management tool with high security, fast analytics rendering, and responsive UI.',
    image: project04Img,
    github: 'https://github.com/sandevi641/SpendWise',
    liveDemo: '',
  }
];
