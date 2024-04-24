const navBar = document.querySelector(".navOl");
const mobileMenuList = document.querySelectorAll(".mobileNavOl li");
const mobileMenuBtn = document.querySelector(".mobileMenuBtn");
const form = document.querySelector("form");
const mobileNav = document.querySelector(".mobileNavOl");

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
  const isVisible = mobileNav.style.right === "0px";
  mobileNav.style.right = isVisible ? "-100%" : "0"; // Toggle between off-screen and on-screen
  mobileNav.style.visibility = isVisible ? "hidden" : "visible"; // Manage visibility in sync
});

function sendemail() {
  emailjs.sendForm("service_mpnbir5", "template_7o1n6wd", form).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.error("FAILED...", error);
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendemail();
});
