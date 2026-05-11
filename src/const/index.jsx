import React from "react";
import { Code, Layout } from "lucide-react";

export const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

 export const skills = {
    Languages: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Dart", level: 82 },
      { name: "Java", level: 75 },
    ],
    Frontend: [
      { name: "React.js", level: 97 },
      { name: "Redux Toolkit", level: 90 },
      { name: "HTML & CSS", level: 97 },
      { name: "AngularJS", level: 80 },
      { name: "UI Libraries", level: 95 },
    ],
    Backend: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 95 },
      { name: "NestJS", level: 85 },
    ],
    Mobile: [
      { name: "Flutter", level: 85 },
    ],
    Databases: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
    ],
    Tools_Concepts: [
      { name: "Docker", level: 75 },
      { name: "PWA", level: 86 },
      { name: "Git & Postman", level: 90 },
      { name: "Unit Testing (Vitest)", level: 90 },
      { name: "Data Structures and Algorithms (DSA)", level: 90 },
    ],
  };

 export  const experience = [
      {
        company: "AgNext Technologies",
        role: "SDE-I",
        duration: "03/2025 - Present",
        location: "Mohali, India",
        description:
          "Building scalable enterprise web and mobile platforms for workflow, audit, and analytics systems.",
        points: [
          "Designed and developed scalable full-stack applications using React.js, Node.js (Express/NestJS), PostgreSQL, and MongoDB.",
          "Built configurable analytics dashboards and dynamic form builder systems for client-specific workflows and reports.",
          "Integrated blockchain verification APIs, OpenStreetMap geo-validation, and Firebase push notifications for secure real-time audit submissions.",
          "Optimized frontend and backend performance through lazy loading, API optimization, cron jobs, queues, and webhook automation.",
          "Developed a cross-platform auditor app using Flutter and Dart with dynamic form rendering, configurable validations, and REST API synchronization.",
        ],
      },
      {
        company: "AgNext Technologies",
        role: "Software Engineer (Contract)",
        duration: "02/2024 - 02/2025",
        location: "Mohali, India",
        description:
          "Delivered core full-stack modules for production operations and workflow automation.",
        points: [
          "Implemented User Management, Client Management, Agency Management, Asset Tracking, and Order Tracking modules.",
          "Implemented Role-Based Access Control (RBAC), webhooks, and automated email workflows.",
          "Designed REST APIs, database schemas, and UI components using React.js, Chakra UI, and Ant Design.",
        ],
      },
      {
        company: "MountBlue Technologies",
        role: "Intern",
        duration: "10/2023 - 02/2024",
        location: "Bangalore, India",
        description:
          "Completed an intensive software engineering internship focused on modern development practices.",
        points: [
          "Completed a structured internship covering data structures, frontend, and backend development.",
          "Built and deployed multiple web applications, with selected projects delivered for client deployment.",
        ],
      },
    ];

    
export const projects = [
  {
    title: "MediConnect",
    category: "Full-Stack Healthcare Platform",
    problem:
      "Patients lack a single platform to discover hospitals/doctors, book appointments, and access prescriptions digitally. Hospitals need a streamlined way to manage doctors, schedules, and patient records.",
    description:
      "Centralized healthcare platform connecting patients, hospitals, and doctors. Features patient portal (doctor search, appointment booking, digital prescriptions, reviews), hospital admin panel (doctor management, dynamic scheduling, prescription uploads), and super admin dashboard (hospital onboarding, analytics, moderation).",
    highlights: [
      "Architecture: RESTful API with Express middleware chain (auth → role check → validation → controller), Redux Saga for frontend async flow",
      "Security: JWT with refresh token rotation, bcrypt hashing, Helmet headers, rate limiting, role-based access control",
      "Data Integrity: Compound unique indexes to prevent double-booking, express-validator for all inputs, audit trail on prescriptions",
      "Performance: Lazy-loaded routes, paginated API responses, debounced search",
    ],
    tech: ["React 19", "Chakra UI", "Redux Toolkit", "Redux Saga", "Node.js", "Express", "MongoDB/Mongoose", "JWT", "Multer", "Cloudinary", "Swagger"],
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    liveLink: "https://medi-connect-inky.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/mediConnect",
    completionDate: "May 2026",
  },
  {
    title: "Trello Clone",
    category: "React 18, Material-UI, Trello REST API",
    description:
      "A Trello-inspired Kanban-style task management app powered by the official Trello REST API as the backend. Users can create and manage boards, organize tasks into lists, and interact with cards through drag-and-drop. The app integrates directly with Trello's API for real-time data persistence — all boards, lists, and cards are synced with Trello's servers, eliminating the need for a custom backend.",
    highlights: [
      "Integrated with official Trello REST API for full backend data persistence",
      "Create, read, update, and delete boards, lists, and cards",
      "Responsive Material Design UI for desktop and mobile",
      "Axios-based API layer with centralized error handling",
      "Fast development with Vite HMR (Hot Module Replacement)",
    ],
    tech: ["React 18", "Material-UI", "Axios", "React Router", "Trello API"],
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    liveLink: "https://trello-phi-sable.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/Trello",
    completionDate: "Jan 2024",
  },
  {
    title: "Todoist Clone",
    category: "Node.js, Express, PostgreSQL, React, Redux Toolkit, Ant Design",
    description:
      "A full-stack task management application built with a React frontend and Node.js/Express backend, powered by PostgreSQL via Sequelize ORM. Features secure user authentication, a dashboard-driven workflow for managing tasks with full CRUD operations, and global state management using Redux Toolkit. The app supports filtering and sorting tasks by priority, due date, and status, with a fully responsive UI optimized for both mobile and desktop.",
    highlights: [
      "Secure user authentication and authorization with session management",
      "Full CRUD task management with real-time dashboard updates",
      "Filter and sort tasks by priority, due date, and completion status",
      "RESTful API with Express and Sequelize ORM for PostgreSQL",
      "Global state management using Redux Toolkit",
      "Responsive design for seamless mobile and desktop experience",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Redux Toolkit", "Ant Design"],
    icon: <Code className="w-6 h-6 text-purple-400" />,
    liveLink: "https://todoist-app-iota.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/Todoist_FullStack/tree/main",
    completionDate: "Feb 2024",
  },]