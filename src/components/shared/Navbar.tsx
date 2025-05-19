'use client'
import close from "@/assets/close.svg";
import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export type UserProps = {
    user?: {
        name?: string | null | undefined,
        email?: string | null | undefined,
        image?: string | null | undefined
    }
}
const Navbar = ({ session }: { session: UserProps | null }) => {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (session) {
            localStorage.setItem("session", JSON.stringify(session));
        }
    }, [session]);

    const isActive = (path: string) => pathname === path ? "text-white" : "text-secondary hover:text-white";

    return (
        <div className={`padding-x w-full  py-5 fixed top-0 z-20 bg-primary`}>

            <div className="w-[93%] flex justify-between items-center max-w-7xl mx-auto ">

                <div className="w-full lg:w-auto justify-between flex items-center ">
                    <Link
                        href="/"
                        className="ml-4 text-xl font-semibold flex items-center gap-1 text-gray-800 hover:text-gray-600"
                    >
                        <Image src={logo} alt="logo" height={36} width={36} className="object-contain" />
                        <p className="text-white text-[18px] font-bold cursor-pointer flex">
                            Ikhtiaj Arif &nbsp;
                            <span className="sm:block hidden">|&nbsp; Portfolio</span>
                        </p>
                    </Link>

                    <div className="relative lg:hidden">
                        <div
                            onClick={() => setToggle(!toggle)}
                            tabIndex={0}
                            role="button"
                            className="p-2 h-10 w-10 rounded-md hover:bg-black-100 focus:outline-none"
                        >
                            <Image src={toggle ? close : menu} alt="menu" className="object-fill:cover" height={30} width={30} />
                        </div>
                        {
                            toggle && <ul
                                tabIndex={0}
                                className="absolute mt-3 right-0 z-10 p-4  shadow-md bg-tertiary rounded-md w-52"
                            >
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/" className={isActive('/')} >Home</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/projects" className={isActive('/projects')}>Projects</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2" >
                                    <Link href="/blog" className={isActive('/blog')}>Blog</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                                </li>
                                {/* <li className="hover:text-gray-600 p-2 mb-2">
                                    <Link href="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                                </li> */}
                                {/* {
                                    session?.user ? (
                                        <button onClick={() => signOut()} className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200">
                                            Logout
                                        </button>) :
                                        (<Link
                                            href="/login"
                                            className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
                                        >
                                            Login
                                        </Link>)
                                } */}
                            </ul>
                        }

                    </div>
                </div>

                <div className="hidden lg:flex lg:ml-[-120px]">
                    <ul className="flex space-x-6 text-gray-800">
                        <li className="hover:text-gray-600">
                            <Link href="/" className={isActive('/')} >Home</Link>
                        </li>
                        <li className="hover:text-gray-600">
                            <Link href="/projects" className={isActive('/projects')}>Projects</Link>
                        </li>
                        <li className="hover:text-gray-600">
                            <Link href="/blog" className={isActive('/blog')}>Blog</Link>
                        </li>
                        <li className="hover:text-gray-600">
                            <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                        </li>
                        {/* <li className="hover:text-gray-600">
                            <Link href="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                        </li> */}
                    </ul>
                </div>

                <div className="hidden md:flex items-center px-5">

                    {/* {
                        session?.user ? (
                            <button onClick={() => signOut()} className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200">
                                Logout
                            </button>) :
                            (<Link
                                href="/login"
                                className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
                            >
                                Login
                            </Link>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;