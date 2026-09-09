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
    tags: ['Mobile'],
    shortDescription:
      'Developed a full-stack animal rescue platform for rescue reporting, lost & found alerts, pet adoption, and location-based veterinary/shelter discovery. Implemented secure authentication,real-time messaging, forum discussions, WebRTC calls, push notifications, and an admin dashboard for user and rescue management.',
    fullDescription:
      'StrayCare – Animal Rescue & Community Platform Developed a full-stack animal rescue and community platform using (Expo) for mobile development and React for the web-based administrative dashboard. The platform enables users to report stray animals, post lost & found alerts, manage pet adoptions, and discover nearby veterinary clinics and shelters through location-based services.Implemented secure authentication and role-based access control using Firebase Authentication, with MongoDB for data management and Node.js with Express.js for backend API development. Integrated real-time communication features including instant messaging, forum discussions, WebRTC peer-to-peer calls, and push notifications using Socket.io and Firebase.Developed a web-based Admin Dashboard for user verification, content moderation, rescue case monitoring, and overall rescue operation management',
    problem:
      'Stray animals often lack a centralized platform for reporting, rescue coordination, adoption, and finding nearby veterinary or shelter services. This can lead to delayed responses, poor communication, and difficulty managing rescue cases effectively.',
    solution:
      'Developed StrayCare, a centralized platform that connects users, rescuers, veterinarians, and shelters to efficiently report and manage animal rescue cases. The system supports real-time communication, location-based services, lost & found alerts, pet adoption, and an admin dashboard for effective rescue operation management.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    keyFeatures: [
      'Stray animal rescue reporting and real-time case tracking',
      'Secure Firebase authentication with role-based access control',
      'Lost & found alerts, pet adoption, and location-based shelter/vet search',
      'Real-time messaging, forum discussions, WebRTC calls, and push notifications',
      'Web-based admin dashboard for user verification and rescue management'
    ],
    contribution:
      'Implemented distance-based nearest rescuer matching, rescue request acceptance/rejection, and real-time case status updates. Developed rescuer profile and case history management, along with discussion threads, comments, and interaction notifications.',
    role: '',
    challenges:
      'Ensuring reliable real-time notifications for rescue requests and forum interactions.',
    outcomes:
      'Improved rescue coordination, nearest-rescuer matching, case tracking, profile management, and community engagement through real-time interactions.',
    image: project01Img,
    github: 'https://github.com/orgs/TeamTechForge/dashboard',
    liveDemo: 'https://demo-task-manager.example.com',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'BlogNet – Multi-User Content Publishing Web Application',
    featured: false,
    category: 'Web',
    tags: ['Web'],
    shortDescription:
      'Full-stack blogging platform for creating, managing, and discovering content with secure authentication, social engagement features, real-time notifications, and administrative moderation.',
    fullDescription:
      'Developed as an academic software engineering project to provide a centralized blogging platform for content creation and community engagement, featuring secure authentication, post management, social interactions, real-time notifications, and administrative content moderation.',
    problem:
      'Managing blog content, user interactions, comments, and moderation while providing a secure and engaging publishing experience.',
    solution:
      'Developed a centralized blogging platform with secure authentication, content publishing, social interactions, real-time notifications, and an admin dashboard for efficient content and user management.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Apache', 'Git'],
    keyFeatures: [
      'Secure authentication and role-based access control',
      'Markdown-based blog creation and content management',
      'Comments, likes, bookmarks, and user following',
      'Real-time notifications and admin content moderation',
    ],
    contribution:
      'Led the mobile client architecture, integrated Firebase real-time listeners, and conducted usability testing with 20+ university peers.',
    role: 'Mobile Frontend Developer (Team of 4)',
    challenges:
      'Independently designed and developed the complete blogging platform, including backend architecture, authentication, CRUD operations, notifications, security, and admin dashboard.',
    outcomes:
      'Delivered a secure, scalable blogging platform with efficient content management, user engagement, real-time notifications, and administrative control.',
    image: project02Img,
    github: 'https://github.com/sandevi641/Blog-Appp',
    liveDemo: '',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'ApiHub',
    featured: false,
    category: 'Web',
    tags: ['Web', 'Personal'],
    shortDescription:
      'APIHub is a platform that imports project folders, detects APIs, generates documentation, and helps developers test and improve their projects.',
    fullDescription:
      'APIHub is a developer platform that allows users to import existing project folders, analyze their codebase, and automatically detect API endpoints. It generates API documentation, supports endpoint testing, and helps developers create new feature specifications and code suggestions to improve their projects.',
    problem:
      'Developers struggle to understand and improve existing codebases. APIHub simplifies this by analyzing imported projects and helping manage their APIs.',
    solution:
      'Implemented independent Node/Express microservices managed behind an Express Gateway with rate limiting, centralized Winston logging, and Redis token caching.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'bcrypt', 'OpenAPI/Swagger', 'Axios', 'Supertest', 'Vitest/Jest', 'Git', 'GitHub', 'Docker.'],
    keyFeatures: [
      'Import existing project folders or ZIP files',
      'Automatically detect API endpoints and frameworks',
      'Docker Compose orchestration for seamless local reproducibility',
      'Comprehensive unit and integration test suite with 85%+ coverage',
    ],
    contribution:
      'Architected the API Gateway routing middleware, integrated Redis distributed locks, and authored automated Postman collection test runners.',
    role: 'Backend Developer',
    challenges:
      'Managing distributed transaction consistency across separate MongoDB collections without a heavy two-phase commit overhead.',
    outcomes:
      'Handled 1,200 req/sec in benchmark tests with 0% dropped transactions and clean circuit-breaker fallback triggers.',
    image: project03Img,
    github: 'https://github.com/your-username/microservices-backend-engine',
    liveDemo: 'https://api-docs.example.com',
  },
  {
    id: 'project-04',
    number: '04',
    title: 'SpendWise',
    featured: false,
    category: 'Academic',
    tags: ['Academic', 'Web'],
    shortDescription:
      'SpendWise is a personal finance web application that helps users track income and expenses, manage budgets and savings goals, and analyze spending habits through interactive dashboards and personalized financial insights.',
    fullDescription:
      'SpendWise is a full-stack personal finance and daily spending management web application designed to help users organize and manage their financial activities. It allows users to record income and expenses, categorize transactions, set budgets, track savings goals, and monitor spending habits through interactive dashboards and analytics. The system also provides personalized financial insights and budget alerts to support better financial planning and decision-making.',
    problem:
      'Many people struggle to track daily expenses, control unnecessary spending, and manage savings. Existing methods often lack clear insights into spending habits. SpendWise was developed to provide a simple platform for managing finances and making better financial decisions.',
    solution:
      'SpendWise provides a centralized web platform to record income and expenses, manage budgets and savings goals, and analyze spending habits through interactive dashboards. It helps users identify unnecessary spending, receive budget alerts, and make better financial decisions.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Recharts', 'Jest', 'Supertest', 'Git', 'GitHub.'],
    keyFeatures: [
      'Income & Expense Tracking – Record and categorize daily financial transactions.',
      'Budget & Savings Management – Set budgets, track savings goals, and receive alerts.',
      'Financial Analytics – View spending patterns and financial progress through interactive dashboards.',
      'Personalized Insights – Get spending recommendations and identify unnecessary expenses.',
    ],
    contribution:
      '',
    role: '',
    challenges:
      '',
    outcomes:
      'SpendWise improves financial awareness, budget control, savings planning, and decision-making through organized tracking and personalized insights.',
    image: project04Img,
    github: 'https://github.com/sandevi641/SpendWise',
    liveDemo: 'https://portal-demo.example.com',
  },
  {
    id: 'project-05',
    number: '05',
    title: 'Personal Finance & Expense Analytics Dashboard',
    featured: false,
    category: 'Web',
    tags: ['Web', 'Personal'],
    shortDescription:
      'Interactive web dashboard for personal budget tracking, categorized spending visualization, and recurring expense forecasting.',
    fullDescription:
      'A client-side financial analytics application built with React and Chart.js featuring interactive expenditure breakdowns, monthly budget targets, and CSV bank export parsing.',
    problem:
      'Existing budgeting tools are frequently cluttered with ads or require invasive bank credentials for basic spending analysis.',
    solution:
      'Created a zero-tracking, privacy-first analytics dashboard that processes bank statements locally in the browser with instant visual charts.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Vanilla CSS', 'IndexedDB'],
    keyFeatures: [
      'Interactive monthly spending trends and category distribution charts',
      'Local browser storage persistence using IndexedDB',
      'Automated recurring subscription cost detection',
      'Exportable CSV and PDF summary report generation',
    ],
    contribution:
      'Built the entire application from scratch including TypeScript data models, dynamic chart renderers, and custom CSS theme system.',
    role: 'Frontend Developer',
    challenges:
      'Parsing unstructured bank transaction CSV exports with inconsistent date and merchant formatting.',
    outcomes:
      'Published on GitHub as open-source with 100% lighthouse performance and accessibility scores.',
    image: project02Img,
    github: 'https://github.com/your-username/finance-analytics-dashboard',
    liveDemo: 'https://finance-dashboard.example.com',
  }
];
