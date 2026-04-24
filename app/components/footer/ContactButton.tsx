"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ContactButtonProps = {
    href: string;
    label: string;
    icon: React.ReactNode;
    external?: boolean;
};

export default function ContactButton({
    href,
    label,
    icon,
    external,
}: ContactButtonProps) {
    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            className="w-44 md:w-auto md:flex-1"
        >
            <motion.div
                whileHover={{ translateY: -4 }}
                className="bg-foreground text-background border border-foreground rounded-full px-6 py-3 md:px-8 md:py-4 lg:py-8 cursor-pointer transition-colors hover:bg-background hover:text-foreground text-base md:text-lg lg:text-xl flex flex-row gap-2 items-center justify-center"
            >
                {icon}
                {label}
            </motion.div>
        </Link>
    );
}