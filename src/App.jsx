import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Code,
  Database,
  Layout,
  Server,
  MapPin,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Download,
  Menu,
  X,
  ChevronRight,
  Cpu,
  Layers,
  Award,
  BookOpen,
  Phone,
  Briefcase,
} from "lucide-react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS Configuration from environment variables
      // eslint-disable-next-line no-undef
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      // eslint-disable-next-line no-undef
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      // eslint-disable-next-line no-undef
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceID || !templateID || !publicKey) {
        console.error(
          "EmailJS configuration missing. Please set up your environment variables."
        );
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Rashid", // Your name
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = {
    Frontend: [
      { name: "React.js", level: 95 },
      { name: "Redux Toolkit", level: 90 },
      { name: "AngularJS", level: 75 },
      { name: "Chakra UI", level: 100 },
      { name: "Material UI", level: 85 },
      { name: "Ant Design", level: 100 },
    ],
    Backend_Languages: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 50 },
    ],
    Database_Tools: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Git & Postman", level: 90 },
    ],
  };

  const experience = [
    {
      company: "AgNext Technologies",
      role: "Software Engineer",
      duration: "03/2025 - Present",
      location: "Mohali, India",
      description:
        "Promoted to full-time role. Designing scalable modules for Inspeqt, NCCF, and FoodLabz platforms.",
      points: [
        "Designed and developed the Asset Management Engine and enhanced Lab Portal workflows.",
        "Built Inspection Applications including User, Client, and Agency Management modules.",
        "Implemented configurable dashboards, dynamic forms, and auditor location tracking features.",
        "Optimized frontend performance and collaborated with QA for bug-free releases.",
      ],
    },
    {
      company: "AgNext Technologies",
      role: "Software Engineer (Contract)",
      duration: "02/2024 - 02/2025",
      location: "Mohali, India",
      description:
        "Delivered production-grade applications covering full-stack development.",
      points: [
        "Focused on frontend development using React, Chakra UI, and Redux Saga.",
        "Developed backend APIs using Node.js and Express.",
        "Contributed to PWA features with offline capabilities via Service Workers.",
        "Collaborated with cross-functional teams for requirement gathering and delivery.",
      ],
    },
    {
      company: "MountBlue Technologies",
      role: "Trainee Software Engineer",
      duration: "10/2023 - 02/2024",
      location: "Bangalore, India",
      description: "Intensive training on modern full-stack web technologies.",
      points: [
        "Trained on modern web technologies and full-stack development practices.",
        "Developed multiple projects to strengthen frontend and backend fundamentals.",
      ],
    },
  ];

  const projects = [
    {
      title: "InspeQt & LabX",
      category: "Enterprise SaaS",
      description:
        "Contributed to AgNext's flagship AI-based quality assessment platform. Enhanced Lab Portal workflows and Asset Management Engine.",
      tech: ["React.js", "Redux", "Chakra UI"],
      icon: <Award className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "NCCF Dashboard",
      category: "Data Visualization",
      description:
        "Procurement and distribution dashboard for government stakeholders. Features configurable charts and real-time data monitoring.",
      tech: ["React", "Ant Design", "Recharts"],
      icon: <Layout className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Auditor Tracking & Maps",
      category: "Geolocation",
      description:
        "Implemented auditor location tracking, geofencing, and map search features to filter inspection lots based on coordinates.",
      tech: ["Google Maps API", "PostgreSQL", "Express"],
      icon: <MapPin className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Workflow Builder",
      category: "Productivity Tool",
      description:
        "A dynamic form builder allowing users to create custom inspection workflows, reducing configuration time for new inspection types.",
      tech: ["React Flow", "Redux Toolkit", "Node.js"],
      icon: <Layers className="w-6 h-6 text-pink-400" />,
    },
    {
      title: "Trello Clone",
      category: "Personal Project",
      description:
        "Kanban-style board with drag-and-drop features. Modularized components and optimized rendering performance.",
      tech: ["React.js", "Redux", "Material UI"],
      icon: <Layout className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Todoist Clone",
      category: "Personal Project",
      description:
        "Task management app with user authentication (CRUD). Integrated backend REST APIs with Redux/Axios frontend.",
      tech: ["PostgreSQL", "Express.js", "Ant Design"],
      icon: <Code className="w-6 h-6 text-orange-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Mesh Effect */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Cpu className="text-cyan-400 w-8 h-8" />
              <span className="text-xl md:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Md Rashid Sidique
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-4 py-1.5 rounded-full text-sm transition-all flex items-center gap-2">
                  <Download size={14} /> Resume
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        {/* Network Animation Background - Full Hero Coverage */}
        <div className="absolute -inset-32 overflow-hidden pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1400 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Network Connections - Extended Coverage */}
            <g className="network-connections">
              {/* Top Network Layer */}
              <line
                x1="50"
                y1="100"
                x2="250"
                y2="150"
                className="network-line animate-network-pulse"
              />
              <line
                x1="250"
                y1="150"
                x2="450"
                y2="120"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="450"
                y1="120"
                x2="650"
                y2="160"
                className="network-line animate-network-pulse"
              />
              <line
                x1="650"
                y1="160"
                x2="850"
                y2="110"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="850"
                y1="110"
                x2="1050"
                y2="140"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1050"
                y1="140"
                x2="1250"
                y2="120"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="1250"
                y1="120"
                x2="1350"
                y2="150"
                className="network-line animate-network-pulse"
              />

              {/* Main Network Lines */}
              <line
                x1="80"
                y1="250"
                x2="280"
                y2="300"
                className="network-line animate-network-pulse"
              />
              <line
                x1="280"
                y1="300"
                x2="480"
                y2="280"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="480"
                y1="280"
                x2="680"
                y2="320"
                className="network-line animate-network-pulse"
              />
              <line
                x1="680"
                y1="320"
                x2="880"
                y2="260"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="880"
                y1="260"
                x2="1080"
                y2="300"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1080"
                y1="300"
                x2="1280"
                y2="280"
                className="network-line animate-network-pulse-slow"
              />

              {/* Central Network Hub */}
              <line
                x1="150"
                y1="400"
                x2="350"
                y2="450"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="350"
                y1="450"
                x2="550"
                y2="430"
                className="network-line animate-network-pulse"
              />
              <line
                x1="550"
                y1="430"
                x2="750"
                y2="470"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="750"
                y1="470"
                x2="950"
                y2="440"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="950"
                y1="440"
                x2="1150"
                y2="460"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1150"
                y1="460"
                x2="1300"
                y2="450"
                className="network-line animate-network-pulse-delayed"
              />

              {/* Lower Network Layer */}
              <line
                x1="100"
                y1="600"
                x2="300"
                y2="580"
                className="network-line animate-network-pulse"
              />
              <line
                x1="300"
                y1="580"
                x2="500"
                y2="620"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="500"
                y1="620"
                x2="700"
                y2="590"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="700"
                y1="590"
                x2="900"
                y2="630"
                className="network-line animate-network-pulse"
              />
              <line
                x1="900"
                y1="630"
                x2="1100"
                y2="600"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="1100"
                y1="600"
                x2="1320"
                y2="620"
                className="network-line animate-network-pulse"
              />

              {/* Bottom Edge Network */}
              <line
                x1="120"
                y1="750"
                x2="320"
                y2="780"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="320"
                y1="780"
                x2="520"
                y2="760"
                className="network-line animate-network-pulse"
              />
              <line
                x1="520"
                y1="760"
                x2="720"
                y2="790"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="720"
                y1="790"
                x2="920"
                y2="770"
                className="network-line animate-network-pulse"
              />
              <line
                x1="920"
                y1="770"
                x2="1120"
                y2="800"
                className="network-line animate-network-pulse-slow"
              />

              {/* Vertical Cross Connections */}
              <line
                x1="250"
                y1="150"
                x2="150"
                y2="400"
                className="network-line animate-network-pulse"
              />
              <line
                x1="450"
                y1="120"
                x2="350"
                y2="450"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="650"
                y1="160"
                x2="550"
                y2="430"
                className="network-line animate-network-pulse"
              />
              <line
                x1="850"
                y1="110"
                x2="750"
                y2="470"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="1050"
                y1="140"
                x2="950"
                y2="440"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1250"
                y1="120"
                x2="1150"
                y2="460"
                className="network-line animate-network-pulse-delayed"
              />

              {/* Extended Vertical Connections */}
              <line
                x1="280"
                y1="300"
                x2="300"
                y2="580"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="480"
                y1="280"
                x2="500"
                y2="620"
                className="network-line animate-network-pulse"
              />
              <line
                x1="680"
                y1="320"
                x2="700"
                y2="590"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="880"
                y1="260"
                x2="900"
                y2="630"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1080"
                y1="300"
                x2="1100"
                y2="600"
                className="network-line animate-network-pulse-delayed"
              />

              {/* Further vertical to bottom */}
              <line
                x1="300"
                y1="580"
                x2="320"
                y2="780"
                className="network-line animate-network-pulse"
              />
              <line
                x1="500"
                y1="620"
                x2="520"
                y2="760"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="700"
                y1="590"
                x2="720"
                y2="790"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="900"
                y1="630"
                x2="920"
                y2="770"
                className="network-line animate-network-pulse"
              />

              {/* Diagonal Mesh Network */}
              <line
                x1="120"
                y1="200"
                x2="320"
                y2="350"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="320"
                y1="350"
                x2="520"
                y2="500"
                className="network-line animate-network-pulse"
              />
              <line
                x1="520"
                y1="500"
                x2="720"
                y2="650"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="720"
                y1="650"
                x2="920"
                y2="800"
                className="network-line animate-network-pulse"
              />

              {/* Reverse Diagonal */}
              <line
                x1="1300"
                y1="200"
                x2="1100"
                y2="350"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1100"
                y1="350"
                x2="900"
                y2="500"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="900"
                y1="500"
                x2="700"
                y2="650"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="700"
                y1="650"
                x2="500"
                y2="800"
                className="network-line animate-network-pulse"
              />

              {/* Additional Cross Mesh */}
              <line
                x1="200"
                y1="350"
                x2="600"
                y2="250"
                className="network-line animate-network-pulse-delayed"
              />
              <line
                x1="600"
                y1="250"
                x2="1000"
                y2="350"
                className="network-line animate-network-pulse"
              />
              <line
                x1="1000"
                y1="350"
                x2="800"
                y2="550"
                className="network-line animate-network-pulse-slow"
              />
              <line
                x1="800"
                y1="550"
                x2="400"
                y2="650"
                className="network-line animate-network-pulse"
              />
            </g>

            {/* Network Nodes - Extended Distribution */}
            {/* Server Nodes - Main Infrastructure */}
            <g className="server-nodes">
              <circle
                cx="250"
                cy="150"
                r="8"
                className="network-node server-node animate-node-pulse"
              />
              <circle
                cx="650"
                cy="160"
                r="8"
                className="network-node server-node animate-node-pulse-delayed"
              />
              <circle
                cx="1050"
                cy="140"
                r="8"
                className="network-node server-node animate-node-pulse"
              />
              <circle
                cx="280"
                cy="300"
                r="7"
                className="network-node server-node animate-node-pulse-slow"
              />
              <circle
                cx="680"
                cy="320"
                r="7"
                className="network-node server-node animate-node-pulse"
              />
              <circle
                cx="1080"
                cy="300"
                r="7"
                className="network-node server-node animate-node-pulse-delayed"
              />
              <circle
                cx="350"
                cy="450"
                r="6"
                className="network-node server-node animate-node-pulse"
              />
              <circle
                cx="750"
                cy="470"
                r="6"
                className="network-node server-node animate-node-pulse-slow"
              />
              <circle
                cx="1150"
                cy="460"
                r="6"
                className="network-node server-node animate-node-pulse-delayed"
              />
            </g>

            {/* Database Nodes - Data Layer */}
            <g className="database-nodes">
              <ellipse
                cx="450"
                cy="120"
                rx="10"
                ry="6"
                className="network-node database-node animate-node-pulse-slow"
              />
              <ellipse
                cx="850"
                cy="110"
                rx="10"
                ry="6"
                className="network-node database-node animate-node-pulse"
              />
              <ellipse
                cx="1250"
                cy="120"
                rx="10"
                ry="6"
                className="network-node database-node animate-node-pulse-delayed"
              />
              <ellipse
                cx="480"
                cy="280"
                rx="9"
                ry="5"
                className="network-node database-node animate-node-pulse"
              />
              <ellipse
                cx="880"
                cy="260"
                rx="9"
                ry="5"
                className="network-node database-node animate-node-pulse-slow"
              />
              <ellipse
                cx="550"
                cy="430"
                rx="8"
                ry="5"
                className="network-node database-node animate-node-pulse-delayed"
              />
              <ellipse
                cx="950"
                cy="440"
                rx="8"
                ry="5"
                className="network-node database-node animate-node-pulse"
              />
              <ellipse
                cx="300"
                cy="580"
                rx="7"
                ry="4"
                className="network-node database-node animate-node-pulse-slow"
              />
              <ellipse
                cx="700"
                cy="590"
                rx="7"
                ry="4"
                className="network-node database-node animate-node-pulse"
              />
              <ellipse
                cx="1100"
                cy="600"
                rx="7"
                ry="4"
                className="network-node database-node animate-node-pulse-delayed"
              />
            </g>

            {/* API Gateway Nodes - Service Layer */}
            <g className="api-nodes">
              <rect
                x="75"
                y="245"
                width="10"
                height="10"
                rx="2"
                className="network-node api-node animate-node-pulse"
              />
              <rect
                x="345"
                y="445"
                width="10"
                height="10"
                rx="2"
                className="network-node api-node animate-node-pulse-delayed"
              />
              <rect
                x="745"
                y="465"
                width="10"
                height="10"
                rx="2"
                className="network-node api-node animate-node-pulse-slow"
              />
              <rect
                x="1145"
                y="455"
                width="10"
                height="10"
                rx="2"
                className="network-node api-node animate-node-pulse"
              />
              <rect
                x="145"
                y="395"
                width="9"
                height="9"
                rx="2"
                className="network-node api-node animate-node-pulse-delayed"
              />
              <rect
                x="545"
                y="425"
                width="9"
                height="9"
                rx="2"
                className="network-node api-node animate-node-pulse"
              />
              <rect
                x="945"
                y="435"
                width="9"
                height="9"
                rx="2"
                className="network-node api-node animate-node-pulse-slow"
              />
              <rect
                x="295"
                y="575"
                width="8"
                height="8"
                rx="2"
                className="network-node api-node animate-node-pulse"
              />
              <rect
                x="695"
                y="585"
                width="8"
                height="8"
                rx="2"
                className="network-node api-node animate-node-pulse-delayed"
              />
              <rect
                x="1095"
                y="595"
                width="8"
                height="8"
                rx="2"
                className="network-node api-node animate-node-pulse-slow"
              />
            </g>

            {/* Client Nodes - User Layer */}
            <g className="client-nodes">
              <polygon
                points="150,395 160,405 150,415 140,405"
                className="network-node client-node animate-node-pulse-delayed"
              />
              <polygon
                points="550,425 560,435 550,445 540,435"
                className="network-node client-node animate-node-pulse"
              />
              <polygon
                points="950,435 960,445 950,455 940,445"
                className="network-node client-node animate-node-pulse-slow"
              />
              <polygon
                points="320,775 330,785 320,795 310,785"
                className="network-node client-node animate-node-pulse"
              />
              <polygon
                points="720,785 730,795 720,805 710,795"
                className="network-node client-node animate-node-pulse-delayed"
              />
              <polygon
                points="920,765 930,775 920,785 910,775"
                className="network-node client-node animate-node-pulse-slow"
              />
              <polygon
                points="80,245 90,255 80,265 70,255"
                className="network-node client-node animate-node-pulse"
              />
              <polygon
                points="1280,275 1290,285 1280,295 1270,285"
                className="network-node client-node animate-node-pulse-delayed"
              />
              <polygon
                points="200,345 210,355 200,365 190,355"
                className="network-node client-node animate-node-pulse-slow"
              />
              <polygon
                points="600,245 610,255 600,265 590,255"
                className="network-node client-node animate-node-pulse"
              />
              <polygon
                points="1000,345 1010,355 1000,365 990,355"
                className="network-node client-node animate-node-pulse-delayed"
              />
            </g>

            {/* Data Flow Indicators - Multiple Streams */}
            <g className="data-flow">
              {/* Top Layer Data Flow */}
              <circle r="3" className="data-packet animate-data-flow-1">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M50,100 L250,150 L450,120 L650,160 L850,110 L1050,140 L1250,120 L1350,150"
                />
              </circle>

              {/* Main Layer Data Flow */}
              <circle r="2.5" className="data-packet animate-data-flow-2">
                <animateMotion
                  dur="10s"
                  repeatCount="indefinite"
                  path="M80,250 L280,300 L480,280 L680,320 L880,260 L1080,300 L1280,280"
                />
              </circle>

              {/* Central Hub Flow */}
              <circle r="2" className="data-packet animate-data-flow-3">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  path="M150,400 L350,450 L550,430 L750,470 L950,440 L1150,460 L1300,450"
                />
              </circle>

              {/* Lower Network Flow */}
              <circle r="2.5" className="data-packet animate-data-flow-1">
                <animateMotion
                  dur="14s"
                  repeatCount="indefinite"
                  path="M100,600 L300,580 L500,620 L700,590 L900,630 L1100,600 L1320,620"
                />
              </circle>

              {/* Bottom Edge Flow */}
              <circle r="2" className="data-packet animate-data-flow-2">
                <animateMotion
                  dur="16s"
                  repeatCount="indefinite"
                  path="M120,750 L320,780 L520,760 L720,790 L920,770 L1120,800"
                />
              </circle>

              {/* Vertical Data Streams */}
              <circle r="1.5" className="data-packet animate-data-flow-3">
                <animateMotion
                  dur="9s"
                  repeatCount="indefinite"
                  path="M250,150 L150,400 L300,580 L320,780"
                />
              </circle>

              <circle r="2" className="data-packet animate-data-flow-1">
                <animateMotion
                  dur="11s"
                  repeatCount="indefinite"
                  path="M650,160 L550,430 L700,590 L720,790"
                />
              </circle>

              <circle r="1.5" className="data-packet animate-data-flow-2">
                <animateMotion
                  dur="13s"
                  repeatCount="indefinite"
                  path="M1050,140 L950,440 L1100,600 L920,770"
                />
              </circle>

              {/* Diagonal Cross Flow */}
              <circle r="2" className="data-packet animate-data-flow-3">
                <animateMotion
                  dur="15s"
                  repeatCount="indefinite"
                  path="M120,200 L320,350 L520,500 L720,650 L920,800"
                />
              </circle>

              <circle r="1.8" className="data-packet animate-data-flow-1">
                <animateMotion
                  dur="17s"
                  repeatCount="indefinite"
                  path="M1300,200 L1100,350 L900,500 L700,650 L500,800"
                />
              </circle>

              {/* Reverse Flow Indicators */}
              <circle r="2.2" className="data-packet animate-data-flow-2">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  path="M1350,150 L1250,120 L1050,140 L850,110 L650,160 L450,120 L250,150 L50,100"
                />
              </circle>

              <circle r="1.7" className="data-packet animate-data-flow-3">
                <animateMotion
                  dur="14s"
                  repeatCount="indefinite"
                  path="M1280,280 L1080,300 L880,260 L680,320 L480,280 L280,300 L80,250"
                />
              </circle>
            </g>

            {/* Network Status Indicators - Multiple Locations */}
            <g className="status-indicators">
              {/* Top Right Status Panel */}
              <circle
                cx="1320"
                cy="40"
                r="4"
                className="status-indicator status-active animate-status-blink"
              />
              <circle
                cx="1320"
                cy="55"
                r="4"
                className="status-indicator status-warning animate-status-blink-delayed"
              />
              <circle
                cx="1320"
                cy="70"
                r="4"
                className="status-indicator status-error animate-status-blink-slow"
              />
              <circle
                cx="1320"
                cy="85"
                r="4"
                className="status-indicator status-active animate-status-blink-delayed"
              />

              {/* Top Left Status */}
              <circle
                cx="30"
                cy="40"
                r="3"
                className="status-indicator status-active animate-status-blink-slow"
              />
              <circle
                cx="30"
                cy="55"
                r="3"
                className="status-indicator status-active animate-status-blink"
              />
              <circle
                cx="30"
                cy="70"
                r="3"
                className="status-indicator status-warning animate-status-blink-delayed"
              />

              {/* Center Status Indicators */}
              <circle
                cx="700"
                cy="25"
                r="3"
                className="status-indicator status-active animate-status-blink"
              />
              <circle
                cx="720"
                cy="25"
                r="3"
                className="status-indicator status-active animate-status-blink-delayed"
              />
              <circle
                cx="740"
                cy="25"
                r="3"
                className="status-indicator status-warning animate-status-blink-slow"
              />

              {/* Bottom Status */}
              <circle
                cx="30"
                cy="920"
                r="3"
                className="status-indicator status-active animate-status-blink-delayed"
              />
              <circle
                cx="30"
                cy="935"
                r="3"
                className="status-indicator status-warning animate-status-blink"
              />
              <circle
                cx="1320"
                cy="920"
                r="3"
                className="status-indicator status-active animate-status-blink-slow"
              />
              <circle
                cx="1320"
                cy="935"
                r="3"
                className="status-indicator status-active animate-status-blink"
              />
            </g>
          </svg>
        </div>

        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-sm font-mono animate-pulse">
          1.5+ Years Experience
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Software Engineer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl">
          Performance-driven developer specializing in scalable web
          applications. Expert in{" "}
          <span className="text-cyan-400">React.js</span>,{" "}
          <span className="text-cyan-400">Node.js</span>, and modern UI
          frameworks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 font-bold rounded-lg transition-all hover:bg-slate-800"
          >
            Contact Me
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">01.</span> About Me
            <span className="h-px bg-slate-700 flex-grow max-w-xs ml-4"></span>
          </h2>
          <div className="text-slate-300 text-lg leading-relaxed space-y-4">
            <p>
              I am a{" "}
              <span className="text-cyan-400 font-semibold">
                Performance-driven Software Engineer
              </span>{" "}
              with over 1.5 years of experience in building scalable,
              high-performance web applications. My journey involves delivering
              end-to-end solutions, from optimizing frontend performance to
              designing robust backend architectures.
            </p>
            <p>
              Currently working at{" "}
              <span className="text-white font-bold">AgNext Technologies</span>,
              I specialize in the{" "}
              <span className="text-cyan-400">MERN stack</span> and have
              contributed to critical projects like InspeQt and LabX. I excel at
              translating business needs into impactful technical features
              within agile environments.
            </p>
            <p>
              I am skilled in{" "}
              <span className="text-cyan-400">
                React.js, Redux Toolkit, Node.js,
              </span>{" "}
              and <span className="text-cyan-400">PostgreSQL</span>, with a
              strong foundation in Data Structures and Algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-cyan-400">02.</span> Experience
          <span className="h-px bg-slate-700 flex-grow max-w-xs ml-4"></span>
        </h2>

        <div className="space-y-12 border-l-2 border-slate-800 ml-3 md:ml-0 md:border-none">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

              <div className="md:grid md:grid-cols-12 md:gap-8 group">
                {/* Timeline info (Left on desktop) */}
                <div className="md:col-span-4 md:text-right mb-2 md:mb-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {job.company}
                  </h3>
                  <div className="text-cyan-500 font-mono text-sm mb-1">
                    {job.duration}
                  </div>
                  <div className="text-slate-500 text-sm flex items-center md:justify-end gap-1">
                    <MapPin size={14} /> {job.location}
                  </div>
                </div>

                {/* Divider (Desktop) */}
                <div className="hidden md:block md:col-span-1 relative flex justify-center">
                  <div className="h-full w-0.5 bg-slate-800 group-hover:bg-cyan-500/50 transition-colors"></div>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
                </div>

                {/* Content (Right on desktop) */}
                <div className="md:col-span-7">
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">
                    {job.role}
                  </h4>
                  <p className="text-slate-400 italic mb-4 text-sm">
                    {job.description}
                  </p>
                  <ul className="space-y-3">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-300 text-sm"
                      >
                        <ChevronRight
                          size={16}
                          className="text-cyan-500 mt-1 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="text-cyan-400">03.</span> Technical Skills
            <span className="h-px bg-slate-700 flex-grow max-w-xs ml-4"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category === "Frontend" && (
                    <Layout className="text-purple-400" />
                  )}
                  {category === "Backend_Languages" && (
                    <Server className="text-green-400" />
                  )}
                  {category === "Database_Tools" && (
                    <Database className="text-pink-400" />
                  )}
                  <h3 className="text-xl font-bold text-slate-100 capitalize">
                    {category.replace("_", " ")}
                  </h3>
                </div>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-mono text-slate-400">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div
                          className={`bg-gradient-to-r ${
                            category === "Frontend"
                              ? "from-purple-500 to-cyan-500"
                              : category === "Backend_Languages"
                              ? "from-green-500 to-emerald-400"
                              : "from-pink-500 to-rose-400"
                          } h-1.5 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-cyan-400">04.</span> Projects
          <span className="h-px bg-slate-700 flex-grow max-w-xs ml-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                  <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <div className="text-xs font-mono text-cyan-500 mb-3">
                {project.category}
              </div>

              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="text-cyan-400">05.</span> Education & Certificates
            <span className="h-px bg-slate-700 flex-grow max-w-xs ml-4"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="mb-2">
                <div className="font-semibold text-lg text-slate-200">
                  Bachelor of Technology (B.Tech)
                </div>
                <div className="text-cyan-400">Computer Science</div>
              </div>
              <div className="text-slate-400 text-sm mb-1">
                Lovely Professional University
              </div>
              <div className="text-slate-500 text-xs font-mono">
                08/2020 - 08/2024
              </div>
            </div>

            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 hover:border-green-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-green-400" />
                <h3 className="text-xl font-bold text-white">Certificates</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                  <span>
                    <strong className="text-white">Coursera:</strong>{" "}
                    Introduction to Front-End Development
                  </span>
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                  <span>
                    <strong className="text-white">Coursera:</strong>{" "}
                    Object-Oriented Programming in Java
                  </span>
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                  <span>
                    <strong className="text-white">GeeksforGeeks:</strong> Data
                    Structures and Algorithms
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          06. What's Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h3>
        <p className="text-slate-400 text-lg mb-10">
          I'm currently based in Chandigarh and open to exploring new
          opportunities. Whether you have a question about my work at AgNext or
          just want to say hi, my inbox is always open.
        </p>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl mb-12 text-left">
          <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center items-center text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="text-cyan-400" size={20} />
              <span>rashid120152@gmail.com</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <Phone className="text-cyan-400" size={20} />
              <span>+91 9608517238</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-vertical"
                placeholder="Hello Rashid, I'd like to discuss..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-950/50 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                ✅ Thank you! Your message has been sent successfully. I'll get
                back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-950/50 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                ❌ Please fill in all required fields with valid information.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 rounded-lg transition-all transform ${
                isSubmitting
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white hover:scale-[1.01]"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/rashidsiddique12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-rashid-siddique-aa40651b7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:rashid120152@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950 border-t border-slate-900">
        <p>Designed & Built by Md Rashid Sidique</p>
        {/* <p className="mt-2 font-mono text-xs">
          React.js · Tailwind CSS · Lucide Icons
        </p> */}
      </footer>
    </div>
  );
}

export default App;
