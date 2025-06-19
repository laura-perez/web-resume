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
    "🌍 5 ans d'expérience à l'international - FR/EN",
    "🧠 Monte en puissance sur l'IA pour le développement",
    "⚡ Dev nouvelle génération : accéléré, amplifié, optimisé"
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
    id: "personal",
    title: "Profil",
    type: "personal", 
    icon: "👤",
    image: "/src/assets/images/posts/post-1-profile.png",
    description: "Mon profil personnel",
    color: "from-retro-green to-retro-yellow"
  },
  {
    id: "experiences",
    title: "Expérience",
    type: "experiences",
    icon: "💼",
    image: "/src/assets/images/posts/post-2-experience.png",
    description: "Mon parcours professionnel",
    color: "from-retro-purple to-retro-blue"
  },
  {
    id: "skills",
    title: "Compétences", 
    type: "skills",
    icon: "🛠️",
    image: "/src/assets/images/posts/post-3-skills.png",
    description: "Mes technologies favorites",
    color: "from-retro-cyan to-retro-green"
  },
  {
    id: "formations", 
    title: "Formation",
    type: "formations",
    icon: "🎓",
    image: "/src/assets/images/posts/post-4-education.png",
    description: "Mon cursus académique",
    color: "from-retro-blue to-retro-cyan"
  },
  {
    id: "softskills",
    title: "Soft Skills",
    type: "personal",
    icon: "🌟",
    image: "/src/assets/images/posts/post-5-softskills.png",
    description: "Mes qualités humaines",
    color: "from-retro-pink to-retro-purple"
  },
  {
    id: "contact",
    title: "Contact",
    type: "contact",
    icon: "📱",
    image: "/src/assets/images/posts/post-6-contact.png", 
    description: "Restons en contact !",
    color: "from-retro-yellow to-retro-orange"
  }
];


