/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import doodle from "@/assets/doodle.png";
import CreateProjectForm from "@/components/projects/CreateProjectForm";
import { handleImageUpload } from "@/utils/imageGenerator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";



const CreateProjectPage = () => {
    const router = useRouter()


    const handleCreate = async (data: FieldValues) => {
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

            // Extract the file from the form data
            const imageFile = data.image instanceof File ? data.image : null;

            if (imageFile) {
                const imageUrl = await handleImageUpload(imageFile);
                data.image = imageUrl; // Store the uploaded image URL
            } else {
                delete data.image; // Remove the image field if no file is provided
            }

            const response = await fetch(`https://blog-server-l2a3.vercel.app/api/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Failed to create project");
            }

            router.push("/projects");

        } catch (err: any) {
            console.error("Error creating project:", err.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-white">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex items-center justify-center">
                    <Image
                        height={480}
                        width={480}
                        src={doodle} alt="Doodle" className="object-contain" />
                </div>

                {/* Right Side - Form */}
                <div className="bg-tertiary p-4 rounded-xl shadow-lg">

                    <CreateProjectForm onSubmit={handleCreate} />
                </div>
            </div>
        </div>
    );
};

export default CreateProjectPage;
