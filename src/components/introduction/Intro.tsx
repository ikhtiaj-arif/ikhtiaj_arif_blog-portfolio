/* eslint-disable react/no-unescaped-entities */
'use client'

import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import ServiceCard from "./ServiceCard";




const Intro = () => {
    return (
        <div className="py-10">
        <motion.div variants={textVariant()}>
          <p className={`section-sub-text`}>Introduction</p>
          <h2 className={`section-head-text`}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("left", "tween", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I&apos;m a skilled web developer with experience in MERN stack, JavaScript,
          TypeScript, and expertise in the latest frameworks such as NodeJS,
          ReactJS, NextJS, and ExpressJS. I'm a quick learner and collaborate
          deeply with fellow developers and clients to get scalable and efficient
          solutions to real-world problems. Let's work together and turn your
          vision into reality.
        </motion.p>
  
        <div className="mt-20 flex flex-wrap gap-10">
            <ServiceCard  />
          {/* {services.map((service, index) => (
          ))} */}
        </div>
        </div>
      
    );
};

export default Intro;