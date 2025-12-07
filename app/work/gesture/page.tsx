
export default function GesturePage() {
    return (
        <div className="w-full min-h-screen max-w-[1200px] px-10 sm:px-20 pt-20">
            <div>
                <p className="font-base">2025</p>
                <h1 className="text-5xl font-medium text-left">Attitudes Toward Gesture Based Interactions</h1>
                <p className="text-xl">
                    Understanding young adults’ perceptions of gesture-based smart home interactions in Sweden.
                </p>
            </div>
            Role: Researcher
            Timeline: 20 weeks (25%)
            Survey, quantitative and qualitative analysis.

            <div>
                <h2 className="text-2xl font-medium mb-2">Introduction</h2>
                <p className="leading-relaxed">
                    Smart home technology is growing rapidly, but current interaction methods—voice and touch—have limitations
                    such as environmental noise, privacy concerns, or the need for physical proximity.
                    Gesture-based interaction offers a hands-free alternative, but its acceptance among everyday users remains unclear.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-medium mb-2">Objective</h2>
                <p>
                    The study investigates young adults’ attitudes toward gesture-based interaction in smart homes in Sweden—
                    focusing on perceived ease of use, usefulness, trust, and willingness to adopt.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-medium mb-2">Process</h2>
                <p className="mb-3">
                    The research followed a survey-based method grounded in the Technology Acceptance Model (TAM).
                    The survey included:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>18 Likert-scale questions measuring TAM dimensions (Perceived usefulness, Perceived ease of use, Attitude towards use, Behavioral intention to use)</li>
                    <li>Questions related to trust, privacy, and physical effort</li>
                    <li>3 open-ended questions analyzed through content analysis</li>
                </ul>
                <p className="mt-3">
                    A pilot test ensured clarity before distribution. The final survey collected responses from
                    17 young adults aged 21–28 in Sweden.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-medium mb-2">Key Findings</h2>

                <h3 className="text-lg font-medium mt-4">1. Familiarity but mixed comfort levels</h3>
                <p>
                    All participants had prior experience with gesture-based systems (Wii, Kinect).
                    However, only 9 felt comfortable using gestures to control smart home devices,
                    while 4 were unsure and 4 were uncomfortable
                </p>

                <h3 className="text-lg font-medium mt-4">2. Slight agreement on ease of use</h3>
                <p>
                    Participants believed gesture-based systems would be <strong>easy to learn (x̄ = 4.59)</strong>
                    and felt confident they could use them without help (x̄ = 5.53), though variability was high.
                </p>

                <h3 className="text-lg font-medium mt-4">3. Perceived usefulness depended on context</h3>
                <p>
                    Gesture control was viewed as useful when <strong>hands are occupied</strong> (cooking, hosting) or
                    for <strong>accessibility needs</strong>. However, participants were uncertain whether gestures
                    would actually improve task efficiency (x̄ = 3.29).
                </p>

                <h3 className="text-lg font-medium mt-4">4. Strong concerns about reliability and privacy</h3>
                <p>
                    Participants feared misinterpretation of gestures, accidental activations, and being
                    “watched” by cameras or sensors—highlighting the need for <strong>reliable recognition
                        and transparent data practices</strong>.
                </p>

                <h3 className="text-lg font-medium mt-4">5. Conditional willingness to adopt</h3>
                <p>
                    Participants would use gesture-based systems regularly <strong>if they work well</strong> (x̄ = 5.53),
                    but overall intention to adopt remained neutral (x̄ ≈ 4.0).
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-medium mb-2">Conclusion</h2>
                <p>
                    Young adults show <strong>neutral to slightly positive attitudes</strong> toward gesture-based smart home interactions.
                    Acceptance is highly dependent on <strong>system reliability</strong> and <strong>privacy safeguards</strong>.
                    When hands-free convenience is needed, gestures are seen as valuable, but concerns about
                    accuracy and surveillance must be addressed for broader adoption.
                </p>
            </div>

            <div className="mt-10">
                <p>
                    If you are interested in reading the full paper, feel free to reach out!
                </p>
            </div>

        </div>
    );
}
