"use client";

import { useState, useEffect } from "react";

const questions = [
  {
    question: "What do I listen to while designing or coding?",
    answers: [
      "Music",
      "Nothing, complete silence",
      "Podcasts",
      "Nature sounds",
    ],
    correct: 0,
  },
  {
    question: "What is my favorite food?",
    answers: [
      "Fried rice",
      "Tacos",
      "Pizza",
      "Hamburger",
    ],
    correct: 1,
  },
  {
    question: "Whats my favorite weekend activity?",
    answers: [
      "Going to the gym",
      "Hanging out with friends",
      "Playing music",
      "All of the above",
    ],
    correct: 3,
  },
  {
    question: "Which instrument do I mainly play?",
    answers: ["Bass", "Saxophone", "Guitar", "Piano"],
    correct: 2,
  },
];

export default function AboutQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === questions[currentQ].correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ((q) => q + 1);
      setAnswered(false);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setScore(0);
    setAnswered(false);
    setFinished(false);
    setSelected(null);
  };

  useEffect(() => {
    if (!started || finished) return;
    if (answered) {
      const t = setTimeout(() => {
        nextQuestion();
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [answered, currentQ, started, finished]);

  const isCorrect = (i: number) => i === questions[currentQ].correct;

  return (
    <div className="flex flex-col bg-[#282828] p-8 w-[493px] rounded-3xl gap-4 items-center justify-center text-center">
      {!started && !finished && (
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold">Get to know me!</div>
          <button
            className="px-4 py-2 bg-[#328e6e] rounded-full hover:opacity-80"
            onClick={() => setStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      )}

      {started && !finished && (
        <div className="flex flex-col gap-8 w-full">
          {/* Header + Progress */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <span className="font-bold">Get to know me!</span>
              <span className="text-sm text-[#328E6E]">
                {currentQ + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-[#414141] h-4 rounded-full overflow-hidden">
              <div
                className="bg-[#328E6E] h-4 rounded-full transition-all"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question + Answers */}
          <div className="flex flex-col gap-2">
            <div className="text-md font-semibold text-left">
              {questions[currentQ].question}
            </div>
            {questions[currentQ].answers.map((ans, i) => {
              const chosen = i === selected;
              const base = "px-4 py-2 rounded-full bg-[#000000] text-left transition-colors";
              let styles = "hover:bg-[#00000075]";

              if (answered) {
                if (isCorrect(i)) styles = "bg-[#328E6E]";
                else if (chosen && !isCorrect(i)) styles = "bg-[#8E3234]";
              }

              return (
                <button
                  key={i}
                  className={`${base} ${styles}`}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                >
                  {ans}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {finished && (
        <div className="flex flex-col gap-4 items-center">
          <div className="text-xl font-bold">
            You got {score} / {questions.length} correct!
          </div>
          <button
            className="px-4 py-2 bg-[#328e6e] rounded-full hover:opacity-80"
            onClick={restart}
          >
            Play again!
          </button>
        </div>
      )}
    </div>
  );
}
