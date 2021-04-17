import React from "react";
import { minutesToDuration } from "../utils/duration";

function Remaining(props) {
  const { focusDuration, breakDuration, mode } = props;

  return (
    <h2 data-testid="session-title">
      {mode === "focus"
        ? `Focusing for ${minutesToDuration(focusDuration)} minutes`
        : `On Break for ${minutesToDuration(breakDuration)} minutes`}
    </h2>
  );
}

export default Remaining;
