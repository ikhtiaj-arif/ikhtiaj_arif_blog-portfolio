/* eslint-disable react/no-unescaped-entities */
'use client'

import backend from "@/assets/backend.png";
import creator from "@/assets/creator.png";
import mobile from "@/assets/mobile.png";
import web from "@/assets/web.png";
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


const Intro = () => {
  return (
    <div className="py-10">
      <div >
        <p className={`section-sub-text`}>Introduction</p>
        <h2 className={`section-head-text`}>Overview.</h2>
      </div>
      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a full-stack web developer with 2 years of experience, currently focused on frontend development. I specialize in building scalable and high-performance web applications using modern technologies like React, Redux, Next.js, Node.js, and TypeScript. I have hands-on expertise with both SQL and NoSQL databases including PostgreSQL and MongoDB, using tools like Prisma and Mongoose for seamless data handling. I'm passionate about solving real-world problems, continuously learning, and delivering clean, efficient code that brings ideas to life.
      </p>
      {/* <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled web developer with experience in MERN stack, JavaScript,
        TypeScript, and expertise in the latest frameworks such as NodeJS,
        ReactJS, NextJS, and ExpressJS. I'm a quick learner and collaborate
        deeply with fellow developers and clients to get scalable and efficient
        solutions to real-world problems. Let's work together and turn your
        vision into reality.
      </p> */}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>

  );
};

export default Intro;