import type { Metadata } from 'next';

import BackButton from '@/app/components/projects/BackButton';
import ProjectHeader from '@/app/components/projects/ProjectHeader';
import ProjectSection from '@/app/components/projects/ProjectSection';
import ProjectParagraph from '@/app/components/projects/ProjectParagraph';
import ProjectMockupGrid from '@/app/components/projects/ProjectMockupGrid';
import ProjectKeyInsight from '@/app/components/projects/ProjectKeyInsight';
import ProjectCodeBlock from '@/app/components/projects/ProjectCodeBlock';
import LinkButton from '@/app/components/LinkButton';

import homeImage from '@/public/bouldr/bouldr_home.png';
import routesImage from '@/public/bouldr/bouldr_routes.png';
import routeDetailImage from '@/public/bouldr/bouldr_routedetail.png';
import cameraImage from '@/public/bouldr/bouldr_camera.png';

const GITHUB_URL = 'https://github.com/codingquercus/bouldr';

// From the repository, with the doc comments left out.
const stateCode = `// PlannedRouteDao.kt
@Query("SELECT * FROM routes")
fun getAllRoutes(): Flow<List<PlannedRoute>>

// PlannedViewModel.kt
val plannedRoutes: StateFlow<List<PlannedRoute>> = dao.getAllRoutes()
    .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())

val completedBouldersCount: StateFlow<Int> = plannedRoutes
    .map { notes -> notes.count { it.markedAsCompleted } }
    .stateIn(viewModelScope, SharingStarted.Lazily, 0)

val plannedBouldersCount: StateFlow<Int> = plannedRoutes
    .map { routes -> routes.count { !it.markedAsCompleted } }
    .stateIn(viewModelScope, SharingStarted.Lazily, 0)

val recentRoutes: StateFlow<List<PlannedRoute>> = plannedRoutes
    .map { routes -> routes.sortedByDescending { it.date }.take(3) }
    .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())

val hardestGrade: StateFlow<String> = plannedRoutes
    .map { routes ->
        routes
            .filter { it.markedAsCompleted }
            .mapNotNull { it.grade.ifBlank { null } }
            .maxOrNull() ?: ""
    }
    .stateIn(viewModelScope, SharingStarted.Lazily, "")`;

const copyCode = `fun copyImageToInternalStorage(context: Context, uri: Uri): Uri? {
    return try {
        val inputStream = context.contentResolver.openInputStream(uri) ?: return null
        val file = File(context.filesDir, "boulder_\${System.currentTimeMillis()}.jpg")
        val outputStream = FileOutputStream(file)
        inputStream.copyTo(outputStream)
        inputStream.close()
        outputStream.close()
        Uri.fromFile(file)
    } catch (e: Exception) {
        Log.e("FileCopy", "Fel vid kopiering: \${e.message}")
        null
    }
}`;

export const metadata: Metadata = {
    title: 'BouldR',
    description:
        'A native Android app for logging climbing routes, built in Kotlin with Jetpack Compose, a local Room database, CameraX and reactive MVVM state.',
};

export default function BouldRPage() {
    return (
        <article className="flex flex-col gap-12 md:gap-20 min-h-screen pt-24 md:pt-28">
            <BackButton label="Back to projects" />

            <div className="flex flex-col gap-8 md:gap-12">
                <ProjectHeader
                    title="BouldR"
                    description="A native Android app for logging climbing routes, built in Kotlin with Jetpack Compose. Routes and photos live on the device, in a Room database behind an MVVM architecture where every screen updates on its own when the data changes. Built during a mobile development course at Umeå University."
                    tags={[
                        'Kotlin',
                        'Jetpack Compose',
                        'Room',
                        'Kotlin Flow',
                        'CameraX',
                        'MVVM',
                    ]}
                    meta={[
                        { label: 'Role', information: 'Developer' },
                        { label: 'Timeline', information: 'Spring 2025' },
                        { label: 'Type', information: 'Course project' },
                    ]}
                />
                <LinkButton href={GITHUB_URL} target="_blank">
                    View the code on GitHub
                </LinkButton>
            </div>

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        "The brief was to build a native Android app with a local database and camera integration. I wanted something I'd actually use, so I built a route tracker for climbers. Whether you're a beginner documenting your first sends or an experienced climber keeping a project list, BouldR gives you a simple way to log what you've done and what you're still working on.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Architecture">
                <ProjectParagraph
                    paragraphs={[
                        'The app is built around a single Room entity, a route: a photo URI, a name, a grade, notes, a creation date and a flag for whether it has been completed. The DAO returns all routes as a Flow, so Room emits a new list every time the table changes.',
                        'One ViewModel turns that single stream into everything the screens need. The completed count, the planned count, the three most recent routes and the hardest completed grade are each derived from the same list and exposed as a StateFlow. Nothing is refreshed by hand: saving, editing or deleting a route updates the home screen and the route list on its own.',
                    ]}
                />
                <ProjectCodeBlock
                    code={stateCode}
                    description="One Flow from Room, derived into the state behind the home screen"
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
                        "Using CameraX instead of handing off to the system camera made it possible to build the camera view into the app itself. A captured photo is saved to the app's own pictures folder with a timestamp filename, and its URI is passed back to the add-route form through the navigation back stack's SavedStateHandle.",
                        "Images picked from the gallery are copied into the app's internal storage, so a route's photo keeps working even if the original file is later moved or deleted.",
                    ]}
                />
                <ProjectCodeBlock
                    code={copyCode}
                    description="Copying a gallery image into the app's internal storage"
                />
                <ProjectKeyInsight
                    introduction="A ViewModel factory for its dependencies."
                    paragraphs={[
                        "The ViewModel takes the DAO and a SavedStateHandle as constructor arguments, so Android can't create it on its own. PlannedRouteViewModelFactory builds it with those dependencies. Because it's still created through ViewModelProvider, the same instance survives configuration changes like screen rotation.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="The app">
                <ProjectParagraph
                    paragraphs={[
                        'Four screens cover the whole flow: a home screen with the counters and recent activity, a route list split into planned and completed, a detail screen for editing, completing or deleting a route, and the in-app camera for adding one.',
                    ]}
                />
                <ProjectMockupGrid
                    mockups={[
                        {
                            src: homeImage,
                            alt: 'Home screen showing one completed boulder, one planned route and a recent activity list with The Slab as planned and Warmup as completed.',
                            caption: 'Home',
                        },
                        {
                            src: routesImage,
                            alt: 'Routes screen divided into planned and completed sections, showing The Slab as planned and Warmup as completed, each with a thumbnail, grade, date and status badge.',
                            caption: 'Routes',
                        },
                        {
                            src: routeDetailImage,
                            alt: 'Route detail screen for The Slab showing a photo of yellow holds, name, grade 5c, notes, a mark as completed checkbox, a save changes button and a delete route option.',
                            caption: 'Route detail',
                        },
                        {
                            src: cameraImage,
                            alt: 'Full-screen camera view of a bouldering wall with yellow holds, with a cancel button top left and a take photo button at the bottom.',
                            caption: 'Camera',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />
            </ProjectSection>

            <ProjectSection title="What I'd add next">
                <ProjectParagraph
                    paragraphs={[
                        "The most useful addition would be filtering. Being able to sort routes by grade, date, or status would make the list easier to navigate as it grows. I'd also like to add the ability to draw or annotate directly on a route photo, which would make planning beta more practical. Landscape support was started on the navigation bar as a proof of concept but wasn't prioritized since the app is designed primarily for portrait use.",
                    ]}
                />
            </ProjectSection>

            <LinkButton href={GITHUB_URL} target="_blank">
                View on GitHub
            </LinkButton>
        </article>
    );
}
