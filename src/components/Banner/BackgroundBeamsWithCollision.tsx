"use client";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="max-w-2xl mx-auto p-2 mb-12 text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="https://i.ibb.co.com/4MqxFgG/images-7.jpg"
            alt="Profile"
            className="rounded-full border-4 border-neutral-300 shadow-lg object-cover"
            width={200}
            height={100}
          />
        </div>

        {/* Heading */}
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          My Personal Projects
        </h1>

        {/* Description */}
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm relative z-10">
          I love working on web development projects, especially in **MERN
          Stack, Next.js, and Blockchain**. My focus is on **building scalable
          applications**, implementing **secure authentication**, and improving
          user experience with **modern UI frameworks** like **Tailwind CSS &
          shadcn UI**.
        </p>

        {/* Resume Button */}
        <div className="flex justify-center items-center gap-2">
          <button className="px-6 py-2 flex justify-center items-center gap-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <FaProjectDiagram className="" />
            <span className="">Projects</span>
          </button>
          <button className=" flex justify-center items-center gap-2 px-6 py-2 font-medium tracking-wide text-blue-600 border-2 border-blue-600 capitalize transition-colors duration-300 transform bg-transparent rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <FaDownload className="" />
            <span> Resume</span>
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
