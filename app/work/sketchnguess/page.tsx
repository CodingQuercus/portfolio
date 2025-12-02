import Image from "next/image";

import Navbar from "@/app/components/Navbar";

export default function SketchNGuessPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
            <Navbar></Navbar>
            <div className="w-full max-w-[1200px] px-4 sm:px-10 z-20 pt-20">
                <div>
                    <p className="font-base">2024</p>
                    <h1 className="text-5xl font-medium text-left">Sketch&apos;N&apos;Guess</h1>
                    <p className="text-xl">
                        A playful and social game.
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
                    <div>Time, 10 weeks, 50%</div>
                </div>
                <div>
                    Assignment
                    
                </div>
                <div>
                    Process (Agile Development 2 week sprints)
                    Started with a analysis of different applications for inspiration.
                    Developed LoFi prototype.
                    Set goals for every 2 weeks.
                </div>
                <div>
                    Solution
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}
