
import Image from "next/image";
import { notFound } from "next/navigation";
import { TBlog } from "../page";



const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params
    const res = await fetch(`https://blog-server-l2a3.vercel.app/blogs/${blogId}`);
    if (!res.ok) return notFound(); // Handle 404 if blog not found

    const blogData = await res.json();
    const blog: TBlog = blogData?.data
    // console.log(blog.);

    return (
        <div className="max-w-4xl mx-auto py-10">

            <h1 className="text-3xlfont-bold">{blog.title}</h1>
            <Image height={260} width={260} src={blog.image} alt={blog.title} className="w-full h-64 object-cover mt-4  my-2  rounded-lg" />
            <p className="mt-6 text-lg">{blog.content}</p>
        </div>
    );
};

export default BlogDetailsPage;
