"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectCard = ({
    year,
    title,
    subtitle,
    desc,
    imageUrl,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-[#282828] dark:bg-[#f3f3f3] rounded-2xl shadow-lg overflow-hidden transition-all relative h-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6 sm:p-10">
                <div className="flex flex-col justify-center items-start gap-2">
                    <h2 className="text-base sm:text-lg text-[#f3f3f3] dark:text-[#282828]">{year}</h2>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#f3f3f3] dark:text-[#282828]">{title}</h2>
                    <h3 className="text-sm sm:text-md font-light text-[#328e6e]">{subtitle}</h3>

                    <p className="text-base text-[#f3f3f3] dark:text-[#282828] mb-2">{desc}</p>

                    {/*<motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-[120px] h-[48px] text-md py-2 px-4 rounded-lg cursor-pointer bg-[#328e6e] text-[#f3f3f3] hover:underline shadow-md"
                    >
                        Read more
                    </motion.button>*/}
                </div>

                <div className="flex justify-center items-center">
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={`${title} image`}
                            loading="lazy"
                            className="rounded-xl w-full max-w-[240px] h-auto object-contain"
                        />
                    )}

                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
