export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  icon: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Telstra Purple",
    period: "2022 - 2023",
    location: "Perth, Australie",
    description: [
      "Développement d'applications web pour média d'information",
      "Frontend moderne avec React et TypeScript",
      "Intégration de solutions de presse web"
    ],
    technologies: ["React", "TypeScript", "CSS", "JavaScript"],
    achievements: [
      "Développement d'interfaces utilisateur modernes",
      "Optimisation des performances frontend",
      "Mise en place de bonnes pratiques TypeScript"
    ],
    icon: "📰",
    color: "from-retro-blue to-retro-cyan"
  },
  {
    id: "2",
    title: ".NET Developer",
    company: "Betclic Group", 
    period: "2023",
    location: "Bordeaux, France",
    description: [
      "Développement de POC GRPC",
      "Création de NuGet pour gestion de queues en background service",
      "Architecture de services distribués"
    ],
    technologies: ["C#", ".NET Core", "GRPC", "ConcurrentPriorityQueue", "NuGet"],
    achievements: [
      "POC GRPC fonctionnel",
      "Package NuGet de gestion de queues",
      "Tests unitaires et benchmarking complets"
    ],
    icon: "🎰",
    color: "from-retro-green to-retro-blue"
  },
  {
    id: "3",
    title: ".NET Developer",
    company: "Guarani Atlantique",
    period: "2021",
    location: "Bordeaux, France", 
    description: [
      "Projet CDiscount - solution de paiement en 4x",
      "Développement de microservices .NET",
      "Architecture et design de solutions"
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Microservices"],
    achievements: [
      "Solution de paiement fractionné fonctionnelle",
      "Architecture microservices robuste",
      "Intégration réussie avec l'écosystème CDiscount"
    ],
    icon: "�",
    color: "from-retro-purple to-retro-pink"
  },
  {
    id: "4", 
    title: "Full Stack Developer",
    company: "Insight Pty Ltd",
    period: "2017 - 2019",
    location: "Perth, Australie",
    description: [
      "Développement multi-projets sur Sitecore 8 & 9",
      "Solutions complètes avec Entity Framework",
      "Déploiement sur Azure App Services"
    ],
    technologies: ["C#", ".NET", "MVC", "Entity Framework", "Sitecore", "Azure", "DevOps", "SQL Server"],
    achievements: [
      "Migration Sitecore 8 vers 9 réussie",
      "Mise en place de pipelines DevOps",
      "Optimisation des performances Azure"
    ],
    icon: "🏢",
    color: "from-retro-orange to-retro-yellow"
  },
  {
    id: "5",
    title: ".NET Developer", 
    company: "Equilibrium",
    period: "2016 - 2017",
    location: "Perth, Australie",
    description: [
      "Développement multi-projets sur CMS Umbraco",
      "Solutions cloud AWS et Azure",
      "Intégration continue avec Team City"
    ],
    technologies: ["C#", ".NET", "MVC", "Umbraco", "AWS", "Azure", "Team City", "SQL Server"],
    achievements: [
      "Déploiement multi-cloud réussi",
      "Automatisation des builds avec Team City", 
      "Solutions Umbraco personnalisées"
    ],
    icon: "⚖️",
    color: "from-retro-cyan to-retro-green"
  },
  {
    id: "6",
    title: ".NET Developer",
    company: "Isobar", 
    period: "2015 - 2016",
    location: "Perth, Australie",
    description: [
      "Développement multi-projets sur CMS Sitefinity",
      "Applications web MVC complexes",
      "Déploiement sur Azure App Services"
    ],
    technologies: ["C#", ".NET", "MVC", "Sitefinity", "Azure App Services", "SQL Server"],
    achievements: [
      "Solutions Sitefinity sur mesure",
      "Architecture MVC optimisée",
      "Déploiements Azure automatisés"
    ],
    icon: "�",
    color: "from-retro-pink to-retro-purple"
  }
];
