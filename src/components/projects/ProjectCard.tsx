'use client'

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

import eye from "@/assets/eye.png";


export type TProject = {
    _id: string, description: string, live_link: string, image: string, tags: string[], name: string
}
type TProjectProp = {
    project: TProject
}


const ProjectCard = ({ project }: TProjectProp) => {

    const { description, live_link, image, tags, name } = project
    return (
        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full">
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt="name"
                        layout="fill"
                        objectFit="cover"
                        unoptimized={true}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        {/* for live site */}
                        <div
                            onClick={() => window.open(live_link, "_blank")}
                            className="black-gradient w-10 h-10 mr-2 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src={eye}
                                height={2}
                                width={2}
                                alt="Live-site"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                        {/* for github */}
                        {/* <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src={git}
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div> */}
                    </div>
                </div>
                <div className="mt-5 ">
                    <h3 className="text-white font-bolt text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag} className={`text-[14px] ${tag}`}>
                            #{tag}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;