const defaultOpen = document.querySelector("#defaultOpen");
const tablinks = document.querySelectorAll(".tablink");

function openPage(pageName, elmnt) {
  let i;
  // Hide all elements with class="tabcontent" by default */
  const tabcontents = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  selected_tab = document.querySelector("#" + pageName);
  selected_tab.style.display = "block";

  // Add the specific color to the button used to open the tab content
  selected_tab_style = getComputedStyle(selected_tab);
  elmnt.style.backgroundColor = selected_tab_style.backgroundColor;
}

tablinks.forEach((item) => {
  item.addEventListener("click", function () {
    openPage(item.textContent, item);
  });
});

defaultOpen.click();
