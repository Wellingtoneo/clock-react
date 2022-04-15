import React from "react";
import "./style.css";

function NumberClock() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <span style={{ "--i": ++index }}>
          <b>{index}</b>
        </span>
      ))}
    </>
  );
}

export default NumberClock;
