"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectCard = ({
    year,
    title,
    subtitle,
    desc1,
    desc2,
    desc3,
    quote,
    what,
    why,
    process,
    result,
    imageUrl,
    contribution,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-[#00000080] rounded-2xl shadow-lg overflow-hidden transition-all relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8 sm:p-10">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="text-base sm:text-lg text-[#f3f3f3] mb-1">{year}</h2>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#f3f3f3] mb-1">{title}</h2>
                    <h3 className="text-sm sm:text-md font-light text-[#328e6e] mb-3">{subtitle}</h3>

                    <p className="text-base text-[#f3f3f3] mb-2">{desc1}</p>
                    <p className="text-base text-[#f3f3f3] mb-2">{desc2}</p>
                    <p className="text-base text-[#f3f3f3] mb-2">{desc3}</p>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={imageUrl}
                        alt={`${title} image`}
                        loading="lazy"
                        className="rounded-xl w-full max-w-sm sm:max-w-md object-cover"
                    />
                </div>
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className={`ml-10 mb-5 w-[120px] text-md py-2 px-4 rounded-lg cursor-pointer 
                    ${isExpanded ? 'bg-[#f3f3f3] text-[#282828] hover:underline border-[#f3f3f3]' : 'text-[#f3f3f3] border border-[#f3f3f3] hover:underline hover:text-[#f3f3f3] focus:outline-none focus:ring-4 focus:ring-[#328E6E] focus:border-[#328E6E]'}`}
            >
                {isExpanded ? "Show less" : "Show more"}
            </motion.button>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
                exit={{ opacity: 0, height: 0}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden px-10 pb-6"
            >
                {isExpanded && (
                    <>
                        <p className="text-center text-lg mb-4"><strong>{quote}</strong></p>
                        <p className="text-base mb-4"><strong>What have we done?</strong><br />{what}</p>
                        <p className="text-base mb-4"><strong>Why have we done it?</strong><br />{why}</p>
                        <p className="text-base mb-4"><strong>Process</strong><br />{process}</p>
                        <p className="text-base mb-4"><strong>Result</strong><br />{result}</p>
                        <p className="text-md sm:text-base">
                            <strong>Individual contribution</strong><br />
                            {contribution}
                        </p>
                    </>
                )}
            </motion.div>
        </div>
    );
};

ProjectCard.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    desc3: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    what: PropTypes.string.isRequired,
    why: PropTypes.string.isRequired,
    process: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    contribution: PropTypes.string.isRequired,
};

export default ProjectCard;
