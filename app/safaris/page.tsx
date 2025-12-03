import SafarisExplorePage from "./SafarisExplorePage";
import { generateMetadata } from "./metadata";

export const metadata = generateMetadata();

export default function Page() {
  return <SafarisExplorePage />;
}