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
 * A whole clickable tile in the footer grid; turns faint grey on hover. The
 * hover colour is mixed solid, so the grid's hairline colour behind the tile
 * can't show through it.
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
            className={`group flex flex-col justify-between gap-8 bg-background p-4 md:p-6 min-h-32 transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] hover:bg-[color-mix(in_srgb,var(--foreground)_6%,var(--background))] focus-visible:bg-[color-mix(in_srgb,var(--foreground)_6%,var(--background))] focus-visible:-outline-offset-4 ${className}`}
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
