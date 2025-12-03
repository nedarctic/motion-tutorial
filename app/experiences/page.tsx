import ExperiencesClient from "./ExperiencesClient";
import { generateMetadata } from "./metadata";

export const metadata = generateMetadata();

export default function AboutPage() {
  return <ExperiencesClient />;
}
