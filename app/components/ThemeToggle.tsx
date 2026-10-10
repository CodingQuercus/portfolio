'use client';

import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const darkQuery = '(prefers-color-scheme: dark)';

/** The theme in effect: the visitor's choice if they made one, else the system's. */
function currentTheme(): Theme {
    const chosen = document.documentElement.dataset.theme;
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return window.matchMedia(darkQuery).matches ? 'dark' : 'light';
}

function subscribe(onChange: () => void) {
    const media = window.matchMedia(darkQuery);
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
    });
    media.addEventListener('change', onChange);
    return () => {
        observer.disconnect();
        media.removeEventListener('change', onChange);
    };
}

export default function ThemeToggle({
    className = '',
}: {
    className?: string;
}) {
    const theme = useSyncExternalStore<Theme>(
        subscribe,
        currentTheme,
        () => 'light'
    );
    const next: Theme = theme === 'dark' ? 'light' : 'dark';

    const toggle = () => {
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Storage blocked: the choice lasts for this page view only.
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${next} mode`}
            className={`p-2 -m-2 cursor-pointer transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${className}`}
        >
            {theme === 'dark' ? (
                <Sun size={20} strokeWidth={1.5} aria-hidden="true" />
            ) : (
                <Moon size={20} strokeWidth={1.5} aria-hidden="true" />
            )}
        </button>
    );
}
