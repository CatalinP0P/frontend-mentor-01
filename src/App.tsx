import React from "react";
import summaryData from "./data.json";

import iconMemory from "./assets/images/icon-memory.svg";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: iconReaction,
    color: "#f47b86",
    background: "#fff7f6",
  },
  {
    category: "Memory",
    score: 92,
    icon: iconMemory,
    color: "#ecb640",
    background: "#fffbf2",
  },
  {
    category: "Verbal",
    score: 61,
    icon: iconVerbal,
    color: "#28ad89",
    background: "#f3fafa",
  },
  {
    category: "Visual",
    score: 72,
    icon: iconVisual,
    color: "#19269d",
    background: "#f3f3fe",
  },
];

export default function App() {
  return (
    <div className="flex flex-col items-center lg:min-h-screen justify-center">
      <div className="w-full max-w-[50rem] flex flex-col lg:flex-row lg:shadow-xl lg:rounded-[2rem] overflow-hidden">
        <div className="w-full rounded-b-[2rem] lg:rounded-[2rem] text-white px-20 lg:px-16 pt-6 pb-10 lg:py-12 bg-gradient-to-b from-primary to-secondary flex flex-col items-center gap-6">
          <label className="font-semibold opacity-60 text-xl lg:text-2xl">
            Your Result
          </label>
          <div className="rounded-full h-40 w-40 lg:h-56 lg:w-56 bg-gradient-to-b from-[#4b23c9] to-[#4633f0] flex flex-col gap-2 items-center justify-center">
            <label className="text-6xl lg:text-7xl font-semibold lg:font-bold">
              76
            </label>
            <label className="opacity-40 font-semibold lg:font-bold lg:text-lg">
              of 100
            </label>
          </div>
          <div className="flex flex-col items-center gap-2">
            <label className="text-2xl lg:text-4xl font-semibold">Great</label>
            <label className="opacity-60 font-medium indent-1 text-center lg:text-xl">
              You scored higher than 65% of the people who have taken these
              tests.
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 w-full px-6 lg:px-12 lg:py-12 py-6">
          <label className="text-xl lg:text-2xl font-bold opacity-80">
            Summary
          </label>
          {data.map((x) => {
            return (
              <div
                className="flex flex-row w-full justify-between p-4 rounded-xl font-semibold shadow-sm"
                style={{ backgroundColor: x.background }}
              >
                <div
                  className="flex flex-row gap-4 items-center"
                  style={{ color: x.color }}
                >
                  <img alt={x.category} src={x.icon} />
                  <label>{x.category}</label>
                </div>
                <div className="flex flex-row gap-1 text-lg">
                  <label className="opacity-70">{x.score}</label>
                  <label className="opacity-40">/</label>
                  <label className="opacity-40">100</label>
                </div>
              </div>
            );
          })}
          <button
            className="px-4 w-full py-4 rounded-full text-white text-lg font-semibold mt-2 from-primary to-secondary hover:bg-gradient-to-b "
            style={{ backgroundColor: "#2f3c5a" }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
