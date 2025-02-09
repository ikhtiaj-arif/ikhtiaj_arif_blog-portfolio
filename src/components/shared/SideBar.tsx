import Link from "next/link";
import { FaCog, FaHome, FaUser } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="bg-tertiary min-h-screen p-4 rounded-xl">
            <ul className="space-y-4">
                <li>
                    <Link
                        href="/dashboard"
                        className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                    >
                        <FaHome className="h-5 w-5" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/user-info"
                        className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                    >
                        <FaUser className="h-5 w-5" />
                        <span>User Info</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/blogs"
                        className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                    >
                        <FaCog className="h-5 w-5" />
                        <span>Blogs</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/projects"
                        className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                    >
                        <FaCog className="h-5 w-5" />
                        <span>Projects</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
