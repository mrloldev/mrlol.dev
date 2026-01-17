"use client";

import { useState } from "react";
import Link from "next/link";
import RotatingImage from "./RotatingImage";
import TypewriterEffect from "./TypewriterEffect";
import RotatingText from "./RotatingText";
import RotatingSocialLink from "./RotatingSocialLink";
import { motion, AnimatePresence } from "framer-motion";

const names = ["Mrlol", "Leo", "MrlolDev", "Leonardo"];
const roles = ["builder", "entrepreneur", "developer", "student"];
const sections = ["story", "projects", "trips"];
const sectionRoutes: Record<string, string> = {
  story: "/story",
  projects: "/projects",
  trips: "/travels",
};

export default function Main() {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionIndex = wordIndex % sections.length;

  return (
    <div className="flex flex-col w-full max-w-4xl px-4 md:px-6 mx-auto h-fit items-start justify-center">
      <div className="mb-8 flex justify-center md:justify-start w-full">
        <RotatingImage
          images={["/pfp/1.png", "/pfp/2.png", "/pfp/3.png", "/pfp/4.png"]}
          wordIndex={wordIndex}
          alt="MrlolDev / Leo / MrlolDev / Leonardo profile picture"
        />
      </div>

      <div className="flex flex-col items-start gap-0 flex-1 h-fit">
        <h1 className="flex items-baseline gap-2 text-3xl md:text-6xl font-normal">
          I&apos;m
          <span className="w-[150px] md:w-[450px]">
            <TypewriterEffect
              words={names}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={3000}
              onWordChange={setWordIndex}
            />
          </span>
        </h1>

        <h1 className="flex items-baseline gap-2 text-3xl md:text-6xl font-normal">
          I&apos;m a
          <span className="w-[220px] md:w-[450px]">
            <RotatingText words={roles} wordIndex={wordIndex} />
          </span>
        </h1>

        <RotatingSocialLink wordIndex={wordIndex} />

        <h1 className="flex items-baseline gap-2 text-3xl md:text-6xl font-normal">
          Check my
          <span className="w-[180px] md:w-[300px] h-[64px] overflow-hidden relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={sections[sectionIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="whitespace-nowrap block"
              >
                <Link
                  href={sectionRoutes[sections[sectionIndex]]}
                  className="group block"
                >
                  <span className="text-gray-500 group-hover:underline whitespace-nowrap">
                    {sections[sectionIndex]}
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </span>
        </h1>
      </div>
    </div>
  );
}
