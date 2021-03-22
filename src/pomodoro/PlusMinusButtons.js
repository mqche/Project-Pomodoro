import React from "react";
import { minutesToDuration } from "../utils/duration/index";

function PlusMinusButtons(props) {
  const { timeTracker, setTimeTracker, isTimerRunning } = props;
  const {
    focusCurrentMins,
    breakCurrentMins,
    focusIncrement,
    focusDecrement,
    focusMin,
    focusMax,
    breakMin,
    breakMax,
    breakIncrement,
    breakDecrement,
  } = timeTracker;

  const btnHandler = (type) => {
    if (type === "focusMinus") {
      if (focusCurrentMins > focusMin && focusCurrentMins <= focusMax) {
        let updatedfocusCurrentMins = focusCurrentMins + focusDecrement;
        setTimeTracker({
          ...timeTracker,
          focusCurrentMins: updatedfocusCurrentMins,
          focusDefault: updatedfocusCurrentMins * 60,
        });
      }
    }
    if (type === "focusPlus") {
      if (focusCurrentMins >= focusMin && focusCurrentMins < focusMax) {
        let updatedfocusCurrentMins = focusCurrentMins + focusIncrement;
        setTimeTracker({
          ...timeTracker,
          focusCurrentMins: updatedfocusCurrentMins,
          focusDefault: updatedfocusCurrentMins * 60,
        });
      }
    }
    if (type === "breakMinus") {
      if (breakCurrentMins > breakMin && breakCurrentMins <= breakMax) {
        let updatedbreakCurrentMins = breakCurrentMins + breakDecrement;
        setTimeTracker({
          ...timeTracker,
          breakCurrentMins: updatedbreakCurrentMins,
          breakDefault: updatedbreakCurrentMins * 60,
        });
      }
    }
    if (type === "breakPlus") {
      if (breakCurrentMins >= breakMin && breakCurrentMins < breakMax) {
        let updatedbreakCurrentMins = breakCurrentMins + breakIncrement;
        setTimeTracker({
          ...timeTracker,
          breakCurrentMins: updatedbreakCurrentMins,
          breakDefault: updatedbreakCurrentMins * 60,
        });
      }
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusCurrentMins)}
          </span>
          <div className="input-group-append">
            {/* Implemented decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => btnHandler("focusMinus")}
              disabled={isTimerRunning}
            >
              <span className="oi oi-minus" />
            </button>
            {/* Implemented increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={() => btnHandler("focusPlus")}
              disabled={isTimerRunning}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* Displays the current break session duration */}
              Break Duration: {minutesToDuration(breakCurrentMins)}
            </span>
            <div className="input-group-append">
              {/* Implemented decreasing break duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={() => btnHandler("breakMinus")}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              {/* Implemented increasing break duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => btnHandler("breakPlus")}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlusMinusButtons;