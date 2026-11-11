// First-load intro on the home page. Shared by Hero and Navbar (seconds).

export const FIRST = 'Åke';
export const LAST = 'Flatholm';
export const TOTAL_CHARS = FIRST.length + LAST.length;

export const TYPE_START = 0.3;
export const CHAR_DURATION = 0.08;
export const HOLD_BEFORE_SPLIT = 0.45;
export const SPLIT_AT =
    TYPE_START + TOTAL_CHARS * CHAR_DURATION + HOLD_BEFORE_SPLIT;
export const SPLIT_DURATION = 1;

// Relative to the split
export const PILLS_DELAY = SPLIT_DURATION * 0.6;
export const PILL_STAGGER = 0.1;
export const TAGLINE_DELAY = PILLS_DELAY + 0.5;

// Relative to page load
export const NAVBAR_DELAY = SPLIT_AT + TAGLINE_DELAY;
