let $ = document;
let buttonTheme = $.querySelector(".button__theme");
let controlCircle = $.querySelector(".control_circle");
let toggleFlag = 1;

if (localStorage.getItem("user_theme") === "dark") {
  toggleFlag = 0;
  applyDarkTheme();
}

buttonTheme.addEventListener("click", function () {
  console.log("here");
  if (toggleFlag % 2) {
    applyDarkTheme();
  } else {
    buttonTheme.style.backgroundColor = "#fff";
    controlCircle.style.backgroundColor = "#90a4ae";
    controlCircle.style.right = "4px";
    $.body.style.backgroundColor = "initial";
    localStorage.setItem("user_theme", "light");
  }
  toggleFlag++;
});

function applyDarkTheme() {
  buttonTheme.style.backgroundColor = "#455A64";
  controlCircle.style.backgroundColor = "#F5F5F5";
  controlCircle.style.right = "56px";
  $.body.style.backgroundColor = "#061925";
  localStorage.setItem("user_theme", "dark");
}
