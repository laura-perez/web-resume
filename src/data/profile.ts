export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
  profileImage: string;
  interests: string[];
  languages: Array<{
    name: string;
    level: string;
  }>;
}

export const personalInfo: PersonalInfo = {
  name: "Laura Perez",
  title: "Développeuse .NET",
  bio: "De retour en France après 5 ans en Australie où j'ai travaillé sur des projets CMS, je souhaite maintenant m'orienter vers le développement de microservices .NET. J'aime apprendre de nouvelles techs et faire du pair programming. De nature énergique, je me plais dans un environnement de travail dynamique. ✨",
  location: "Bayonne, France",
  email: "laura.perez.fr@gmail.com",
  phone: "06 33 41 00 45",
  website: "laura-perez.dev",
  linkedin: "laura-perez-fr",
  github: "lauraperez-dev",
  profileImage: "/src/assets/profile-pic.png",
  interests: [
    "💻 Microservices .NET",
    "� Pair Programming", 
    "� Nouvelles technologies",
    "� Voyages (Australie)",
    "📚 Veille technologique",
    "☕ Coffee & Code"
  ],
  languages: [
    { name: "Français", level: "Bilingue" },
    { name: "Anglais", level: "Bilingue" }
  ]
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
    image: "/src/assets/experiences.jpg",
    description: "Mon parcours professionnel",
    color: "from-retro-purple to-retro-blue"
  },
  {
    id: "formations", 
    title: "Formations",
    type: "formations",
    icon: "🎓",
    image: "/src/assets/formations.jpg",
    description: "Mon cursus académique",
    color: "from-retro-blue to-retro-cyan"
  },
  {
    id: "skills",
    title: "Compétences", 
    type: "skills",
    icon: "🛠️",
    image: "/src/assets/competences.jpg",
    description: "Mes technologies favorites",
    color: "from-retro-cyan to-retro-green"
  },
  {
    id: "personal",
    title: "Personnel",
    type: "personal", 
    icon: "🌟",
    image: "/src/assets/perso.jpg",
    description: "Mes passions et intérêts",
    color: "from-retro-green to-retro-yellow"
  },
  {
    id: "contact",
    title: "Contact",
    type: "contact",
    icon: "📱",
    image: "/src/assets/contact.jpg", 
    description: "Restons en contact !",
    color: "from-retro-yellow to-retro-orange"
  },
  {
    id: "projects",
    title: "Projets",
    type: "experiences",
    icon: "🚀", 
    image: "/src/assets/experiences.jpg",
    description: "Mes réalisations",
    color: "from-retro-orange to-retro-pink"
  }
];
