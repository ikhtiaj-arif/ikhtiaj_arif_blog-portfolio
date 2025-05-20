import Image from "next/image";
import Link from "next/link";

type TBlog = {
    _id: string;
    image: string;
    title: string;
    content: string;
    user: string;
};

type TBlogProp = {
    blog: TBlog;
};

const BlogCard = ({ blog }: TBlogProp) => {
    const { image, title, content, user } = blog;

    return (
        <Link href={`/blog/${blog?._id}`}>
            <div className="bg-tertiary p-4 sm:p-6 rounded-2xl w-full max-w-md hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        height={300}
                        width={300}
                        className="rounded-2xl"
                    />
                </div>

                {/* Title + Content */}
                <div className="mt-4 sm:mt-5">
                    <h3 className="text-white font-bold text-lg sm:text-2xl line-clamp-2">{title}</h3>

                    <div
                        className="mt-2 text-secondary text-sm sm:text-base line-clamp-3 prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>

                {/* Author */}
                <div className="mt-4 flex items-center gap-2 sm:gap-3">
                    <p className="text-white text-xs sm:text-sm">By {user}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
