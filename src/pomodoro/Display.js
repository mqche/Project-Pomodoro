import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration/index";

function Display(props) {
  const { timeTracker } = props;
  const {
    timerStatus,
    focusDefault,
    focusCurrentMins,
    breakDefault,
    breakCurrentMins,
  } = timeTracker;

  let progressBar = 0;

  if (timerStatus === "Focus") {
    let newFoCurr = focusCurrentMins * 60;
    let bar = (focusDefault / newFoCurr) * 100;
    progressBar = 100 - bar;
  } else {
    let newBrCurr = breakCurrentMins * 60;
    let bar = (breakDefault / newBrCurr) * 100;
    progressBar = 100 - bar;
  }

  
  // return new aria-valuenow and style number, which are the same
  // focusDefault or breakDefault will be counting down as the bar increases
  // focusCurrentMins or breakCurrentMins set that to 100% value
  // focusCurrentMins or breakCurrentMins set to denominator
  // numerator focusDefault or breakDefault

  if (timerStatus === "Initial") {
    return null;
  } else {
    return (
      <div>
        {/* This area only displays when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* Message updates below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">
              {timerStatus === "Focus"
                ? `Focusing for ${minutesToDuration(focusCurrentMins)} minutes`
                : `On Break for ${minutesToDuration(breakCurrentMins)} minutes`}
            </h2>
            {/* Message updates below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {timerStatus === "Focus"
                ? `${secondsToDuration(focusDefault)} remaining`
                : `${secondsToDuration(breakDefault)} remaining`}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progressBar} // As elapsed time increases aria-valuenow increases
                style={{ width: `${progressBar}%` }} // As elapsed time increases increases width %
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;