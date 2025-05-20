import { TProject } from "@/components/projects/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";



const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/project/${projectId}`);
    if (!res.ok) return notFound(); // Handle 404 if project not found

    const projectData = await res.json();
    const project: TProject = projectData?.data

    console.log(project);

    return (
        <div className="max-w-5xl mx-auto py-10 px-5">
            <h1 className="text-3xl font-bold text-white">{project?.title}</h1>

            <div className="mt-6 relative w-full h-96">
                <Image
                    src={project?.image}
                    alt={project?.title}
                    height={380}
                    width={380}
                
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>

            <p className="mt-6 text-lg text-gray-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-3 ">
                <Link href={project.live_link} target="_blank">
                    <button className="bg-accent hover:bg-purple-500 text-white font-bold py-3 px-5 rounded-lg transition-all">
                        View Live Project
                    </button>
                </Link>
                <Link href={project.source_code_link_client} target="_blank">
                    <button className="bg-accent hover:bg-purple-500  text-white font-bold py-3 px-5 rounded-lg transition-all">
                        Client Source Code
                    </button>
                </Link>
                <Link href={project.source_code_link_server} target="_blank">
                    <button className="bg-accent hover:bg-purple-500 text-white font-bold py-3 px-5 rounded-lg transition-all">
                        Server Source Code
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
