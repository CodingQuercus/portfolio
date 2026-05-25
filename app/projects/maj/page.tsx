import type { Metadata } from 'next';

import BackButton from '@/app/components/projects/BackButton';
import ProjectHeader from '@/app/components/projects/ProjectHeader';
import ProjectSection from '@/app/components/projects/ProjectSection';
import ProjectParagraph from '@/app/components/projects/ProjectParagraph';
import ProjectImage from '@/app/components/projects/ProjectImage';
import ProjectMockupGrid from '@/app/components/projects/ProjectMockupGrid';
import ProjectKeyInsight from '@/app/components/projects/ProjectKeyInsight';
import PillButton from '@/app/components/PillButton';

import landingImage from '@/public/maj/maj_start.png';
import erImage from '@/public/maj/maj_er.png';
import schemaImage from '@/public/maj/maj_schema.png';
import listImage from '@/public/maj/maj_applications.png';
import drawerImage from '@/public/maj/maj_new.png';
import detailImage from '@/public/maj/maj_detail.png';
import editImage from '@/public/maj/maj_edit.png';
import searchImage from '@/public/maj/maj_search.png';
import filterImage from '@/public/maj/maj_filter.png';
import dashboardImage from '@/public/maj/maj_dashboard.png';

import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Maj',
    description:
        'A personal job application tracker built with Next.js and Supabase.',
};

export default function MajPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-6 min-h-screen pt-24 md:pt-28">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="Maj"
                backgroundColor="#0F766E"
                description="My application journal, a full-stack job application tracker built to solve a real problem during my own job search."
                tags={[
                    'Next.js',
                    'TypeScript',
                    'Supabase',
                    'Tailwind CSS',
                    'Recharts',
                ]}
                meta={[
                    { label: 'Role', information: 'Developer & Designer' },
                    { label: 'Timeline', information: 'Spring 2026' },
                    { label: 'Type', information: 'Personal project' },
                ]}
            />

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        "I'm currently looking for my first job after graduating, and I needed a way to keep track of where I had applied.",
                        'Spreadsheets worked but felt clunky. I decided to build something purpose-built, and use it as an opportunity to learn Next.js App Router and Supabase in a real project with auth, a database, and full CRUD.',
                    ]}
                />
                <ProjectImage src={landingImage} alt="Maj landing page." />
            </ProjectSection>

            <ProjectSection title="Data model">
                <ProjectParagraph
                    paragraphs={[
                        'The database has three tables, users, job_applications and contacts. Each application belongs to a user, and each contact belongs to an application.',
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: erImage,
                            alt: 'Entity relationship diagram showing users, applications and contacts.',
                            caption: 'Entity relationship diagram',
                        },
                        {
                            src: schemaImage,
                            alt: 'Database schema showing all fields per table.',
                            caption: 'Database schema',
                        },
                    ]}
                    cols={2}
                />
            </ProjectSection>

            <ProjectSection title="Application list">
                <ProjectParagraph
                    paragraphs={[
                        'The list lets you sort by any column, filter by status, and search by role or company. Each row shows key information of each application, and clicking a row navigates to the full detail view.',
                    ]}
                />
                <ProjectImage src={listImage} alt="Applications list view" caption="Sortable columns for role, company, location, applied date and status" />
                <ProjectImage src={searchImage} alt="Applications list filtered by search query" caption="Search filters results by role or company name" />
                <ProjectImage src={filterImage} alt="Applications list filtered by status" caption="Filter by status to narrow down your applications"/>
            </ProjectSection>

            <ProjectSection title="Adding and editing applications">
                <ProjectParagraph
                    paragraphs={[
                        "Rather than navigating to a separate page, a slide-in drawer keeps the user in context. The same drawer handles both create and edit. If an application is passed as a prop it's edit mode, otherwise create mode. One component, one source of truth for the form logic.",
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: drawerImage,
                            alt: 'Application list with the new application drawer open on the right side.',
                            caption:
                                'Application list with the new application drawer open on the right side',
                        },
                        {
                            src: editImage,
                            alt: 'Application detail view with the edit drawer open.',
                            caption:
                                'Application detail view with the edit drawer open',
                        },
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Detail view">
                <ProjectParagraph
                    paragraphs={[
                        'Each application has a detail page with the full job description, notes, contacts and inline status updates. Status can be changed directly on the page. Clicking a badge in the list also updates it via a popover without navigating away',
                    ]}
                />
                <ProjectImage
                    src={detailImage}
                    alt="Application detail view"
                    caption="Full job description, notes, contacts and inline status selector"
                />
            </ProjectSection>

            <ProjectSection title="Dashboard">
                <ProjectParagraph
                    paragraphs={[
                        'A live dashboard showing stat cards per status and a donut chart with the breakdown of all applications.',
                    ]}
                />
                <ProjectImage
                    src={dashboardImage}
                    alt="Application dashboard"
                    caption="Stat cards per status and a donut chart showing the breakdown of all applications"
                />
            </ProjectSection>

            <ProjectSection title="Technical decisions">
                <ProjectKeyInsight
                    introduction="Server components fetch data, client components handle interactivity."
                    paragraphs={[
                        'Page-level data fetching happens in server components, no loading states, and no useEffect for initial data. Supabase Row Level Security ensures users can only access their own data server-side, even if client-side code is modified.',
                    ]}
                />
                <ProjectKeyInsight
                    introduction="Optimistic updates with rollback."
                    paragraphs={[
                        "Status changes update the UI immediately before the database confirms. The previous status is saved before the update, if the write fails, it's restored. This keeps the interface feeling fast without sacrificing correctness.",
                    ]}
                />
                <ProjectKeyInsight
                    introduction="A design system built from scratch."
                    paragraphs={[
                        'Instead of using a component library, I built a full design system in globals.css with CSS custom properties, spacing scale, color tokens, status badge variants, and button sizes. A single source of truth that keeps the UI consistent throughout the application.',
                    ]}
                />
            </ProjectSection>

            <div className="flex flex-col md:flex-row gap-4">
                <PillButton href="https://maj.akeflatholm.com" target="_blank">
                    Live demo
                    <FaExternalLinkAlt
                        size={16}
                        className="md:w-5 md:h-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">(opens in new tab)</span>
                </PillButton>

                <PillButton
                    href="https://github.com/codingquercus/maj"
                    target="_blank"
                >
                    View on GitHub
                    <FaExternalLinkAlt
                        size={16}
                        className="md:w-5 md:h-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">(opens in new tab)</span>
                </PillButton>
            </div>
        </article>
    );
}
