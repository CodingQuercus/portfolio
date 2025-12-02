import Image from "next/image";

import Navbar from "@/app/components/Navbar";

export default function FikaSpeletPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
            <Navbar></Navbar>
            <div className="w-full max-w-[1200px] px-4 sm:px-10 z-20 pt-20">
                <div>
                    <p className="font-base">2024</p>
                    <h1 className="text-5xl font-medium text-left">FikaSpelet</h1>
                    <p className="text-xl">
                        How can we increase customer traffic through gamification?
                    </p>
                </div>


                <Image
                    src="/aware-card-image.png"
                    alt="aWAre"
                    height={400}
                    width={400}
                    className="rounded-lg mb-16"
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
                    Results
                    2500 games played, 40 plays per user, 126 redirections to customer website.
                </div>
            </div>
        </div>
    );
}
