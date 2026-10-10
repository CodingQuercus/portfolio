import LinkButton from '../LinkButton';

type ContactButtonProps = {
    href: string;
    label: string;
    external?: boolean;
};

/** A large contact link on a full-width hairline, like the hero tags. */
export default function ContactButton({
    href,
    label,
    external,
}: ContactButtonProps) {
    return (
        <LinkButton
            href={href}
            target={external ? '_blank' : undefined}
            arrow={external ? 'external' : 'right'}
            size="lg"
            className="md:flex-1"
        >
            {label}
        </LinkButton>
    );
}
