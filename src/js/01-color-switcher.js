const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStop.disabled = true;

btnStart.addEventListener('click', () => {
  
  btnStart.disabled = true;
  btnStop.disabled = false;
  function go() {
    document.body.style.background = getRandomHexColor();
  }
  go();
  timerId = setInterval(go, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});

