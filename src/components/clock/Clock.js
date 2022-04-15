import React from "react";
import NumberClock from "../number-clock/NumberClock";
import Circles from "../circles/circles";
import "./style.css";

function BaseClock({ time }) {
  return (
    <div className="clock">
      <Circles time={time} />
      <NumberClock />
    </div>
  );
}

export default BaseClock;
