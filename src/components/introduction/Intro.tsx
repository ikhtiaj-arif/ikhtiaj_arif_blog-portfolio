
"use client";
import backend from "@/assets/backend.png";
import creator from "@/assets/creator.png";
import mobile from "@/assets/mobile.png";
import web from "@/assets/web.png";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";
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

type Direction = "up" | "down" | "left" | "right";
// Animation Variants
const fadeIn = (direction: Direction = "up", delay: number = 0): Variants => {
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
        type: "spring", // ✅ now correctly inferred
        duration: 0.75,
        delay,
      },
    },
  };
};

const ExpandableSection = ({ title, children, previewCount = 1 }: { title: string; children: React.ReactNode; previewCount?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childArray = React.Children.toArray(children);
  const isLong = childArray.length > previewCount;

  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="text-secondary text-[16px] leading-[30px] space-y-4">
        {childArray.slice(0, previewCount)}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-4 overflow-hidden"
            >
              {childArray.slice(previewCount)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-accent font-semibold hover:text-white transition-colors text-sm flex items-center"
        >
          {isExpanded ? "Show less" : "Read more..."}
        </button>
      )}
    </div>
  );
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
          className="flex-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.1)] transition-all flex flex-col gap-10"
        >
          <ExpandableSection title="My Programming Journey" previewCount={1}>
            <p>My journey into development didn’t start with a grand plan—it started with curiosity. I was genuinely interested in how websites worked, and that curiosity slowly turned into something I wanted to pursue seriously.</p>
            <p>Over the past 2+ years, I’ve worked as a Frontend Developer, where I experienced what real-world development actually looks like—not just building UI, but dealing with bugs, unclear requirements, tight deadlines, and the responsibility of shipping features that people rely on. That phase shaped how I think about code today.</p>
            <p>I started with the basics—HTML, CSS, and JavaScript—and gradually moved into React.js and Next.js. As I grew, I didn’t want to stay limited to just frontend, so I pushed myself to learn backend technologies like Node.js, Express, MongoDB, PostgreSQL, and Prisma to understand how complete systems work.</p>
          </ExpandableSection>

          <ExpandableSection title="What I Enjoy" previewCount={1}>
            <p>What I enjoy most about development is solving problems that actually matter. Not just making things look good, but making them work reliably and efficiently.</p>
            <p>I like taking ownership of features—from understanding the problem, planning the approach, to delivering a clean and maintainable solution. Whether it’s managing complex state with Redux Toolkit, optimizing performance with React hooks, or building APIs that handle real-world edge cases, I try to approach everything with care and responsibility.</p>
            <p>I’ve worked on projects like booking systems and dashboards where small mistakes can break real functionality. Those experiences taught me to think deeper, test properly, and write code I can stand behind.</p>
          </ExpandableSection>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.1)] transition-all flex flex-col gap-10"
        >
          <ExpandableSection title="Beyond the Code" previewCount={1}>
            <p>Outside of coding, I try to keep a balance. I enjoy sports and painting—both help me reset and stay mentally fresh.</p>
            <p>These aren’t just hobbies for me; they help me come back to problems with a clearer mind and a better perspective, especially when I’m stuck on something challenging.</p>
          </ExpandableSection>

          <ExpandableSection title="My Personality" previewCount={1}>
            <p>I would describe myself as someone who is honest, reliable, and takes ownership of his work.</p>
            <p>I don’t like leaving things half-done or unclear. If I’m responsible for something, I make sure it’s properly thought through and delivered in a way that others can rely on. I’m also someone who learns by doing—most of what I know today came from building, making mistakes, and improving over time.</p>
            <p>My previous work environment wasn’t always ideal, but it taught me resilience, self-learning, and how to keep moving forward even without perfect guidance.</p>
            <p>Right now, I’m focused on becoming a strong full-stack engineer—someone who not only builds features, but understands the “why” behind decisions, writes solid code, and contributes meaningfully to a team.</p>
          </ExpandableSection>
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
