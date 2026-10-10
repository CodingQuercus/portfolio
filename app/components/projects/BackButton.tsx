import LinkButton from '@/app/components/LinkButton';

type BackButtonProps = {
    label: string;
};

export default function BackButton({ label }: BackButtonProps) {
    return (
        // Pulled up towards the title, which follows it with a section-sized gap.
        <LinkButton arrow="left" href="/projects" className="-mb-6 md:-mb-12">
            {label}
        </LinkButton>
    );
}
