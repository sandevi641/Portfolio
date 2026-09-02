/**
 * Projects Data Source
 * 
 * Add, edit, or categorize your portfolio projects here.
 * The Projects section and ProjectModal dynamically consume this file.
 */

import project01Img from '../assets/images/projects/project-01.jpg';
import project02Img from '../assets/images/projects/project-02.png';
import project03Img from '../assets/images/projects/project-03.jpg';

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
    title: 'High-Throughput Microservices REST API & Gateway',
    featured: false,
    category: 'Backend',
    tags: ['Backend', 'Personal'],
    shortDescription:
      'Distributed backend architecture featuring API gateway routing, rate-limiting, centralized logging, and token verification.',
    fullDescription:
      'Designed a resilient backend system adhering to microservice design principles, featuring isolated authentication, product catalog, and order processing services with an asynchronous event bus.',
    problem:
      'Monolithic architectures struggle under localized traffic spikes, making independent scalability and fault isolation difficult for e-commerce backends.',
    solution:
      'Implemented independent Node/Express microservices managed behind an Express Gateway with rate limiting, centralized Winston logging, and Redis token caching.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'JWT', 'Jest'],
    keyFeatures: [
      'Token bucket algorithm rate limiting to prevent API abuse',
      'Centralized health check endpoints & request correlation IDs',
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
    title: 'Student Academic Portal & Course Registration System',
    featured: false,
    category: 'Academic',
    tags: ['Academic', 'Full Stack', 'Web'],
    shortDescription:
      'Comprehensive academic management portal for student grade auditing, course prerequisites validation, and timetable scheduling.',
    fullDescription:
      'Engineered a secure web portal for university academic advisors and students to manage semester course enrollments with automatic prerequisite validation algorithms.',
    problem:
      'Manual course registration often resulted in scheduling clashes, unfulfilled prerequisite violations, and administrative overhead.',
    solution:
      'Built a Java + Spring Boot backend with a React UI and relational MySQL integrity constraints preventing conflicting class enrollments.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'Bootstrap', 'JUnit'],
    keyFeatures: [
      'Automated prerequisite validation dependency tree parsing',
      'Interactive visual weekly timetable clash detector',
      'Cumulative GPA and credit hour calculation engine',
      'Role-based portals for Students, Instructors, and Department Admins',
    ],
    contribution:
      'Implemented the course prerequisite validation algorithm in Java and designed the normalized 3NF database schema.',
    role: 'Full-Stack Developer (Academic Project)',
    challenges:
      'Handling recursive prerequisite chains and circular dependency detection during bulk course selection.',
    outcomes:
      'Demonstrated 100% prerequisite validation accuracy across 500+ test registration combinations.',
    image: project01Img,
    github: 'https://github.com/your-username/academic-portal-system',
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
  },
  {
    id: 'project-06',
    number: '06',
    title: 'Automated Developer Portfolio Generator & CLI Tool',
    featured: false,
    category: 'Backend',
    tags: ['Backend', 'Personal'],
    shortDescription:
      'Node.js command-line utility that inspects public GitHub repositories, generates structured JSON summaries, and scaffolds static portfolios.',
    fullDescription:
      'Developed a CLI tool distributed via npm that prompts developers for their profile details, pulls their top GitHub project statistics via Octokit, and generates a ready-to-deploy portfolio skeleton.',
    problem:
      'Undergraduate developers often spend days configuring build tooling rather than focusing on writing clear project descriptions.',
    solution:
      'Engineered an interactive Node.js CLI tool with Inquirer and Commander to automate scaffold generation in under 60 seconds.',
    technologies: ['Node.js', 'TypeScript', 'GitHub REST API', 'Commander.js', 'Chalk'],
    keyFeatures: [
      'Interactive terminal prompts with input validation and color formatting',
      'Automatic GitHub repo fetching, star counting, and language detection',
      'One-command local dev server preview launch',
      'Zero external build dependencies for the generated static bundle',
    ],
    contribution:
      'Developed the CLI engine, GitHub API integration, template compilation pipeline, and npm package distribution.',
    role: 'Open-Source Creator',
    challenges:
      'Handling GitHub API rate limits gracefully with unauthenticated token fallback prompts.',
    outcomes:
      'Used by fellow IT peers to scaffold their initial resume showcase websites.',
    image: project03Img,
    github: 'https://github.com/your-username/portfolio-scaffold-cli',
    liveDemo: 'https://npmjs.com/package/portfolio-scaffold-cli',
  },
];
