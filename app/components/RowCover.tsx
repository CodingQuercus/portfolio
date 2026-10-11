import Link from 'next/link';

/**
 * Makes a whole project row clickable, with a faint tint of the project's
 * colour on hover, exactly as wide as the row's hairline. Place inside a `relative isolate group/row` container.
 *
 * The covering link is hidden from keyboard and screen readers: the row's
 * own "Explore project" link (raised above with `relative z-10`) is the one
 * they use, so the project isn't announced twice.
 */
export default function RowCover({
    href,
    color,
}: {
    href: string;
    color: string;
}) {
    return (
        <>
            <span
                aria-hidden="true"
                className="absolute inset-x-0 top-px bottom-0 -z-10 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/row:opacity-100 motion-reduce:transition-none"
                style={{
                    backgroundColor: `color-mix(in srgb, ${color} 8%, var(--background))`,
                }}
            />
            <Link
                href={href}
                tabIndex={-1}
                aria-hidden="true"
                className="absolute inset-0 z-0"
            />
        </>
    );
}
