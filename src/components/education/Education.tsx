"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Business Administration (BBA)",
        institution: "Bangladesh Open University",
        duration: "Present",
        location: "Bangladesh",
        description: "Pursuing a comprehensive curriculum encompassing business strategies, management principles, economics, and organizational behavior, while simultaneously pursuing a career in web development."
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20">
            <div className="text-center lg:text-left mb-16">
                <p className="section-sub-text">Academic Background</p>
                <h2 className="section-head-text">Education.</h2>
            </div>

            <div className="flex flex-col gap-8 max-w-4xl mx-auto lg:mx-0">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.2)] transition-all group overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-accent origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/80 border border-accent/30 text-accent">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                                    <h4 className="text-lg font-medium text-secondary">{edu.institution}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm font-medium text-accent">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                            </div>
                        </div>

                        <p className="text-white-100 leading-relaxed max-w-3xl">
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
