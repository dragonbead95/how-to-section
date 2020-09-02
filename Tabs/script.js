function openCity(cityName) {
  let i, tabcontent, tablinks;

  //tabcontent 박스들을 전부 제거
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // 클릭한 도시의 tabcontent의 display를 block으로 설정
  city = document.querySelector("#" + cityName);
  city.style.display = "block";
}

const tablinks = document.querySelectorAll(".tablinks");

tablinks.forEach((item) => {
  item.addEventListener("click", function () {
    openCity(item.textContent);
  });
});
