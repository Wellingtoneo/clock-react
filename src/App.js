import Clock from "./components/clock/Clock";
import DigitalClock from "./components/digital-clock/Digital-Clock";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  setTimeout(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="Container">
      <Clock time={time} />
      <DigitalClock time={time} />
    </div>
  );
}
