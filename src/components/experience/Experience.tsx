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
                <p className={`section-sub-text`}>Introduction</p>
                <h2 className={`section-head-text`}>Overview.</h2>
            </motion.div>

            <ul className="timeline timeline-snap-icon  max-md:timeline-compact timeline-vertical mt-20">
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-middle  h-14 w-14 border-[3px] border-white rounded-full">
                        <Image src={icon} alt="image" className="h-10 w-10 rounded-full mx-auto mt-1" />
                    </div>
                    <div className="timeline-start mb-10 md:text-end max-w-lg bg-tertiary p-6">
                        <time className="font-mono italic">1984</time>
                        <h3 className="text-white text-[24px] font-bold">First Macintosh computer</h3>
                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li className="text-white-100 text-[14px] pl-1 "> iMac is a family of all-in-one Mac desktop</li>
                            <li className="text-white-100 text-[14px] pl-1 "> iMac is a family of all-in-one Mac desktop</li>
                            <li className="text-white-100 text-[14px] pl-1 "> iMac is a family of all-in-one Mac desktop</li>
                            <li className="text-white-100 text-[14px] pl-1 -tracking-wider"> iMac is a family of all-in-one Mac desktop</li>
                        </ul>
                    </div>
                    <hr className="bg-white" />
                </li>
                <li>
                    <hr className="bg-white" />
                    <div className="timeline-middle  h-14 w-14 border-[3px] border-white rounded-full">
                        <Image src={icon} alt="image" className="h-10 w-10 rounded-full mx-auto mt-1" />
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                        and has evolved through seven distinct forms
                    </div>
                    <hr className="bg-white" />
                </li>

            </ul>
        </div>


    );
};

export default Experience;