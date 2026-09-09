/**
 * Portfolio Central Configuration & Personal Information
 * 
 * Edit this file to customize your personal details, bio, links, and statistics.
 * All UI components read from this centralized configuration.
 */

export const portfolioData = {
  personal: {
    name: "Sandevi de Silva",
    shortName: "Sandevi",
    title: "University of Moratuwa | IT Undergraduate",
    subtitle: "Software Engineering Enthusiast",
    tagline: "Building scalable, efficient web & mobile applications with modern technologies.",
    location: "Colombo, Sri Lanka",
    email: "san20020803@gmail.com", // [YOUR EMAIL]
    phone: "0702872524", // [YOUR PHONE]
    whatsapp: "94702872524", // International format for wa.me links
    profileImage: "/images/profile/profile-placeholder.png",
  },

  availability: {
    text: "Open to Internship Opportunities",
    shortText: "Available for Internships",
    active: true,
  },

  social: {
    github: "https://github.com/sandevi641", // [YOUR GITHUB URL]
    linkedin: "https://www.linkedin.com/in/sandevi-ayodhya-873376269?utm_source=share_via&utm_content=profile&utm_medium=member_ios", // [YOUR LINKEDIN URL]
    email: "san20020803@gmail.com", // [YOUR EMAIL LINK]
    whatsapp: "https://wa.me/94702872524", // [YOUR WHATSAPP LINK]
  },

  resume: {
    path: "/cv.pdf",
    fileName: "Developer_Resume.pdf",
    label: "Download CV",
    viewLabel: "View CV",
  },

  about: {
    introduction:
      "I am an enthusiastic Information Technology undergraduate with a solid foundation in computer science fundamentals, full-stack software development. Passionate about designing resilient systems and user-centric applications, I actively combine academic theory with hands-on development through practical projects, open-source exploration, and continuous learning.",
    detailedBio: [
      "Currently pursuing my Bachelor's degree in Information Technology and Management, I have cultivated problem-solving and software engineering practices through coursework in Data Structures, Algorithms, Database Systems, and Object-Oriented Software Design.",
      "My core technical interests revolve around modern JavaScript/TypeScript ecosystems (React, Node.js), API design, distributed architectures, and cloud deployments. I enjoy transforming complex requirements into elegant, high-performance web applications.",
      "I am actively seeking a Software Engineering or Full-Stack Internship where I can contribute to meaningful engineering challenges, collaborate with experienced mentors, and accelerate my professional growth.",
    ],
    university: "University of Moratuwa",
    degree: "B.Sc. (Hons) in Information Technology and Management", // [YOUR DEGREE]
    faculty: "Faculty of Information Technology", // [YOUR FACULTY]
    academicYear: "Year 3 / Undergraduate", // [YOUR CURRENT YEAR]
    specialization: "Software Engineering & Web Technologies", // [YOUR SPECIALIZATION]
    careerInterests: "Full-Stack Development, Mobile Applications, Database Management",
    careerGoals:
      "To join an engineering team as an intern, deliver robust software solutions that solve real customer problems, and evolve into a well-rounded Software Engineer.",
  },

  statistics: {
    projects: "3+",
    technologies: "5+",
    learningExperience: "3+ Years",
    certifications: "4+",
  },
};
