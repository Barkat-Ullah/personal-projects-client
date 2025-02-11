"use client"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type React from "react";
import { cn } from "../lib/utils";

export const Skill = ({
  items,
  className,
}: {
  items: {
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-3 gap-4 py-10 max-w-7xl mx-auto",
        className
      )}
    >
        
      {items?.map((item, idx) => (
        <Link
          href="#"
          key={item.name}
          className="relative group block"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardIcon icon={item.icon} color={item.color} />
            <CardTitle>{item.name}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-3 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardIcon = ({
  icon: Icon,
  color,
}: {
  icon: React.ElementType;
  color: string;
}) => {
  return <Icon className={cn("w-8 h-8 mb-2 mx-auto", color)} />;
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-semibold text-sm text-center",
        className
      )}
    >
      {children}
    </h4>
  );
};
