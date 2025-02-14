'use client';
import CreateProjectForm from '@/components/projects/CreateProjectForm';
import { handleImageUpload } from '@/utils/imageGenerator';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { BsTrash2 } from 'react-icons/bs';

export type TProject = {
    _id?: string;
    title: string;
    description: string;
    tags: string[];
    live_link: string;
    image?: string | File | null; // Now allows null
    user?: string;
  };

type TProjectProp = {
    projects: TProject[];
};

const ProjectTable = ({ projects }: TProjectProp) => {
    const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
    const router = useRouter();

    const updateProject = async (data: TProject) => {
        try {
            const storedSession = localStorage.getItem('session');
            if (!storedSession) {
                throw new Error('User session not found. Please log in again.');
            }

            const session = JSON.parse(storedSession);
            const userEmail = session?.user?.email;
            if (!userEmail) {
                throw new Error('User email not found in session.');
            }

            data.user = userEmail;

            if (data.image && data.image instanceof File) {
                const imageUrl = await handleImageUpload(data.image);
                data.image = imageUrl as string;
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${data._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'user-email': userEmail,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || 'Failed to update project');
            }

            setSelectedProject(null);
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        const storedSession = localStorage.getItem('session');
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            router.push('/login');
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'user-email': userEmail,
                },
            });

            if (!res.ok) {
                throw new Error('Failed to delete project');
            }

            router.push('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-6 bg-tertiary shadow-md mx-2 md:mx-4 mt-20 rounded-lg">
            <h2 className="section-sub-text font-bold mb-4">All Projects</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-white-100">
                        <tr className="text-gray-700 text-sm md:text-base">
                            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                            <th className="border border-gray-300 px-4 py-2 hidden lg:table-cell">Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <tr key={project._id} className="hover:bg-black-100 text-sm md:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{project.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 hidden lg:table-cell">
                                        {project.description.slice(0, 50)}...
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 p-2"
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

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                        <CreateProjectForm
                            initialValues={{
                                ...selectedProject,
                                image: typeof selectedProject.image === 'string' ? undefined : selectedProject.image, // Convert URL string to undefined
                            }}
                            onSubmit={updateProject}
                            onClose={() => setSelectedProject(null)}
                        />

                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectTable;
