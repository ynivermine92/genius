// Custom Scripts
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const btnMob = document.querySelector(".menu__item-mob");
  const html = document.documentElement;

  btnMob.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
    body.classList.remove("locked");
    html.style.overflowX = "hidden";
  });

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
      html.style.overflow = "unset";
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
      html.style.overflowX = "hidden";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

function fixedHeader() {
  const nav = document.querySelector(".header");

  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}
window.addEventListener("scroll", fixedHeader);

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



const accordion = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  const accordionTitles = container.querySelectorAll(".acardion__title");

  accordionTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const thisTitle = this;
      const nextContent = thisTitle.nextElementSibling;
      const symbol = thisTitle.querySelector(".symbol");
      const circle = thisTitle.querySelector(".acardion__circle");

      // Закрываем все остальные элементы
      accordionTitles.forEach((otherTitle) => {
        if (otherTitle !== thisTitle) {
          otherTitle.classList.remove("active");
          const otherContent = otherTitle.nextElementSibling;
          if (otherContent) otherContent.style.display = "none";
          const otherSymbol = otherTitle.querySelector(".symbol");
          if (otherSymbol) otherSymbol.classList.remove("symbol__rotate");
          const otherCircle = otherTitle.querySelector(".acardion__circle");
          if (otherCircle) otherCircle.textContent = "Більше";
        }
      });

      // Переключаем активность текущего
      thisTitle.classList.toggle("active");

      if (nextContent.style.display === "block") {
        nextContent.style.display = "none";
        if (circle) circle.textContent = "Більше";
      } else {
        nextContent.style.display = "block";
        if (circle) circle.textContent = "Менше";
      }

      if (symbol) symbol.classList.toggle("symbol__rotate");
    });
  });
};

accordion("#accordion1");

function goHere() {
  const mouseIcon = document.querySelectorAll(".mouse-btn");
  const gotoHere = document.querySelector(".product");

  mouseIcon.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: gotoHere.offsetTop,
        behavior: "smooth",
      });
    });
  });
}

goHere();

const productInfoAnimation = () => {
  const icons = document.querySelectorAll(".product__icon-format");

  icons.forEach((icon) => {
    const infoBlock = icon
      .closest(".product__format-detals")
      .querySelector(".product__format-info");

    icon.addEventListener("click", () => {
      infoBlock.classList.toggle("active");
    });
  });
};

productInfoAnimation();

const data = () => {
  const dayElem = document.querySelector(".credit__number");
  const monthElem = document.querySelector(".credit__month");

  const today = new Date();
  today.setDate(today.getDate() + 2);

  const day = String(today.getDate()).padStart(2, "0");

  // Місяці українською
  const months = [
    "Січня",
    "Лютого",
    "Березня",
    "Квітня",
    "Травня",
    "Червня",
    "Липня",
    "Серпня",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудня",
  ];
  const monthName = months[today.getMonth()];

  dayElem.textContent = day;
  monthElem.textContent = monthName;
};

data();

const dataPrace = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth(); 

  const priceEls = document.querySelectorAll(".product__amount");
  const priceNewEls = document.querySelectorAll(".product__new-amount");


  const specialDates = [
    { day: 4, month: 9 }, 
    { day: 11, month: 9 }, 
    { day: 18, month: 9 }, 
    { day: 25, month: 9 }, 
  ];

 
  const isSpecial = specialDates.some(
    (d) => d.day === day && d.month === month
  );

  if (isSpecial) {
    const formatPrice = (price) =>
      price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    priceEls.forEach((el) => {
      let price = parseInt(el.textContent.replace(/\s/g, "")) || 0;
      price += 1000;
      el.textContent = formatPrice(price);
    });

    priceNewEls.forEach((el) => {
      let priceNew = parseInt(el.textContent.replace(/\s/g, "")) || 0;
      priceNew += 1000;
      el.textContent = formatPrice(priceNew);
    });
  }
};
dataPrace();






