export type Image = {
    src: string;
    text?: string;
    alt?: string;
};

export type TravelVideo = {
    id: number;
    thumbnail: string;
    url: string;
    title: string;
};

export type Card = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
};

export interface Safari {
  id: string;
  src: string;
  title: string;
  location: string;
  rating: number;
  description: string;
  detailedDescription: string;
}

export type ClientLogo = {
    name: string;
    src: string;
}