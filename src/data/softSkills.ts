export interface SoftSkill {
  id: string;
  name: string;
  level: number; // 1-5
  icon: string;
  color: string;
  description?: string;
}

export const softSkills: SoftSkill[] = [
  {
    id: "enthusiastic",
    name: "Enthousiaste",
    level: 5,
    icon: "✨",
    color: "from-yellow-500 to-orange-500",
    description: "Passion naturelle pour les projets et les nouvelles technologies"
  },
  {
    id: "dynamic",
    name: "Dynamique",
    level: 5,
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
    description: "Énergie et motivation dans tous les projets"
  },
  {
    id: "teamwork",
    name: "Esprit d'équipe",
    level: 5,
    icon: "🤝",
    color: "from-green-500 to-blue-500",
    description: "Collaboration efficace et communication bienveillante"
  },
  {
    id: "curious",
    name: "Curieuse",
    level: 5,
    icon: "🔍",
    color: "from-cyan-500 to-purple-500",
    description: "Soif d'apprendre et de découvrir de nouvelles approches"
  },
  {
    id: "problem_solving",
    name: "Résolution de problèmes",
    level: 5,
    icon: "🧠",
    color: "from-blue-500 to-indigo-500",
    description: "Approche analytique et créative face aux défis techniques"
  }
];
