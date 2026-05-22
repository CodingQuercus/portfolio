import { Metadata } from 'next';

import BackButton from '@/app/components/projects/BackButton';
import ProjectHeader from '@/app/components/projects/ProjectHeader';
import ProjectSection from '@/app/components/projects/ProjectSection';
import ProjectParagraph from '@/app/components/projects/ProjectParagraph';
import ProjectImage from '@/app/components/projects/ProjectImage';
import ProjectMockupGrid from '@/app/components/projects/ProjectMockupGrid';
import ProjectKeyInsight from '@/app/components/projects/ProjectKeyInsight';
import PillButton from '@/app/components/PillButton';

import iphoneStart from '@/public/sng/sng_i_start.png';
import iphoneCreate from '@/public/sng/sng_i_create.png';
import iphoneCreate2 from '@/public/sng/sng_i_create2.png';
import iphoneLobby from '@/public/sng/sng_i_lobby.png';
import iphoneLobby2 from '@/public/sng/sng_i_lobby2.png';
import iphoneGamestart from '@/public/sng/sng_i_gamestart.png';
import iphoneGuess from '@/public/sng/sng_i_guess1.png';
import iphoneGuess2 from '@/public/sng/sng_i_guess2.png';
import iphoneChat from '@/public/sng/sng_i_chat.png';
import iphoneCorrect from '@/public/sng/sng_i_correct_guess.png';
import iphoneLeaderboard from '@/public/sng/sng_i_leaderboard.png';

import androidStart from '@/public/sng/sng_a_start.png';
import androidJoin from '@/public/sng/sng_a_join1.png';
import androidJoin2 from '@/public/sng/sng_a_join2.png';
import androidLobby from '@/public/sng/sng_a_lobby.png';
import androidGamestart from '@/public/sng/sng_a_gamestart.png';
import androidDraw from '@/public/sng/sng_a_draw.png';
import androidDraw2 from '@/public/sng/sng_a_draw2.png';
import androidChat from '@/public/sng/sng_a_chat.png';
import androidCorrect from '@/public/sng/sng_a_correct_guess.png';
import androidLeaderboard from '@/public/sng/sng_a_leaderboard.png';

import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Sketch'N'Guess",
    description:
        'A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js and Socket.io for real-time communication.',
};

export default function SketchPage() {
    return (
        <article className="flex flex-col gap-4 md:gap-8 min-h-screen pt-24 md:pt-28">
            <BackButton label="Back to projects" />

            <ProjectHeader
                title="Sketch'N'Guess"
                backgroundColor="#E96FA6"
                description="A GPS-based multiplayer drawing and guessing game for mobile, developed during a design sprint using React Native, Node.js and Socket.io for real-time communication."
                tags={[
                    'Mobile Development',
                    'React Native',
                    'Node.js',
                    'Socket.io',
                    'Design Sprint',
                    'Prototyping',
                    'Figma',
                ]}
                meta={[
                    { label: 'Role', information: 'Developer & Designer' },
                    { label: 'Timeline', information: 'Autumn 2024' },
                    { label: 'Type', information: 'Course project' },
                ]}
            />

            <ProjectSection title="Problem">
                <ProjectParagraph
                    paragraphs={[
                        "The brief was to build a mobile app where users paint on a geographic canvas using their GPS position. We turned that into a multiplayer game: one player draws a word by physically moving outdoors, while everyone else tries to guess what they're drawing in real time, a mobile Pictionary where your route is the pen.",
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="What we built">
                <ProjectParagraph
                    paragraphs={[
                        'The full flow runs on iOS and Android from a single React Native codebase, communicating with a shared Node.js server via Socket.io. Every step, from creating a game to the final leaderboard, is handled by the server in real time.',
                    ]}
                />

                <ProjectMockupGrid
                    cols={5}
                    aspectRatio="9/19"
                    mockups={[
                        {
                            src: iphoneStart,
                            alt: "iOS home screen showing the Sketch'N'Guess logo with Join, Create and Rules buttons.",
                            caption: 'iOS — Home screen',
                        },
                        {
                            src: androidStart,
                            alt: "Android home screen showing the Sketch'N'Guess logo with Join, Create and Rules buttons.",
                            caption: 'Android — Home screen',
                        },
                    ]}
                />

                <ProjectParagraph
                    paragraphs={[
                        'The host sets up the game, canvas size, round duration and their nickname. The server generates a lobby code. Other players join by entering the code and a nickname.',
                    ]}
                />

                <ProjectMockupGrid
                    mockups={[
                        {
                            src: iphoneCreate,
                            alt: 'iOS create screen showing a map with a canvas boundary and canvas size options.',
                            caption: 'iOS — Create: Setup of canvas',
                        },
                        {
                            src: iphoneCreate2,
                            alt: 'iOS create screen showing a map preview, canvas size set to 50x50, duration set to 3 minutes, rounds set to 5, nickname field filled with Oak, plus Back and Create buttons.',
                            caption: 'iOS — Create: Setup of game settings',
                        },
                        {
                            src: iphoneLobby,
                            alt: 'iOS lobby screen showing room code Q28605, a leaderboard in round 1 of 5 with player OAK on 0 points, and Leave and Start buttons.',
                            caption: 'iOS — Created lobby',
                        },
                        {
                            src: androidJoin,
                            alt: 'Android join screen showing an empty form with fields for Lobby Code and Nickname, plus Back and Join buttons.',
                            caption: 'Android — Join popup',
                        },
                        {
                            src: androidJoin2,
                            alt: 'Android join screen showing the join form filled in with lobby code Q286O5 and nickname Oak2.',
                            caption: 'Android — Entered information',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />

                <ProjectParagraph
                    paragraphs={[
                        'Once everyone is in, the lobby shows a live leaderboard that updates after each round. The host starts each round when ready, the server then randomly assigns who draws and gives them a word',
                    ]}
                />

                <ProjectMockupGrid
                    mockups={[
                        {
                            src: iphoneLobby2,
                            alt: 'iOS lobby screen showing room code Q28605, a leaderboard in round 1 of 5 with players OAK and OAK2 both on 0 points, and Leave and Start buttons.',
                            caption: 'iOS — Lobby',
                        },
                        {
                            src: androidLobby,
                            alt: 'Android lobby screen showing room code Q28605, a leaderboard in round 1 of 5 with players OAK and OAK2 both on 0 points, and a Leave button.',
                            caption: 'Android — Lobby',
                        },
                        {
                            src: iphoneGamestart,
                            alt: 'iOS lobby screen showing the countdown overlay with the number 4, room code Q28605, and players OAK and OAK2 both on 0 points.',
                            caption: 'iOS — Countdown before round',
                        },
                        {
                            src: androidGamestart,
                            alt: 'Android lobby screen showing the countdown overlay with the number 4 before the round starts.',
                            caption: 'Android — Countdown before round',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />

                <ProjectParagraph
                    paragraphs={[
                        'The drawer sees their word and starts moving. GPS coordinates stream in real time to the server and out to all connected guessers, rendered as polylines on a blank map canvas. The drawer can adjust brush size, color and undo strokes while moving.',
                    ]}
                />

                <ProjectMockupGrid
                    mockups={[
                        {
                            src: androidDraw,
                            alt: 'Android draw screen showing the word BOX, an empty map canvas, drawing tools for brush size, stroke style, undo, and color, plus a To Lobby button.',
                            caption: 'Android — Drawing in progress',
                        },
                        {
                            src: androidDraw2,
                            alt: 'Android draw screen showing the word BOX with a slightly larger brush size selected on the drawing tools panel.',
                            caption: 'Android — Drawing further along',
                        },
                        {
                            src: iphoneGuess,
                            alt: 'iOS guess screen showing a partial GPS-traced shape on the map canvas, a text input for guesses, a Guess button, and a To Lobby button.',
                            caption: 'iOS — Watching the drawing appear',
                        },
                        {
                            src: iphoneGuess2,
                            alt: 'iOS guess screen showing a near-complete GPS-traced box shape on the map canvas, a text input for guesses, a Guess button, and a To Lobby button.',
                            caption: 'iOS — Guessing',
                        },
                    ]}
                    cols={5}
                    aspectRatio="9/19"
                />

                <ProjectParagraph
                    paragraphs={[
                        'Guessers see the drawing appear stroke by stroke and type their guesses into the chat. Every message is checked server-side, a correct guess ends the round immediately, awards points to both the guesser and the drawer, and notifies all players.',
                    ]}
                />

                <ProjectMockupGrid
                    mockups={[
                        {
                            src: iphoneChat,
                            alt: 'iOS draw screen showing the word BOX, a chat message from OAK2 reading HOUSE on the map canvas, drawing tools for brush size, stroke style, undo, and color, plus a To Lobby button.',
                            caption: 'iOS — Chat with guesses',
                        },
                        {
                            src: androidChat,
                            alt: 'Android guess screen showing the map canvas, a chat message from OAK2 reading HOUSE, a text input for guesses, a Guess button, and a To Lobby button.',
                            caption: 'Android — Chat with guesses',
                        },
                        {
                            src: iphoneCorrect,
                            alt: 'iOS guess screen showing the correct guess overlay with the message: OAK guessed the correct word! It was BOX, with the guess input and buttons faded in the background.',
                            caption: 'iOS — Correct guess',
                        },
                        {
                            src: androidCorrect,
                            alt: 'Android draw screen showing the correct guess overlay with the message: OAK guessed the correct word! It was BOX.',
                            caption: 'Android — Correct guess',
                        },
                        {
                            src: iphoneLeaderboard,
                            alt: 'iOS lobby screen showing room code Q28605, a leaderboard in round 2 of 5 with OAK on 10 points and OAK2 on 5 points, and Leave and Start buttons.',
                            caption: 'iOS — Updated leaderboard',
                        },
                        {
                            src: androidLeaderboard,
                            alt: 'Android lobby screen showing room code Q28605, a leaderboard in round 2 of 5 with OAK on 10 points and OAK2 on 5 points, and a Leave button.',
                            caption: 'Android — Updated leaderboard',
                        },
                    ]}
                    cols={6}
                    aspectRatio="9/19"
                />
            </ProjectSection>

            <ProjectSection title="Individual contribution">
                <ProjectKeyInsight
                    introduction="My main focus was the Node.js server and the chat function."
                    paragraphs={[
                        'The server handles all game logic. Creating and joining games, assigning the drawer and word, distributing roles to connected clients, and managing the full session state via Socket.io. The chat doubles as the guessing mechanism: incoming messages are checked against the correct word server-side, and a correct guess ends the round and distributes points. Beyond the server, I contributed across the project where needed.',
                    ]}
                />
            </ProjectSection>

            <ProjectSection title="Revisiting the project">
                <ProjectKeyInsight
                    introduction="Two years later, I revisited the codebase."
                    paragraphs={[
                        'The original implementation worked, but the code was inconsistent. There were a lot of magic numbers, mismatched layouts across screens, and some server-side bugs around session cleanup on timeout and disconnect. Returning to it for my portfolio gave me a chance to fix what I would have done differently the first time: a consistent design system, proper safe area handling, flex-based layouts, and cleaner server logic. The screenshots here reflect that updated version.',
                    ]}
                />
            </ProjectSection>

            <div className="flex flex-col md:flex-row gap-4">
                <PillButton
                    href="https://github.com/codingquercus/sng-app"
                    target="_blank"
                >
                    View Client Code on GitHub
                    <FaExternalLinkAlt
                        size={16}
                        className="md:w-5 md:h-5"
                        aria-hidden="true"
                    />
                    <span className="sr-only">(opens in new tab)</span>
                </PillButton>
                <PillButton
                    href="https://github.com/codingquercus/sng-server"
                    target="_blank"
                >
                    View Server Code on GitHub
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
