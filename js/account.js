let panel = document.querySelector(".forms");
let but = document.querySelector("button.toggle-button");
let signForm = document.forms[0];
let loginForm = document.forms[1];
let forms = Array.from(document.forms);
let heading = document.querySelector(".forms h2");
let toggle = document.querySelector(".toggle");

let panelHeading = document.querySelector(".toggle h3");
let smallSpan = document.querySelector(".small span");
let smallButton = document.querySelector(".small-button");
let copyRightSpan = document.querySelector("footer .copy span");

but.addEventListener("click", changeDetails);
function changeDetails() {
  signForm.classList.toggle("active");
  loginForm.classList.toggle("active");
  if (loginForm.classList.contains("active")) {
    panelHeading.innerHTML = "Sign-up";
    but.innerHTML = "Sign-up";
    heading.innerHTML = "Login To Can Acces There";
    smallSpan.innerHTML = "if you don't have account click";
  } else {
    panelHeading.innerHTML = "Login";
    but.innerHTML = "Login";
    heading.innerHTML = "Sign-Up To Can Acces There";
    smallSpan.innerHTML = "if you have account click";
  }

  changeDirection();
}
function changeDirection() {
  if (loginForm.classList.contains("active")) {
    forms.forEach((form) => {
      form.classList.add("right");
    });
    toggle.classList.add("right");
    panel.classList.remove("act");
    panel.classList.add("active");
    document.title = "Login | Mobile Store";
  } else {
    forms.forEach((form) => {
      form.classList.remove("right");
    });
    toggle.classList.remove("right");
    panel.classList.remove("active");
    panel.classList.add("act");
    document.title = "Sign-Up | Mobile Store";
  }
}
smallButton.addEventListener("click", changeDetails);
let year = new Date();
copyRightSpan.innerHTML = year.getFullYear();
