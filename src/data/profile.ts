export interface PersonalInfo {
  name: string;
  profileImage: string;
  website: string;
}

export interface PersonalInfoComplete {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  profileImage: string;
  website: string;
  interests: string[];
  languages: Array<{
    name: string;
    level: string;
  }>;
}

export interface ProfileDescription {
  lines: string[];
}

export interface ProfileStats {
  publications: string;
  followers: string;
  following: string;
}

export const personalInfo: PersonalInfo = {
  name: "Laura Perez",
  profileImage: "/src/assets/images/profile-pic.png",
  website: "laura-perez.dev"
};

export const personalInfoComplete: PersonalInfoComplete = {
  name: "Laura Perez",
  title: "Développeuse .NET & IA",
  email: "laura.perez.fr@gmail.com",
  phone: "06 33 41 00 45",
  linkedin: "laura-perez-fr",
  github: "lauraperez-dev",
  profileImage: "/src/assets/images/profile-pic.png",
  website: "laura-perez.dev",
  interests: [
    "💻 Microservices .NET",
    "🤝 Pair Programming", 
    "🚀 Nouvelles technologies",
    "🌏 Voyages (Australie)",
    "📚 Veille technologique",
    "☕ Coffee & Code"
  ],
  languages: [
    { name: "Français", level: "Bilingue" },
    { name: "Anglais", level: "Bilingue" }
  ]
};

export const profileDescription: ProfileDescription = {
  lines: [
    "🔮 En transition vers l'IA après 10 ans de dev .NET",
    "🌍 5 ans d'expérience à l'international - FR/EN-AU",
    "🧠 Monte en puissance sur l'IA pour le développement",
    "⚡ dev nouvelle génération : accéléré, amplifié, optimisé",
    "📫 laura.perez.fr@gmail.com"
  ]
};

export const profileStats: ProfileStats = {
  publications: "6",
  followers: "1 M",
  following: "312"
};

export interface PostData {
  id: string;
  title: string;
  type: 'experiences' | 'formations' | 'skills' | 'personal' | 'contact';
  icon: string;
  image: string;
  description: string;
  color: string;
}

export const postsData: PostData[] = [
  {
    id: "experiences",
    title: "Expériences",
    type: "experiences",
    icon: "💼",
    image: "/src/assets/images/experiences.jpg",
    description: "Mon parcours professionnel",
    color: "from-retro-purple to-retro-blue"
  },
  {
    id: "formations", 
    title: "Formations",
    type: "formations",
    icon: "🎓",
    image: "/src/assets/images/formations.jpg",
    description: "Mon cursus académique",
    color: "from-retro-blue to-retro-cyan"
  },
  {
    id: "skills",
    title: "Compétences", 
    type: "skills",
    icon: "🛠️",
    image: "/src/assets/images/competences.jpg",
    description: "Mes technologies favorites",
    color: "from-retro-cyan to-retro-green"
  },
  {
    id: "personal",
    title: "Personnel",
    type: "personal", 
    icon: "🌟",
    image: "/src/assets/images/perso.jpg",
    description: "Mes passions et intérêts",
    color: "from-retro-green to-retro-yellow"
  },
  {
    id: "contact",
    title: "Contact",
    type: "contact",
    icon: "📱",
    image: "/src/assets/images/contact.jpg", 
    description: "Restons en contact !",
    color: "from-retro-yellow to-retro-orange"
  },
  {
    id: "projects",
    title: "Projets",
    type: "experiences",
    icon: "🚀", 
    image: "/src/assets/images/experiences.jpg",
    description: "Mes réalisations",
    color: "from-retro-orange to-retro-pink"
  }
];

export interface HighlightSlide {
  id: string;
  image: string;
  title?: string;
}

export interface Highlight {
  id: string;
  name: string;
  thumbnail: string;
  slides: HighlightSlide[];
}

export const highlightsData: Highlight[] = [
  {
    id: "ai",
    name: "IA",
    thumbnail: "/src/assets/images/competences.jpg",
    slides: [
      {
        id: "ai-1",
        image: "/src/assets/images/competences.jpg",
        title: "Formation IA & Machine Learning"
      },
      {
        id: "ai-2", 
        image: "/src/assets/images/experiences.jpg",
        title: "Projets IA en entreprise"
      },
      {
        id: "ai-3",
        image: "/src/assets/images/formations.jpg",
        title: "Certifications & Veille techno"
      }
    ]
  },
  {
    id: "dev",
    name: "Dev",
    thumbnail: "/src/assets/images/experiences.jpg",
    slides: [
      {
        id: "dev-1",
        image: "/src/assets/images/experiences.jpg",
        title: "10 ans d'expérience .NET"
      },
      {
        id: "dev-2",
        image: "/src/assets/images/competences.jpg", 
        title: "Stack technique moderne"
      }
    ]
  },
  {
    id: "international",
    name: "🌍",
    thumbnail: "/src/assets/images/perso.jpg",
    slides: [
      {
        id: "intl-1",
        image: "/src/assets/images/perso.jpg",
        title: "Expérience internationale"
      },
      {
        id: "intl-2",
        image: "/src/assets/images/contact.jpg",
        title: "Bilangue FR/EN-AU"
      }
    ]
  }
];
