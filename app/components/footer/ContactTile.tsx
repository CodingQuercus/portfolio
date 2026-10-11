import { ArrowDown, ArrowRight, ArrowUpRight, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ContactTileProps = {
    href: string;
    /** The name shown large in the tile, e.g. "LinkedIn". */
    children: ReactNode;
    /** Small label above the name, e.g. "CV". */
    label?: string;
    kind: 'internal' | 'external' | 'download';
    lang?: string;
    className?: string;
};

const icons: Record<ContactTileProps['kind'], LucideIcon> = {
    internal: ArrowRight,
    external: ArrowUpRight,
    download: ArrowDown,
};

const nudge: Record<ContactTileProps['kind'], string> = {
    internal: 'group-hover:translate-x-1',
    external: 'group-hover:translate-x-1 group-hover:-translate-y-1',
    download: 'group-hover:translate-y-1',
};

/**
 * A whole clickable tile in the footer grid: a top hairline like the rest of
 * the site, no box. On hover a faint grey fill appears behind it, exactly as
 * wide as the hairline.
 */
export default function ContactTile({
    href,
    children,
    label,
    kind,
    lang,
    className = '',
}: ContactTileProps) {
    const Icon = icons[kind];
    const opensNewTab = kind !== 'internal';
    return (
        <a
            href={href}
            target={opensNewTab ? '_blank' : undefined}
            rel={opensNewTab ? 'noopener noreferrer' : undefined}
            className={`group relative isolate flex flex-col justify-between gap-8 pt-3 pb-4 px-3 md:px-4 min-h-32 border-t border-foreground focus-visible:outline-offset-8 before:absolute before:inset-x-0 before:top-px before:bottom-0 before:-z-10 before:bg-foreground/5 before:opacity-0 before:transition-opacity before:duration-500 before:ease-[cubic-bezier(0.65,0,0.35,1)] hover:before:opacity-100 focus-visible:before:opacity-100 ${className}`}
        >
            <span className="flex justify-between items-start gap-4">
                <span className="type-small text-foreground/70">{label}</span>
                <Icon
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${nudge[kind]}`}
                />
            </span>
            <span className="type-card-title" lang={lang}>
                {children}
                {opensNewTab && (
                    <span className="sr-only"> (opens in new tab)</span>
                )}
            </span>
        </a>
    );
}
