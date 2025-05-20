import Image from "next/image";
import { notFound } from "next/navigation";
import { TBlog } from "../page";

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const res = await fetch(`https://blog-server-l2a3.vercel.app/api/blogs/${blogId}`);

  if (!res.ok) return notFound();

  const blogData = await res.json();
  const blog: TBlog = blogData?.data;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-center sm:text-left">
        {blog?.title}
      </h1>

      <div className="w-full h-60 sm:h-80 md:h-96 relative rounded-lg overflow-hidden mb-6">
        <Image
          src={blog?.image}
          alt={blog?.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          unoptimized
        />
      </div>

      <div
        className="prose prose-invert prose-lg max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />
    </div>
  );
};

export default BlogDetailsPage;
