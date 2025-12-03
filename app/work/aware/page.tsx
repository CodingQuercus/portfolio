import Image from "next/image";

import Navbar from "@/app/components/Navbar";

import awareProject from "@/public/aware-project.png"

export default function AwarePage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
            <Navbar></Navbar>
            <div className="w-full max-w-[1200px] px-4 sm:px-10 z-20 pt-20">
                <div>
                    <p className="font-base">2025</p>
                    <h1 className="text-5xl font-medium text-left">aWAre</h1>
                    <p className="text-xl">
                        How do we increase awareness of natural hazards in Western Australia?
                    </p>
                </div>


                <Image
                    src={awareProject}
                    alt="aWAre"
                    height={400}
                    width={1200}
                    className="rounded-lg mb-16"
                />
                <div>
                <div>Role, UX/UI, Full-Stack Developer</div>
                    <div>Time, 10 weeks, 50</div>
                </div>
                <div>
                    Problem 
                    How might we effectively educate people about the dangers of wildlife and natural hazards in Western Australia (such as swimming risks, bushfires, and shark attacks)?
                    
                </div>
                <div>
                    Process (Design Thinking)
                    Understanding the market by reading reports from marketing students and performing a competitive analysis.
                </div>
                <div>
                    Solution
                   
                </div>
                <div>
                    Impact
                </div>
            </div>
        </div>
    );
}
