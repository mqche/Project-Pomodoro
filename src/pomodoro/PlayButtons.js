import React from "react";
import classNames from "../utils/class-names";

function PlayButtons(props) {
  const {
    playPause,
    isTimerRunning,
    timeTracker,
    setTimeTracker,
    setIsTimerRunning,
  } = props;
  const { timerStatus } = timeTracker;

  function stopHandler() {
    setIsTimerRunning(false);
    setTimeTracker({
      ...timeTracker,
      timerStatus: "Initial",
      focusCurrentMins: 25,
      breakCurrentMins: 5,
      focusDefault: 25 * 60,
      breakDefault: 5 * 60,
    });
  }

  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            onClick={() => stopHandler()}
            disabled={timerStatus === "Initial" || timerStatus !== "Focus"}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayButtons;