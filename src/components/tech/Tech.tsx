import css from "@/assets/tech/css.png";
import git from "@/assets/tech/git.png";
import html from "@/assets/tech/html.png";
import javascript from "@/assets/tech/javascript.png";
import mongodb from "@/assets/tech/mongodb.png";
import next from "@/assets/tech/next.png";
import nodejs from "@/assets/tech/nodejs.png";
import postgre from "@/assets/tech/postgre.png";
import prisma from "@/assets/tech/prisma.png";
import react from "@/assets/tech/reactjs.png";
import redux from "@/assets/tech/redux.png";
import tailwind from "@/assets/tech/tailwind.png";
import typescript from "@/assets/tech/typescript.png";

import Image from "next/image";



const technologies = [

    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: react,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "NextJs",
        icon: next,
    },
    {
        name: "Prisma",
        icon: prisma,
    },
    {
        name: "PostgreSql",
        icon: postgre,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },



];

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap md:px-10 lg:px-32 justify-center gap-12">
            {technologies.map((tech) => (
                <div key={tech.name} className="p-4 bg-gray-800 rounded-full text-center shadow-md">
                    <Image src={tech.icon} alt={tech.name} className="w-16 h-16 mx-auto" />
                    {/* <p className="mt-2">{tech.name}</p> */}
                </div>
            ))}
        </div>
    );
};

export default Tech;
