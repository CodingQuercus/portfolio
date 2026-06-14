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
        'A full-stack job application tracker built with Next.js, TypeScript, and Supabase. Features auth, CRUD, search, filtering, and a live dashboard.',
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
                        "The result is a fully responsive full-stack app, testable via a live demo account."
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
                        'The list lets you sort by any column, filter by one or more statuses, and search by role or company. Clicking a row opens the full detail view.',
                        "Multi-status filtering lets you hide statuses you don't want to see and stay focused on applications that are still active. For a lot of people, a growing list of rejections might create anxiety. Keeping them out of view is a small thing that might make the process feel more manageable."                    ]}
                />
                <ProjectImage src={listImage} alt="Applications list view" caption="Sortable columns for role, company, location, applied date and status" />
                <ProjectImage src={searchImage} alt="Applications list filtered by search query" caption="Search filters results by role or company name" />
                <ProjectImage src={filterImage} alt="Applications list filtered by status" caption="Filter by status to narrow down your applications" />
            </ProjectSection>

            <ProjectSection title="Adding and editing applications">
                <ProjectParagraph
                    paragraphs={[
                        'Instead of navigating to a separate page, a slide-in drawer keeps the user in context. Opening a new page breaks the scanning flow, so editing happens inline without interrupting the overview.',
                        'The same drawer handles both create and edit. On desktop it is resizable, useful when editing longer job descriptions or notes where more space helps.',
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
                        'Each application has a detail page with the full job description, notes, contacts and inline status updates.',
                        'Status can be changed directly on the detail page, or via a popover by clicking the status badge in the list. Either way, no navigation required. Status updates happen frequently, especially early in a search, and removing that friction keeps the workflow fast.',
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
                        'The dashboard gives a quick overview without having to scan the list. You can see how your applications are distributed across statuses and how your activity has trended over time. The in-process rate shows what percentage of applications are currently past the initial applied stage and not yet rejected or withdrawn, a quick way to see how many are still in play. Right now it is display only, but a next step would be making each stat card clickable to filter the list by status or in-process rate.',
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
