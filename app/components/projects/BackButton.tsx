import PillButton from '@/app/components/PillButton';

type BackButtonProps = {
    label: string;
};

export default function BackButton({ label }: BackButtonProps) {
    return (
        <PillButton arrow="left" href="/projects">
            {label}
        </PillButton>
    );
}
