export interface Formation {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string[];
  specializations: string[];
  projects: string[];
  icon: string;
  color: string;
}

export const formations: Formation[] = [
  {
    id: "1",
    degree: "Licence Professionnelle",
    school: "École Supérieure",
    period: "2014",
    location: "France",
    description: [
      "Spécialisation en conception et développement de solutions mobiles",
      "Formation aux technologies modernes de développement",
      "Projets pratiques en équipe"
    ],
    specializations: [
      "Développement mobile",
      "Conception d'applications",
      "UX/UI Design",
      "Gestion de projet"
    ],
    projects: [
      "Application mobile e-commerce",
      "Prototype d'application géolocalisée",
      "Interface responsive multi-plateforme"
    ],
    icon: "📱",
    color: "from-retro-blue to-retro-cyan"
  },
  {
    id: "2",
    degree: "BTS Informatique",
    school: "Lycée Technologique",
    period: "2013",
    location: "France",
    description: [
      "Formation en alternance",
      "Apprentissage des fondamentaux du développement",
      "Expérience professionnelle en entreprise"
    ],
    specializations: [
      "Programmation orientée objet",
      "Bases de données",
      "Réseaux informatiques",
      "Algorithmique"
    ],
    projects: [
      "Application de gestion desktop",
      "Site web dynamique",
      "Base de données relationnelle"
    ],
    icon: "�",
    color: "from-retro-green to-retro-blue"
  }
];
