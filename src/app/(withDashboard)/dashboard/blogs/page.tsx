import BlogTable from '@/components/blogs/BlogsTable';

const BlogPage = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`)
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <BlogTable blogs={data?.data} />
        </div>
    );
};

export default BlogPage;