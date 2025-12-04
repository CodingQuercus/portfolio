import Image from "next/image";

import awareProject from "@/public/aware/aware-project.png"

export default function AwarePage() {
    return (
            <div className="w-full max-w-[1200px] min-h-screen px-10 sm:px-20 pt-20">
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
                <div className="flex flex-row">
                    <div>
                    <h2>Process</h2>
                    The project followed the Design Thinking method. 
                    The intial phase was empathize, to understand the target users, we read reports from the marketing students and performed a competitive analysis of similar applications already used in Western Australia.
                    The main problem with the current market was that the applications existing create a fragmented experience for users, there werent any applications who showed all types of dangers. 

                    Brainstorming concepts. First two concepts, a location based application and a gamificatio application.
                    Chose together with stakeholders to continue developing the location based application.

                    Continously during the project we had meetings with ECU students and UMU students, showing progress and discussing features. 
                    </div>


                </div>
                <div>
                    Solution
                    
                   
                </div>
                <div>
                    Impact
                </div>
            </div>
    );
}
