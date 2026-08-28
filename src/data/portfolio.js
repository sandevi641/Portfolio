/**
 * Portfolio Central Configuration & Personal Information
 * 
 * Edit this file to customize your personal details, bio, links, and statistics.
 * All UI components read from this centralized configuration.
 */

export const portfolioData = {
  personal: {
    name: "[YOUR FULL NAME]",
    shortName: "[FIRST NAME]",
    title: "Software Engineering & Full-Stack Developer",
    subtitle: "IT Undergraduate | Full-Stack Developer | Software Engineering Enthusiast",
    tagline: "Building scalable, efficient web & mobile applications with modern technologies.",
    location: "[YOUR CITY, COUNTRY]",
    email: "developer.intern@example.com", // [YOUR EMAIL]
    phone: "+1 (555) 000-0000", // [YOUR PHONE]
    profileImage: "/images/profile/profile-placeholder.jpg",
  },

  availability: {
    text: "Open to Internship Opportunities",
    shortText: "Available for Internships",
    active: true,
  },

  social: {
    github: "https://github.com/your-username", // [YOUR GITHUB URL]
    linkedin: "https://linkedin.com/in/your-profile", // [YOUR LINKEDIN URL]
    email: "mailto:developer.intern@example.com", // [YOUR EMAIL LINK]
    twitter: "https://x.com/your-handle",
  },

  resume: {
    path: "/cv.pdf",
    fileName: "Developer_Resume.pdf",
    label: "Download CV",
    viewLabel: "View CV",
  },

  about: {
    introduction:
      "I am an enthusiastic Information Technology undergraduate with a solid foundation in computer science fundamentals, full-stack software development, and modern cloud architectures. Passionate about designing resilient systems and user-centric applications, I actively combine academic theory with hands-on development through practical projects, open-source exploration, and continuous learning.",
    detailedBio: [
      "Currently pursuing my Bachelor's degree in Information Technology, I have cultivated strong problem-solving and software engineering practices through coursework in Data Structures, Algorithms, Database Systems, and Object-Oriented Software Design.",
      "My core technical interests revolve around modern JavaScript/TypeScript ecosystems (React, Node.js), API design, distributed architectures, and cloud deployments. I enjoy transforming complex requirements into elegant, high-performance web applications.",
      "I am actively seeking a Software Engineering or Full-Stack Internship where I can contribute to meaningful engineering challenges, collaborate with experienced mentors, and accelerate my professional growth.",
    ],
    university: "[YOUR UNIVERSITY]",
    degree: "B.Sc. (Hons) in Information Technology", // [YOUR DEGREE]
    faculty: "Faculty of Computing & Information Technology", // [YOUR FACULTY]
    academicYear: "Year 3 / Undergraduate", // [YOUR CURRENT YEAR]
    specialization: "Software Engineering & Web Technologies", // [YOUR SPECIALIZATION]
    careerInterests: "Full-Stack Development, Cloud Systems, Mobile Applications, DevOps",
    careerGoals:
      "To join an engineering team as an intern, deliver robust software solutions that solve real customer problems, and evolve into a well-rounded Software Engineer.",
  },

  statistics: {
    projects: "12+",
    technologies: "15+",
    learningExperience: "3+ Years",
    certifications: "4+",
  },
};
