import BlogCard from "@/components/blogs/BlogCard";
export type TBlog = {
    _id: string, image: string, title: string, content: string, user: string
}

const BlogPage = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`)
    const data = await res.json();
    const blogData = data?.data

    return (
        <div className="pt-10">
            {/* Section Title */}
            <div className="mb-10 animate-fade-in">
                <p className="section-sub-text">My Blogs</p>
                <h2 className="section-head-text">Blogs.</h2>
            </div>

            {/* Description */}
            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  animate-fade-in delay-200">


                </p>
            </div>
            <div>
                {
                    blogData?.map((blog: TBlog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))
                }
            </div>

        </div>
    );
};

export default BlogPage;