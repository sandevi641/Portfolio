/**
 * Projects Data Source
 * 
 * Add, edit, or categorize your portfolio projects here.
 * The Projects section and ProjectModal dynamically consume this file.
 */

export const projectCategories = [
  'All',
  'Full Stack',
  'Web',
  'Mobile',
  'Backend',
  'Academic',
  'Personal',
];

export const projectsData = [
  {
    id: 'project-01',
    number: '01',
    title: 'Cloud-Native Task & Workflow Management Platform',
    featured: true,
    category: 'Full Stack',
    tags: ['Full Stack', 'Web', 'Personal'],
    shortDescription:
      'A scalable enterprise productivity application with real-time collaboration, role-based access control, and automated workflow pipelines.',
    fullDescription:
      'Engineered an end-to-end task collaboration platform featuring real-time socket communication, interactive Kanban boards, role-based authorization, and analytical reporting dashboards.',
    problem:
      'Distributed student teams and small engineering groups often lack lightweight, privacy-focused task management tools that combine intuitive Kanban boards with automated sprint metrics.',
    solution:
      'Built a reactive single-page app powered by React and Node.js REST APIs with WebSocket integrations, persistent state caching with Redis, and modular PostgreSQL schemas.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Tailwind CSS', 'Docker'],
    keyFeatures: [
      'Real-time multi-user board updates via WebSockets',
      'Granular JWT-based authentication & RBAC permissions',
      'Automated sprint velocity charts and productivity analytics',
      'RESTful API with comprehensive Swagger documentation',
    ],
    contribution:
      'Designed the relational database schema, implemented the JWT authentication pipeline, and built the draggable Kanban interface with state synchronization.',
    role: 'Lead Full-Stack Developer',
    challenges:
      'Handling concurrent board edits and optimistic UI updates without race conditions or state desynchronization across active browser tabs.',
    outcomes:
      'Achieved sub-100ms API response times and successfully supported 50+ concurrent mock user sessions during load testing.',
    image: '/src/assets/images/projects/project-01.jpg',
    github: 'https://github.com/your-username/cloud-task-manager',
    liveDemo: 'https://demo-task-manager.example.com',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Campus Food & Cafeteria Pre-Order Mobile App',
    featured: false,
    category: 'Mobile',
    tags: ['Mobile', 'Academic'],
    shortDescription:
      'Cross-platform mobile application for university students to browse daily dining menus, customize orders, and skip cafeteria wait lines.',
    fullDescription:
      'Developed as an academic software engineering capstone project to eliminate peak lunch queue bottlenecks across campus cafeterias using real-time order tracking and QR pick-up verifications.',
    problem:
      'University cafeteria lunch queues averaged 25–35 minutes during lecture breaks, creating delays for students and overburdens for kitchen staff.',
    solution:
      'Created a cross-platform React Native app with Firebase Firestore for live order status feeds, offline menu caching, and instant digital receipt generation.',
    technologies: ['React Native', 'Expo', 'Firebase Firestore', 'Node.js', 'Stripe API'],
    keyFeatures: [
      'Live kitchen preparation status tracking (Queued, Cooking, Ready)',
      'QR code generation for contactless order collection',
      'Interactive nutritional breakdowns and dietary preference filters',
      'Secure mock in-app checkout flow with transaction history',
    ],
    contribution:
      'Led the mobile client architecture, integrated Firebase real-time listeners, and conducted usability testing with 20+ university peers.',
    role: 'Mobile Frontend Developer (Team of 4)',
    challenges:
      'Ensuring reliable offline fallback states when mobile network connectivity drops in underground campus dining halls.',
    outcomes:
      'Awarded "Best Undergraduate Software Design Project" for the semester with positive user feedback on UI responsiveness.',
    image: '/src/assets/images/projects/project-02.jpg',
    github: 'https://github.com/your-username/campus-dining-mobile',
    liveDemo: 'https://expo.dev/@your-username/campus-dining',
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
    image: '/src/assets/images/projects/project-03.jpg',
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
    image: '/src/assets/images/projects/project-01.jpg',
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
    image: '/src/assets/images/projects/project-02.jpg',
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
    image: '/src/assets/images/projects/project-03.jpg',
    github: 'https://github.com/your-username/portfolio-scaffold-cli',
    liveDemo: 'https://npmjs.com/package/portfolio-scaffold-cli',
  },
];
