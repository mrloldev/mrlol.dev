"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SocialLink {
  prefix:
    | "Check my code on"
    | "Follow me on"
    | "Stalk me on"
    | "Connect with me on"
    | "Message me on"
    | "Chat with my";
  platform: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    prefix: "Check my code on",
    platform: "GitHub",
    href: "https://github.com/MrlolDev",
  },
  {
    prefix: "Follow me on",
    platform: "Twitter",
    href: "https://twitter.com/mrloldev",
  },
  {
    prefix: "Stalk me on",
    platform: "Instagram",
    href: "https://instagram.com/leo.rlhf",
  },
  {
    prefix: "Connect with me on",
    platform: "LinkedIn",
    href: "https://linkedin.com/in/leonardo-ollero",
  },
  {
    prefix: "Message me on",
    platform: "Email",
    href: "mailto:contact@mrlol.dev",
  },
  {
    prefix: "Chat with my",
    platform: "Delphi",
    href: "https://delphi.ai/leo",
  },
];

interface RotatingSocialLinkProps {
  wordIndex: number;
}

export default function RotatingSocialLink({
  wordIndex,
}: RotatingSocialLinkProps) {
  const currentIndex = wordIndex % socialLinks.length;

  const currentLink = socialLinks[currentIndex];

  return (
    <div className="flex flex-row items-baseline gap-2 -mt-2 overflow-hidden">
      <div className="h-[64px] flex items-center relative">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={currentLink.prefix}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-3xl md:text-6xl font-normal whitespace-nowrap block"
          >
            {currentLink.prefix}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="h-[64px] relative flex items-center"
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentLink.platform}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap"
          >
            <Link
              href={currentLink.href}
              target={
                currentLink.href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                currentLink.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group block"
            >
              <span className="text-3xl md:text-6xl font-normal text-gray-500 group-hover:underline">
                {currentLink.platform}
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
