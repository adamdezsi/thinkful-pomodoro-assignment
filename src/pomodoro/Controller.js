import React, { useState, setState } from "react";
import classNames from "../utils/class-names";

const Controller = (props) => {
  const { playPause, isTimerRunning, stop } = props;

  return (
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
        onClick={stop}
        type="button"
        className="btn btn-secondary"
        title="Stop the session"
      >
        <span className="oi oi-media-stop" />
      </button>
    </div>
  );
};

export default Controller;
