import { FaArrowAltCircleLeft } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div>
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              We can’t find that page
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesnt exist or has been
              moved.
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <Link href="/">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                  <FaArrowAltCircleLeft />

                  <span>Go back</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default NotFound;
