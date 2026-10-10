import Link from 'next/link';
import { ReactNode } from 'react';
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    LucideIcon,
} from 'lucide-react';

type Arrow = 'left' | 'right' | 'external' | 'down';

type LinkButtonProps = {
    href: string;
    children: ReactNode;
    target?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    /** 'lg' is the full-width version used for the contact links. */
    size?: 'md' | 'lg';
    /**
     * Thin arrow beside the label; 'left' sits before it. Links that open in
     * a new tab get 'external' unless told otherwise.
     */
    arrow?: Arrow;
    ariaLabel?: string;
    /** Classes for the link itself, e.g. width or alignment. */
    className?: string;
};

const arrows: Record<Arrow, LucideIcon> = {
    left: ArrowLeft,
    right: ArrowRight,
    external: ArrowUpRight,
    down: ArrowDown,
};

const sizeClasses = {
    md: 'w-fit gap-2 pt-1 pb-1.5 text-sm md:text-base',
    lg: 'w-full justify-between gap-4 pt-2 pb-3 md:pb-4 type-h3 md:text-2xl',
};

/**
 * Text on a hairline underline, like the hero tags. The resting line is soft;
 * on hover or keyboard focus a solid line draws over it from the left, and
 * leaves to the right when the pointer moves away.
 */
export default function LinkButton({
    href,
    children,
    target,
    onClick,
    size = 'md',
    arrow,
    ariaLabel,
    className = '',
}: LinkButtonProps) {
    const opensNewTab = target === '_blank';
    const kind = arrow ?? (opensNewTab ? 'external' : undefined);
    const Icon = kind ? arrows[kind] : null;
    const icon = Icon && (
        <Icon
            size={size === 'lg' ? 22 : 16}
            strokeWidth={1.5}
            aria-hidden="true"
            className="shrink-0"
        />
    );

    return (
        <Link
            href={href}
            // Files like the CVs aren't pages, so don't prefetch page data for them.
            prefetch={/\.\w+$/.test(href) ? false : undefined}
            target={target}
            onClick={onClick}
            aria-label={ariaLabel}
            className={`group relative inline-flex flex-row items-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground ${sizeClasses[size]} ${className}`}
        >
            {kind === 'left' && icon}
            {children}
            {kind !== 'left' && icon}
            {opensNewTab && <span className="sr-only">(opens in new tab)</span>}
            <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-current opacity-30"
            />
            <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-current origin-right scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100 motion-reduce:transition-none"
            />
        </Link>
    );
}
