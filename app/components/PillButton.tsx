'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    solid: {
        pill: 'bg-foreground text-background border-foreground group-hover:text-foreground',
        fill: 'bg-background',
    },
    inverse: {
        pill: 'bg-background text-foreground border-transparent group-hover:text-background',
        fill: 'bg-foreground',
    },
};

const sizeClasses = {
    md: 'px-4 py-2 text-sm md:text-base',
    lg: 'w-full justify-center px-4 py-2 md:px-6 md:py-3 lg:py-8 text-base md:text-lg',
};

// Matches EASE_IN_OUT in motionTokens.ts.
const ease = 'ease-[cubic-bezier(0.65,0,0.35,1)]';

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
    const colors = variantClasses[variant];
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
                className={`${colors.pill} ${sizeClasses[size]} relative overflow-hidden isolate border rounded-full cursor-pointer font-medium flex flex-row items-center transition-colors duration-500 ${ease}`}
            >
                {/* Sweeps in from the left on hover and exits to the right. */}
                <span
                    aria-hidden="true"
                    className={`${colors.fill} absolute inset-0 -z-10 origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-700 motion-reduce:transition-none ${ease}`}
                />
                <span className="flex flex-row gap-2 items-center">
                    {arrow === 'left' && (
                        <FaChevronLeft size={14} aria-hidden="true" />
                    )}
                    {children}
                    {arrow === 'right' && (
                        <FaChevronRight size={14} aria-hidden="true" />
                    )}
                </span>
            </div>
        </Link>
    );
}
