"use client";

export default function Hero() {
    return (
        <section className="flex flex-col gap-2 md:gap-4 justify-center min-h-screen">
            <div className="flex flex-row items-center gap-1 md:gap-4 w-full">
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold">
                    Åke
                </h1>
                <span className="flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 lg:px-12 lg:py-12">
                    <p className="font-bold text-background text-center text-sm md:text-2xl xl:text-3xl">
                        UX Designer
                    </p>
                </span>
                <span className="flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 lg:px-12 lg:py-12">
                    <p className="font-bold text-background text-center text-sm md:text-2xl xl:text-3xl">
                        Frontend Dev
                    </p>
                </span>
            </div>
            <div className="flex flex-row items-center gap-1 md:gap-4 w-full">
                <span className="flex-1 rounded-full bg-foreground px-2 py-2 sm:p-4 lg:px-12 lg:py-12">
                    <p className="font-bold text-background text-center text-sm md:text-2xl xl:text-3xl">
                        Umeå, Sweden
                    </p>
                </span>
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold">
                    Flatholm
                </h1>
            </div>
            <p className="text-base md:text-xl lg:text-3xl mt-4 w-full md:w-4/5">
                I design and build with the user in mind, making what could have been a complex system feel like an intuitive experience.
            </p>
        </section>
    );
}