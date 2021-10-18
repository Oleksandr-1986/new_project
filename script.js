const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
burger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

const play = document.querySelector(".video__play");
const frame = document.querySelector("iframe");

play.addEventListener("click", function () {
  this.style.display = "none";
  frame.setAttribute(
    "src",
    "https://www.youtube.com/embed/AWKzr6n0ea0?autoplay=1"
  );
});
