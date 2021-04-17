import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function TimeMachine(props) {
  const {
    minutesToDuration,
    focusDuration,
    decreaseFocus,
    isTimerRunning,
    increaseFocus,
    breakDuration,
    decreaseBreak,
    increaseBreak,
  } = props;

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decreaseFocus}
              disabled={isTimerRunning || focusDuration <= 5 ? true : false}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={increaseFocus}
              disabled={isTimerRunning || focusDuration >= 60 ? true : false}
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
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decreaseBreak}
                disabled={breakDuration <= 1 || isTimerRunning ? true : false}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={increaseBreak}
                disabled={breakDuration >= 15 || isTimerRunning ? true : false}
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
export default TimeMachine;
