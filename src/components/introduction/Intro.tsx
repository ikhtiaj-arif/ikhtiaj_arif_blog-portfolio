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
    <section id="about" className="py-20">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">About Me.</h2>
      </motion.div>

      <div className="mt-8 flex flex-col lg:flex-row gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.1)] transition-all"
        >
          <h3 className="text-xl font-bold text-white mb-4">My Programming Journey</h3>
          <p className="text-secondary text-[16px] leading-[30px] mb-6">
            My programming journey began with a curiosity about how websites worked, which quickly evolved into a passion for building them. Over the past few years, I have immersed myself in the world of web development, starting with basic HTML/CSS and advancing to modern frameworks like React, Next.js, and Node.js. What started as a hobby has turned into a fulfilling career path.
          </p>

          <h3 className="text-xl font-bold text-white mb-4">What I Enjoy</h3>
          <p className="text-secondary text-[16px] leading-[30px]">
            I thrive on crafting seamless user experiences and designing scalable architectures. Whether it's bringing a complex Figma design to life with pixel-perfect precision or architecting robust backend APIs with PostgreSQL and Prisma, I enjoy the full spectrum of software development. I am particularly drawn to projects that challenge me to learn new technologies and think creatively.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.1)] transition-all"
        >
          <h3 className="text-xl font-bold text-white mb-4">Beyond the Code</h3>
          <p className="text-secondary text-[16px] leading-[30px] mb-6">
            When I'm not writing code or debugging, you can usually find me exploring other creative and active outlets. I have a strong passion for sports and painting, which help me maintain a balanced lifestyle and bring fresh perspectives to my problem-solving skills at work.
          </p>

          <h3 className="text-xl font-bold text-white mb-4">My Personality</h3>
          <p className="text-secondary text-[16px] leading-[30px]">
            I consider myself a continuous learner and a highly collaborative team player. I believe that good communication is just as important as good code. I approach challenges with a positive mindset and a strong determination to find elegant, efficient solutions. Let's build something amazing together!
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 flex flex-wrap justify-center gap-10"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default Intro;
