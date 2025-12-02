import Image from "next/image";

import Navbar from "@/app/components/Navbar";

export default function GesturePage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7]">
            <Navbar></Navbar>
            <div className="w-full max-w-[1000px] px-4 sm:px-10 z-20 pt-20">
                <div>
                    <p className="font-base">2025</p>
                    <h1 className="text-5xl font-medium text-left">Attitudes Toward Gesture Based Interactions</h1>
                    <p className="text-xl">
                        What are young adults in Swedens attitudes toward gesture based interactions?
                    </p>
                </div>


            </div>
        </div>
    );
}
