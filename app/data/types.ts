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

export type Testimonial = {
    name: string;
    text: string;
    location: string;
    image: string;
}

export type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    authorImage: string;
    image: string;
    slug: string;
    content: string;
}