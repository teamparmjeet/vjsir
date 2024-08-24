
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("close");
  var classesToToggle = ['bx-menu', 'bxs-chevron-left'];
  classesToToggle.forEach(function (className) {
    e.target.classList.toggle(className);
  });

});
modeSwtich.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode"
  } else {
    modeText.innerText = "Dark Mode"
  }


});



function showsearch() {
  $('#searchmenu').toggleClass('showsearchmenu1');
}

