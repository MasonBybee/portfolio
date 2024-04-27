const navBar = document.querySelector(".navOl");
const mobileMenuList = document.querySelectorAll(".mobileNavOl li");
const mobileMenuBtn = document.querySelector(".mobileMenuBtn");
const form = document.querySelector("form");
const mobileNav = document.querySelector(".mobileNavOl");

document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: `${targetSection.offsetTop - 100}`,
        behavior: "smooth",
      });
    }
  });
});

function scrollNavEffect() {
  let scrollcheck = window.scrollY;
  if (scrollcheck > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
}

scrollNavEffect();

document.addEventListener("scroll", scrollNavEffect);

mobileMenuList.forEach((li, i) => {
  li.style.transition = `${0.2 + i / 10}s all`;
});

mobileMenuBtn.addEventListener("click", function () {
  if (mobileNav.classList.contains("mobileNavVisible")) {
    mobileNav.classList.remove("mobileNavVisible");
  } else {
    mobileNav.classList.add("mobileNavVisible");
  }
});

document.addEventListener("click", function (e) {
  const isClickInsideMobileMenu =
    mobileMenuBtn.contains(e.target) || mobileNav.contains(e.target);

  if (
    !isClickInsideMobileMenu &&
    mobileNav.classList.contains("mobileNavVisible")
  ) {
    mobileNav.classList.remove("mobileNavVisible");
  }
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
