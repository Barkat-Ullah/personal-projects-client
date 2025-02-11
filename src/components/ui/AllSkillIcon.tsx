"use client"
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { FaServer } from "react-icons/fa"; // Fixed import
import { Skill } from "../Skill/Skill";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Skill items={technologies} />
    </div>
  );
}

export const technologies = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "text-blue-500",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-blue-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "Mongoose",
    icon: FaServer,
    color: "text-red-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "DBMS",
    icon: GiDatabase,
    color: "text-purple-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
  },
];
