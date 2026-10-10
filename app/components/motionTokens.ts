// Shared easing so every animation on the site moves the same way.

/** Gentle start, long soft landing. For things entering or moving into place. */
export const EASE_OUT = [0.25, 1, 0.5, 1] as const;

/** Slow at both ends. For hover states and things moving between two positions. */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
