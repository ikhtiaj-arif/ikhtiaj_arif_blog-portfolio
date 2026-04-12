import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Code2, AlertTriangle, Lightbulb } from "lucide-react";

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/project/${projectId}`);
    if (!res.ok) return notFound(); // Handle 404 if project not found

    const projectData = await res.json();
    // Use any so we can safely check property without TS raging
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const project: any = projectData?.data;

    return (
        <div className="max-w-6xl mx-auto py-20 px-6 sm:px-10 border-x border-white/5 bg-primary/20 backdrop-blur-sm min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/10 pb-8">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">{project?.title}</h1>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project?.tags?.map((tag: string) => (
                            <span key={tag} className="px-4 py-1.5 bg-tertiary/80 border border-accent/20 text-accent font-medium rounded-full text-sm shadow-[0_0_10px_rgba(128,77,238,0.1)]">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Visual Component */}
            <div className="mb-16 relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                    src={project?.image}
                    alt={project?.title}
                    fill
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-transform duration-700"
                    unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Content Display */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    {/* Description */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                            Overview
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed bg-tertiary/30 p-6 rounded-2xl border border-white/5">
                            {project.description}
                        </p>
                    </section>

                    {/* Challenges */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="text-accent" />
                            Challenges Faced
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed bg-tertiary/30 p-6 rounded-2xl border border-white/5">
                            {project.challenges || "No distinct challenges documented for this project yet. Built seamlessly utilizing existing robust architectural patterns."}
                        </p>
                    </section>

                    {/* Future Plans */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lightbulb className="text-accent" />
                            Future Improvements
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed bg-tertiary/30 p-6 rounded-2xl border border-white/5">
                            {project.future_plans || "Future iterations aim to expand features, enhance test coverage, and improve performance optimization for scaled traffic."}
                        </p>
                    </section>
                </div>

                {/* Sidebar Links and Stack */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Action Links */}
                    <div className="bg-tertiary/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-6">Links & Resources</h3>
                        <div className="flex flex-col gap-4">
                            {project.live_link && (
                                <Link href={project.live_link} target="_blank" className="flex items-center justify-between bg-accent hover:bg-accent/80 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md group">
                                    Live Project
                                    <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}
                            {project.source_code_link_client && (
                                <Link href={project.source_code_link_client} target="_blank" className="flex items-center justify-between bg-black-200 hover:bg-black-100 border border-white/10 text-white font-semibold py-4 px-6 rounded-xl transition-all">
                                    Client Github 
                                    <Github className="w-5 h-5" />
                                </Link>
                            )}
                            {project.source_code_link_server && (
                                <Link href={project.source_code_link_server} target="_blank" className="flex items-center justify-between bg-black-200 hover:bg-black-100 border border-white/10 text-white font-semibold py-4 px-6 rounded-xl transition-all">
                                    Server Github 
                                    <Github className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Tech Stack Component */}
                    <div className="bg-tertiary/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Code2 className="text-accent" />
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project?.tags?.map((tag: string) => (
                                <span key={tag} className="px-3 py-2 bg-primary/80 border border-white/5 text-secondary text-sm rounded-lg font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
