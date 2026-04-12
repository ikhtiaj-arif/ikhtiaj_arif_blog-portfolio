'use client'
import close from "@/assets/close.svg";
import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { id: "/", title: "Home" },
    { id: "/#about", title: "About" },
    { id: "/#skills", title: "Skills" },
    { id: "/#experience", title: "Experience" },
    { id: "/#projects", title: "Projects" },
    { id: "/blog", title: "Blog" },
    { id: "/#contact", title: "Contact" },
];

export type UserProps = {
    user?: {
        name?: string | null | undefined,
        email?: string | null | undefined,
        image?: string | null | undefined
    }
}

const Navbar = () => {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path ? "text-white font-semibold" : "text-secondary hover:text-white transition-colors";

    return (
        <nav className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
                <Link
                    href="/"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    className="flex items-center gap-2"
                >
                    <Image src={logo} alt="logo" height={40} width={40} className="object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Ikhtiaj Arif &nbsp;
                        <span className="sm:block hidden text-accent">| Portfolio</span>
                    </p>
                </Link>

                <ul className="list-none hidden lg:flex flex-row gap-8">
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <Link href={nav.id} className={`${isActive(nav.id)} text-[15px] font-medium tracking-wide`}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <Image
                        src={toggle ? close : menu}
                        alt="menu"
                        height={28}
                        width={28}
                        className="object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-tertiary/90 backdrop-blur-xl absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl shadow-2xl ring-1 ring-white/10 transition-all`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${isActive(nav.id)} font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                    }}
                                >
                                    <Link href={nav.id}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;