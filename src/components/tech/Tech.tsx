
import Image from "next/image";



// const technologies = [

//     {
//         name: "JavaScript",
//         icon: javascript,
//     },
//     {
//         name: "TypeScript",
//         icon: typescript,
//     },
//     {
//         name: "React JS",
//         icon: react,
//     },
//     {
//         name: "Redux Toolkit",
//         icon: redux,
//     },
//     {
//         name: "NextJs",
//         icon: next,
//     },
//     {
//         name: "Prisma",
//         icon: prisma,
//     },
//     {
//         name: "PostgreSql",
//         icon: postgre,
//     },
//     {
//         name: "Tailwind CSS",
//         icon: tailwind,
//     },
//     {
//         name: "Node JS",
//         icon: nodejs,
//     },
//     {
//         name: "MongoDB",
//         icon: mongodb,
//     },
//     {
//         name: "git",
//         icon: git,
//     },
//     {
//         name: "CSS 3",
//         icon: css,
//     },



// ];
type TTech = {
    icon: string, name: string
}
const Tech = async () => {
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/skills`)
    const data = await res.json();
    // console.log(data);
    const technologies = data.data
    return (
        <div className="flex flex-row flex-wrap md:px-10 lg:px-32 justify-center gap-12">
            {technologies?.map((tech: TTech) => (
                <div key={tech.name} className="p-4 bg-gray-800 rounded-full text-center shadow-md">
                    <Image src={tech?.icon} alt={tech?.name} height={64} width={64} className="w-16 h-16 mx-auto" />
                    {/* <p className="mt-2">{tech.name}</p> */}
                </div>
            ))}
        </div>
    );
};

export default Tech;
