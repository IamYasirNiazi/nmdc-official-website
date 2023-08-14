// Javascript Whole Website Code

// Animation On Scroll Code
AOS.init();

// Carousel Code
$(document).ready(function () {
  $("#slider").owlCarousel({
    loop: true,
    margin: 0,
    //  nav:true,
    center: true,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    // navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
    smartSpeed: 1000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        // dots: false,
        // nav: true
      },
      575: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 0,
      },
      992: {
        items: 1,
        stagePadding: 0,
      },

      1200: {
        items: 1,
        stagePadding: 0,
      },

      1400: {
        items: 1,
        stagePadding: 0,
      },
    },
  });
});

// Hamburger Code
function toggleMenu() {
  // const hamburger = document.getElementById('hamburger')
  const nav = document.getElementById("navigation");
  nav.classList.toggle("toggle-nav");
}

document.addEventListener("click", function (event) {
  const hamburger = document.getElementById("hamburger");

  if (!hamburger.contains(event.target)) {
    const nav = document.getElementById("navigation");
    nav.classList.remove("toggle-nav");
  }
});

const nav = document.getElementById("navigation");

nav.addEventListener("click", function (event) {
  event.stopPropagation();
});
