import PillButton from '../PillButton';

type ContactButtonProps = {
    href: string;
    label: string;
    icon: React.ReactNode;
    external?: boolean;
};

export default function ContactButton({
    href,
    label,
    icon,
    external,
}: ContactButtonProps) {
    return (
        <PillButton
            href={href}
            target={external ? '_blank' : undefined}
            size="lg"
            className="w-44 md:w-auto md:flex-1"
        >
            {icon}
            {label}
        </PillButton>
    );
}
