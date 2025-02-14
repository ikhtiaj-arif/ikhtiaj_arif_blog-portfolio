import ProjectTable from "@/components/projects/ProjectTable";




const ProjectsPage = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/projects`)
    const data = await res.json();

    return (
        <div>
            <ProjectTable projects={data?.data} />
        </div>

    );
};

export default ProjectsPage;