'use client';

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import ContactForm from "./ContactForm";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 overflow-hidden">
            <div className="xl:flex-row flex-col flex gap-10">
                {/* Left Side: Contact Form */}
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="flex-[0.6] bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                >
                    <p className="section-sub-text">Get in touch</p>
                    <h3 className="section-head-text">Contact.</h3>

                    <div className="mt-8">
                        <ContactForm />
                    </div>
                </motion.div>

                {/* Right Side: Contact Information */}
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="flex-[0.4] bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col justify-center gap-10"
                >
                    <div>
                        <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
                        <p className="text-secondary mb-8">
                            Feel free to reach out to me directly using any of the methods below. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row items-center gap-4 group">
                            <div className="w-14 h-14 bg-primary rounded-full flex justify-center items-center group-hover:bg-accent transition-colors duration-300 shadow-md">
                                <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <p className="text-secondary text-sm">Email</p>
                                <a href="mailto:md.ikhtaijarif@gmail.com" className="text-white font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                                    md.ikhtaijarif@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-4 group">
                            <div className="w-14 h-14 bg-primary rounded-full flex justify-center items-center group-hover:bg-green-500 transition-colors duration-300 shadow-md">
                                <Phone className="w-6 h-6 text-green-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <p className="text-secondary text-sm">Phone</p>
                                <a href="tel:+8801753166323" className="text-white font-semibold text-lg group-hover:text-green-500 transition-colors duration-300">
                                    +880 17 5316 6323
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-4 group">
                            <div className="w-14 h-14 bg-primary rounded-full flex justify-center items-center group-hover:bg-green-600 transition-colors duration-300 shadow-md">
                                <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <p className="text-secondary text-sm">WhatsApp</p>
                                <a href="https://wa.me/8801753166323" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-lg group-hover:text-green-600 transition-colors duration-300">
                                    +880 17 5316 6323
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
