"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  target?: string;
};

export default function PillButton({ href, children, target }: PillButtonProps) {
  return (
    <Link href={href} target={target} className="w-fit">
      <motion.div
        whileHover={{ translateY: -4 }}
        className="bg-foreground text-background border border-foreground rounded-full px-4 md:px-6 py-2 md:py-3 cursor-pointer transition-colors hover:bg-background hover:text-foreground text-base md:text-lg lg:text-xl flex flex-row gap-2 items-center"
      >
        {children}
      </motion.div>
    </Link>
  );
}