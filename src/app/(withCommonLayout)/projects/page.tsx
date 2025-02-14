import ProjectCard, { TProject } from "@/components/projects/ProjectCard";

export default async function ProjectsPage() {
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/projects`)
    const data = await res.json();
    const projectData = data?.data
    // console.log(data?.data);
    return (
        <div className="pt-10">
            {/* Section Title */}
            <div className="mb-10 animate-fade-in">
                <p className="section-sub-text">My Works</p>
                <h2 className="section-head-text">Projects.</h2>
            </div>

            {/* Description */}
            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  animate-fade-in delay-200">

                </p>
            </div>

     
                {projectData.length > 0 ? (
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {projectData.map((project: TProject) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center col-span-3 text-secondary text-xl mt-10 animate-fade-in">
                        No Data Available 😕
                    </p>
                )}

            </div>
      
    );
}
