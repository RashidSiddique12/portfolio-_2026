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
    title: "Trello Clone",
    category: "React.js, Redux Toolkit, REST APIs",
    description:
      "Developed a Trello-inspired Kanban-style task management app with full CRUD workflows and nested state management integrated with Trello APIs.",
    tech: ["React.js", "Redux Toolkit", "REST APIs"],
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    liveLink: "https://trello-phi-sable.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/Trello",
    completionDate: "Jan 2024",
  },
  {
    title: "Todoist Clone",
    category: "Express.js, PostgreSQL, React.js, Ant Design",
    description:
      "Developed a Todoist-inspired task management application with authentication, dashboard-based CRUD workflows, and REST API integration.",
    tech: ["Express.js", "PostgreSQL", "React.js", "Ant Design"],
    icon: <Code className="w-6 h-6 text-purple-400" />,
    liveLink: "https://todoist-app-iota.vercel.app/",
    repoLink: "https://github.com/RashidSiddique12/Todoist_FullStack/tree/main",
    completionDate: "Feb 2024",
  },]