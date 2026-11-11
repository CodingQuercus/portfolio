// Text colours used on top of a project or hobby colour. They stay the same in
// light and dark mode, because the card colour doesn't change either.
const LIGHT = '#f7f7f7';
const DARK = '#040404';

function luminance(hex: string) {
    const channels = hex
        .replace('#', '')
        .match(/.{2}/g)!
        .map((c) => {
            const v = parseInt(c, 16) / 255;
            return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(a: string, b: string) {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
}

/**
 * Light text where it reaches the 4.5:1 contrast WCAG asks for on the given
 * background colour, dark text otherwise. Bright colours like mint, orange
 * and pink get dark text; deep ones like teal and navy keep light text.
 */
export function readableText(background: string) {
    return contrast(LIGHT, background) >= 4.5 ? LIGHT : DARK;
}
