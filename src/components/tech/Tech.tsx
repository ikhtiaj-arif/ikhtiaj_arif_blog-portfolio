import html from "@/assets/tech/html.png";
import css from "@/assets/tech/css.png";
import Image from "next/image";

const techStack = [
    { id: 1, name: "HTML 5", image: html },
    { id: 2, name: "CSS 3", image: css },
    { id: 3, name: "JavaScript", image: html },
    { id: 4, name: "React", image: html },
    { id: 5, name: "Next.js", image: html },
    { id: 6, name: "Tailwind CSS", image: html },
    { id: 7, name: "TypeScript", image: html },
    { id: 8, name: "TypeScript", image: html },
    { id: 9, name: "TypeScript", image: html },
    { id: 10, name: "TypeScript", image: html },
];

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 ">
            {techStack.map((tech) => (
                <div key={tech.id} className="p-4 bg-gray-800 rounded-full text-center">
                    <Image  src={tech.image} alt={tech.name} className="w-12 h-12 mx-auto" />
                    {/* <p className="mt-2">{tech.name}</p> */}
                </div>
            ))}
        </div>
    );
};

export default Tech;
