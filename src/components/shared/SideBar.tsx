"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCog, FaHome, FaUser } from "react-icons/fa";

const Sidebar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? "text-white bg-black-100" : "text-secondary hover:text-white";
    console.log(pathname);
    return (
        <div className="bg-tertiary min-h-screen p-4 rounded-xl">
            <ul className="space-y-4">
                <li>
                    <Link
                        href="/dashboard"
                        className={`${isActive('/dashboard')} flex items-center sm:space-x-2 p-3 rounded-md hover:bg-black-100 text-gray-300`}
                    >
                        <FaHome className="h-5 w-5" />
                        <span className="hidden sm:inline">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/user-info"
                        className={`${isActive('/dashboard/user-info')} flex items-center sm:space-x-2 p-3 rounded-md hover:bg-black-100 text-gray-300`}
                    >
                        <FaUser className="h-5 w-5" />
                        <span className="hidden sm:inline">User Info</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/blogs"
                        className={`${isActive('/dashboard/blogs')} flex items-center sm:space-x-2 p-3 rounded-md hover:bg-black-100 text-gray-300`}
                    >
                        <FaCog className="h-5 w-5" />
                        <span className="hidden sm:inline">Blogs</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/projects"
                        className={`${isActive('/dashboard/projects')} flex items-center sm:space-x-2 p-3 rounded-md hover:bg-black-100 text-gray-300`}
                    >
                        <FaCog className="h-5 w-5" />
                        <span className="hidden sm:inline">Projects</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
