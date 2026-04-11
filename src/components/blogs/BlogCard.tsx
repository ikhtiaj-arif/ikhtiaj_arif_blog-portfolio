import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserCircle } from "lucide-react";

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
        <Link href={`/blog/${blog?._id}`} className="group block w-full sm:w-[400px]">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl w-full h-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.2)] transition-all duration-300 flex flex-col justify-between">
                <div>
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>

                    {/* Title + Content */}
                    <div>
                        <h3 className="text-white font-bold text-xl sm:text-2xl line-clamp-2 group-hover:text-accent transition-colors">{title}</h3>

                        <div
                            className="mt-3 text-secondary text-sm sm:text-[15px] leading-relaxed line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-secondary">
                        <UserCircle className="w-5 h-5 text-accent" />
                        <p className="text-xs sm:text-sm font-medium">{user || "Ikhtiaj Arif"}</p>
                    </div>
                    <div className="text-accent flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                        <span className="text-sm">Read</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
