import BlogTable from '@/components/blogs/BlogsTable';

const BlogPage = async () => {
    const res = await fetch(`http://localhost:5000/api/blogs`)
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <BlogTable blogs={data?.data} />
        </div>
    );
};

export default BlogPage;