'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

import { EASE_IN_OUT } from './motionTokens';

/*
 * Scroll reveal in the same language as the hero underlines: a block's top
 * hairline draws in from the left when it scrolls into view (once per page
 * view). The content itself never animates, so it is readable at once.
 */

const line: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE_IN_OUT } },
};

const containers = {
    div: motion.div,
    article: motion.article,
    li: motion.li,
    section: motion.section,
};

export function Reveal({
    as = 'div',
    className,
    children,
}: {
    as?: keyof typeof containers;
    className?: string;
    children: ReactNode;
}) {
    const Container = containers[as];
    return (
        <Container
            initial="hidden"
            whileInView="visible"
            // Start once the top edge is a little way up the screen. A ratio such
            // as "20% visible" would never be reached by very tall sections.
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            className={className}
        >
            {children}
        </Container>
    );
}

/** The top hairline that draws in. Its parent needs `relative`. */
export function RevealLine() {
    return (
        <motion.span
            aria-hidden="true"
            variants={line}
            className="absolute inset-x-0 top-0 h-px origin-left bg-foreground"
        />
    );
}
