import { Code2, Server, Database, Cloud, Mail, Phone, MapPin, Heart, Coffee, BookOpen, GraduationCap } from 'lucide-react';
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from '../assets/images/blogging-platform-api.png';
import PROJECT_IMG_2 from '../assets/images/cdn-simulator-lv7kl.png';
import PROJECT_IMG_3 from '../assets/images/database-backup-cli-jwrcj.png';
import PROJECT_IMG_4 from '../assets/images/expense-tracker-api-m72p5.png';
import PROJECT_IMG_5 from '../assets/images/fitness-workout-tracker-82uux.png';
import PROJECT_IMG_6 from '../assets/images/js-obfuscator-utility-f0dfi.png';
import PROJECT_IMG_7 from '../assets/images/markdown-note-taking-app-tymi3.png';
import PROJECT_IMG_8 from '../assets/images/messaging-platform-backend-96jpw.png';
import PROJECT_IMG_9 from '../assets/images/movie-reservation-system-5823e.png';
import PROJECT_IMG_10 from '../assets/images/multiplayer-battleship-lv5oj.png';
import PROJECT_IMG_11 from '../assets/images/online-code-compiler-c7xjb.png';
import PROJECT_IMG_12 from '../assets/images/realtime-polling-app-8qx5h.png';
import PROJECT_IMG_13 from '../assets/images/recipe-sharing-platform-jzs08.png';
import PROJECT_IMG_14 from '../assets/images/restaurant-review-platform-26c1f.png';
import PROJECT_IMG_15 from '../assets/images/simple-ecommerce-api-thzqo.png';
import PROJECT_IMG_16 from '../assets/images/time-tracking-cli-freelancers-x7ldv.png';
import PROJECT_IMG_17 from '../assets/images/todo-list-api-bsrdd.png';
import PROJECT_IMG_18 from '../assets/images/url-shortening-service-c1nzi.png';
import PROJECT_IMG_19 from '../assets/images/weather-api-f8i1q.png';
import PROJECT_IMG_20 from '../assets/images/webscraper-cli-ja5h2.png';
import PROJECT_IMG_21 from '../assets/images/portfolio-website.png';

export const SKILLS_CATEGORY = 
[
   {
      'title': "Frontend",
      'icon': Code2,
      'description': "Crafting beautiful and responsive user interfaces with modern web technologies.",
      'skills': [
         { name: "React", level: 60, color: "bg-blue-500" },
         { name: "Tailwind CSS", level: 60, color: "bg-cyan-500" },
         { name: "Framer Motion", level:60, color: "bg-cyan-300" }
      ],
   },
   {
      'title': "Backend",
      'icon': Server,
      'description': "Building robust server-side applications and APIs.",
      'skills': [
         { name: "Node.js", level: 60, color: "bg-green-500" },
         { name: "Express.js", level: 60, color: "bg-gray-700" },
         { name: "GraphQL ", level: 0, color: "bg-pink-600" },
         { name: "REST APIs", level: 0, color: "bg-orange-500" },
      ],
   },
   {
      'title': "Database",
      'icon': Database,
      'description': "Managing data with relational and NoSQL databases.",
      'skills': [
         { name: "SQL Server", level: 90, color: "bg-blue-700" },
         { name: "MySQL", level: 60, color: "bg-red-600" },
         { name: "MongoDB", level: 60, color: "bg-green-600" },
         { name: "PostgreSQL", level: 0, color: "bg-purple-600" },
         { name: "Redis", level: 0, color: "bg-yellow-500" },
         { name: "Firebase", level: 0, color: "bg-orange-400" },
      ],
   },
   {
      'title': "DevOps",
      'icon': Cloud,
      'description': "Automating deployment and managing cloud infrastructure.",
      'skills': [
         { name: "Docker", level: 0, color: "bg-blue-600" },
         { name: "Kubernetes", level: 0, color: "bg-purple-500" },
         { name: "AWS", level: 0, color: "bg-yellow-600" },
         { name: "Azure", level: 0, color: "bg-blue-400" },
         { name: "CI/CD", level: 0, color: "bg-green-500" },
         { name: "Git", level: 60, color: "bg-red-700" },
      ],
   },
];

export const TECH_STACK =
[
   "JavaScript", "HTML5", "CSS3", "Vite", "Figma", "Notion", "Postman", "GitHub",
];

export const STATS = 
[
   { number: "2", label: "Projects Completed" },
   { number: "1+", label: "Years of Experience" },
   { number: "8", label: "Technologies" },
   { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS =
[
   {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience.",
      image: PROJECT_IMG_21,
      tags: ["React", "Tailwindcss", "Framer Motion", "Lucide Icons"],
      liveUrl: "https://vananhstudents.github.io/personal-portfolio-website/",
      githubUrl: "https://github.com/VanAnhstudents/personal-portfolio-website",
      featured: false,
      category: "Frontend", 
   },
   {
      id: 2,
      title: "Personal Blogging Platform API",
      description: "Basic CRUD operations, testing ",
      image: PROJECT_IMG_1,
      tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
      liveUrl: "#",
      githubUrl: "https://github.com/VanAnhstudents/personal-blogging-platform-api",
      featured: false,
      category: "Backend", 
   },
];

export const JOURNEY_STEPS = 
[
   {
      year: "2025",
      title: "Started My Journey",
      company: "Self-Taught",
      description: "Began learning web development and programming fundamentals.",
      icon: Code2,
      color: "bg-blue-500",
   },
   {
      year: "2027",
      title: "Null",
      company: "Null",
      description: "Null",
      icon: GraduationCap,
      color: "bg-purple-500"
   }
];

export const PASSION = 
[
   {
      icon: Heart,
      title: "User Experience",
      description: "Crafting intuitive interfaces that user love"
   },
   {
      icon: Coffee,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solution"
   },
   {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
   }
];

export const SOCIAL_LINKS = 
[
   {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/VanAnhstudents",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
   },
   {
      name: "Email",
      icon: Mail,
      url: "anhnguyenvan280105@gmail.com",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
   },
   {
      name: "Instagram",
      icon: FiInstagram,
      url: "https://www.instagram.com/anhnguyenvan280105/",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/10",
   },
   {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/anh-nguyen-425307375/",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
   },
];

export const CONTACT_INFO = 
[
   {
      icon: MapPin,
      label: "Location",
      value: "Ha Noi, Viet Nam", 
   },
   {
      icon: Mail,
      label: "Email",
      value: "anhnguyenvan280105@gmail.com",
   },
   {
      icon: Phone,
      label: "Phone",
      value: "+84 342 164 373",
   },
];