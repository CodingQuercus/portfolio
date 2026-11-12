import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { TEXT_LINK } from '@/app/components/linkStyle';

type BackButtonProps = {
    label: string;
};

export default function BackButton({ label }: BackButtonProps) {
    return (
        <Link
            href="/projects"
            className="flex flex-row items-center gap-1 w-fit type-body-sm"
        >
            <ChevronLeft size={16} aria-hidden="true" />
            <span className={TEXT_LINK}>{label}</span>
        </Link>
    );
}
