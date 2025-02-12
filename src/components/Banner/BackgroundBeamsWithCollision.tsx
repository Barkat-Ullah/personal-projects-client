"use client";
import { useRouter } from "next/navigation";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";
import ImageBanner from "./ImageBanner";

export function BackgroundBeamsWithCollisionDemo() {
  const router = useRouter();

  // Resume Download Function
  const handleDownload = () => {
    const resumeUrl = "/Resume_of_Barkat_Ullah.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Barkat's_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="max-w-2xl mx-auto p-2 mb-12 text-center">
        {/* Profile Image */}
        <div className="flex justify-center my-3">
          <ImageBanner />
        </div>

        {/* Heading */}
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          My Personal Projects
        </h1>

        {/* Description */}
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm relative z-10">
          I love working on web development projects, especially in{" "}
          <b>MERN Stack, Next.js, and Full Stack</b>. My focus is on{" "}
          <b>building scalable applications</b>, implementing{" "}
          <b>secure authentication</b>, and improving user experience with{" "}
          <b>modern UI frameworks</b> like <b>Tailwind CSS & shadcn UI</b>.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => router.push("/projects")}
            className="px-6 py-2 flex justify-center items-center gap-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <FaProjectDiagram />
            <span>Projects</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex justify-center items-center gap-2 px-6 py-2 font-medium tracking-wide text-blue-600 border-2 border-blue-600 capitalize transition-colors duration-300 transform bg-transparent rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <FaDownload />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
