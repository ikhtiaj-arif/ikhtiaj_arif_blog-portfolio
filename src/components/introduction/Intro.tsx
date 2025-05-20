/* eslint-disable react/no-unescaped-entities */
"use client";

import backend from "@/assets/backend.png";
import creator from "@/assets/creator.png";
import mobile from "@/assets/mobile.png";
import web from "@/assets/web.png";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "Full-stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Continuous Learner",
    icon: creator,
  },
];

// Animation Variants
const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.75,
        delay,
      },
    },
  };
};

const Intro = () => {
  return (
    <div className="py-10">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate="show"
      >
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
      >
        I&apos;m a full-stack web developer with 2 years of experience, currently focused on frontend development. I specialize in building scalable and high-performance web applications using modern technologies like React, Redux, Next.js, Node.js, and TypeScript. I have hands-on expertise with both SQL and NoSQL databases including PostgreSQL and MongoDB, using tools like Prisma and Mongoose for seamless data handling. I'm passionate about solving real-world problems, continuously learning, and delivering clean, efficient code that brings ideas to life.
      </motion.p>

      <motion.div
        className="mt-20 flex flex-wrap gap-10"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default Intro;
