import Link from "next/link";
import {
  FaHome,
  FaBlog,
  FaPen,
  FaFolderOpen,
  FaPlusSquare,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
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
            href="/dashboard/all-blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBlog className="h-5 w-5" />
            <span>All Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/create-blog"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaPen className="h-5 w-5" />
            <span>Create Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/all-projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaFolderOpen className="h-5 w-5" />
            <span>All Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/create-projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaPlusSquare className="h-5 w-5" />
            <span>Create Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/get-contact"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaEnvelope className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
