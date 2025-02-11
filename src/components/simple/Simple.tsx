import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons from react-icons/fa

const Simple = () => {
  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="max-w-7xl px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className="font-medium text-blue-500 dark:text-blue-400">
            Contact Us
          </h1>

          <p className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Get in touch
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100 dark:bg-gray-800">
              <FaEnvelope className="w-6 h-6" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>

            <p className="mt-2 text-blue-500 dark:text-blue-400">
              barkatullah585464@gmail.com
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100 dark:bg-gray-800">
              <FaPhone className="w-6 h-6" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Phone
            </h2>

            <p className="mt-2 text-blue-500 dark:text-blue-400">01834889596</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
