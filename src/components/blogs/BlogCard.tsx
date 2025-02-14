import Image from "next/image";
import Link from "next/link";

type TBlog = {
   _id:string, image: string, title: string, content: string, user: string
}

type TBlogProp = {
    blog: TBlog
}
const BlogCard = ({ blog }: TBlogProp) => {

    const { image, title, content, user } = blog
    return (
        <Link href={`/blog/${blog._id}`} >

   
        <div className="bg-tertiary p-6 rounded-2xl sm:w-[400px] w-full">
            <div className="relative w-full h-[280px]">
                <Image
                    src={image}
                    alt="name"
                    layout="fill"
                    objectFit="cover"
                    unoptimized={true}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="mt-5">
                <h3 className="text-white font-bold text-[26px]">{title}</h3>
                <p className="mt-3 text-secondary text-[16px] line-clamp-3">{content}</p>
            </div>
            <div className="mt-4 flex items-center gap-3">

                <p className="text-white text-[14px]">By {user}</p>
            </div>
        </div>
        </Link>
    );
};

export default BlogCard;
