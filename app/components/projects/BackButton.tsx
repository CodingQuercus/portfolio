'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronLeft } from 'react-icons/fa';

type BackButtonProps = {
    label: string;
};

export default function BackButton({ label }: BackButtonProps) {
    return (
        <Link href="/projects">
            <motion.div
                whileHover={{ translateY: -4 }}
                className="bg-foreground text-background border border-foreground px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-background hover:text-foreground cursor-pointer transition-colors flex flex-row gap-2 items-center text-base md:text-lg lg:text-xl"
            >
                <FaChevronLeft
                    size={18}
                    className="md:w-5 md:h-5"
                    aria-hidden="true"
                />
                {label}
            </motion.div>
        </Link>
    );
}
