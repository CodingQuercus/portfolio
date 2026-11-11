'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PillButtonProps = {
    href: string;
    children: ReactNode;
    target?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    /** 'inverse' is for use on dark or coloured backgrounds. */
    variant?: 'solid' | 'inverse';
    /** 'lg' is the oversized pill used for the contact links. */
    size?: 'md' | 'lg';
    /** Adds a chevron; 'left' sits before the label. */
    arrow?: 'left' | 'right';
    ariaLabel?: string;
    /** Classes for the outer link, e.g. width or alignment. */
    className?: string;
};

const variantClasses = {
    solid: 'bg-foreground text-background border-foreground group-hover:bg-background group-hover:text-foreground',
    inverse:
        'bg-background text-foreground border-transparent group-hover:bg-foreground group-hover:text-background',
};

const sizeClasses = {
    md: 'px-4 py-2 text-sm md:text-base',
    lg: 'w-full justify-center px-6 py-3 md:py-4 text-base md:text-lg',
};

// Matches EASE_OUT in motionTokens.ts: responds at once, settles softly.
const ease = 'ease-[cubic-bezier(0.25,1,0.5,1)]';

export default function PillButton({
    href,
    children,
    target,
    onClick,
    variant = 'solid',
    size = 'md',
    arrow,
    ariaLabel,
    className = 'w-fit',
}: PillButtonProps) {
    return (
        <Link
            href={href}
            // Files like the CVs aren't pages, so don't prefetch page data for them.
            prefetch={/\.\w+$/.test(href) ? false : undefined}
            target={target}
            onClick={onClick}
            aria-label={ariaLabel}
            className={`group rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${className}`}
        >
            <div
                // On hover the pill grows slightly and swaps colours.
                className={`${variantClasses[variant]} ${sizeClasses[size]} border rounded-full cursor-pointer font-medium flex flex-row items-center transition-[transform,background-color,color] duration-300 ${ease} group-hover:scale-[1.04] motion-reduce:transition-colors motion-reduce:group-hover:scale-100`}
            >
                <span className="flex flex-row gap-2 items-center">
                    {arrow === 'left' && (
                        <ChevronLeft size={16} aria-hidden="true" />
                    )}
                    {children}
                    {arrow === 'right' && (
                        <ChevronRight size={16} aria-hidden="true" />
                    )}
                </span>
            </div>
        </Link>
    );
}
