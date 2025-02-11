"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaArrowRight} from "react-icons/fa";

import LoginModal from "./LoginModal";
import { getUserFromToken } from "@/utils/getUser";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const session = getUserFromToken();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    ...(session ? [{ href: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <nav className="relative bg-white shadow dark:bg-neutral-950">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                className=""
                src="https://merakiui.com/images/full-logo.svg"
                alt="Logo"
                width={120}
                height={28}
              />
            </Link>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <FaBars className="w-6 h-6" />
                ) : (
                  <FaTimes className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-neutral-950 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
              >
                Login
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
