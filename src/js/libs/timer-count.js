document.addEventListener("DOMContentLoaded", () => {
  const dates = [
    new Date("October 04 2025 00:00:00"),
    new Date("October 11 2025 00:00:00"),
    new Date("October 18 2025 00:00:00"),
    new Date("October 25 2025 00:00:00"),
  ];

  let currentIndex = 0;
  let newYear = dates[currentIndex];

  const timers = document.querySelectorAll(".time-count");

  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const updateTimer = (timer) => {
    const daysEl = timer.querySelector(".time-count__days .time-count__val");
    const hoursEl = timer.querySelector(".time-count__hours .time-count__val");
    const minutesEl = timer.querySelector(
      ".time-count__minutes .time-count__val"
    );
    const secondsEl = timer.querySelector(
      ".time-count__seconds .time-count__val"
    );

    const daysText = timer.querySelector(".time-count__days .time-count__text");
    const hoursText = timer.querySelector(
      ".time-count__hours .time-count__text"
    );
    const minutesText = timer.querySelector(
      ".time-count__minutes .time-count__text"
    );
    const secondsText = timer.querySelector(
      ".time-count__seconds .time-count__text"
    );

    const now = new Date();
    newYear = dates[currentIndex];
    let leftUntil = newYear - now;

    if (leftUntil <= 0) {
      currentIndex++;
      if (currentIndex >= dates.length) currentIndex = 0;
      newYear = dates[currentIndex];
      leftUntil = newYear - now;
    }

    const days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    const hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    const seconds = Math.floor(leftUntil / 1000) % 60;

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    daysText.textContent = declOfNum(days, ["день", "дні", "днів"]);
    hoursText.textContent = declOfNum(hours, ["година", "години", "годин"]);
    minutesText.textContent = declOfNum(minutes, [
      "хвилина",
      "хвилини",
      "хвилин",
    ]);
    secondsText.textContent = declOfNum(seconds, [
      "секунда",
      "секунди",
      "секунд",
    ]);
  };

  const tick = () => timers.forEach(updateTimer);

  tick();
  setInterval(tick, 1000);



  


});
