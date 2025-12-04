import Image from "next/image";

import fsProject from "@/public/fs/fs-project.png"

export default function FikaSpeletPage() {
    return (
        <div className="w-full max-w-[1200px] min-h-screen px-10 sm:px-20 pt-20">
            <div>
                <p className="font-base">2024</p>
                <h1 className="text-5xl font-medium text-left">FikaSpelet</h1>
                <p className="text-xl">
                    How can we increase customer traffic through gamification?
                </p>
            </div>


            <Image
                src={fsProject}
                alt="FikaSpelet"
                height={400}
                width={1200}
                className="rounded-lg"
            />
            <div>
                <div>Role, UX/UI, Full-Stack Developer</div>
                <div>Time, 20 weeks, 25%</div>
            </div>
            <div>
                Problem

            </div>
            <div>
                Process (Design Build Test)
                User Research, what kinds of rewards? Is there an interest for playing games for rewards?
                User Test, is the game playable? is it an enjoyable experience?
                Iterative development, game should not be to hard, but not to easy.
            </div>
            <div>
                Solution
                Marketing game
            </div>
            <div>
                How can this increase customer traffic? During a test run which lasted for 2 days, a total of 2500 games were played, approximately 40 plays per user, with 126 redirections to the website.
            </div>
        </div>
    );
}
