export default function clock() {
  let hourSpan = 0;
  let minSpan = 0;
  let secSpan = 0;
  let hour = 0;
  let now = 0;
  let min = 0;
  let sec = 0;

  window.onload = function () {
    hourSpan = document.getElementById("hour");
    minSpan = document.getElementById("min");
    secSpan = document.getElementById("sec");
    dClock();
  };

  function dClock() {
    now = new Date();
    hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();

    if (hour < 10) hour = `0${hour}`;
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;

    hourSpan.innerHTML = hour;
    minSpan.innerHTML = min;
    secSpan.innerHTML = sec;
    setTimeout("dClock()", 1000);
  }
  return clock();
}
