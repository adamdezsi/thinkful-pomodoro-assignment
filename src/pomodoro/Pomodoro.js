import React, { useState, setState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { secondsToDuration, minutesToDuration } from "../utils/duration";
import Controller from "./Controller";
import ProgressBar from "./ProgressBar";
import TimeMachine from "./TimeMachine";
import Remaining from "./Remaining";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(focusDuration * 60);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [mode, setMode] = useState("focus");

  useInterval(
    () => {
      if (timeRemaining === 0) {
        new Audio(
          `https://assets.mixkit.co/sfx/preview/mixkit-musical-reveal-961.mp3`
        ).play();
        if (mode === "focus") {
          setMode("break");
          setTimeRemaining(breakDuration * 60);

          return;
        } else {
          setMode("focus");
          setTimeRemaining(focusDuration * 60);

          return;
        }
      }
      setTimeRemaining((prevTime) => prevTime - 1);
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setIsSessionActive(true);
  }

  function stop() {
    setIsTimerRunning(false);
    if (mode === "focus") {
      setTimeRemaining(focusDuration * 60);
    } else {
      setTimeRemaining(breakDuration * 60);
    }
    setMode("focus");
    setIsSessionActive(false);
  }

  const decreaseFocus = () => {
    const newFocus = focusDuration - 5;
    setFocusDuration(newFocus);
    setTimeRemaining(newFocus * 60);
  };

  const increaseFocus = () => {
    setFocusDuration((prevFocus) => {
      const newFocus = prevFocus + 5;
      setTimeRemaining(newFocus * 60);
      return newFocus;
    });
  };

  const decreaseBreak = () => {
    setBreakDuration((lastBreak) => lastBreak - 1);
  };

  const increaseBreak = () => {
    setBreakDuration((lastBreak) => lastBreak + 1);
  };

  return (
    <div className="pomodoro">
      <TimeMachine
        focusDuration={focusDuration}
        minutesToDuration={minutesToDuration}
        decreaseFocus={decreaseFocus}
        isTimerRunning={isTimerRunning}
        increaseFocus={increaseFocus}
        breakDuration={breakDuration}
        decreaseBreak={decreaseBreak}
        increaseBreak={increaseBreak}
      />
      <div className="row">
        <div className="col">
          <Controller
            playPause={playPause}
            isTimerRunning={isTimerRunning}
            stop={stop}
          />
        </div>
      </div>
      <div>
        <div className="row mb-2">
          <div className="col">
            <Remaining
              focusDuration={focusDuration}
              breakDuration={breakDuration}
              mode={mode}
            />
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(timeRemaining)} remaining
            </p>
          </div>
        </div>
        <ProgressBar
          mode={mode}
          timeRemaining={timeRemaining}
          breakDuration={breakDuration}
          focusDuration={focusDuration}
          minutesToDuration={minutesToDuration}
          isSessionActive={isSessionActive}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
