'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

type TTech = {
    _id: string;
    icon: string;
    name: string;
};

export default function SkillList({ skills }: { skills: TTech[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
    };

    // Hexagon clip-path definition
    const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

    return (
        <div className="w-full max-w-5xl mx-auto mt-20 pb-10">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap justify-center items-center gap-4 sm:gap-6"
            >
                {skills?.map((tech) => (
                    <motion.div 
                        key={tech.name} 
                        variants={itemVariants}
                        whileHover={{ scale: 1.15, zIndex: 50 }}
                        className="relative flex flex-col items-center justify-center w-28 h-[120px] sm:w-[130px] sm:h-[150px] bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all group cursor-pointer"
                        style={{ clipPath: hexClipPath }}
                    >
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 relative mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                                <Image 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    fill
                                    sizes="64px"
                                    className="object-contain drop-shadow-md group-hover:drop-shadow-xl" 
                                />
                            </div>
                            <p className="text-[11px] sm:text-xs font-semibold text-secondary group-hover:text-white transition-colors duration-300 text-center px-2">
                                {tech.name}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
