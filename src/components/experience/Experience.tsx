/* eslint-disable react/no-unescaped-entities */

'use client'

import icon from "@/assets/company/freeCodeCmap.png";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
    return (
        <div className="py-10">
            <motion.div variants={textVariant()}>
                <p className="section-sub-text">I've done so far</p>
                <h2 className="section-head-text">Experience.</h2>
            </motion.div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-20">
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-middle h-14 w-14 border-[3px] border-white rounded-full">
                        <Image src={icon} alt="image" className="h-10 w-10 rounded-full mx-auto mt-1" />
                    </div>
                    <div className="timeline-start mb-10 max-w-lg bg-tertiary p-6">
                        <time className="font-mono text-sm italic">JAN 2023 - APRIL 2023</time>
                        <h3 className="text-white text-[24px] font-bold">Hellwet Software Ltd.</h3>
                        <h4 className="font-mono font-semibold italic">Full-Stack Developer</h4>
                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li className="text-white-100 text-[14px] pl-1">Developed a full-fledged school management application with ReactJS, Redux, and TailwindCSS, ensuring a seamless user experience.</li>
                            <li className="text-white-100 text-[14px] pl-1">Created dynamic and reusable dashboard components, reducing codebase complexity by 20%.</li>
                        </ul>
                    </div>
                    <hr className="bg-white" />
                </li>
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-middle h-14 w-14 border-[3px] border-white rounded-full">
                        <Image src={icon} alt="image" className="h-10 w-10 rounded-full mx-auto mt-1" />
                    </div>
                    <div className="timeline-end md:mb-10 max-w-lg bg-tertiary p-6">
                        <time className="font-mono text-sm italic">June 2023 - Present</time>
                        <h3 className="text-white text-[24px] font-bold">Mynextfilm Private Ltd.</h3>
                        <h4 className="font-mono font-semibold italic">Front-End Developer</h4>
                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li className="text-white-100 text-[14px] pl-1">Led the development of Premises' Pool, an AI-based social platform using Redux and RTK Query for efficient state management.</li>
                            <li className="text-white-100 text-[14px] pl-1">Developed an advanced script-writing editor with TipTap integration, contributing to 30% of company revenue.</li>
                            <li className="text-white-100 text-[14px] pl-1">Integrated Razorpay and Stripe for seamless digital payments, enabling memberships and service access on the SaaS platform.</li>
                            <li className="text-white-100 text-[14px] pl-1">Refactored legacy code, improving performance and reducing server load by 20% through optimized development techniques.</li>
                            <li className="text-white-100 text-[14px] pl-1">Implemented an AI-powered comment section to enhance user interaction and creativity.</li>
                        </ul>
                    </div>
                    <hr className="bg-white" />
                </li>
            </ul>
        </div>
    );
};

export default Experience;
