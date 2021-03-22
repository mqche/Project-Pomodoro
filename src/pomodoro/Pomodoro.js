import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Display from "./Display";
import PlusMinusButtons from "./PlusMinusButtons";
import PlayButtons from "./PlayButtons";

function Pomodoro() {
  // Timer starts out paused
  // ** checks for running timer, starts false
  const [isTimerRunning, setIsTimerRunning] = useState(false); // included

  // time keeper object
  const [timeTracker, setTimeTracker] = useState({
    timerStatus: "Initial",
    focusCurrentMins: 25,
    focusDefault: 25 * 60,
    focusMin: 5,
    focusMax: 60,
    focusIncrement: 5, // make decrement?
    focusDecrement: -5,
    breakDefault: 5 * 60,
    breakCurrentMins: 5,
    breakMin: 1,
    breakMax: 15,
    breakIncrement: 1, // make decrement?
    breakDecrement: -1,
  });

  const {
    focusDefault,
    focusCurrentMins,
    breakDefault,
    breakCurrentMins,
    timerStatus,
  } = timeTracker;
  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if (focusDefault === 0) {
        setTimeTracker({
          ...timeTracker,
          focusDefault: focusCurrentMins * 60,
          timerStatus: "Break",
        });
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/0086.mp3`).play();
      } else if (breakDefault === 0) {
        setTimeTracker({
          ...timeTracker,
          breakDefault: breakCurrentMins * 60,
          timerStatus: "Focus",
        });
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/0086.mp3`).play();
      } else if (timerStatus === "Focus") {
        setTimeTracker({
          ...timeTracker,
          focusDefault: focusDefault - 1,
        });
      } else if (timerStatus === "Break") {
        setTimeTracker({
          ...timeTracker,
          breakDefault: breakDefault - 1,
        });
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    if (timerStatus !== "Focus") {
      setTimeTracker({ ...timeTracker, timerStatus: "Focus" });
    }
  }

  return (
    <div className="pomodoro">
      <PlusMinusButtons
        timeTracker={timeTracker}
        setTimeTracker={setTimeTracker}
        isTimerRunning={isTimerRunning}
      />
      <PlayButtons
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        timeTracker={timeTracker}
        setTimeTracker={setTimeTracker}
        setIsTimerRunning={setIsTimerRunning}
      />
      <Display timeTracker={timeTracker} />
    </div>
  );
}

export default Pomodoro;
















