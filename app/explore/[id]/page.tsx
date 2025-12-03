import SafariDetailPage from "./SafariDetailPage";
import { generateMetadata } from "./metadata";

export async function generateMetadataWrapper({ params }: { params: { id: string } }) {
  return generateMetadata({ params });
}

export default function Page({ params }: { params: { id: string } }) {
  return <SafariDetailPage />;
}