const defaultOpen = document.querySelector(".defaultOpen");
const tablinks = document.querySelectorAll(".tablinks");
function openCity(event, cityName) {
  let i, tabcontent;

  //tabcontent 박스들을 전부 제거
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // 클릭한 도시의 tabcontent의 display를 block으로 설정
  city = document.querySelector("#" + cityName);
  city.style.display = "block";
  event.currentTarget.classList.add("active");
}

tablinks.forEach((item) => {
  item.addEventListener(
    "click",
    function (event) {
      openCity(event, item.textContent);
    },
    false 
  );

  defaultOpen.click();
});
