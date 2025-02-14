'use client';

import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import FeedbackCard from "./FeedbackCard";

type Testimonial = {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Arif proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Arif does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Arif optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const Feedback = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
                <motion.div variants={textVariant()}>
                    <p className="section-sub-text">What Others Say</p>
                    <h2 className="section-head-text">Testimonials.</h2>
                </motion.div>
            </div>
            <div className="padding-x -mt-20 pb-14 flex flex-wrap gap-7">
                {testimonials.map((item, index) => (
                    <FeedbackCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Feedback;
