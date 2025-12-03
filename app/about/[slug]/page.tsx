import { TeamBioClient } from "./TeamBioClient";

export default async function TeamBioPage ({params}: {params: {slug: string}}){

    params = await params;
    return <TeamBioClient params={params} />;
}