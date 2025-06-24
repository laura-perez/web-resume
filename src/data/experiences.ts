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
    title: "Développeuse .NET – Backend & DevOps",
    company: "Coperlab",
    period: "Novembre 2023 - Mai 2025",
    location: "France – Remote",
    description: [
      "Développement backend .NET 8 en microservices",
      "Implémentation de pipelines CI/CD et GitFlow",
      "Tests automatisés et intégration en environnement Azure"
    ],

    technologies: [
      "DDD", "CQRS", "MassTransit", "Azure",
      "SQL Server", "EF Core", "xUnit", "Docker",
      "Azure DevOps", "CI/CD"
    ],
    achievements: [
      "Développement d’APIs métier robustes (DDD, CQRS)",
      "Mise en place de TU et tests d'intégration",
      "Automatisation des pipelines CI/CD",
      "Définition du GitFlow, branch policies et templates de PR"
    ],
    icon: "☁️",
    color: "from-retro-green to-retro-purple"
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
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
    icon: "💳",
    color: "from-retro-purple to-retro-pink"
  },
  {
    id: "5", 
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
    id: "6",
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
    id: "7",
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
    icon: "🧩",
    color: "from-retro-pink to-retro-purple"
  },
  {
  id: "8",
  title: "Analyst, designer & developer",
  company: "DOCAPOST-BPO",
  period: "Octobre 2014 - Janvier 2015",
  location: "Paris, France",
  description: [
    "Conception et développement d'une application intranet de Business Intelligence pour la gestion de données bancaires.",
    "Participation à toutes les phases du projet : recueil des besoins, analyse technique, conception base de données, développement fullstack."
  ],
  technologies: [
    "C#", "ASP", "AJAX", "Entity Framework", "LINQ", "SQL Server", "T-SQL", "UML", "OLE DB", "WCF"
  ],
  achievements: [
    "Rédaction des spécifications fonctionnelles et techniques",
    "Modélisation UML et création de la base de données SQL Server",
    "Développement du middle-tier avec Entity Framework et LINQ",
    "Création d’un Web Service WCF en C# avec ASP et AJAX",
    "Développement de modules d’import/export Excel avec OLE DB"
  ],
  icon: "📊",
  color: "from-retro-yellow to-retro-pink"
  },
  {
    id: "3",
    title: "Développeuse ASP/C#.NET",
    company: "Natural Solutions",
    period: "Septembre 2013 - Septembre 2014",
    location: "France & Maroc",
    description: [
      "Développement, maintenance et déploiement d’une application intranet pour la gestion de l’élevage d’oiseaux.",
      "Conception d’une seconde application intranet pour la gestion des droits utilisateurs et des sites d’élevage.",
      "2 missions à l’international (Maroc) : déploiement et support client."
    ],
    technologies: [
      "C#", "VB.NET", "ASP.NET", "Entity Framework", "LINQ", "SQL Server 2012", "T-SQL",
      "ASP Web Forms", "Bootstrap", "JavaScript", "jQuery", "TortoiseSVN", "Git", "SSMS"
    ],
    achievements: [
      "Développement fullstack d’une application intranet en architecture N-tiers",
      "Mapping de données avec Entity Framework et LINQ",
      "Déploiement de versions stables sur site client (Maroc)",
      "Correction de bugs et ajout de nouvelles fonctionnalités sur une application existante",
      "Mise en place de la réplication de données SQL Server via SSMS et T-SQL",
      "Projets gérés en méthode Agile (Scrum)"
    ],
    icon: "🦜",
    color: "from-retro-orange to-retro-violet"
    },
    {
    id: "4",
    title: "Développeuse C#.NET",
    company: "SOMEI",
    period: "Août 2011 - Août 2013",
    location: "France",
    description: [
      "Développement de programmes de gestion d’équipements pour le secteur de l’eau.",
      "Déploiement de solutions desktop en WinForms et intégration à un ERP existant.",
      "Participation à toutes les étapes : développement, tests, recette, mise en production."
    ],
    technologies: [
      "C#", ".NET", "WinForms", "Oracle 11g", "SQL", "PL/SQL", "Talend Open Studio",
      "Java", "NCL", "NSDKIDE"
    ],
    achievements: [
      "Développement d’interfaces utilisateur et de composants métier en C#.NET",
      "Création de requêtes de mapping pour Oracle 11g",
      "Participation à la phase de recette utilisateur et mise en production",
      "Développement d’un programme de gestion de licences intégré à un ERP",
      "Création d’un data warehouse avec Talend et Java"
    ],
    icon: "💧",
    color: "from-retro-blue to-retro-orange"
  }
];
