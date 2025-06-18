export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft';
  level: number; // 1-5
  experience: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skills: Skill[] = [
  // Backend
  {
    id: "csharp",
    name: "C#.NET & Microservices",
    category: "backend",
    level: 5,
    experience: "8+ ans",
    icon: "💎",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "dotnetcore",
    name: ".NET Core",
    category: "backend", 
    level: 5,
    experience: "6+ ans",
    icon: "🔷",
    color: "from-blue-500 to-blue-700"
  },
  // Frontend
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 4,
    experience: "4+ ans",
    icon: "⚛️",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend", 
    level: 4,
    experience: "4+ ans",
    icon: "📘",
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    level: 5,
    experience: "8+ ans",
    icon: "�",
    color: "from-yellow-500 to-yellow-700"
  },
  // Database
  {
    id: "sql",
    name: "SQL",
    category: "database",
    level: 4,
    experience: "8+ ans",
    icon: "�️",
    color: "from-orange-500 to-orange-700"
  },
  {
    id: "sqlserver",
    name: "SQL Server",
    category: "database",
    level: 4,
    experience: "8+ ans", 
    icon: "�️",
    color: "from-red-500 to-red-700"
  },
  // Tools
  {
    id: "azure",
    name: "Azure",
    category: "tools",
    level: 4,
    experience: "6+ ans",
    icon: "☁️",
    color: "from-sky-500 to-sky-700"
  },
  {
    id: "devops",
    name: "DevOps & CI/CD",
    category: "tools",
    level: 4,
    experience: "6+ ans",
    icon: "🔄",
    color: "from-green-500 to-green-700"
  },
  {
    id: "unittesting",
    name: "Unit Testing",
    category: "tools",
    level: 4,
    experience: "6+ ans",
    icon: "🧪",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    level: 5,
    experience: "8+ ans",
    icon: "🌳",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "agile",
    name: "Agile/SCRUM & Jira",
    category: "tools",
    level: 4,
    experience: "6+ ans",
    icon: "📋",
    color: "from-blue-500 to-indigo-500"
  },
  // Soft Skills
  {
    id: "enthusiastic",
    name: "Enthousiaste",
    category: "soft",
    level: 5,
    experience: "Naturel",
    icon: "✨",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "dynamic",
    name: "Dynamique",
    category: "soft",
    level: 5,
    experience: "Naturel",
    icon: "⚡",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "teamwork",
    name: "Esprit d'équipe",
    category: "soft",
    level: 5,
    experience: "8+ ans",
    icon: "🤝",
    color: "from-green-500 to-blue-500"
  },
  {
    id: "curious",
    name: "Curieuse",
    category: "soft",
    level: 5,
    experience: "Naturel",
    icon: "🔍",
    color: "from-cyan-500 to-purple-500"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend",
    icon: "⚙️",
    color: "from-retro-purple to-retro-blue",
    skills: skills.filter(skill => skill.category === 'backend')
  },
  {
    id: "frontend", 
    name: "Frontend",
    icon: "🎨",
    color: "from-retro-cyan to-retro-green",
    skills: skills.filter(skill => skill.category === 'frontend')
  },
  {
    id: "database",
    name: "Database",
    icon: "🗄️", 
    color: "from-retro-orange to-retro-yellow",
    skills: skills.filter(skill => skill.category === 'database')
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: "🛠️",
    color: "from-retro-pink to-retro-purple", 
    skills: skills.filter(skill => skill.category === 'tools')
  },
  {
    id: "soft",
    name: "Soft Skills",
    icon: "🤝",
    color: "from-retro-green to-retro-cyan",
    skills: skills.filter(skill => skill.category === 'soft')
  }
];
