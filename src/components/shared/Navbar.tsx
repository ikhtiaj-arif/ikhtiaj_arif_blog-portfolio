'use client'
import logo from "@/assets/logo.svg";
import { styles } from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "text-white" : "text-secondary hover:text-white";

    return (
        <div className={`${styles.paddingX} w-full  py-5 fixed top-0 z-20 bg-primary`}>

            <div className="w-[93%] flex justify-between items-center max-w-7xl mx-auto ">

                <div className="flex items-center ">

                    <div className="relative lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="absolute mt-3 z-10 p-2 shadow-md bg-white rounded-md w-52"
                        >
                            <li className="py-2 px-4 hover:bg-gray-100">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="hover:text-gray-600">
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li className="hover:text-gray-600">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="hover:text-gray-600">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

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
                </div>

                <div className="hidden lg:flex">
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
                        <li className="hover:text-gray-600">
                            <Link href="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <button className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200">
                        Logout
                    </button>
                    <Link
                        href="/login"
                        className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
                    >
                        Login
                    </Link>
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