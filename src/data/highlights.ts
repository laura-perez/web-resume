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
    thumbnail: "/src/assets/images/highlights/IA/ia-thumbnail.png",
    slides: [
      {
        id: "ai-1",
        image: "/src/assets/images/highlights/IA/ia-slide-1.jpg"
      },
      {
        id: "ai-2",
        image: "/src/assets/images/highlights/IA/ia-slide-2.jpg"
      },
      {
        id: "ai-3",
        image: "/src/assets/images/highlights/IA/ia-slide-3.jpg"
      },
      {
        id: "ai-4",
        image: "/src/assets/images/highlights/IA/ia-slide-4.jpg"
      }
    ]
  }
];
