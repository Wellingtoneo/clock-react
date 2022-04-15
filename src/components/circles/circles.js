import "./style.css";

function Circles({ time }) {
  let hr, mn, sc;
  let hh = time.getHours() * 30;
  let mm = time.getMinutes() * 6;
  let ss = time.getSeconds() * 6;

  hr = `rotateZ(${hh + mm / 12}deg)`;
  mn = `rotateZ(${mm}deg)`;
  sc = `rotateZ(${ss}deg)`;

  return (
    <>
      <div className="circle" style={{ "--clr": "#04fc43", transform: sc }}>
        <i></i>
      </div>
      <div
        className="circle circle2"
        style={{ "--clr": "#fee800", transform: mn }}
      >
        <i></i>
      </div>
      <div
        className="circle circle3"
        style={{ "--clr": "#ff2972", transform: hr }}
      >
        <i></i>
      </div>
    </>
  );
}

export default Circles;
