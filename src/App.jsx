import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
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
} from "lucide-react";
import "./App.css";
import { navigation, experience, projects, skills } from "./const/index.jsx";
import NetworkAnimation from "./components/NetworkAnimation";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Contact form state
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // // Form handling functions
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   // Basic validation
  //   if (
  //     !formData.name.trim() ||
  //     !formData.email.trim() ||
  //     !formData.message.trim()
  //   ) {
  //     setSubmitStatus("error");
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setSubmitStatus("error");
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   try {
  //     // EmailJS Configuration from environment variables
  //     // eslint-disable-next-line no-undef
  //     const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  //     // eslint-disable-next-line no-undef
  //     const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  //     // eslint-disable-next-line no-undef
  //     const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  //     // Check if EmailJS is configured
  //     if (!serviceID || !templateID || !publicKey) {
  //       console.error(
  //         "EmailJS configuration missing. Please set up your environment variables."
  //       );
  //       setSubmitStatus("error");
  //       setIsSubmitting(false);
  //       return;
  //     }

  //     // Template parameters for EmailJS
  //     const templateParams = {
  //       from_name: formData.name,
  //       from_email: formData.email,
  //       message: formData.message,
  //       to_name: "Rashid", // Your name
  //       reply_to: formData.email,
  //     };

  //     // Send email using EmailJS
  //     const response = await emailjs.send(
  //       serviceID,
  //       templateID,
  //       templateParams,
  //       publicKey
  //     );

  //     if (response.status === 200) {
  //       setSubmitStatus("success");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });

  //       // Reset status after 5 seconds
  //       setTimeout(() => setSubmitStatus(null), 5000);
  //     } else {
  //       throw new Error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("EmailJS Error:", error);
  //     setSubmitStatus("error");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

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
        <NetworkAnimation />

        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-sm font-mono animate-pulse">
          2+ Years Experience
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Software Engineer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl">
          Full-Stack Software Engineer with 2+ years of experience building
          scalable web and mobile applications using{" "}
          <span className="text-cyan-400">React.js</span>,{" "}
          <span className="text-cyan-400">Node.js</span>,{" "}
          <span className="text-cyan-400">Flutter</span>, MongoDB, and
          PostgreSQL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#experience"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)]"
          >
            View Experience
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
                Full-Stack Software Engineer
              </span>{" "}
              with 2+ years of experience building scalable web and mobile
              applications for enterprise use cases.
            </p>
            <p>
              Currently working at{" "}
              <span className="text-white font-bold">AgNext Technologies</span>,
              I work on configurable dashboards, dynamic form systems, and
              blockchain-integrated workflows for workflow and audit management
              products.
            </p>
            <p>
              I am skilled in{" "}
              <span className="text-cyan-400">
                React.js, Redux ToolKit, Node.js, Express.js Flutter, and
                PostgreSQL,
              </span>{" "}
              with strong experience in API design, performance optimization,
              and delivering reliable production-ready solutions.
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
                  {category === "Languages" && (
                    <Code className="text-cyan-400" />
                  )}
                  {category === "Frontend" && (
                    <Layout className="text-purple-400" />
                  )}
                  {category === "Backend" && (
                    <Server className="text-green-400" />
                  )}
                  {category === "Mobile" && <Cpu className="text-blue-400" />}
                  {category === "Databases" && (
                    <Database className="text-pink-400" />
                  )}
                  {category === "Tools_Concepts" && (
                    <Layers className="text-amber-400" />
                  )}
                  <h3 className="text-xl font-bold text-slate-100 capitalize">
                    {category.replace("_", " & ")}
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
                            category === "Languages"
                              ? "from-cyan-500 to-teal-400"
                              : category === "Frontend"
                                ? "from-purple-500 to-cyan-500"
                                : category === "Backend"
                                  ? "from-green-500 to-emerald-400"
                                  : category === "Mobile"
                                    ? "from-blue-500 to-indigo-400"
                                    : category === "Databases"
                                      ? "from-pink-500 to-rose-400"
                                      : "from-amber-500 to-yellow-400"
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
                  {/* {project.repoLink && ( */}
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    </a>
                  {/* )} */}
                  {/* {project.liveLink && ( */}
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    </a>
                  {/* )} */}
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.completionDate && (
                  <div className="text-xs font-mono text-slate-500">
                    {project.completionDate}
                  </div>
                )}
              </div>

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
        <p className="text-slate-400 text-lg mb-12">
          I'm currently based in Chandigarh and open to exploring new
          opportunities. Whether you have a question about my work at AgNext or
          just want to say hi, my inbox is always open.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:rashid120152@gmail.com"
            className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Mail className="text-cyan-400" size={24} />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                Email
              </div>
              <div className="text-slate-200 font-medium text-sm break-all">
                rashid120152@gmail.com
              </div>
            </div>
          </a>

          {/* Phone */}
          <div className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Phone className="text-cyan-400" size={24} />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                Phone
              </div>
              <div className="text-slate-200 font-medium">+91 9608517238</div>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/md-rashid-siddique-aa40651b7"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)]"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Linkedin className="text-cyan-400" size={24} />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                LinkedIn
              </div>
              <div className="text-slate-200 font-medium text-sm">
                md-rashid-siddique
              </div>
            </div>
          </a>
        </div>

        {/*
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
        */}

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/rashidsiddique12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/md-rashid-siddique-aa40651b7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a> */}
          <a
            href="https://leetcode.com/u/rashidsiddique12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Code size={28} />
          </a>
          {/* <a
            href="mailto:rashid120152@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a> */}
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
