export const personalInfo = {
  name: "Sushil Gurung",
  role: "AI & Software Developer",
  tagline: "Building Intelligent Solutions With Code.",
  label: "AI • MACHINE LEARNING • DATA SCIENCE • SOFTWARE DEVELOPMENT",
  bio: "Computing graduate focused on Artificial Intelligence, Machine Learning, Data Science and modern software development. I enjoy turning ideas into practical software and continuously expanding my skills in intelligent technologies.",
  aboutExtended: "Sushil is a BSc (Hons) Computing graduate from Informatics College Pokhara, affiliated with London Metropolitan University, UK, with practical experience in software development, frontend development and academic projects. He is actively building his knowledge toward Artificial Intelligence, Machine Learning, Data Science, and modern Software Engineering.",
  storyJourney: [
    { step: "Academic Roots", title: "+2 Science / Computer Science", org: "United Academy", desc: "Foundational mathematics and introductory computer science in Kumaripati, Lalitpur." },
    { step: "Higher Education", title: "BSc (Hons) Computing", org: "Informatics College Pokhara / London Met UK", desc: "Rigorous computing principles, software engineering, algorithms, and web architectures." },
    { step: "Industry Immersion", title: "Frontend Developer Internship", org: "Everest Technologies", desc: "Real-world React and Vite frontend development, API integration, and responsive systems." },
    { step: "Capstone Achievement", title: "Mittho Bhojan (FYP)", org: "Final Year Capstone Project", desc: "Comprehensive full-stack restaurant pre-ordering and delivery ecosystem with AI chatbot." },
    { step: "Academic AI", title: "Cancer Prediction Machine", org: "Machine Learning Project", desc: "Academic research project analysing medical datasets using machine learning concepts." },
    { step: "Continuous Growth", title: "100 Days of DS & ML", org: "Skills Shikshya", desc: "Public learning roadmap documenting daily growth from Python foundations to ML models." }
  ],
  education: [
    {
      period: "2023 – 2026",
      degree: "BSc (Hons) Computing",
      institution: "Informatics College Pokhara",
      affiliation: "Affiliated with London Metropolitan University, UK",
      highlights: [
        "Specialized in Software Engineering, Algorithms, Database Systems and Intelligent Computing",
        "Completed comprehensive Final Year Project (Mittho Bhojan) integrating web technologies and AI components",
        "Participated in collaborative software development practices and research methodologies"
      ]
    },
    {
      period: "High School (+2)",
      degree: "+2 Science / Computer Science",
      institution: "United Academy",
      affiliation: "Kumaripati, Lalitpur, Nepal",
      highlights: [
        "Built core analytical problem-solving skills in mathematics and computing fundamentals",
        "Developed early interest in algorithms and programming logic"
      ]
    }
  ],
  experience: [
    {
      period: "Internship",
      role: "Frontend Developer Intern",
      company: "Everest Technologies",
      location: "Nepal",
      type: "Internship",
      responsibilities: [
        "Developed and maintained modern web interfaces using React and Vite",
        "Built responsive layouts optimized for mobile, tablet, and desktop devices",
        "Collaborated on integrating RESTful backend APIs with dynamic frontend views",
        "Refactored components to improve code readability, state management, and UI performance"
      ],
      technologies: ["React", "Vite", "JavaScript", "REST APIs", "CSS", "Git"]
    }
  ],
  contacts: {
    github: "https://github.com/sujilGurung",
    linkedin: "https://linkedin.com/in/sushil-gurung", // Placeholder marker: [ADD LINKEDIN URL]
    email: "sushilgurung.dev@gmail.com", // Placeholder marker: [ADD EMAIL]
    cvUrl: "#cv-modal"
  }
};

export const featuredProjects = [
  {
    id: "cancer-prediction",
    title: "Cancer Prediction Machine",
    category: "Artificial Intelligence / Machine Learning",
    badge: "Academic AI/ML Project",
    status: "Academic Research Exploration",
    description: "An academic AI/ML project focused on analysing medical data and developing a machine learning based approach for cancer-related prediction.",
    disclaimer: "Presented strictly as an academic and student research project. Not intended or validated as a clinical diagnostic tool.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "NumPy", "Pandas", "Scikit-Learn"],
    githubUrl: "https://github.com/sujilGurung",
    demoUrl: null,
    keyHighlights: [
      "Exploratory data analysis on medical feature sets",
      "Feature preprocessing, scaling, and handling missing tabular attributes",
      "Implementation of standard classification pipelines for comparative study",
      "Focus on understanding the nuances of medical data representations"
    ]
  },
  {
    id: "mittho-bhojan",
    title: "Mittho Bhojan",
    category: "Final Year Project • Full-Stack Web Application",
    badge: "Final Year Capstone",
    status: "Completed Full-Stack System",
    description: "A restaurant pre-ordering and delivery platform developed as a Final Year Project. The platform connects customers with restaurants and combines ordering, restaurant management, payments, location-based discovery and an AI-assisted chatbot.",
    disclaimer: "Features separate specialized portals: customer ordering, dedicated restaurant-owner management panel, and administrative oversight.",
    technologies: ["React", "Vite", "PHP", "MySQL", "JavaScript", "REST APIs", "Leaflet", "Khalti", "Gemini / RAG"],
    githubUrl: "https://github.com/sujilGurung",
    demoUrl: null,
    features: [
      "Customer ordering & dynamic food cart system",
      "Restaurant browsing with categorised cuisine menus",
      "Advance pre-ordering and scheduling options",
      "Dedicated Restaurant-Owner Panel for menu & order status control",
      "System Admin functionality for platform oversight",
      "Khalti digital wallet payment integration",
      "Location-based restaurant discovery powered by Leaflet maps",
      "Delivery tracking and address routing",
      "AI-assisted Chatbot leveraging Gemini & RAG architecture for context-aware queries"
    ]
  },
  {
    id: "everest-trekking",
    title: "Trekking & Travel Web Application",
    category: "Frontend Developer Internship Project",
    badge: "Industry Internship Project",
    status: "Frontend Production Implementation",
    description: "A frontend web application developed during my Frontend Developer Internship at Everest Technologies. I worked with React and Vite to build interfaces, implement responsive layouts and integrate frontend functionality with APIs.",
    disclaimer: "Developed during internship tenure with emphasis on performant component architecture and cross-device responsiveness.",
    technologies: ["React", "Vite", "JavaScript", "REST API Integration", "Responsive UI", "CSS Modules"],
    githubUrl: "https://github.com/sujilGurung",
    demoUrl: null,
    keyHighlights: [
      "Dynamic trekking package exploration and route detail pages",
      "Interactive altitude profiles and itinerary breakdown layouts",
      "Robust state synchronization with backend REST APIs",
      "Mobile-first responsive design tested across diverse screen viewports"
    ]
  }
];

export const otherProjects = [
  {
    id: "journal-app",
    title: "Personal Journal App",
    category: "Cross-Platform Application",
    technologies: [".NET MAUI", "Blazor Hybrid", "C#", "SQLite"],
    description: "A secure cross-platform personal journal application featuring full CRUD operations, local user authentication, mood tracking, categorized tagging, and offline SQLite storage.",
    features: ["Complete CRUD operations", "Local PIN & Auth protection", "Daily mood logging", "Custom tag taxonomy", "Offline-first SQLite persistence"]
  },
  {
    id: "vehicle-service",
    title: "Vehicle Service Management System",
    category: "Enterprise Web Backend & Architecture",
    technologies: ["ASP.NET Core", "Entity Framework", "PostgreSQL", "Identity", "Swagger"],
    description: "An enterprise service management system managing workshop operations, vehicle maintenance schedules, repair history, role-based authorization via ASP.NET Identity, and interactive Swagger documentation.",
    features: ["Role-based authorization", "Automated service schedules", "PostgreSQL relational schemas", "REST API with Swagger", "Inventory & work order tracking"]
  },
  {
    id: "python-suite",
    title: "Python Fundamental & Algorithmic Projects",
    category: "Algorithmic Development",
    technologies: ["Python", "Algorithms", "Data Structures", "CLI"],
    description: "A curated collection of modular Python applications built while sharpening core algorithmic problem-solving and software design patterns.",
    selectedApps: [
      "Number Checker (Prime, Even/Odd, Armstrong)",
      "Scientific Calculator with evaluation tree",
      "Automated Shopping Receipt generator",
      "Persistent Task / To-Do Manager",
      "Shopping Cart with tax & discount calculation",
      "Contact Phonebook with search & file I/O",
      "Student Academic Report Card generator"
    ]
  }
];

export const learningJourney = {
  title: "100 Days of Data Science & Machine Learning",
  subtitle: "Learning in Public. Building Every Day.",
  institution: "Skills Shikshya",
  description: "I am documenting my Data Science and Machine Learning learning journey through a public GitHub repository, progressing from Python fundamentals and programming concepts toward Data Science and Machine Learning.",
  repoUrl: "https://github.com/sujilGurung/DS_ML_Course",
  roadmap: [
    { stage: "01", name: "Python Core", status: "completed", desc: "Syntax, data types, control flow, functions, OOP, and file handling." },
    { stage: "02", name: "Git & GitHub", status: "completed", desc: "Version control, branching workflows, pull requests, and commit hygiene." },
    { stage: "03", name: "Programming Logic", status: "completed", desc: "Algorithmic thinking, problem decomposition, and recursion patterns." },
    { stage: "04", name: "Data Structures", status: "completed", desc: "Arrays, lists, dictionaries, stacks, queues, and complexity analysis." },
    { stage: "05", name: "Data Science", status: "in-progress", desc: "NumPy matrix computation, Pandas data manipulation, and exploratory visualization." },
    { stage: "06", name: "Machine Learning", status: "in-progress", desc: "Supervised & unsupervised algorithms, feature engineering, and model evaluation." }
  ]
};

export const skillsData = {
  "AI & Data": [
    { name: "Python", level: "Core Foundation", note: "Scripting, OOP, data processing" },
    { name: "Machine Learning", level: "Academic Exploration", note: "Classification, regression, pipelines" },
    { name: "Data Science", level: "Active Learning", note: "EDA, data wrangling, analytics" },
    { name: "Artificial Intelligence", level: "Core Interest", note: "Search strategies, problem formulations" },
    { name: "RAG", level: "Project Implemented", note: "Retrieval-Augmented Generation with Gemini" }
  ],
  "Frontend": [
    { name: "React", level: "Production / Internship", note: "Hooks, component patterns, state management" },
    { name: "Vite", level: "Production Standard", note: "Build tooling, fast HMR, asset optimization" },
    { name: "JavaScript (ES6+)", level: "Proficient", note: "Async/await, DOM, closures, modules" },
    { name: "HTML5", level: "Semantic Markup", note: "Accessibility, standard hierarchy, SEO" },
    { name: "CSS3 / Modern CSS", level: "Glassmorphism & Flex/Grid", note: "Animations, responsive layouts, design systems" }
  ],
  "Backend": [
    { name: "PHP", level: "FYP Implemented", note: "Server logic, sessions, database interaction" },
    { name: "ASP.NET Core", level: "Framework Experience", note: "Clean architecture, Dependency Injection, APIs" },
    { name: "REST APIs", level: "Core Architecture", note: "JSON payloads, endpoint structuring, HTTP verbs" }
  ],
  "Databases": [
    { name: "MySQL", level: "FYP Relational DB", note: "Complex queries, foreign keys, indexing" },
    { name: "PostgreSQL", level: "Entity Framework DB", note: "ACID transactions, schemas, relational modeling" },
    { name: "SQLite", level: "Embedded DB", note: "Mobile & offline client-side storage (.NET MAUI)" }
  ],
  "Tools & Workflow": [
    { name: "Git", level: "Version Control", note: "Branching, rebasing, collaborative workflows" },
    { name: "GitHub", level: "Public Portfolio", note: "Repositories, documentation, open tracking" },
    { name: "Swagger", level: "API Documentation", note: "Interactive endpoint testing & schema specs" },
    { name: "VS Code", level: "Primary IDE", note: "Debugging, extensions, optimized dev workflow" }
  ]
};

export const milestones = [
  {
    title: "BSc (Hons) Computing Graduate",
    detail: "Graduated from Informatics College Pokhara, affiliated with London Metropolitan University, UK.",
    icon: "GraduationCap",
    verified: true
  },
  {
    title: "Mittho Bhojan Capstone System",
    detail: "Successfully designed and engineered a full-scale restaurant pre-ordering platform featuring Leaflet maps, Khalti payments, restaurant-owner panel, and an AI chatbot.",
    icon: "Rocket",
    verified: true
  },
  {
    title: "Frontend Developer Internship",
    detail: "Completed hands-on internship at Everest Technologies delivering responsive React web applications and REST API integrations.",
    icon: "Briefcase",
    verified: true
  },
  {
    title: "100-Day Public Learning Journey",
    detail: "Publicly documenting daily progression in Python, Data Science, and Machine Learning on GitHub with Skills Shikshya.",
    icon: "TrendingUp",
    verified: true
  },
  {
    title: "Cancer Prediction Academic ML Study",
    detail: "Conducted academic research exploring medical datasets and machine learning classification techniques.",
    icon: "Activity",
    verified: true
  },
  {
    title: "Cross-Platform & Backend Software Portfolio",
    detail: "Architected multi-paradigm software including .NET MAUI Blazor Hybrid journal and ASP.NET Core service systems.",
    icon: "Layers",
    verified: true
  }
];

export const networkNodes = [
  { id: "python", label: "Python", category: "core", x: 18, y: 35, desc: "Primary programming language for data engineering, algorithm exploration, and AI models." },
  { id: "data", label: "Data Science", category: "core", x: 34, y: 30, desc: "Tabular preprocessing, feature engineering, and statistical analytics." },
  { id: "ml", label: "Machine Learning", category: "core", x: 50, y: 25, desc: "Supervised & unsupervised learning models, classification pipelines, evaluation." },
  { id: "ai", label: "Artificial Intelligence", category: "core", x: 68, y: 28, desc: "Intelligent systems, RAG architecture, and context-aware conversational agents." },
  { id: "projects", label: "Intelligent Projects", category: "core", x: 84, y: 36, desc: "Real-world synthesis: Cancer Prediction ML, Mittho Bhojan AI Chatbot." },
  { id: "react", label: "React & Vite", category: "web", x: 22, y: 72, desc: "High-performance reactive frontend interfaces, client state, and responsive UIs." },
  { id: "apis", label: "REST APIs", category: "web", x: 42, y: 68, desc: "Contract-first communication bridging frontends, services, and AI inference." },
  { id: "databases", label: "Databases", category: "web", x: 62, y: 74, desc: "MySQL, PostgreSQL, and SQLite managing relational schemas and persistence." },
  { id: "apps", label: "Full-Stack Applications", category: "web", x: 82, y: 66, desc: "Cohesive end-user products delivering seamless experiences across web & mobile." }
];

export const networkConnections = [
  { from: "python", to: "data" },
  { from: "data", to: "ml" },
  { from: "ml", to: "ai" },
  { from: "ai", to: "projects" },
  { from: "react", to: "apis" },
  { from: "apis", to: "databases" },
  { from: "databases", to: "apps" },
  { from: "apis", to: "ai" },
  { from: "python", to: "apis" },
  { from: "apps", to: "projects" }
];
