'use client';

import { useState, useSyncExternalStore } from 'react';

/**
 * 'pending' on the server and during hydration, then 'play' for the
 * first-visit intro or 'skip' to show the hero as-is.
 */
export type IntroMode = 'pending' | 'play' | 'skip';

const STORAGE_KEY = 'af-intro-seen';

// Decided once per page load so the hero and navbar always agree.
let decision: 'play' | 'skip' | null = null;
// Set once the intro has played, so returning to Home doesn't replay it.
let playedThisLoad = false;

function decide(): 'play' | 'skip' {
    if (decision) return decision;
    let seen = false;
    try {
        seen = localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
        // Storage blocked: treat as a first visit.
    }
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    // Only when landing on the home page, not after navigating there.
    const landedOnHome = window.location.pathname === '/';
    decision = landedOnHome && !seen && !reduceMotion ? 'play' : 'skip';
    return decision;
}

const subscribe = () => () => {};

export function useIntroMode(): IntroMode {
    const [alreadyPlayed] = useState(() => playedThisLoad);
    const mode = useSyncExternalStore<IntroMode>(
        subscribe,
        decide,
        () => 'pending'
    );
    return mode === 'play' && alreadyPlayed ? 'skip' : mode;
}

export function markIntroSeen() {
    playedThisLoad = true;
    try {
        localStorage.setItem(STORAGE_KEY, '1');
    } catch {
        // Storage blocked: the intro will just play again next time.
    }
}
