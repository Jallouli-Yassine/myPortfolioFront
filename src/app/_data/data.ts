import { Project } from '../_models/project';
import { Skill } from '../_models/skills';
import { Testimonial } from '../_models/testimonial';

// ============================================
// PROJETS - Modifiez vos projets ici
// ============================================
export const PROJECTS_DATA: Project[] = [
  {
    title: 'ArenaLink - PFE',
    description: 'Full-stack football management platform built with Spring Boot, Angular, and MySQL. Includes authentication, payments, real-time chat, live match management, stadium booking, AI-powered content generation, Docker, GitHub Actions, and Azure deployment.',
    link: 'https://github.com/Jallouli-Yassine',
    image: 'assets/images/project/teamMembers.PNG',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'AI Resume Analyzer & Job Recommendation System',
    description: 'LLM-powered application that extracts structured data from PDF resumes and delivers RAG-based job recommendations using LangChain, Hugging Face embeddings, Pydantic, and ChromaDB. Generates ATS feedback, interview questions, and tailored cover letters.',
    link: 'https://github.com/Jallouli-Yassine',
    image: 'assets/images/project/project-figure-1.jpg',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'London Transport Data Analysis',
    description: 'Analyzed 12+ years of Transport for London journey data from 2010 to 2022 using SQL and Snowflake. Identified transportation trends, peak usage periods, and unusual Underground traffic patterns through aggregation and exploratory analysis.',
    link: 'https://github.com/Jallouli-Yassine',
    image: 'assets/images/project/project-figure-2.jpg',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'Student Productivity Prediction',
    description: 'Machine learning pipeline trained on more than 20,000 student records. Covered preprocessing, feature engineering, exploratory analysis, and model comparison across Random Forest, Decision Tree, and Linear Regression using MAE and R².',
    link: 'https://github.com/Jallouli-Yassine',
    image: 'assets/images/project/project-3.jpg',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'Project Management Application',
    description: 'Developed a cutting-edge project management application using NestJS and React. This application provides an intuitive platform akin to JIRA, facilitating seamless collaboration, efficient task management, and customizable Scrum boards. Our solution revolutionizes project management, empowering teams to achieve success with enhanced efficiency and flexibility',
    link: 'https://project-management-react-js-z3gu.vercel.app',
    image: 'assets/images/project/1718796844776-6672c22c1bb098bb0a644fc7.png',
    type: 'dynamic',
    hosted: true
  },
  {
    title: 'DevOps CI/CD Pipeline',
    description: 'Automated build, test, quality analysis, and deployment workflows with Jenkins, Docker, and SonarQube. Added Prometheus and Grafana monitoring for real-time application metrics and operational visibility.',
    link: 'https://github.com/Jallouli-Yassine',
    image: 'https://www.learntek.org/blog/wp-content/uploads/2018/05/jenkins_image.png',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'Electronic Sports Application',
    description: 'Developed an e-sports web platform with Symfony 5, offering advanced functionalities including user and product management, account services, coaching, purchase tracking, tournaments, and game integration via multiple APIs. Contributed to the development of a companion mobile app using Codename One and a Java desktop application, providing a comprehensive ecosystem for e-sports enthusiasts and professionals',
    link: 'https://github.com/Jallouli-Yassine/SIUESPORTS.pidev.3A37/tree/JallouliGC',
    image: 'assets/images/project/1718802099836-6672d6b31bb098bb0a644ffe.png',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'Modesty',
    description: 'Developed an online platform using Angular and Spring Boot for high-quality women\'s clothing. The platform features product catalog management, user authentication, secure payments, and personalized recommendations. Leveraging Angular for dynamic frontend and Spring Boot for robust backend development, it ensures a reliable and scalable shopping experience.',
    link: 'https://github.com/Jallouli-Yassine/JModesty',
    image: 'assets/images/project/1718802870656-6672d9b61bb098bb0a645009.png',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'EduQuiz',
    description: 'Developed an online platform using PHP for courses, featuring quizzes, games, events, and user management. This platform enhances learning with interactive elements, real-time progress tracking, and community-driven events, providing a comprehensive and engaging educational experience.',
    link: 'https://github.com/Jallouli-Yassine/EduQuiz-WebProject-2a1-G1',
    image: 'assets/images/project/1718821775938-6673238f2afde42b4882a698.png',
    type: 'dynamic',
    hosted: false
  },
  {
    title: 'Moon',
    description: 'PSD to HTML/SCSS/Bootstrap - A beautiful responsive landing page converted from design mockup with modern styling and smooth animations.',
    link: 'https://jallouli-yassine.github.io/test-bootstrap-Jallouli-Yassine/',
    image: 'assets/images/project/1718826091134-6673346b710705cd8635aae5.png',
    type: 'static',
    hosted: true
  },
  {
    title: 'Best Practices',
    description: 'PSD to HTML/SCSS/Tailwind - A modern single-page website showcasing best practices in frontend development with Tailwind CSS.',
    link: 'https://jallouli-yassine.github.io/fullTailwindSinglePage/',
    image: 'https://nourhomsi.net/tailwind/dist/images/undraw_learning_sketching_nd4f.svg',
    type: 'static',
    hosted: true
  },
  {
    title: 'School',
    description: 'PSD to HTML/SCSS/Bootstrap - Educational website template with responsive design and Bootstrap framework.',
    link: 'https://jallouli-yassine.github.io/fullBootstrap/',
    image: 'assets/images/project/project-2.jpg',
    type: 'static',
    hosted: true
  }
];

// ============================================
// COMPÉTENCES - Modifiez vos compétences ici
// ============================================
export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    name: 'angular',
    description: 'A frontend web framework by Google, used for building dynamic single-page applications.',
    category: 'Frontend',
    proficiency: 'Expert',
    image: 'assets/images/skills/angular.png'
  },
  {
    name: 'react',
    description: 'A JavaScript library for building user interfaces, focusing on component-based development and efficient rendering.',
    category: 'Frontend',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/react.png'
  },
  {
    name: 'html',
    description: 'The latest version of the Hypertext Markup Language, HTML5 is the standard for structuring and presenting content on the web. It introduces new elements, attributes.',
    category: 'Frontend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/html.png'
  },
  {
    name: 'css',
    description: 'Cascading Style Sheets (CSS) is a language used to style HTML elements, controlling layout, colors, and visual aspects of web pages.',
    category: 'Frontend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/css.png'
  },
  {
    name: 'js',
    description: 'A programming language used for creating interactive and dynamic content on web pages, enabling manipulation of web page elements and handling events.',
    category: 'Frontend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/js.png'
  },
  {
    name: 'bootstrap',
    description: 'A frontend framework with pre-built components and responsive design features for fast prototyping.',
    category: 'Frontend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/bootstrap.png'
  },
  {
    name: 'tailwind',
    description: 'A utility-first CSS framework for building custom designs quickly using low-level utility classes.',
    category: 'Frontend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/tailwind.png'
  },
  {
    name: 'sass',
    description: 'A CSS preprocessor that extends CSS with variables, nesting, and mixins to enhance stylesheet development.',
    category: 'Frontend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/sass.png'
  },

  // Backend
  {
    name: 'nodejs',
    description: 'A server-side JavaScript runtime environment known for its event-driven architecture, enabling asynchronous I/O operations and scalable network applications.',
    category: 'Backend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/nodejs.png'
  },
  {
    name: 'express-js',
    description: 'A minimalist web framework for Node.js that simplifies the creation of robust APIs and web applications with middleware and routing features.',
    category: 'Backend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/express-js.png'
  },
  {
    name: 'nestjs',
    description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.',
    category: 'Backend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/nestjs.png'
  },
  {
    name: 'spring-boot',
    description: 'Java framework for building enterprise applications with features like dependency injection and MVC architecture.',
    category: 'Backend',
    proficiency: 'Advanced',
    image: 'assets/images/skills/spring-boot.png'
  },
  {
    name: 'django',
    description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design.',
    category: 'Backend',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/django.svg'
  },
  {
    name: 'laravel',
    description: 'PHP web framework with expressive, elegant syntax, providing tools for routing, authentication, and caching.',
    category: 'Backend',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/laravel.svg'
  },

  // Fullstack
  {
    name: 'php',
    description: 'Server-side scripting language for creating dynamic web pages and web applications.',
    category: 'Fullstack',
    proficiency: 'Advanced',
    image: 'assets/images/skills/php.png'
  },
  {
    name: 'symfony',
    description: 'PHP framework for building web applications and APIs with reusable components and flexibility.',
    category: 'Fullstack',
    proficiency: 'Advanced',
    image: 'assets/images/skills/symfony.png'
  },

  // Database
  {
    name: 'mongodb',
    description: 'NoSQL database known for its flexible document-based data model, scalability, and high performance for handling large volumes of data.',
    category: 'Database',
    proficiency: 'Advanced',
    image: 'assets/images/skills/mongodb.png'
  },
  {
    name: 'mysql',
    description: 'Relational database management system (RDBMS) that uses structured query language (SQL) for managing and manipulating data in tables.',
    category: 'Database',
    proficiency: 'Advanced',
    image: 'assets/images/skills/mysql.png'
  },
  {
    name: 'postgresql',
    description: 'Open-source relational database used for reliable, scalable applications and data-intensive workloads.',
    category: 'Databases & Cloud',
    proficiency: 'Advanced',
    image: 'assets/images/skills/mysql.png'
  },
  {
    name: 'snowflake',
    description: 'Cloud data platform used to analyze large datasets and build modern data warehouse workflows.',
    category: 'Data Engineering',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/azure.svg'
  },
  {
    name: 'chromaDB',
    description: 'Vector database used to store embeddings and power semantic search and retrieval-augmented generation.',
    category: 'AI & LLM',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/json.png'
  },

  // AI & Data Engineering
  {
    name: 'LLMs',
    description: 'Large language model applications for content generation, document understanding, and intelligent automation.',
    category: 'AI & LLM',
    proficiency: 'Advanced',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'RAG',
    description: 'Retrieval-Augmented Generation pipelines that ground language model responses in trusted knowledge sources.',
    category: 'AI & LLM',
    proficiency: 'Advanced',
    image: 'assets/images/skills/json.png'
  },
  {
    name: 'LangChain',
    description: 'Framework for composing LLM workflows, retrieval pipelines, structured outputs, and AI agents.',
    category: 'AI & LLM',
    proficiency: 'Advanced',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'LangGraph',
    description: 'Graph-based orchestration for building controllable, stateful, and multi-step AI agent workflows.',
    category: 'AI & LLM',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'Prompt Engineering',
    description: 'Designing reliable prompts and evaluation patterns for useful, consistent LLM-powered features.',
    category: 'AI & LLM',
    proficiency: 'Advanced',
    image: 'assets/images/skills/json.png'
  },
  {
    name: 'Pandas',
    description: 'Python toolkit for data cleaning, transformation, analysis, and preparation for machine learning workflows.',
    category: 'Data Engineering',
    proficiency: 'Advanced',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'NumPy',
    description: 'Numerical computing foundation for array operations, scientific computing, and machine learning preparation.',
    category: 'Data Engineering',
    proficiency: 'Advanced',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'Scikit-learn',
    description: 'Machine learning toolkit used for preprocessing, model training, evaluation, and comparison.',
    category: 'Data Engineering',
    proficiency: 'Advanced',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'ETL & Data Pipelines',
    description: 'Designing repeatable workflows to extract, transform, validate, and deliver data for analysis and applications.',
    category: 'Data Engineering',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/json.png'
  },
  {
    name: 'SQL',
    description: 'Query language for analytics, reporting, relational data modeling, and production application data access.',
    category: 'Data Engineering',
    proficiency: 'Advanced',
    image: 'assets/images/skills/mysql.png'
  },

  // Other
  {
    name: 'java',
    description: 'Object-oriented programming language known for its "write once, run anywhere" philosophy. Java is used for building scalable, secure, and robust applications.',
    category: 'Other',
    proficiency: 'Advanced',
    image: 'assets/images/skills/java.png'
  },
  {
    name: 'python',
    description: 'Easy-to-read programming language used widely in web development, data analysis, AI, and automation.',
    category: 'Other',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/python.png'
  },
  {
    name: 'c',
    description: 'Procedural programming language known for its efficiency, portability, and close-to-hardware capabilities. C is widely used for system and application programming.',
    category: 'Other',
    proficiency: 'Advanced',
    image: 'assets/images/skills/c.png'
  },
  {
    name: 'c++',
    description: 'Object-oriented programming language based on C, with added features like classes, inheritance, and polymorphism. Known for its performance and flexibility.',
    category: 'Other',
    proficiency: 'Advanced',
    image: 'assets/images/skills/c++.png'
  },
  {
    name: 'docker',
    description: 'Tool for packaging applications and their dependencies into containers for consistent deployment.',
    category: 'Other',
    proficiency: 'Advanced',
    image: 'assets/images/skills/docker.png'
  },
  {
    name: 'git',
    description: 'Version control system for tracking changes in code, enabling collaboration among developers.',
    category: 'Other',
    proficiency: 'Expert',
    image: 'assets/images/skills/git.png'
  },
  {
    name: 'github-actions',
    description: 'CI/CD platform integrated with GitHub for automating build, test, and deployment workflows.',
    category: 'Other',
    proficiency: 'Advanced',
    image: 'assets/images/skills/github-actions.svg'
  },
  {
    name: 'jenkins',
    description: 'Open-source automation server for building, testing, and deploying applications with CI/CD pipelines.',
    category: 'Other',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/jenkins.svg'
  },
  {
    name: 'azure',
    description: 'Microsoft cloud computing platform for building, deploying, and managing applications and services.',
    category: 'Other',
    proficiency: 'Intermediate',
    image: 'assets/images/skills/azure.svg'
  },

  // Tools
  {
    name: 'postman',
    description: 'Tool for API testing and development, facilitating the sending of HTTP requests and viewing responses.',
    category: 'Tool',
    proficiency: 'Expert',
    image: 'assets/images/skills/postman.png'
  },
  {
    name: 'jira',
    description: 'Project management tool for agile teams, used for issue tracking, sprint planning, and Scrum boards.',
    category: 'Tool',
    proficiency: 'Advanced',
    image: 'assets/images/skills/jira.svg'
  },
  {
    name: 'linux',
    description: 'Open-source operating system known for its stability, security, and customization options, widely used in server environments and by developers.',
    category: 'Tool',
    proficiency: 'Expert',
    image: 'assets/images/skills/linux.png'
  },
  {
    name: 'visual-studio-code',
    description: 'Lightweight and extensible code editor by Microsoft, known for its powerful features and support for various programming languages and extensions.',
    category: 'Tool',
    proficiency: 'Expert',
    image: 'assets/images/skills/visual-studio-code.png'
  },
  {
    name: 'jetbrains',
    description: 'Company known for developing IDEs (Integrated Development Environments) such as IntelliJ IDEA, PyCharm, and PhpStorm, known for their robust features.',
    category: 'Tool',
    proficiency: 'Expert',
    image: 'assets/images/skills/jetbrains.png'
  },
  {
    name: 'windows 11',
    description: 'Latest version of the Windows operating system by Microsoft, known for its modern interface, improved performance, and enhanced productivity features.',
    category: 'Tool',
    proficiency: 'Expert',
    image: 'assets/images/skills/windows 11.png'
  }
];

// ============================================
// TÉMOIGNAGES - Modifiez vos témoignages ici
// ============================================
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    _id: '1',
    name: 'Ahmed Ben Ali',
    testimonialText: 'Excellent développeur ! Il a su comprendre nos besoins et livrer un projet de qualité dans les délais. Je recommande vivement ses services.',
    photoUrl: 'assets/images/clients/profile-1.png',
    rating: 5,
    date: new Date('2024-06-15')
  },
  {
    _id: '2',
    name: 'Sarah Martin',
    testimonialText: 'Très professionnel et compétent. Il a développé notre plateforme e-commerce avec beaucoup de soin et d\'attention aux détails.',
    photoUrl: 'assets/images/clients/profile-2.png',
    rating: 5,
    date: new Date('2024-05-20')
  },
  {
    _id: '3',
    name: 'Mohamed Trabelsi',
    testimonialText: 'Un travail remarquable sur notre application web. Communication fluide et résultats au-delà de nos attentes.',
    photoUrl: 'assets/images/clients/profile-3.png',
    rating: 5,
    date: new Date('2024-04-10')
  },
  {
    _id: '4',
    name: 'Laura Dupont',
    testimonialText: 'J\'ai fait appel à ses services pour la refonte de mon site web. Le résultat est moderne, rapide et parfaitement responsive.',
    photoUrl: 'assets/images/clients/profile-4.png',
    rating: 4,
    date: new Date('2024-03-25')
  },
  {
    _id: '5',
    name: 'Karim Bouazizi',
    testimonialText: 'Développeur talentueux avec une vraie expertise en Angular et Node.js. Projet livré dans les temps avec une excellente qualité de code.',
    photoUrl: 'assets/images/clients/profile-5.png',
    rating: 5,
    date: new Date('2024-02-18')
  },
  {
    _id: '6',
    name: 'Emma Wilson',
    testimonialText: 'Great experience working with this developer. Very responsive and skilled in both frontend and backend technologies.',
    photoUrl: 'assets/images/clients/profile-6.png',
    rating: 5,
    date: new Date('2024-01-30')
  }
];

// ============================================
// IMAGES DES COMPÉTENCES DISPONIBLES
// ============================================
export const SKILL_IMAGE_OPTIONS: string[] = [
  'angular.png',
  'bootstrap.png',
  'c++.png',
  'c.png',
  'css.png',
  'docker.png',
  'express-js.png',
  'git.png',
  'html.png',
  'java.png',
  'jetbrains.png',
  'js.png',
  'json.png',
  'linux.png',
  'mongodb.png',
  'mysql.png',
  'nestjs.png',
  'nodejs.png',
  'php.png',
  'postman.png',
  'python.png',
  'react.png',
  'sass.png',
  'spring-boot.png',
  'symfony.png',
  'tailwind.png',
  'visual-studio-code.png',
  'windows 11.png'
];
