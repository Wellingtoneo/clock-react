import "./style.css";

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h >= 12 ? "PM" : "AM";
h = h > 12 ? h - 12 : h;
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

export default function DigitalClock() {
  return (
    <div data-js="time">
      <div js-data="hour" style={{ "--clr": "#ff2972" }}>
        {h}
      </div>
      <div js-data="minutes" style={{ "--clr": "#fee800" }}>
        {m}
      </div>
      <div js-data="secunds" style={{ "--clr": "#04fc43" }}>
        {s}
      </div>
      <div js-data="ampm">{am}</div>
    </div>
  );
}
