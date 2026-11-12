import { Github, Linkedin } from 'lucide-react';
import CvMenu from './CvMenu';
import { TEXT_LINK } from './linkStyle';

type ContactLinksProps = {
    /** Smaller email for tight spots like the mobile menu. */
    compact?: boolean;
};

const socials = [
    {
        href: 'https://www.linkedin.com/in/akeflatholm/',
        label: 'LinkedIn',
        Icon: Linkedin,
    },
    { href: 'https://github.com/CodingQuercus', label: 'GitHub', Icon: Github },
];

// Email, socials and CV: used in the footer and the mobile menu.
export default function ContactLinks({ compact }: ContactLinksProps) {
    return (
        <div
            className={`flex flex-col ${compact ? 'gap-3' : 'gap-4 md:gap-6'}`}
        >
            <a
                href="mailto:hello@akeflatholm.com"
                className={`${compact ? 'type-body' : 'type-h2'} w-fit break-all ${TEXT_LINK}`}
            >
                hello@akeflatholm.com
            </a>
            <ul
                className={`flex flex-row flex-wrap gap-x-6 gap-y-2 ${compact ? 'type-body-sm' : 'type-body'}`}
            >
                {socials.map(({ href, label, Icon }) => (
                    <li key={href}>
                        <a
                            href={href}
                            target="_blank"
                            className="flex flex-row items-center gap-2"
                        >
                            <Icon size={16} aria-hidden="true" />
                            <span className={TEXT_LINK}>{label}</span>
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                ))}
                <li>
                    <CvMenu linkClass={TEXT_LINK} />
                </li>
            </ul>
        </div>
    );
}
