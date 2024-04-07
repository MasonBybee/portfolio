const navBar = document.querySelector(".navOl");
const mobileMenuList = document.querySelectorAll(".mobileNavOl li");
const mobileMenuBtn = document.querySelector(".mobileMenuBtn");
const form = document.querySelector("form");
document.addEventListener("scroll", function () {
  let scrollcheck = window.scrollY;
  if (scrollcheck > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

mobileMenuList.forEach((li, i) => {
  li.style.transition = `${0.2 + i / 10}s all`;
});

mobileMenuBtn.addEventListener("click", function () {
  const nav = document.querySelector(".mobileNavOl");
  nav.style.visibility =
    nav.style.visibility === "visible" ? "hidden" : "visible";
});

function sendemail() {
  emailjs.sendForm("service_mpnbir5", "template_7o1n6wd", form).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendemail();
});
