import BlogTable from '@/components/blogs/BlogsTable';

const BlogPage = async () => {
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/blogs`)
    const data = await res.json();
    // console.log(data);
    return (
        <div>
            <BlogTable blogs={data?.data} />
        </div>
    );
};

export default BlogPage;