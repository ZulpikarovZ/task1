const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const timerSec = document.querySelector('.sec')
const timerMin = document.querySelector('.min')
const timerHour = document.querySelector('.hour')
let timerId

const createTimerAnimator = (seconds) => {
  return (seconds) => {
    timerId = setInterval(() => {
      const sec = Math.floor(seconds % 60)
      const min = Math.floor((seconds / 60) % 60)
      const hour = Math.floor(((seconds / 60) / 60) % 24)

      timerHour.innerHTML = formatTime(hour)
      timerMin.innerHTML = formatTime(min)
      timerSec.innerHTML = formatTime(sec)

      if (seconds <= 0) {
        clearInterval(timerId)
        return alert('Время вышло!')
      }

      seconds -= 1
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9\.]/g, '')
});

buttonEl.addEventListener('click', () => {
  clearInterval(timerId)
  const seconds = Number(inputEl.value);

  if (seconds === 0) {
    return alert('Введите значение для таймера выше 0!')
  } else {
    animateTimer(seconds);
    inputEl.value = '';
  }
});

function formatTime(time) {
  return (time < 10) ? (`0${time}`) : (time)
}
