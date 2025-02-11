
'use client'

import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import FeedbackCard from "./FeedbackCard";


const Feedback = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div
                className={`${'padding'} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={`section-sub-text`}>What Others Say</p>
                    <h2 className={`section-head-text`}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`padding-x -mt-20 pb-14 flex flex-wrap gap-7`}>

                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />

            </div>
        </div>
    );
};

export default Feedback;