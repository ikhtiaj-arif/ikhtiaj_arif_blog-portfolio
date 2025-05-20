"use client";

import { Github, Linkedin, Facebook } from "lucide-react";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-tertiary text-base-content mt-10">
            {/* Brand Info */}
            <aside>
                <p className="font-bold text-lg">
                    Ikhtiaj Arif | Portfolio
                    <br />
                    <span className="text-sm font-normal">Building solutions since 2023</span>
                </p>
                <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved</p>
            </aside>

            {/* Navigation */}
            <nav>
                <h6 className="footer-title">Navigation</h6>
                {/* <Link href="/about" className="link link-hover">About</Link> */}
                <Link href="/projects" className="link link-hover">Projects</Link>
                <Link href="/blogs" className="link link-hover">Blog</Link>
                <Link href="/contact" className="link link-hover">Contact</Link>
            </nav>

            {/* Social Media */}
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/ikhtiaj-arif" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 hover:text-primary" />
                    </a>
                    <a href="https://www.linkedin.com/feed/?trk=public_post_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 hover:text-primary" />
                    </a>
                    <a href="https://www.facebook.com/IkhtiajArif/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-5 h-5 hover:text-primary" />
                    </a>
                </div>
            </nav>
        </footer>
    );
}
