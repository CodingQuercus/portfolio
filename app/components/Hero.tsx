"use client";

import { StaggerContainer, StaggerItem } from "./StaggerOnMount";

export default function Hero() {
    return (
        <section
            className="flex flex-col gap-2 md:gap-4 justify-center min-h-screen"
        >

            {/*Mobile*/}
            <StaggerContainer
                className="flex flex-col justify-center gap-3 md:hidden w-fit mx-auto"
            >
                <StaggerItem>
                    <div
                        className="flex flex-row items-center gap-3 w-full"
                    >
                        <h1 className="text-7xl font-bold leading-none tracking-tight">
                            Åke
                        </h1>
                        <div className="flex flex-col gap-2 flex-1">
                            <span className="rounded-full bg-foreground px-4 py-2">
                                <p className="font-bold text-background text-center text-sm">
                                    UX Designer
                                </p>
                            </span>
                            <span className="rounded-full bg-foreground px-4 py-2">
                                <p className="font-bold text-background text-center text-sm">
                                    Frontend Dev
                                </p>
                            </span>
                        </div>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <h1 className="text-7xl font-bold leading-none tracking-tight">
                        Flatholm
                    </h1>
                </StaggerItem>

                <StaggerItem>
                    <span className="block rounded-full bg-foreground px-5 py-2 w-full">
                        <p className="font-bold text-background text-center text-base">
                            Umeå, Sweden
                        </p>
                    </span>
                </StaggerItem>
                <StaggerItem>
                    <p
                        className="text-base mt-2 w-0 min-w-full"
                    >
                        I enjoy the process of making complex systems easier to use.
                    </p>
                </StaggerItem>
            </StaggerContainer>

            {/*Desktop*/}
            <StaggerContainer
                className="hidden md:flex md:flex-col md:gap-4"
            >
                <StaggerItem>
                    <div className="flex flex-row items-center gap-1 md:gap-4 w-full">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
                            Åke
                        </h1>
                        <span className="flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 md:p-6 lg:px-12 lg:py-12">
                            <p className="font-bold text-background text-center text-sm md:text-2xl xl:text-3xl">
                                UX Designer
                            </p>
                        </span>
                        <span className="flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 md:p-6 lg:px-12 lg:py-12">
                            <p className="font-bold text-background text-center text-sm md:text-2xl xl:text-3xl">
                                Frontend Dev
                            </p>
                        </span>
                    </div>
                </StaggerItem>
                <StaggerItem>
                    <div className="flex flex-row items-center gap-1 md:gap-4 w-full">
                        <span className="flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 md:p-6 lg:px-12 lg:py-12">
                            <p className="font-bold text-background text-center text-sm md:text-2xl xl:text-3xl">
                                Umeå, Sweden
                            </p>
                        </span>
                        <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold">
                            Flatholm
                        </h1>
                    </div>
                </StaggerItem>
                <StaggerItem>
                    <p className="text-base md:text-xl lg:text-3xl mt-4 w-full md:w-4/5">
                        I enjoy the process of making complex systems easier to use.
                    </p>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}
