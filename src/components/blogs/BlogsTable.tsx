'use client'

import { handleImageUpload } from "@/utils/imageGenerator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import BlogForm from "./BlogForm";

export type TBlog = {
    _id?: string;
    title: string;
    content: string;
    image?: string | File | null
    user?: string;
};

type TBlogProp = {
    blogs: TBlog[]
};

const BlogTable = ({ blogs }: TBlogProp) => {
    console.log(blogs);
    const [selectedBlog, setSelectedBlog] = useState<TBlog | null>(null);
    const router = useRouter();

    const updateBlog = async (data: TBlog) => {
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

            const response = await fetch(`${process.env.BACKEND_URL}/blog/${data?._id}`, {
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
                throw new Error(result.message || "Failed to update blog");
            }
            setSelectedBlog(null);
            router.push("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;
        const storedSession = localStorage.getItem("session");
        const session = storedSession ? JSON.parse(storedSession) : null;
        const userEmail = session?.user?.email;

        if (!userEmail) {
            router.push("/login");
            return;
        }
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "user-email": userEmail,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to delete blog");
            }

            router.push("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-6 bg-tertiary shadow-md mx-2 md:mx-4 mt-20 rounded-lg">
            <h2 className="section-sub-text font-bold mb-4">All Blogs</h2>

            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-white-100">
                        <tr className="text-gray-700 text-sm md:text-base">
                            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                            <th className="border border-gray-300 px-4 py-2 hidden lg:table-cell">Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs?.length > 0 ? (
                            blogs.map((blog) => (
                                <tr key={blog._id} className="hover:bg-black-100 text-sm md:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center hidden lg:table-cell">
                                        {blog.content.slice(0,50)}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 p-2"
                                                onClick={() => setSelectedBlog(blog)}
                                            >
                                                <BiEdit size={18} />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 p-2"
                                                onClick={() => handleDelete(blog._id as string)}
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
                                    No blogs available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {selectedBlog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                        <BlogForm
                            initialValues={selectedBlog}
                            onSubmit={(data) => updateBlog(data)}
                            onClose={() => setSelectedBlog(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogTable;
