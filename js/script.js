AOS.init({
  duration: 1200,
});

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const checkBox = document.getElementById("myCheck");

const navLink = document.querySelectorAll("a");

for (let i = 0; i < 3; i++) {
  navLink[i].addEventListener("click", function () {
    nav.classList.toggle("slide");
    checkBox.checked = false;
  });
}

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const testi = document.querySelector(".testi");

$(".page-scroll").on("click", function (e) {
  let dir = $(this).attr("href");

  let elementDir = $(dir);

  $("html, body").animate(
    {
      scrollTop: elementDir.offset().top - 50,
    },
    800,
    "swing"
  );

  e.preventDefault();
});

jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
