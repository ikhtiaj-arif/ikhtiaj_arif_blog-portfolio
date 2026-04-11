"use client";

import { Github, Linkedin, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Footer() {
    return (
        <footer className="w-full bg-primary py-10 mt-10 border-t border-accent/20">
            <div className="max-w-7xl mx-auto padding-x flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Brand Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <Image src={logo} alt="logo" height={36} width={36} className="object-contain" />
                        <span className="font-bold text-lg text-white">Ikhtiaj Arif</span>
                    </Link>
                    <p className="text-secondary text-sm max-w-xs">
                        Building scalable and dynamic web applications since 2023.
                    </p>
                    <p className="text-secondary text-xs mt-4">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center md:items-start">
                    <h6 className="text-white font-semibold mb-4">Navigation</h6>
                    <nav className="flex flex-col gap-2 text-secondary text-sm text-center md:text-left">
                        <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
                        <Link href="/#skills" className="hover:text-accent transition-colors">Skills</Link>
                        <Link href="/#projects" className="hover:text-accent transition-colors">Projects</Link>
                        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                        <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
                    </nav>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h6 className="text-white font-semibold mb-4">Social Media</h6>
                    <div className="flex gap-4">
                        <a href="https://github.com/ikhtiaj-arif" target="_blank" rel="noopener noreferrer" className="p-2 bg-tertiary rounded-full hover:bg-accent/20 hover:text-accent transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=public_post_google-one-tap-submit" target="_blank" rel="noopener noreferrer" className="p-2 bg-tertiary rounded-full hover:bg-accent/20 hover:text-accent transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-tertiary rounded-full hover:bg-accent/20 hover:text-accent transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/IkhtiajArif/" target="_blank" rel="noopener noreferrer" className="p-2 bg-tertiary rounded-full hover:bg-accent/20 hover:text-accent transition-all">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
