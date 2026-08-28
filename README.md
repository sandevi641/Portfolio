# Professional Developer Portfolio & Internship Application Website

> A modern, responsive, and performance-optimized personal portfolio designed specifically for Information Technology undergraduates and aspiring Software Engineers applying for university internships, graduate programs, and junior software engineering roles.

![Portfolio Preview](/public/images/og-image.png)

---

## 🌟 Key Features

- **Decoupled Architecture**: Clean separation between UI components and centralized portfolio data (`src/data/`). Easily update content without touching React code.
- **Theme Switcher**: Seamless Dark and Light modes with automatic system preference detection and `localStorage` persistence.
- **Interactive Project Showcase**: Filter projects by categories (*Full Stack, Web, Mobile, Backend, Academic, Personal*) with interactive modal popups for deep-dive technical architecture, contributions, and problem-solution breakdowns.
- **Academic & Education Timeline**: Showcase degree milestones, coursework modules, GPA, and departmental honors.
- **Certifications & Achievements**: Verify industry credentials (AWS, Meta, etc.) and highlight hackathon achievements.
- **Direct CV / Resume Download**: One-click download from `/public/cv.pdf`, easily replaceable by swapping the single PDF file.
- **Interactive Contact Form**: Complete client validation with error alerts and support for EmailJS/Formspree/custom backend integration.
- **Accessible & SEO Ready**: Semantic HTML5 elements, keyboard-accessible modals, OpenGraph social meta tags, and structured headings.
- **Clean Vanilla CSS Design System**: Built with CSS variables, smooth micro-interactions, responsive typography, and mobile drawer navigation.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern Vanilla CSS Design System with CSS Variables & Glassmorphism
- **Linting & Code Quality**: ESLint v9

---

## 📁 Project Architecture & Folder Structure

```text
portfolio/
│
├── public/
│   ├── cv.pdf                           # Replaceable CV / Resume file
│   ├── favicon.ico                      # Website favicon
│   ├── robots.txt                       # Search engine crawler configuration
│   └── images/
│       └── og-image.png                 # Social share banner
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile/                 # Profile & avatar photos
│   │   │   ├── projects/                # Project preview screenshots
│   │   │   └── certificates/            # Certificate previews
│   │   └── icons/                       # Custom vector icons
│   │
│   ├── components/
│   │   ├── common/                      # Reusable UI primitives (Button, SectionTitle, ThemeToggle, etc.)
│   │   ├── layout/                      # Navbar, MobileMenu, Footer
│   │   ├── hero/                        # Hero introduction & interactive DeveloperCard
│   │   ├── about/                       # Bio narrative, academic info grid, statistics
│   │   ├── skills/                      # Categorized skill badges with proficiency tags
│   │   ├── projects/                    # Project grid, filters, cards, and detail modal
│   │   ├── education/                   # Academic timeline and coursework
│   │   ├── certifications/              # Credential verification cards & achievements
│   │   ├── experience/                  # Internship and leadership activity cards
│   │   └── contact/                     # Validated contact form and direct info cards
│   │
│   ├── data/                            # 🚀 CENTRALIZED CONTENT (Edit all content here)
│   │   ├── portfolio.js                 # Personal details, bio, links, and metrics
│   │   ├── projects.js                  # Project showcase details, links, and tags
│   │   ├── skills.js                    # Technical skill lists and proficiency levels
│   │   ├── education.js                 # University degrees, coursework, and honors
│   │   ├── certifications.js            # Certifications and hackathon achievements
│   │   └── experience.js                # Work experience and leadership roles
│   │
│   ├── hooks/                           # Custom React hooks (useTheme, useScrollSpy, etc.)
│   ├── pages/                           # Main page views (Home.jsx)
│   ├── utils/                           # Validators, scroll helpers, and constants
│   ├── styles/                          # CSS design system (variables, animations, globals)
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── README.md
├── package.json
└── vite.config.js
```

---

## ⚡ Quick Start & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/developer-portfolio.git
cd developer-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ✏️ Customization Guide

All personal information and content is strictly decoupled from the UI inside `src/data/`. You do **not** need to modify React components to update your information.

### 1. Personal Bio, Links & Availability
Open [`src/data/portfolio.js`](src/data/portfolio.js):
- Replace `personal.name`, `personal.title`, `personal.email`, `personal.location`.
- Update your GitHub and LinkedIn URLs in `social`.
- Edit `about.introduction` and `about.detailedBio`.
- Modify `statistics` counters.

### 2. Projects Showcase
Open [`src/data/projects.js`](src/data/projects.js):
- Add, update, or remove projects from `projectsData`.
- Set `featured: true` on your flagship project.
- Specify technologies, contributions, live demo URLs, and GitHub links.

### 3. Technical Skills
Open [`src/data/skills.js`](src/data/skills.js):
- Add or modify skills with appropriate proficiency tags (`Advanced`, `Intermediate`, `Working Knowledge`, `Familiar`).

### 4. Education & Academic Background
Open [`src/data/education.js`](src/data/education.js):
- Update degree name, university, GPA, coursework list, and academic achievements.

### 5. Certifications & Achievements
Open [`src/data/certifications.js`](src/data/certifications.js):
- Add certificates, credential IDs, and direct verification URLs.
- List hackathons and extracurricular awards in `achievementsData`.

### 6. Experience & Leadership
Open [`src/data/experience.js`](src/data/experience.js):
- Add internships, student assistantships, or open-source projects.

### 7. Replacing Resume / CV
- Place your PDF resume in [`public/cv.pdf`](public/cv.pdf). The download buttons on the navigation bar and hero section will immediately serve your new PDF.

### 8. Replacing Profile & Project Images
- Place your profile photo in [`src/assets/images/profile/profile-placeholder.jpg`](src/assets/images/profile/).
- Place project screenshots in [`src/assets/images/projects/`](src/assets/images/projects/).

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Visit [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy Site**.

### Custom Domain
Both Vercel and Netlify allow you to bind custom domains (e.g., `yourname.dev` or `yourname.com`) for free with automatic SSL certificates under **Project Settings > Domains**.

---

## 📄 License
MIT License. Feel free to use this template for your personal portfolio.
