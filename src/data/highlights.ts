/**
 * Highlights slideshow data
 * Contains all the data for the Instagram-style highlights/stories carousel
 */

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
    thumbnail: "/src/assets/images/highlights/IA/ia-slide-1.png",
    slides: [
      {
        id: "ai-1",
        image: "/src/assets/images/highlights/IA/ia-slide-1.png"
      },
      {
        id: "ai-2",
        image: "/src/assets/images/highlights/IA/ia-slide-2.png"
      },
      {
        id: "ai-3",
        image: "/src/assets/images/highlights/IA/ia-slide-3.png"
      },
      {
        id: "ai-4",
        image: "/src/assets/images/highlights/IA/ia-slide-4.png"
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
