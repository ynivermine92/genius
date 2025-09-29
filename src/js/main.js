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


