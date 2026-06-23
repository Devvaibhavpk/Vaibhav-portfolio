import {
  Brain,
  Code2,
  Shield,
  Link2,
  Globe,
  Lightbulb,
  Briefcase,
  Trophy,
  Users,
  Zap,
  BookOpen,
  Rocket,
  type LucideIcon,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  gradient: string;
  icon: LucideIcon;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  responsibilities: string[];
  type: "work" | "leadership";
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BeyondTechItem {
  id: string;
  title: string;
  emoji: string;
  description: string;
  lessons: string;
}

// ─── Hero Data ───────────────────────────────────────────────────

export const heroData = {
  name: "Vaibhav P K",
  roles: [
    "AI/ML Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Cybersecurity Researcher",
    "Blockchain Developer",
    "Problem Solver",
  ],
  headline: "AI/ML Engineer • Data Scientist • Full Stack Developer",
  introduction:
    "I build intelligent systems at the intersection of Artificial Intelligence, Machine Learning, Cybersecurity, Blockchain, IoT, and Full Stack Development. My focus is on creating impactful technology solutions that solve real-world problems.",
};

// ─── About Data ──────────────────────────────────────────────────

export const aboutData = {
  bio: [
    "I am a third-year Computer Science Engineering student specializing in Data Science at VIT Chennai.",
    "My interests span Artificial Intelligence, Machine Learning, Cybersecurity, Blockchain, Full Stack Development, and emerging technologies.",
    "I enjoy building impactful products, participating in hackathons, conducting technical events, and transforming innovative ideas into real-world solutions.",
    "Apart from technology, I am passionate about cricket, guitar, and strength training. These interests have taught me discipline, consistency, leadership, creativity, and perseverance—qualities that influence both my personal and professional growth.",
  ],
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Hackathons", value: "5+" },
    { label: "Tech Domains", value: "6" },
    { label: "Years Coding", value: "3+" },
  ],
  details: [
    { label: "Name", value: "Vaibhav P K" },
    { label: "Education", value: "B.Tech CSE (DS)" },
    { label: "University", value: "VIT Chennai" },
    { label: "Year", value: "3rd Year" },
    { label: "Location", value: "India" },
    { label: "Email", value: "vaibhavpk52@gmail.com" },
  ],
};

// ─── Experience Data ─────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: "igcar",
    role: "Machine Learning Intern",
    organization: "Indira Gandhi Centre for Atomic Research (IGCAR)",
    location: "Kalpakkam",
    period: "2024",
    responsibilities: [
      "Dose Mapping and Radiation Analysis",
      "Statistical Data Analysis",
      "KNN and ANN Model Development",
      "Predictive Modeling",
      "Data Visualization and Reporting",
    ],
    type: "work",
  },
  {
    id: "ospc",
    role: "Event Operations & Management Lead",
    organization: "Open Source Programming Club (OSPC)",
    location: "VIT Chennai",
    period: "2023 — Present",
    responsibilities: [
      "Organized multiple national-level hackathons",
      "Coordinated technical events",
      "Managed event operations and logistics",
      "Led volunteers and student teams",
      "Executed large-scale technical programs",
    ],
    type: "leadership",
  },
];

// ─── Projects Data ───────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "pactus",
    title: "PACTUS",
    subtitle: "Proof-Authenticated Consensus Threat Update System",
    description:
      "A decentralized cybersecurity framework designed to detect malicious AI-powered autonomous web agents using polymorphic adversarial traps, cryptographic Proof of Malice verification, and blockchain-based consensus. Introduces a cognitive-security approach that exploits the instruction-following behavior of LLM-powered agents to detect and mitigate sophisticated automated threats.",
    technologies: [
      "Large Language Models",
      "LangChain",
      "Blockchain",
      "Smart Contracts",
      "AWS",
      "Docker",
      "Playwright",
      "Cybersecurity",
    ],
    highlights: [
      "Research-Oriented",
      "AI Security",
      "Blockchain Consensus",
      "Autonomous Agent Detection",
    ],
    gradient: "from-red-500/20 via-orange-500/10 to-yellow-500/20",
    icon: Shield,
  },
  {
    id: "macrowatch",
    title: "MacroWatch",
    subtitle: "Market Trend Prediction Using Machine Learning",
    description:
      "An intelligent financial analytics platform that predicts market trends by classifying future market conditions into Up, Stable, and Down categories using historical financial data and macroeconomic indicators. Includes data preprocessing, feature engineering, model training, evaluation, and forecasting through machine learning algorithms.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],
    highlights: [
      "Financial Analytics",
      "Predictive Modeling",
      "Data Science",
      "Machine Learning",
    ],
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    icon: Brain,
  },
  {
    id: "margdrishti",
    title: "MargDrishti",
    subtitle: "AI-Powered Accessibility Navigation System",
    description:
      "An accessibility-focused platform designed to assist visually impaired individuals through intelligent navigation, voice assistance, and AI-driven environmental awareness. Aims to improve mobility, accessibility, and independence through modern AI technologies.",
    technologies: ["React Native", "AI Models", "GPS Services", "Voice Processing"],
    highlights: ["Social Impact", "Accessibility", "AI-Powered Navigation"],
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    icon: Globe,
  },
  {
    id: "agriedge",
    title: "AgriEdge",
    subtitle: "Smart Irrigation and Farm Intelligence Platform",
    description:
      "An IoT-enabled smart agriculture platform that combines real-time sensor monitoring, automated irrigation, AI assistance, and analytics dashboards to help farmers make better decisions.",
    technologies: [
      "MERN Stack",
      "ESP32",
      "Supabase",
      "Clerk Authentication",
      "AI Chatbot",
    ],
    highlights: [
      "IoT",
      "Agriculture Technology",
      "Full Stack Development",
      "Artificial Intelligence",
    ],
    gradient: "from-lime-500/20 via-green-500/10 to-emerald-500/20",
    icon: Lightbulb,
  },
  {
    id: "paracipher",
    title: "ParaCipher",
    subtitle: "Blockchain-Based Insurance Platform for Gig Workers",
    description:
      "A decentralized insurance ecosystem that provides transparent and affordable insurance coverage for gig workers using blockchain technology, smart contracts, automated claim processing, and reputation-based incentives.",
    technologies: ["Solidity", "Hardhat", "Shardeum", "Ethers.js", "Web3"],
    highlights: [
      "Blockchain",
      "FinTech",
      "Insurance Technology",
      "Smart Contracts",
    ],
    gradient: "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
    icon: Link2,
  },
];

// ─── Skills Data ─────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "SQL"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Zap,
    skills: ["Node.js", "Express.js", "FastAPI"],
    color: "from-green-400 to-emerald-500",
  },
  {
    id: "ai-ds",
    title: "AI & Data Science",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Scikit-Learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
    ],
    color: "from-purple-400 to-violet-500",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Rocket,
    skills: ["AWS", "Supabase", "Git", "GitHub", "Vercel"],
    color: "from-orange-400 to-red-500",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    icon: Link2,
    skills: ["Solidity", "Smart Contracts", "Hardhat", "Web3 Development"],
    color: "from-indigo-400 to-purple-500",
  },
];

// ─── Achievements Data ───────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    id: "igcar-intern",
    title: "ML Internship at IGCAR",
    description:
      "Machine Learning internship at a premier national research institute",
    icon: Briefcase,
  },
  {
    id: "ospc-lead",
    title: "Event Lead at OSPC",
    description: "Event Operations & Management Lead for the programming club",
    icon: Users,
  },
  {
    id: "hackathons-organized",
    title: "National-Level Hackathons",
    description: "Organized multiple national-level hackathons at VIT Chennai",
    icon: Rocket,
  },
  {
    id: "hackathon-wins",
    title: "Hackathon Bounty Winner",
    description: "Won multiple hackathon bounties across various competitions",
    icon: Trophy,
  },
  {
    id: "multi-domain",
    title: "Multi-Domain Solutions",
    description:
      "Built solutions spanning AI, IoT, Cybersecurity, and Blockchain",
    icon: Lightbulb,
  },
  {
    id: "workshops",
    title: "Technical Events & Workshops",
    description: "Conducted technical events and workshops for the student community",
    icon: BookOpen,
  },
  {
    id: "pactus-research",
    title: "Cybersecurity Research",
    description:
      "Published cybersecurity research through the PACTUS framework",
    icon: Shield,
  },
];

// ─── Beyond Tech Data ────────────────────────────────────────────

export const beyondTech: BeyondTechItem[] = [
  {
    id: "cricket",
    title: "Cricket",
    emoji: "🏏",
    description: "Former competitive cricket player.",
    lessons:
      "Cricket taught me leadership, teamwork, discipline, strategic thinking, and the ability to perform under pressure.",
  },
  {
    id: "guitar",
    title: "Guitar",
    emoji: "🎸",
    description:
      "Intermediate guitarist with a passion for rock and contemporary music.",
    lessons:
      "Music helps me develop creativity, patience, and self-expression.",
  },
  {
    id: "strength-training",
    title: "Strength Training",
    emoji: "💪",
    description: "Dedicated strength training enthusiast.",
    lessons:
      "Strength training has taught me consistency, resilience, goal setting, and continuous self-improvement.",
  },
];

// ─── Social Links ────────────────────────────────────────────────

export const socialLinks = {
  github: "https://github.com/Devvaibhavpk",
  linkedin: "https://www.linkedin.com/in/vaibhav-pk/",
  instagram: "https://www.instagram.com/pk_vaibhav_/",
  email: "vaibhavpk52@gmail.com",
};

// ─── Navigation Links ────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
