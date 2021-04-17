import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function ProgressBar(props) {
  const {
    mode,
    timeRemaining,
    breakDuration,
    focusDuration,
    minutesToDuration,
    isSessionActive,
  } = props;

  let progress = "";
  if (mode !== "focus") {
    progress = (1 - timeRemaining / (breakDuration * 60)) * 100;
  } else if (mode === "focus") {
    progress = (1 - timeRemaining / (focusDuration * 60)) * 100;
  } else {
    progress = 0;
  }

  return (
    <div style={{ display: isSessionActive ? "block" : "none" }}>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
