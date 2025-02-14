import ProjectTable from "@/components/projects/ProjectTable";




const ProjectsPage = async () => {
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/projects`)
    const data = await res.json();

    return (
        <div>
            <ProjectTable projects={data?.data} />
        </div>

    );
};

export default ProjectsPage;