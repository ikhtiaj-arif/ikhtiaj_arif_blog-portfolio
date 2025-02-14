"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type ProjectFormValues = {
    title: string;
    description: string;
    tags: string[];
    live_link: string;
    image?: File | string | null;
};

const availableTags = ["React", "MongoDB", "Tailwind", "TypeScript"];

type Props = {
    initialValues?: ProjectFormValues;
    onSubmit: (data: ProjectFormValues) => void;
    onClose?: () => void;
};

const CreateProjectForm = ({ initialValues, onSubmit, onClose }: Props) => {
    const [selectedTags, setSelectedTags] = useState<string[]>(initialValues?.tags || []);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ProjectFormValues>({
        defaultValues: initialValues || {
            title: "",
            description: "",
            tags: [],
            live_link: "",
            image: null,
        },
    });

    useEffect(() => {
        if (initialValues?.image && typeof initialValues.image === 'string') {
            setPreviewImage(initialValues.image);
        } else if (initialValues?.image instanceof File) {
            setPreviewImage(URL.createObjectURL(initialValues.image));
        }
    }, [initialValues]);

    const handleTagChange = (tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newTags);
        setValue("tags", newTags);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValue("image", file); // ✅ Ensure file is stored in react-hook-form state
            setPreviewImage(URL.createObjectURL(file));
        }
    };


    return (
        <div className="p-6 bg-black-100 rounded-xl text-white">
            <h2 className="text-2xl font-bold section-sub-text mb-4">{initialValues ? "Edit Project" : "Create a New Project"}</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Project Name */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Project Name</span>
                    <input
                        type="text"
                        {...register("title", { required: "Project title is required" })}
                        placeholder="Enter project title"
                        className="bg-tertiary border  border-gray-700 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none  font-medium"
                    />
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </label>

                {/* Description */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Description</span>
                    <textarea
                        {...register("description", { required: "Description is required" })}
                        placeholder="Enter project description"
                        rows={3}
                        className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 font-medium"
                    />
                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                </label>

                {/* Tags Selection */}
                <div>
                    <span className="text-white font-medium">Tags</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {availableTags.map((tag) => (
                            <button
                                key={tag}
                                type="button"

                                onClick={() => handleTagChange(tag)}
                                className={`px-3 py-2 border border-gray-700 rounded-lg ${selectedTags.includes(tag) ? "bg-accent text-white" : "bg-black-100"
                                    } transition-all`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Image Upload */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Project Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange} // ✅ Correctly updating image state
                        className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border border-gray-700 font-medium"
                    />
                    {previewImage && (
                        <div className="mt-3">
                            <Image layout="fill"
                                objectFit="cover"
                                unoptimized={true} src={previewImage} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
                        </div>
                    )}
                </label>


                {/* Live Link */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Live Link</span>
                    <input
                        type="url"
                        {...register("live_link", {
                            required: "Live link is required",
                            pattern: { value: /^https?:\/\//, message: "Enter a valid URL" },
                        })}
                        placeholder="https://your-live-site.com"
                        className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 font-medium"
                    />
                    {errors.live_link && <p className="text-red-500">{errors.live_link.message}</p>}
                </label>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    {onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-black-100 hover:bg-black-200 text-white py-3 px-5 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-accent hover:bg-purple-500 text-white font-bold py-3 px-5 rounded-lg transition-all"
                    >
                        {initialValues ? "Update Project" : "Create Project"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProjectForm;
