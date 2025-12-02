export default function Hero() {
    return (
        <section className="flex flex-col gap-5 md:gap-4 items-start justify-evenly min-h-screen">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <div className="text-5xl font-semibold sm:text-7xl md:text-8xl lg:text-9xl">Åke Flatholm</div>
                </div>
                <div className="flex flex-col gap-3 sm:w-4/5 md:w-3/4">
                    <p className="text-base md:text-2xl">
                        Hi, I&apos;m a Master of Science Student in Interaction Technology and Design from Umeå.
                    </p>
                    <p className="text-base md:text-2xl leading-normal">
                        Currently working on my master&apos;s thesis, where I design and evaluate AI-driven conversational interfaces in compliance-driven environments for efficient information retrieval, with a focus on user trust.                    
                    </p>
                </div>
            </div>
        </section>
    )
}