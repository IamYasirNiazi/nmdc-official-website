// Javascript Whole Website Code

// Animation On Scroll Code
AOS.init();

// Carousel Code
$(document).ready(function () {
  $("#slider").owlCarousel({
    loop: true,
    margin: 0,
     nav:false,
    center: true,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
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

// Events Carousel Code
$(document).ready(function () {
  $("#events-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav:false,
    center: true,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
    smartSpeed: 1000,
    autoplayHoverPause: true,
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
        items: 2,
        stagePadding: 0,
      },
      992: {
        items: 3,
        stagePadding: 0,
      },

      1200: {
        items: 4,
        stagePadding: 0,
      },

      1400: {
        items: 4,
        stagePadding: 0,
      },
    },
  });
});

// News Carousel Code
$(document).ready(function () {
  $("#news-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav:false,
    center: true,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
    smartSpeed: 1000,
    autoplayHoverPause: true,
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
        items: 2,
        stagePadding: 0,
      },
      992: {
        items: 3,
        stagePadding: 0,
      },

      1200: {
        items: 4,
        stagePadding: 0,
      },

      1400: {
        items: 4,
        stagePadding: 0,
      },
    },
  });
});

// Affiliation Carousel Code
$(document).ready(function () {
  $("#affiliation-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav:false,
    center: true,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
    smartSpeed: 1000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        stagePadding: 0,
        center: false,
        // dots: false,
        // nav: true
      },
      575: {
        items: 2,
        stagePadding: 0,
      },
      768: {
        items: 3,
        stagePadding: 0,
      },
      992: {
        items: 5,
        stagePadding: 0,
      },

      1200: {
        items: 5,
        stagePadding: 0,
      },

      1400: {
        items: 6,
        stagePadding: 0,
      },
    },
  });
});

// Carousel Message Slider Code
$(document).ready(function () {
  // $("#messageSlider").owlCarousel({
  $("").owlCarousel({
    loop: true,
    margin: 30,
     nav:false,
    center: true,
    stagePadding: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
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



const about_menu = document.getElementById("about-menu");
const about_submenu = document.getElementById("about-submenu");

const admissions_menu = document.getElementById("admissions-menu");
const admissions_submenu = document.getElementById("admissions-submenu");

const departments_menu = document.getElementById("departments-menu");
const departments_submenu = document.getElementById(
  "departments-submenu"
);

function aboutList() {
  about_submenu.classList.toggle("submenu-active");
}

function deptList() {
  departments_submenu.classList.toggle("submenu-active");
}

function admissionList() {
  admissions_submenu.classList.toggle("submenu-active");
}