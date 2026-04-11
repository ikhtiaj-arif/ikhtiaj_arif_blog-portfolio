'use client'

import arif from '@/assets/ikhtiaj.webp';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import TypingText from './shared/TypingText';

const socialLinks = [
    { icon: FaGithub, href: "https://github.com", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "https://twitter.com", color: "hover:text-sky-400" },
    { icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-600" },
];

const Hero = () => {
    return (
        <section id="hero" className="relative w-full min-h-screen mx-auto flex items-center pt-24 pb-12">
            <div className="padding-x max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 w-full z-10">
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                        <div className="flex flex-col justify-center items-center mt-2">
                            <div className="w-5 h-5 rounded-full bg-accent" />
                            <div className="w-1 sm:h-80 h-40 violet-gradient" />
                        </div>
                        <div className="flex flex-col">
                            <TypingText
                                text={
                                    <h1 className="hero-head-text text-white">
                                        Hi, I'm <span className="text-accent">Arif</span>
                                    </h1>
                                }
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="hero-sub-text mt-4 max-w-2xl text-white-100"
                            >
                                Full Stack Developer crafting engaging, seamless, <br className="sm:block hidden" />
                                and scalable digital experiences.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="mt-8 flex flex-wrap items-center gap-6"
                            >
                                <a
                                    href="/ikhtiaj_resume.pdf"
                                    download="ikhtiaj_resume.pdf"
                                    className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-accent font-pj rounded-xl hover:bg-transparent hover:text-accent border-2 border-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                                >
                                    Download Resume
                                </a>

                                <div className="flex gap-4 items-center">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-2xl text-secondary transition-colors duration-300 ${social.color}`}
                                        >
                                            <social.icon />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end items-center mt-10 md:mt-0"
                >
                    <div className="relative w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                        <Image
                            src={arif}
                            alt="Ikhtiaj Arif"
                            fill
                            className="rounded-full object-cover border-4 border-accent/50 shadow-2xl relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;