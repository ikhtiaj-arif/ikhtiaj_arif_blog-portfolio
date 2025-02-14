"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type BlogFormValues = {
    title: string;
    content: string;
    image?: File | string | null;
};

type Props = {
    initialValues?: BlogFormValues;
    onSubmit: (data: BlogFormValues) => void;
    onClose?: () => void;
};

const BlogForm = ({ initialValues, onSubmit, onClose }: Props) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<BlogFormValues>({
        defaultValues: initialValues || {
            title: "",
            content: "",
            image: null,
        },
    });

    useEffect(() => {
        if (initialValues?.image instanceof File) {
            setPreviewImage(URL.createObjectURL(initialValues.image));
        }
    }, [initialValues]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValue("image", file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="p-6 bg-black-100 rounded-xl text-white">
            <h2 className="text-2xl font-bold mb-4">{initialValues ? "Edit Blog" : "Create a New Blog"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Blog Title */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Title</span>
                    <input
                        type="text"
                        {...register("title", { required: "Title is required" })}
                        placeholder="Enter blog title"
                        className="bg-tertiary border border-gray-700 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
                    />
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </label>

                {/* Description */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Description</span>
                    <textarea
                        {...register("content", { required: "Content is required" })}
                        placeholder="Enter blog content"
                        rows={3}
                        className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700 font-medium"
                    />
                    {errors.content && <p className="text-red-500">{errors.content.message}</p>}
                </label>

                {/* Image Upload */}
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-2">Blog Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border border-gray-700 font-medium"
                    />
                    {previewImage && (
                        <div className="mt-3">
                            <img src={previewImage} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
                        </div>
                    )}
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
                        {initialValues ? "Update Blog" : "Create Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;
