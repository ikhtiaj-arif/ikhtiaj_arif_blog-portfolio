import Image from "next/image";
import { notFound } from "next/navigation";
import { TBlog } from "../page";
import Link from "next/link";
import { ArrowLeft, UserCircle } from "lucide-react";

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const res = await fetch(`https://blog-server-l2a3.vercel.app/api/blogs/${blogId}`, { next: { revalidate: 3600 } });

  if (!res.ok) return notFound();

  const blogData = await res.json();
  const blog: TBlog = blogData?.data;

  // Formatting date if available, else omit it cleanly
  const readTime = Math.max(1, Math.ceil(blog?.content?.split(' ').length / 200)) || 3;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium mb-10 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        Back to Blogs
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          {blog?.title}
        </h1>
        
        <div className="flex items-center gap-4 text-secondary mb-10">
          <div className="flex items-center gap-2">
            <UserCircle className="w-8 h-8 text-accent" />
            <span className="font-semibold text-white">{blog?.user || "Ikhtiaj Arif"}</span>
          </div>
          <span className="text-white/20">•</span>
          <span className="text-sm font-medium">{readTime} min read</span>
        </div>

        <div className="w-full h-64 sm:h-96 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <Image
            src={blog?.image}
            alt={blog?.title}
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-105 transition-transform duration-1000"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
        </div>
      </header>

      <main 
        className="prose prose-invert prose-lg md:prose-xl max-w-none text-secondary prose-a:text-accent prose-a:no-underline hover:prose-a:text-white prose-a:transition-colors prose-img:rounded-3xl prose-headings:text-white prose-headings:font-bold prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />
      
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary font-medium">Thanks for reading!</p>
        <Link href="/blog" className="px-6 py-3 bg-tertiary hover:bg-accent text-white font-medium rounded-xl transition-colors border border-white/5">
          Read more blogs
        </Link>
      </div>
    </article>
  );
};

export default BlogDetailsPage;
