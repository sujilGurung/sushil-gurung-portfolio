// ─── Personal Information ──────────────────────────────────────────────────
export const personalInfo = {
  name: "Sushil Gurung",
  role: "Computing Graduate | Full-Stack Developer | Aspiring AI & ML Professional",
  tagline: "Building Software Solutions and Exploring Artificial Intelligence.",
  bio: "I'm a Computing graduate and full-stack developer passionate about building practical applications and exploring Artificial Intelligence and Machine Learning.",
  aboutText:
    "I'm a Computing graduate from Informatics College Pokhara, affiliated with London Metropolitan University. I enjoy developing software applications, working with APIs and databases, and solving practical problems through technology. I'm also developing my knowledge of Artificial Intelligence, Machine Learning and Data Science, with the goal of pursuing postgraduate studies in AI.",
  location: "Pokhara, Nepal",
  contacts: {
    github: "https://github.com/sujilGurung",
    linkedin: "https://www.linkedin.com/in/sujil-gurung-2a8a002b0/",
    email: "sujilgurung15@gmail.com",
    portfolio: "https://gurungsushil.com.np/",
    cvUrl: "/Sushil_Gurung_CV.pdf",
  },
};

// ─── Skills ───────────────────────────────────────────────────────────────
export const skillsData = {
  Programming: [
    { name: "Python", note: "Scripting, OOP, data processing" },
    { name: "JavaScript", note: "ES6+, async/await, DOM manipulation" },
    { name: "PHP", note: "Server logic, sessions, REST APIs" },
    { name: "C#", note: ".NET applications, OOP" },
    { name: "SQL", note: "Queries, joins, schema design" },
  ],
  Frontend: [
    { name: "React.js", note: "Hooks, component patterns, state management" },
    { name: "Vite", note: "Build tooling, fast HMR, asset optimisation" },
    { name: "HTML5", note: "Semantic markup, accessibility" },
    { name: "CSS3", note: "Flexbox, Grid, responsive layouts" },
    { name: "Tailwind CSS", note: "Utility-first styling" },
  ],
  Backend: [
    { name: "Django", note: "MVT architecture, ORM, REST framework" },
    { name: "FastAPI", note: "Async APIs, Pydantic models" },
    { name: "ASP.NET Core", note: "Clean architecture, dependency injection" },
    { name: "PHP REST APIs", note: "Custom endpoint structuring" },
  ],
  "AI & Data Science": [
    { name: "Pandas", note: "Data manipulation and analysis" },
    { name: "NumPy", note: "Numerical computing, matrix operations" },
    { name: "Scikit-learn", note: "Classification, regression, pipelines" },
    { name: "Machine Learning", note: "Supervised & unsupervised fundamentals" },
  ],
  Databases: [
    { name: "MySQL", note: "Complex queries, foreign keys, indexing" },
    { name: "PostgreSQL", note: "ACID transactions, relational modelling" },
    { name: "SQLite", note: "Embedded, offline-first storage" },
  ],
  Tools: [
    { name: "Git & GitHub", note: "Version control, branching workflows" },
    { name: "Google Colab", note: "ML experimentation, notebooks" },
    { name: "Swagger", note: "API documentation & testing" },
    { name: "Vercel", note: "Frontend deployment & hosting" },
    { name: "Render", note: "Backend service deployment" },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "lung-cancer",
    title: "Lung Cancer Prediction System",
    category: "AI / Machine Learning",
    badge: "Academic ML Project",
    description:
      "Machine learning web application that predicts pulmonary disease outcomes using health and lifestyle data. Best model accuracy: 91.6%.",
    disclaimer:
      "Academic project only — not a medically validated diagnostic tool.",
    technologies: ["Python", "Scikit-learn", "FastAPI", "React"],
    githubUrl: "https://github.com/sujilGurung/Lungs_cancer_ML",
    demoUrl: "https://lungs-cancer-ml.vercel.app",
    highlights: [
      "Evaluated multiple ML classifiers with best accuracy of 91.6%",
      "FastAPI backend serving model predictions",
      "React frontend for user input and result display",
      "Exploratory data analysis on health and lifestyle datasets",
    ],
  },
  {
    id: "mittho-bhojan",
    title: "Mittho Bhojan",
    category: "Full-Stack Web Application",
    badge: "Final Year Project",
    description:
      "Full-stack food ordering platform with customer, restaurant-partner and admin roles. Features a Gemini API-powered chatbot, Leaflet maps and Khalti payment integration.",
    technologies: ["React", "Vite", "PHP", "MySQL", "Gemini API", "Leaflet", "Khalti"],
    githubUrl: "https://github.com/sujilGurung/mittho-bhojan",
    demoUrl: "https://mitthobhojan.site.je",
    highlights: [
      "Separate portals: customer, restaurant-owner, admin",
      "Khalti digital wallet payment integration",
      "Location-based discovery with Leaflet maps",
      "AI chatbot powered by Gemini API",
    ],
  },
  {
    id: "vista-ecommerce",
    title: "Vista E-Commerce",
    category: "Full-Stack Web Application",
    badge: "Web Project",
    description:
      "Clothing e-commerce web application with product listings, cart management and order processing.",
    technologies: ["React", "Django", "Python", "PostgreSQL"],
    githubUrl: "https://github.com/sujilGurung/Django-ecommerce-project",
    demoUrl: null,
    highlights: [
      "Django REST Framework backend",
      "React frontend with cart and checkout flow",
      "PostgreSQL relational database",
      "User authentication and order management",
    ],
  },
  {
    id: "journal-app",
    title: "Personal Journal Application",
    category: "Cross-Platform Application",
    badge: "Desktop / Mobile App",
    description:
      "Personal journal application with journal management, mood tracking and tags, built with .NET MAUI and Blazor Hybrid.",
    technologies: ["C#", ".NET MAUI", "Blazor Hybrid", "SQLite"],
    githubUrl: null,
    demoUrl: null,
    highlights: [
      "Cross-platform: Windows, macOS, iOS, Android",
      "Full CRUD for journal entries",
      "Mood tracking with visual indicators",
      "Custom tags and offline SQLite storage",
    ],
  },
  {
    id: "vehicle-service",
    title: "Vehicle Service Management System",
    category: "Backend / Enterprise",
    badge: "Backend Project",
    description:
      "Backend application developed for vehicle service management, featuring role-based authorisation, service scheduling and Swagger API documentation.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "ASP.NET Identity"],
    githubUrl: null,
    demoUrl: null,
    highlights: [
      "Role-based authorisation via ASP.NET Identity",
      "Vehicle maintenance and repair history tracking",
      "PostgreSQL with Entity Framework Core",
      "Swagger interactive API documentation",
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────
export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Everest Technologies",
    period: "Internship",
    location: "Nepal",
    type: "Internship",
    companyUrl: "https://everest-trek.vercel.app/",
    description:
      "Worked on a trekking and travel agency web application using React and Vite. Contributed to frontend development, responsive layouts and API integration.",
    responsibilities: [
      "Developed and maintained modern web interfaces using React and Vite",
      "Built responsive layouts optimised for mobile, tablet, and desktop",
      "Integrated RESTful backend APIs with dynamic frontend views",
      "Refactored components to improve readability, state management and performance",
    ],
    technologies: ["React", "Vite", "JavaScript", "REST APIs", "CSS", "Git"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "BSc (Hons) Computing",
    institution: "Informatics College Pokhara",
    affiliation: "Affiliated with London Metropolitan University, UK",
    period: "2023 – 2026",
    highlights: [
      "Software Engineering, Algorithms, Database Systems and Intelligent Computing",
      "Final Year Project: Mittho Bhojan — full-stack platform with AI chatbot",
      "Collaborative software development and research methodologies",
    ],
  },
  {
    degree: "Higher Secondary Education (+2 Management)",
    institution: "United Academy",
    affiliation: "Lalitpur, Nepal",
    period: "2021 – 2023",
    highlights: [
      "Core analytical and problem-solving foundations",
      "Developed early interest in computing and technology",
    ],
  },
];
