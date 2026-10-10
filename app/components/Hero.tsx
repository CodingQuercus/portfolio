'use client';

import { motion, Transition } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

import {
    CHAR_DURATION,
    FIRST,
    LAST,
    PILL_STAGGER,
    PILLS_DELAY,
    SPLIT_AT,
    SPLIT_DURATION,
    TAGLINE_DELAY,
    TOTAL_CHARS,
    TYPE_START,
} from './introTimeline';
import { EASE_IN_OUT, EASE_OUT } from './motionTokens';
import { IntroMode, markIntroSeen, useIntroMode } from './useIntroMode';

const splitTransition: Transition = {
    layout: { duration: SPLIT_DURATION, ease: EASE_IN_OUT },
};
const instant: Transition = { duration: 0 };

type Phase = 'typing' | 'split';

/** Drives the intro: letters typed so far, and whether the name has split. */
function useIntro(mode: IntroMode) {
    const [typed, setTyped] = useState(0);
    const [phase, setPhase] = useState<Phase>('typing');

    useEffect(() => {
        if (mode === 'pending') return;
        if (mode === 'skip') {
            setTyped(TOTAL_CHARS);
            setPhase('split');
            return;
        }
        const timers: ReturnType<typeof setTimeout>[] = [];
        for (let i = 1; i <= TOTAL_CHARS; i++) {
            const at = TYPE_START + i * CHAR_DURATION;
            timers.push(setTimeout(() => setTyped(i), at * 1000));
        }
        timers.push(
            setTimeout(() => {
                setPhase('split');
                markIntroSeen();
            }, SPLIT_AT * 1000)
        );
        return () => timers.forEach(clearTimeout);
    }, [mode]);

    return { typed, phase };
}

/** Letters not yet typed are invisible so the word keeps its final size. */
function TypedLetters({ text, typed }: { text: string; typed: number }) {
    return text.split('').map((char, i) => (
        <span key={i} className={i < typed ? undefined : 'invisible'}>
            {char}
        </span>
    ));
}

/**
 * A name in its final position. While typing it's an invisible placeholder;
 * after the split it takes over the shared layoutId and animates in from
 * the centred intro.
 */
function NameSlot({
    text,
    layoutId,
    phase,
    animate,
    className,
}: {
    text: string;
    layoutId: string;
    phase: Phase;
    animate: boolean;
    className: string;
}) {
    if (phase === 'typing') {
        return <div className={`${className} invisible`}>{text}</div>;
    }
    if (!animate) {
        return <div className={className}>{text}</div>;
    }
    return (
        <motion.div
            layoutId={layoutId}
            transition={splitTransition}
            className={className}
        >
            {text}
        </motion.div>
    );
}

/** "Åke Flatholm" typed out in the centre of the hero before the split. */
function IntroName({
    typed,
    idPrefix,
    firstClassName,
    lastClassName,
    className,
}: {
    typed: number;
    idPrefix: string;
    firstClassName: string;
    lastClassName: string;
    className: string;
}) {
    return (
        <div
            className={`absolute inset-0 flex-wrap items-center justify-center content-center gap-x-6 md:gap-x-8 pointer-events-none ${className}`}
        >
            <motion.div
                layoutId={`${idPrefix}-first`}
                transition={splitTransition}
                className={firstClassName}
            >
                <TypedLetters text={FIRST} typed={typed} />
            </motion.div>
            <motion.div
                layoutId={`${idPrefix}-last`}
                transition={splitTransition}
                className={lastClassName}
            >
                <TypedLetters
                    text={LAST}
                    typed={Math.max(0, typed - FIRST.length)}
                />
            </motion.div>
        </div>
    );
}

function SlideIn({
    children,
    className,
    from,
    show,
    animate,
    delay,
}: {
    children: ReactNode;
    className: string;
    from: 'left' | 'right';
    show: boolean;
    animate: boolean;
    delay: number;
}) {
    const hidden = { opacity: 0, x: from === 'left' ? '-100vw' : '100vw' };
    return (
        <motion.span
            initial={hidden}
            animate={show ? { opacity: 1, x: 0 } : hidden}
            transition={
                animate
                    ? {
                          x: { duration: 1.2, ease: EASE_OUT, delay },
                          opacity: { duration: 0.6, ease: EASE_OUT, delay },
                      }
                    : instant
            }
            className={className}
        >
            {children}
        </motion.span>
    );
}

function Tagline({
    className,
    show,
    animate,
    delay,
}: {
    className: string;
    show: boolean;
    animate: boolean;
    delay: number;
}) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={
                animate ? { duration: 0.8, ease: EASE_OUT, delay } : instant
            }
            className={className}
        >
            I enjoy the process of making complex systems easier to use.
        </motion.p>
    );
}

export default function Hero() {
    const mode = useIntroMode();
    const { typed, phase } = useIntro(mode);
    const split = phase === 'split';
    const animate = mode === 'play';

    const mobileName = 'text-7xl font-medium leading-none tracking-tighter';
    const mobilePill = 'rounded-full bg-foreground px-4 py-2';
    const mobilePillText = 'font-medium text-background text-center text-sm';

    const desktopFirst =
        'text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter';
    const desktopLast =
        'text-4xl md:text-8xl lg:text-9xl font-medium tracking-tighter';
    const desktopPill =
        'flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 md:p-6 lg:px-12 lg:py-12';
    const desktopPillText =
        'font-medium text-background text-center text-sm md:text-xl xl:text-2xl';

    return (
        <section
            aria-label="Introduction"
            className="relative flex flex-col gap-2 md:gap-4 justify-center min-h-screen overflow-x-clip"
        >
            <h1 className="sr-only">
                Åke Flatholm — UX Designer and Developer based in Umeå, Sweden.
                I enjoy the process of making complex systems easier to use.
            </h1>

            {!split && (
                <>
                    <IntroName
                        typed={typed}
                        idPrefix="mobile"
                        firstClassName={mobileName}
                        lastClassName={mobileName}
                        className="flex md:hidden"
                    />
                    <IntroName
                        typed={typed}
                        idPrefix="desktop"
                        firstClassName={desktopFirst}
                        lastClassName={desktopLast}
                        className="hidden md:flex"
                    />
                </>
            )}

            {/*Mobile*/}
            <div
                aria-hidden="true"
                className="flex flex-col justify-center gap-3 md:hidden w-fit mx-auto"
            >
                <div className="flex flex-row items-center gap-3 w-full">
                    <NameSlot
                        text={FIRST}
                        layoutId="mobile-first"
                        phase={phase}
                        animate={animate}
                        className={mobileName}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <SlideIn
                            from="right"
                            show={split}
                            animate={animate}
                            delay={PILLS_DELAY}
                            className={mobilePill}
                        >
                            <p className={mobilePillText}>UX Designer</p>
                        </SlideIn>
                        <SlideIn
                            from="right"
                            show={split}
                            animate={animate}
                            delay={PILLS_DELAY + PILL_STAGGER}
                            className={mobilePill}
                        >
                            <p className={mobilePillText}>Developer</p>
                        </SlideIn>
                    </div>
                </div>

                <NameSlot
                    text={LAST}
                    layoutId="mobile-last"
                    phase={phase}
                    animate={animate}
                    className={mobileName}
                />

                <SlideIn
                    from="left"
                    show={split}
                    animate={animate}
                    delay={PILLS_DELAY}
                    className="block rounded-full bg-foreground px-4 py-2 w-full"
                >
                    <p className="font-medium text-background text-center text-sm">
                        Umeå, Sweden
                    </p>
                </SlideIn>
                <Tagline
                    show={split}
                    animate={animate}
                    delay={TAGLINE_DELAY}
                    className="text-base mt-2 w-0 min-w-full"
                />
            </div>

            {/*Desktop*/}
            <div
                aria-hidden="true"
                className="hidden md:flex md:flex-col md:gap-4"
            >
                <div className="flex flex-row items-center gap-1 md:gap-4 w-full">
                    <NameSlot
                        text={FIRST}
                        layoutId="desktop-first"
                        phase={phase}
                        animate={animate}
                        className={desktopFirst}
                    />
                    <SlideIn
                        from="right"
                        show={split}
                        animate={animate}
                        delay={PILLS_DELAY}
                        className={desktopPill}
                    >
                        <p className={desktopPillText}>UX Designer</p>
                    </SlideIn>
                    <SlideIn
                        from="right"
                        show={split}
                        animate={animate}
                        delay={PILLS_DELAY + PILL_STAGGER}
                        className={desktopPill}
                    >
                        <p className={desktopPillText}>Developer</p>
                    </SlideIn>
                </div>
                <div className="flex flex-row items-center gap-1 md:gap-4 w-full">
                    <SlideIn
                        from="left"
                        show={split}
                        animate={animate}
                        delay={PILLS_DELAY}
                        className={desktopPill}
                    >
                        <p className={desktopPillText}>Umeå, Sweden</p>
                    </SlideIn>
                    <NameSlot
                        text={LAST}
                        layoutId="desktop-last"
                        phase={phase}
                        animate={animate}
                        className={desktopLast}
                    />
                </div>
                <Tagline
                    show={split}
                    animate={animate}
                    delay={TAGLINE_DELAY}
                    className="text-base md:text-2xl mt-4 w-full md:w-4/5"
                />
            </div>
        </section>
    );
}
