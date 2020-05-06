const menu__icon = document.querySelector(".menu__icon");
const ham__icon = document.querySelector(".ham");
const time__icon = document.querySelector(".time");
let flag = true;

function menu__toggle() {
  if (flag) {
    time__icon.style.display = "block";
    ham__icon.style.display = "none";
    flag = false;
  } else {
    time__icon.style.display = "none";
    ham__icon.style.display = "block";
    flag = true;
  }
}
ham__icon.style.transition = "0.5s";
menu__icon.addEventListener("click", menu__toggle);
