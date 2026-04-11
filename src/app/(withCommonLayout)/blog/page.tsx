import BlogCard from "@/components/blogs/BlogCard";
export type TBlog = {
    _id: string, image: string, title: string, content: string, user: string
}

export const revalidate = 3600; // revalidate every hour

const BlogPage = async () => {
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/blogs`)
    const data = await res.json();
    const blogData = data?.data

    return (
        <div className="py-20 max-w-7xl mx-auto flex flex-col items-center">
            {/* Section Title */}
            <div className="text-center mb-16 px-6">
                <p className="section-sub-text">Insights & Thoughts</p>
                <h2 className="section-head-text">My Blogs.</h2>
                <p className="mt-4 text-secondary text-[17px] max-w-2xl mx-auto leading-[30px]">
                    Exploring tech, sharing learnings, and occasionally rambling about web development.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 px-4">
                {
                    blogData?.map((blog: TBlog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))
                }
                {(!blogData || blogData.length === 0) && (
                    <div className="text-secondary text-center py-20">
                        No blogs found at the moment. Check back soon!
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;