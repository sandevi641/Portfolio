/**
 * Certifications & Achievements Data Source
 */

export const certificationsData = [
  {
    id: 'cert-01',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (via Coursera)',
    date: 'Dec 2025',
    credentialId: 'META-FE-998241',
    verificationUrl: 'https://coursera.org/verify/professional-cert/example-meta',
    image: '/src/assets/images/certificates/certificate-01.jpg',
    skillsCovered: ['React.js', 'JavaScript ES6', 'Version Control', 'UI/UX Design', 'API Integration'],
    description:
      'Comprehensive 9-course specialization covering advanced React state management, web accessibility, automated testing with Jest, and end-to-end frontend project delivery.',
  },
  {
    id: 'cert-02',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Aug 2025',
    credentialId: 'AWS-CCP-847291',
    verificationUrl: 'https://aws.amazon.com/verification',
    image: '/src/assets/images/certificates/certificate-02.jpg',
    skillsCovered: ['AWS Cloud Architecture', 'IAM & Security', 'EC2 & S3', 'Serverless Lambda', 'CloudWatch'],
    description:
      'Validated understanding of cloud infrastructure fundamentals, AWS core services, shared security models, billing, and serverless architectures.',
  },
  {
    id: 'cert-03',
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    issuer: 'Udemy / Jonas Schmedtmann',
    date: 'Mar 2025',
    credentialId: 'UC-908234-JS',
    verificationUrl: 'https://udemy.com/certificate/UC-908234-JS',
    image: '/src/assets/images/certificates/certificate-01.jpg',
    skillsCovered: ['Node.js', 'Express', 'MongoDB & Mongoose', 'REST API Architecture', 'JWT Authentication'],
    description:
      'Mastery of server-side development, asynchronous JavaScript event loops, NoSQL data modeling, API security best practices, and production deployments.',
  },
];

export const achievementsData = [
  {
    id: 'ach-01',
    title: '1st Runner Up – National University Hackathon 2025',
    organization: 'National ICT Student Forum',
    date: 'Oct 2025',
    category: 'Hackathon',
    description:
      'Co-developed an AI-assisted accessible learning portal for visually impaired students within a 36-hour sprint. Pitched live before an industry judge panel of senior engineering leaders.',
  },
  {
    id: 'ach-02',
    title: 'Top 10 Finalist – Inter-University Code Sprint',
    organization: 'IEEE Student Branch',
    date: 'May 2025',
    category: 'Competitive Programming',
    description:
      'Solved complex algorithmic challenges covering dynamic programming, graph traversal, and combinatorics against 120+ university teams.',
  },
  {
    id: 'ach-03',
    title: 'Lead Organizer & Technical Mentor – Web Dev Bootcamp',
    organization: 'University Computer Science Society',
    date: 'Feb 2025',
    category: 'Leadership & Community',
    description:
      'Mentored 60+ junior students in foundational web development (HTML, CSS, JavaScript, Git) across a 4-week interactive workshop series.',
  },
];
