// components/projects/BackButton.tsx
"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";

type BackButtonProps = {
    label: string;
    fallbackHref?: string;
};

export default function BackButton({ label, fallbackHref = "/" }: BackButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push(fallbackHref);
        }
    };

    return (
        <motion.button
            type="button"
            onClick={handleClick}
            whileHover={{ translateY: -4 }}
            className="bg-foreground text-background border border-foreground px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-background hover:text-foreground cursor-pointer transition-colors flex flex-row gap-2 items-center text-base md:text-lg lg:text-xl"
        >
            <FaChevronLeft size={18} className="md:w-5 md:h-5" aria-hidden="true"/>
            {label}
        </motion.button>
    );
}