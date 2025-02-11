"use client"

import Link from "next/link";
import React, { useState } from "react";

// Custom icon components using SVG
const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const menuItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/all-blogs", label: "All Blogs" },
  { href: "/dashboard/create-blog", label: "Create Blog" },
  { href: "/dashboard/all-projects", label: "All Projects" },
  { href: "/dashboard/create-projects", label: "Create Project" },
  { href: "/dashboard/get-contact", label: "Contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-16 left-4 z-20 p-2 rounded-md bg-gray-200 text-gray-700"
      >
        {isOpen ? <IconClose /> : <IconMenu />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static
        inset-y-0 left-0
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        transition duration-200 ease-in-out
        bg-slate-100 p-4 rounded-xl
        w-64 lg:w-full
        z-10
      `}
      >
        <ul className="space-y-4 mt-12 lg:mt-0">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar