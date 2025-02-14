'use client'
import CreateProjectForm from "@/components/projects/CreateProjectForm";
import { handleImageUpload } from "@/utils/imageGenerator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";

export type TProject = {
    _id?: string;
    title: string;
    description: string;
    tags: string[];

    live_link: string;
    image?: string | File;
    user?: string;
    defaultValues?: TProject
};


type TProjectProp = {
    projects: TProject[]
}
const ProjectTable = ({ projects }: TProjectProp) => {

    const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
    const router = useRouter()
    // const handleEdit = (project: ProjectFormValues) => {
    //     setSelectedProject(project);
    // };


    const updateProject = async (data: TProject) => {
        try {
            const storedSession = localStorage.getItem("session");
            if (!storedSession) {
                throw new Error("User session not found. Please log in again.");
            }

            const session = JSON.parse(storedSession);
            const userEmail = session?.user?.email;

            if (!userEmail) {
                throw new Error("User email not found in session.");
            }

            data.user = userEmail;

            if (data.image) {
                const imageUrl = await handleImageUpload(data.image as File);
                data.image = imageUrl as string;
            }

            const response = await fetch(`http://localhost:5000/api/project/${data?._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "user-email": userEmail,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Failed to update project");
            }
            setSelectedProject(null)
            router.push("/dashboard");

        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        const storedSession = localStorage.getItem("session");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            router.push("/login");
            return;
        }
        try {
            const res = await fetch(`http://localhost:5000/api/project/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "user-email": userEmail,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to delete project");
            }

            router.push("/dashboard");
        } catch (err) {
            console.log(err);
            // setError("Error deleting project. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-tertiary shadow-md  mx-2 md:mx-4 mt-20 rounded-lg">
            <h2 className="section-sub-text font-bold mb-4">All Projects</h2>

            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-white-100">
                        <tr className="text-gray-700 text-sm md:text-base">
                            <th className="border border-gray-300 px-4 py-2 text-left ">Title</th>
                            <th className="border border-gray-300 px-4 py-2 hidden lg:table-cell">Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <tr key={"project._id"} className="hover:bg-black-100 text-sm md:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{project.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center hidden lg:table-cell">
                                        {project.description.slice(0, 50)}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 p-2"
                                                // onClick={() => router.push(`/dashboard/projects/edit/${project._id}`)}
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                <BiEdit size={18} />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 p-2"
                                                onClick={() => handleDelete(project._id as string)}
                                            >
                                                <BsTrash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center text-gray-500 py-4">
                                    No projects available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden">
                {/* {projects.length > 0 ? (
                projects.map((project) => ( */}
                <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                    <h3 className="text-lg font-semibold">{"project.title"}</h3>
                    <span className="text-xs text-gray-500">{new Date("project.createdAt").toLocaleDateString()}</span>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2">
                            <button
                                className="text-blue-600 hover:text-blue-800"
                            // onClick={() => router.push(`/dashboard/projects/edit/${project._id}`)}
                            // onClick={() => handleEdit(existingProject)}
                            >
                                <BiEdit size={18} />
                            </button>
                            <button
                                className="text-red-600 hover:text-red-800"
                            // onClick={() => handleDelete(project._id)}
                            >
                                <BsTrash2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* ))
            ) : (
                <p className="text-center text-gray-500">No projects available.</p>
            )} */}
            </div>
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                        <CreateProjectForm
                            initialValues={selectedProject}
                            onSubmit={(data) => updateProject(data)}
                            onClose={() => setSelectedProject(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectTable;