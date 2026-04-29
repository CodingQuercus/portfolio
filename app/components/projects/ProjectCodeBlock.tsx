"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCodeBlockProps = {
    code: string;
    description?: string;
};

export default function ProjectCodeBlock({ code, description }: ProjectCodeBlockProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <figure className="flex flex-col gap-2 md:3/4 lg:w-2/3">
            <div className="rounded-2xl md:rounded-3xl bg-foreground/5 overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{ height: expanded? "auto" : "8rem" }}
                    transition={{duration: 0.4, ease: "easeInOut" }}
                >
                    <pre className={`p-4 md:p-6 overflow-x-auto text-sm leading-relaxed transition-all duration-300 ${expanded ? "" : "max-h-32 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"}`}>
                        <code>{code}</code>
                    </pre>
                    <AnimatePresence>
                        {!expanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-0 left-0 h-16 gradient-to-t from-foreground/5 to-transparent"
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="w-full py-3 text-sm text-foreground/60 hover:text-foreground/80 transition-colors border-t border-foreground/10"
                >
                    {expanded ? "Show less" : "Show full implementation"}
                </button>
            </div>
            {description && (
                <figcaption className="text-sm text-center text-foreground/60">
                    {description}
                </figcaption>
            )}
        </figure>
    );
}