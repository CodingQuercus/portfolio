"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
    children: ReactNode;
    className?: string;
};


const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}