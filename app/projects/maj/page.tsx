import type { Metadata } from 'next';

import BackButton from '@/app/components/projects/BackButton';
import ProjectHeader from '@/app/components/projects/ProjectHeader';
import ProjectSection from '@/app/components/projects/ProjectSection';
import ProjectParagraph from '@/app/components/projects/ProjectParagraph';
import ProjectImage from '@/app/components/projects/ProjectImage';
import ProjectMockupGrid from '@/app/components/projects/ProjectMockupGrid';
import ProjectKeyInsight from '@/app/components/projects/ProjectKeyInsight';
import PillButton from '@/app/components/PillButton';

// Raw screenshots of the current app (demo account). To be replaced with device mockups.
import erImage from '@/public/maj/maj_er.png';
import schemaImage from '@/public/maj/maj_schema.png';
import startImage from '@/public/maj/v2/desktop-01-start.png';
import listImage from '@/public/maj/v2/desktop-02-applications.png';
import dateFilterImage from '@/public/maj/v2/desktop-08-date-filter.png';
import newSavedImage from '@/public/maj/v2/desktop-05-new-saved.png';
import deadlinePassedImage from '@/public/maj/v2/desktop-07-saved-deadline-passed.png';
import detailImage from '@/public/maj/v2/desktop-06-detail-events.png';
import calendarImage from '@/public/maj/v2/desktop-04-calendar.png';
import calendarAddImage from '@/public/maj/v2/desktop-09-calendar-add-event.png';
import overviewImage from '@/public/maj/v2/desktop-03-overview.png';
import mobileListImage from '@/public/maj/v2/mobile-02-applications.png';
import mobileCalendarImage from '@/public/maj/v2/mobile-04-calendar.png';
import mobileDetailImage from '@/public/maj/v2/mobile-06-detail-events.png';

import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Maj',
    description:
        'A full-stack job application tracker built with Next.js, TypeScript and Supabase: applications, saved jobs with deadlines, interviews in a calendar and an overview that measures effort.',
};

export default function MajPage() {
    return (
        <article className="flex flex-col gap-10 md:gap-14 min-h-screen pt-24 md:pt-28">
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
                    'shadcn/ui',
                    'Recharts',
                ]}
                role="Developer & Designer"
                year="2026"
            />

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        'I was looking for my first job after graduating and needed a way to keep track of my applications.',
                        'Spreadsheets worked but felt clunky. I decided to build something purpose-built, and use it as an opportunity to learn Next.js App Router and Supabase in a real project with auth, a database, and full CRUD.',
                        'The result is a fully responsive full-stack app, testable via a live demo account.',
                    ]}
                />
                <ProjectImage src={startImage} alt="Maj start page." />
            </ProjectSection>

            <ProjectSection title="Data model">
                <ProjectParagraph
                    paragraphs={[
                        'The database has four tables: users, job_applications, contacts and events. Each application belongs to a user, and its contacts and events belong to the application.',
                        'Row Level Security on every table means a user can only read and change their own rows, enforced by the database rather than the client.',
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: erImage,
                            alt: 'Entity relationship diagram: a user has many applications, and an application has many contacts and many events.',
                            caption: 'Entity relationship diagram',
                        },
                        {
                            src: schemaImage,
                            alt: 'Database schema showing all fields of users, job_applications, contacts and events.',
                            caption: 'Database schema',
                        },
                    ]}
                    cols={2}
                    framed
                />
            </ProjectSection>

            <ProjectSection title="Application list">
                <ProjectParagraph
                    paragraphs={[
                        'The list is where most time is spent, so the header with search, filters and New application stays in place while the list scrolls, instead of splitting it into pages.',
                        "Filter by one or more statuses, by date applied, and export what you need as CSV. Hiding statuses you don't want to see, like a growing list of rejections, is a small thing that can make a job search feel more manageable.",
                        'On larger screens the list is a table with the role column pinned while it scrolls sideways; on phones each application is a card.',
                    ]}
                />
                <ProjectImage
                    src={listImage}
                    alt="Applications list with saved jobs first, then applications by date."
                    caption="Saved jobs first, each with how long is left to apply"
                />
                <ProjectImage
                    src={dateFilterImage}
                    alt="Date applied filter open, with quick ranges and a two-month calendar."
                    caption="Filter on date applied: quick ranges, or pick a start and end date and apply"
                />
            </ProjectSection>

            <ProjectSection title="Saving jobs before applying">
                <ProjectParagraph
                    paragraphs={[
                        'A job is often found days before you apply. A new entry can be saved for later instead of logged as applied. A saved job has no date applied yet; its deadline is the last day to apply, and the list, calendar and overview remind you as it gets close.',
                        'When you apply, one click moves it on and dates it today.',
                    ]}
                />
                <ProjectImage
                    src={newSavedImage}
                    alt="New application drawer with Saved for later selected and an Apply by date."
                    caption="Saved for later or already applied, chosen when adding"
                />
                <ProjectImage
                    src={deadlinePassedImage}
                    alt="A saved job past its deadline, asking whether you applied."
                    caption="A missed deadline asks what to do instead of deciding for you"
                />
            </ProjectSection>

            <ProjectSection title="Adding and editing applications">
                <ProjectParagraph
                    paragraphs={[
                        'Instead of navigating to a separate page, a slide-in drawer keeps the user in context. Opening a new page breaks the scanning flow, so editing happens without leaving the list or the application.',
                        'The same drawer handles both create and edit.',
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Detail view">
                <ProjectParagraph
                    paragraphs={[
                        'Each application has a page with its status, the job description, events, notes and contacts.',
                        'Status can be changed here or straight from the list, with the same menu in both places.',
                    ]}
                />
                <ProjectImage
                    src={detailImage}
                    alt="Application detail page with status, events and contacts."
                    caption="Status, events, notes and contacts on one page"
                />
            </ProjectSection>

            <ProjectSection title="Calendar">
                <ProjectParagraph
                    paragraphs={[
                        "The calendar gathers interviews, tests and other events in one place, together with the last day to apply for saved jobs. Beside the month, a list shows what's coming up in the next seven days. Pick a day to see only that day and add to it.",
                        'Each kind of event has the same colour as its status, so an interview looks the same everywhere in the app. Deadlines are marked with a flag instead of a dot, so they stand out by shape as well as colour, and a legend explains the marks.',
                    ]}
                />
                <ProjectImage
                    src={calendarImage}
                    alt="Calendar with the month on one side and the next seven days on the other."
                    caption="The month beside the next seven days"
                />
                <ProjectImage
                    src={calendarAddImage}
                    alt="Add event drawer opened from the calendar, with the picked date filled in."
                    caption="Events are added for the picked day"
                />
            </ProjectSection>

            <ProjectSection title="Overview">
                <ProjectParagraph
                    paragraphs={[
                        'The overview shows how many applications you have sent, this week and this month, how many are in progress, the spread across statuses, what is coming up and your activity over time.',
                        'Every number leads somewhere: a status opens the list filtered on it, and a bar in the chart zooms into that period and its applications.',
                    ]}
                />
                <ProjectKeyInsight
                    introduction="Measure effort, not outcomes."
                    paragraphs={[
                        'An earlier version showed the share of applications that had progressed. Replies are mostly out of your control, a low percentage can feel like a grade, and it even drops the more you apply. The numbers now count what you do yourself.',
                    ]}
                />
                <ProjectImage
                    src={overviewImage}
                    alt="Overview with counts, applications by status, upcoming events and a monthly chart."
                    caption="Counts of what you do, status spread, upcoming events and activity"
                />
            </ProjectSection>

            <ProjectSection title="On phones">
                <ProjectParagraph
                    paragraphs={['Everything works just as well on a phone.']}
                />
                <ProjectMockupGrid
                    cols={3}
                    framed
                    mockups={[
                        {
                            src: mobileListImage,
                            alt: 'Applications as cards on a phone.',
                            caption: 'Applications',
                        },
                        {
                            src: mobileCalendarImage,
                            alt: 'Calendar on a phone, with the next seven days below the month.',
                            caption: 'Calendar',
                        },
                        {
                            src: mobileDetailImage,
                            alt: 'Application page on a phone.',
                            caption: 'Application',
                        },
                    ]}
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

            <div className="flex flex-row flex-wrap gap-2 md:gap-4">
                <PillButton href="https://maj.akeflatholm.com" target="_blank">
                    Live demo
                    <ExternalLink
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
                    <ExternalLink
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
