import type { Metadata } from 'next';

import BackButton from '@/app/components/projects/BackButton';
import ProjectHeader from '@/app/components/projects/ProjectHeader';
import ProjectSection from '@/app/components/projects/ProjectSection';
import ProjectParagraph from '@/app/components/projects/ProjectParagraph';
import ProjectMockupGrid from '@/app/components/projects/ProjectMockupGrid';
import ProjectKeyInsight from '@/app/components/projects/ProjectKeyInsight';
import PillButton from '@/app/components/PillButton';

import homeEmptyImage from '@/public/bouldr/bouldr_home_empty.png';
import homeImage from '@/public/bouldr/bouldr_home.png';
import routesEmptyImage from '@/public/bouldr/bouldr_routes_empty.png';
import routesImage from '@/public/bouldr/bouldr_routes.png';
import newRouteImage from '@/public/bouldr/bouldr_newroute.png';
import newRouteFilledImage from '@/public/bouldr/bouldr_new_route.png';
import routeDetailImage from '@/public/bouldr/bouldr_routedetail.png';
import cameraImage from '@/public/bouldr/bouldr_camera.png';

import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'BouldR',
    description: 'A native Android app for tracking climbing routes.',
};

export default function BouldRPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-6 min-h-screen pt-24 md:pt-28">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="BouldR"
                backgroundColor="#EA9734"
                description="A native Android app for climbers who want to log routes, track progress and review their sessions. Built during a mobile development course at Umeå University."
                tags={['Kotlin', 'Jetpack Compose', 'Room', 'CameraX', 'MVVM']}
                meta={[
                    { label: 'Role', information: 'Developer & Designer' },
                    { label: 'Timeline', information: 'Spring 2025' },
                    { label: 'Type', information: 'Course project' },
                ]}
            />

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        "The brief was to build a native Android app with a local database and camera integration. I wanted something I'd actually use, so I built a route tracker for climbers. Whether you're a beginner documenting your first sends or an experienced climber keeping a project list, BouldR gives you a simple way to log what you've done and what you're still working on.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="The application">
                <ProjectParagraph
                    paragraphs={[
                        "BouldR is built entirely in Kotlin with Jetpack Compose. The app centers on a single data model, a route, which carries a photo, a name, a difficulty grade, personal notes, a creation date, and a flag for whether it's been completed.",
                        'Routes are stored locally using Room, with a DAO layer handling all database operations. The architecture follows MVVM. A single ViewModel manages all route state and exposes derived values for completed count, planned count, hardest grade, and recent activity. These update reactively across the UI.',
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: homeEmptyImage,
                            alt: 'Empty home screen showing zero completed boulders, zero planned, and a dash for hardest grade, with a prompt to add the first route.',
                            caption: 'Home — empty state',
                        },
                        {
                            src: homeImage,
                            alt: 'Home screen showing one completed boulder, one planned route with hardest grade 3c, and a recent activity list with The Slab as planned and Warmup as completed.',
                            caption: 'Home — with routes',
                        },
                        {
                            src: routesImage,
                            alt: 'Routes screen divided into Planerade and Avklarade sections, showing The Slab as planned and Warmup as completed, each with a thumbnail, grade, date and status badge.',
                            caption: 'Routes',
                        },
                        {
                            src: routeDetailImage,
                            alt: 'Route detail screen for The Slab showing a photo of yellow holds, name, grade 5c, notes, a mark as completed checkbox, a save changes button and a delete route option.',
                            caption: 'Route detail',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />
            </ProjectSection>

            <ProjectSection title="Adding a route">
                <ProjectParagraph
                    paragraphs={[
                        'Adding a new route starts from the dedicated add screen in the navigation bar. The user either takes a photo in-app using the CameraX-powered camera view, or uploads one from their gallery. Both paths prompt for the relevant permission the first time.',
                        'Once a photo is selected it appears in the form alongside fields for name, grade, and notes. The user can also mark the route as completed before saving, which is useful for logging routes after the fact.',
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: newRouteImage,
                            alt: 'New route form with an empty photo placeholder, Ta foto and Ladda upp buttons, and empty fields for route name, grade, notes and a mark as completed checkbox.',
                            caption: 'Add route — empty',
                        },
                        {
                            src: cameraImage,
                            alt: 'Full-screen camera view of a bouldering wall with yellow holds, with a cancel button top left and a take photo button at the bottom.',
                            caption: 'Camera',
                        },
                        {
                            src: newRouteFilledImage,
                            alt: 'New route form filled in with a photo of yellow holds, route name The Slab, grade 5c, and notes reading Ser ut att vara en klurig start.',
                            caption: 'Add route — filled in',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />
            </ProjectSection>

            <ProjectSection title="Planned and completed routes">
                <ProjectParagraph
                    paragraphs={[
                        'Routes live in one of two states: planned or completed. The routes screen shows both in separate sections, each entry showing a thumbnail, grade, date and a status badge. Tapping a route opens the detail screen where the user can edit any field, mark it as completed, or delete it. Marking it as completed moves it to the completed section and updates the home screen counters right away.',
                        'Completed routes can be moved back to planned from the same screen, in case something was marked by mistake.',
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: routesEmptyImage,
                            alt: 'Routes screen in empty state showing no planned and no completed routes.',
                            caption: 'Routes — empty state',
                        },
                        {
                            src: routesImage,
                            alt: 'Routes screen with one planned route and one completed route, each showing a thumbnail, grade, date and status badge.',
                            caption: 'Routes — with entries',
                        },
                        {
                            src: routeDetailImage,
                            alt: 'Route detail screen for The Slab showing a photo of yellow holds, name, grade 5c, notes, a mark as completed checkbox, a save changes button and a delete route option.',
                            caption: 'Route detail',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />
            </ProjectSection>

            <ProjectSection title="Technical decisions">
                <ProjectKeyInsight
                    introduction="All data stays on the device."
                    paragraphs={[
                        "There's no backend and no user accounts. Everything is stored locally using Room. This kept the scope realistic for a course project and made sense for the use case. A personal training log doesn't need to live anywhere other than your own phone. The settings screen exposes a single destructive option: clear all data.",
                    ]}
                />
                <ProjectKeyInsight
                    introduction="CameraX over the standard camera intent."
                    paragraphs={[
                        'Using CameraX instead of delegating to the system camera allowed for a fully custom camera UI embedded within the app. Photos taken in-app and images uploaded from the gallery are both copied to internal storage with timestamp-based filenames. This keeps the URI stable even if the source file is later moved or deleted.',
                    ]}
                />
                <ProjectKeyInsight
                    introduction="ViewModelFactory for correct lifecycle handling."
                    paragraphs={[
                        'A PlannedRouteViewModelFactory is used to construct the ViewModel with the DAO injected, rather than instantiating it directly. This ensures the ViewModel survives configuration changes like screen rotation and that the DAO dependency is wired up correctly.',
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Revisiting the UI">
                <ProjectParagraph
                    paragraphs={[
                        "The original UI wasn't really designed. It was quickly put together to get the flow working, which was the point of the assignment.",
                        'About a year later, revisiting the project for my portfolio gave me a reason to go back and build the interface properly. I rebuilt it from scratch: a home screen with stat cards for completed routes, planned count, and hardest grade, a cleaned-up navigation bar, and consistent components across all screens. The core logic stayed intact.',
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="What I'd add next">
                <ProjectParagraph
                    paragraphs={[
                        "The most useful addition would be filtering. Being able to sort routes by grade, date, or status would make the list easier to navigate as it grows. I'd also like to add the ability to draw or annotate directly on a route photo, which would make planning beta more practical. Landscape support was started on the navigation bar as a proof of concept but wasn't prioritized since the app is designed primarily for portrait use.",
                    ]}
                />
            </ProjectSection>

            <PillButton
                href="https://github.com/codingquercus/bouldr"
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
        </article>
    );
}
