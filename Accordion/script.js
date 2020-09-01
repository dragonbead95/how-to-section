const acc = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

function toggle_acc() {
  this.classList.toggle("active");

  for (let i = 0; i < acc.length; i++) {
    if (acc[i] === this) {
      if (panel[i].style.display === "block") {
        panel[i].style.display = "none";
      } else {
        panel[i].style.display = "block";
      }
    }
  }
}

acc.forEach((item) => {
  item.addEventListener("click", toggle_acc);
});
