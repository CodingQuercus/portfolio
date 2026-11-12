'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type CvMenuProps = {
    /** Same link style as the other footer links. */
    linkClass: string;
};

const options = [
    { href: '/AF_CV_EN.pdf', label: 'English', lang: 'en' },
    { href: '/AF_CV_SE.pdf', label: 'Svenska', lang: 'sv' },
];

// A disclosure, not an ARIA menu: a button that shows two plain links.
export default function CvMenu({ linkClass }: CvMenuProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const listId = useId();

    useEffect(() => {
        if (!open) return;
        const onPointer = (e: PointerEvent) => {
            if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener('pointerdown', onPointer);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('pointerdown', onPointer);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <div ref={rootRef} className="relative">
            <button
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls={listId}
                onClick={() => setOpen((o) => !o)}
                className={`flex flex-row items-center gap-1 cursor-pointer ${linkClass}`}
            >
                Download CV
                <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>
            <ul
                id={listId}
                hidden={!open}
                className="absolute bottom-full left-0 mb-2 flex flex-col gap-1 bg-surface border border-foreground/10 rounded-2xl p-2 min-w-36 z-10"
            >
                {options.map((o) => (
                    <li key={o.href}>
                        <a
                            href={o.href}
                            target="_blank"
                            lang={o.lang}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-3 py-2 hover:bg-foreground/5 transition-colors duration-300"
                        >
                            {o.label}
                            <span className="sr-only" lang="en">
                                {' '}
                                (opens in new tab)
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
