"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";

type BackButtonProps = {
    href: string;
    label: string;
};

export default function BackButton({ href, label }: BackButtonProps) {
    return (
        <motion.div
            whileHover={{ translateX: -4 }}
            className="bg-foreground text-background px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-mintgreen cursor-pointer transition-colors"
        >
            <Link
                href={href}
                className="flex flex-row gap-2 items-center text-base md:text-lg lg:text-xl"
            >
                <FaChevronLeft size={18} className="md:w-5 md:h-5" />
                {label}
            </Link>
        </motion.div>
    );
}