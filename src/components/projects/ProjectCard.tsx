'use client'

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import eye from "@/assets/eye.png";

export type TProject = {
    _id: string, description: string,
    live_link: string,
    source_code_link_client: string,
    source_code_link_server?: string,
    image: string, tags: string[],
    title: string
}
type TProjectProp = {
    project: TProject
}

type GradientClass = "blue-text-gradient" | "green-text-gradient" | "pink-text-gradient" | "orange-text-gradient";

const getRandomGradientClass = (): GradientClass => {
    const gradientClasses: GradientClass[] = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient", "orange-text-gradient"];
    const randomIndex = Math.floor(Math.random() * gradientClasses.length);
    return gradientClasses[randomIndex];
};

const ProjectCard = ({ project }: TProjectProp) => {

    const { description, live_link, image, tags, title } = project
    return (
        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)} className="w-full sm:w-[360px]">
            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl sm:w-[360px] w-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.2)] transition-shadow duration-300 h-full flex flex-col justify-between">
                <div>
                    <div className="relative w-full h-[230px] rounded-2xl overflow-hidden group">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            unoptimized={true}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open(live_link, "_blank");
                                }}
                                className="bg-accent/80 hover:bg-accent w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-colors"
                                title="Live Site"
                            >
                                <Image
                                    src={eye}
                                    height={20}
                                    width={20}
                                    alt="Live-site"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[22px] line-clamp-1">{title}</h3>
                        <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">{description}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags?.slice(0, 4).map((tag) => (
                            <p key={tag} className={`text-[13px] ${getRandomGradientClass()} font-medium bg-black-200/50 px-2 py-1 rounded-md`}>
                                #{tag}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex">
                    <Link
                        href={`/projects/${project._id}`}
                        className="text-white flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/80 hover:bg-accent border border-accent/30 font-medium transition-all group"
                    >
                        View More / Details
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;