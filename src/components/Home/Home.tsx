"use client";
import { BackgroundBeamsWithCollisionDemo } from "../Banner/BackgroundBeamsWithCollision";

import Projects from "../Projects/Projects";
import { Skill } from "../Skill/Skill";
import { technologies } from "../ui/AllSkillIcon";
import { useEffect, useState } from "react";
import { Project } from "../Projects/Projects";
import Link from "next/link";
import { backend } from "@/utils/backend";
import Simple from "../simple/Simple";
import Blog from "../Blog/Blog";
import { BlogTypes } from "@/app/blogs/page";

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogTypes[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`${backend}/admin/projects`);
      const { data } = await res.json();
      setProjects(data.slice(0, 2));
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`${backend}/admin/blogs`);
      const { data } = await res.json();
      setBlogs(data.slice(0, 3));
    };
    fetchBlogs();
  }, []);

  return (
    <div className="">
      <BackgroundBeamsWithCollisionDemo />

      <div className="max-w-7xl mx-auto px-6">
        <Projects projects={projects} />

        <div className="text-center mt-6">
          <Link href="/projects">
            <button className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              See All Projects
            </button>
          </Link>
        </div>
      </div>

      <Skill items={technologies} />
      <div className="max-w-7xl mx-auto px-6">
        <Blog blogs={blogs} />

        <div className="text-center my-6">
          <Link href="/blogs">
            <button className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              See All Blogs
            </button>
          </Link>
        </div>
      </div>
      <Simple />
    </div>
  );
};

export default Home;
