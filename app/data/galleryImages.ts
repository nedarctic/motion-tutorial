import type { GalleryImage, Category } from "./types";

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/savanna-sunset.jpeg", category: "wildlife", alt: "Golden sunset over the Mara" },
  { id: 2, src: "/elephant-family.jpeg", category: "wildlife", alt: "Elephant herd at dawn" },
  { id: 3, src: "/hot-air-balloon.jpeg", category: "experiences", alt: "Balloon safari at sunrise" },
  { id: 4, src: "/maasai-warrior.jpeg", category: "culture", alt: "Maasai warrior portrait" },
  { id: 5, src: "/bush-dinner.jpeg", category: "experiences", alt: "Private bush dinner under stars" },
  { id: 6, src: "/lion-pride.jpeg", category: "wildlife", alt: "Lion pride on the plains" },
  { id: 7, src: "/mount-kenya.jpeg", category: "landscapes", alt: "Mount Kenya at golden hour" },
  { id: 8, src: "/tea-plantation.jpeg", category: "landscapes", alt: "Rolling tea fields in Kericho" },
  { id: 9, src: "/giraffe-manor.jpeg", category: "experiences", alt: "Breakfast with giraffes" },
  { id: 10, src: "/samburu-camels.jpeg", category: "culture", alt: "Samburu woman with camels" },
  { id: 11, src: "/flamingos-lake.jpeg", category: "landscapes", alt: "Flamingos at Lake Nakuru" },
  { id: 12, src: "/helicopter-safari.jpeg", category: "experiences", alt: "Helicopter over the Rift Valley" },
];

export const categories: Category[] = [
  { value: "all", label: "All Moments" },
  { value: "wildlife", label: "Wildlife" },
  { value: "landscapes", label: "Landscapes" },
  { value: "culture", label: "Culture" },
  { value: "experiences", label: "Experiences" },
];