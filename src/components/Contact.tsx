'use client';

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import ContactForm from "./ContactForm";


const Contact = () => {


    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className="section-sub-text">Get in touch</p>
                <h3 className="section-head-text">Contact.</h3>

                <ContactForm />
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                {/* <EarthCanvas /> */}
            </motion.div>
        </div>
    );
};

export default Contact;
