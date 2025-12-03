import AboutClient from "./AboutClient";
import { generateMetadata } from "./metadata";

export const metadata = generateMetadata();

export default function AboutPage() {
  return <AboutClient />;
}
