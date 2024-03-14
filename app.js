const form = document.getElementById("form");
const Name = document.getElementById("Name");
const company = document.getElementById("company-name");
const email = document.getElementById("email");
const budget = document.getElementById("budget");
const message = document.getElementById("message");
const error = document.getElementsByClassName("error");
const thank = document.querySelector(".thank_you p");

//Error Message
function errorMessage(input, message) {
  const inputElement = input.parentElement;
  inputElement.className = "form-control error";
  const small = inputElement.querySelector("small");
  small.innerText = message;
}

//Success message

function successMessage(input) {
  const inputElement = input.parentElement;
  inputElement.className = "form-control success";
}

//Check Input Elements
function checkInputElement(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() == "") {
      errorMessage(input, `${inputFieldName(input)} is requerd`);
    } else {
      successMessage(input);
    }
  });
}

//Check Input inputElementNone
function inputElementValueEmpty(inputArr) {
  inputArr.forEach(function (input) {
    input.value = "";

    const inputElement = input.parentElement;
    inputElement.classList.remove("success");
  });
}

//Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be al least ${min} characters`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be less than ${max} characters`
    );
  } else {
    successMessage(input);
  }
}
function checkNumber(input, min, max) {
  if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be al least ${min} characters`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be less than ${max} characters`
    );
  } else {
    successMessage(input);
  }
}

//Check email
function checkEmail(email) {
  const regx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regx.test(email.value.trim())) {
    successMessage(email);
  } else {
    errorMessage(email, "Email is not valid");
  }
}

//Input fields name
function inputFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//add event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputElement([Name, company, budget, message, email]);
  checkLength(Name, 3, 25);
  checkLength(company, 3, 25);
  checkLength(message, 10, 10000000);
  checkEmail(email);
  checkNumber(budget, 2, 1000000);
  if (error.length === 0) {
    inputElementValueEmpty([Name, company, budget, message, email]);
    thank.style.display = "block";
    const myTimeout = setTimeout(() => {
      thank.style.display = "none";
    }, 2000);
  }
});

window.onscroll = function () {
  var navbar = document.querySelector(".navbar");
  var bottomtotop_btn = document.querySelector(".bottomtotop_btn");
  var windowpageup = window.pageYOffset;
  if (windowpageup > 100) {
    navbar.classList.add("navbar_animation");
    bottomtotop_btn.classList.add("scroll_btn");
  } else if (windowpageup < 100) {
    navbar.classList.remove("navbar_animation");
    bottomtotop_btn.classList.remove("scroll_btn");
  }
  bottomtotop_btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  bottomtotop_btn.onclick = function () {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let start = null;
    window.requestAnimationFrame(step);
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );
      if (progress < duration) window.requestAnimationFrame(step);
    }
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
  };
};

// window_scroll_function

// dropdown_menu

var dropdown = document.querySelector(".dropdown");
var dropdownmenu = document.querySelector(".dropdownmenu");
var dropdown_toggle = document.querySelector(".dropdown-toggle");

dropdown.onclick = function () {
  dropdown.classList.toggle("dropdown_toggle");
  dropdownmenu.classList.toggle("toggle");
};

document.addEventListener("click", function (e) {
  var toggleremove = dropdown.contains(e.target);
  if (!toggleremove) {
    dropdownmenu.classList.remove("toggle");
  }
});

// dropdown_menu

// preloader
window.onload = function () {
  var preloader = document.querySelector(".preloader");
  setInterval(function () {
    preloader.style.display = "none";
  }, 1000);
};
// preloader

// accordion
var accordion = document.querySelectorAll(".accordion-item");
accordion.forEach((accord) => {
  accord.addEventListener("click", () => {
    accord.classList.toggle("red");
  });
  document.addEventListener("click", function (e) {
    var ignor = accord.contains(e.target);
    if (!ignor) {
      accord.classList.remove("red");
    }
  });
});
// accordion

// humbergarbtn
let navtog = document.querySelector(".navbar-toggler");
navtog.onclick = function () {
  this.classList.toggle("navtogclass");
};
// humbergarbtn

// password hide and show

if (document.getElementById("password")) {
  const password = document.getElementById("password");
  const show = document.getElementById("show");
  const hide = document.getElementById("hide");
  hide.onclick = function () {
    if (password.type == "password") {
      password.setAttribute("type", "text");
      this.classList.add("hide");
    }
  };
  show.onclick = function () {
    if (password.type == "text") {
      password.setAttribute("type", "password");
      hide.classList.remove("hide");
    }
  };
}
// password hide and show

jQuery(document).ready(function ($) {
  $(".span_one").counterUp({
    delay: 10,
    time: 3000,
  });

  jQuery(".slide_area").owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    navText: [
      '<span><i class="fa-solid fa-angle-left"></i></span>',
      '<span><i class="fa-solid fa-angle-right"></i></span>',
    ],
  });
  $(".testimonial_slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    // autoplay:true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    dotsSpeed: 1000,
    stagePadding: 0,
    slideby: 1,
    responsiveClass: true,
    navText: [
      '<span><i class="fa-solid fa-angle-left"></i></span>',
      '<span><i class="fa-solid fa-angle-right"></i></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 2,
        stagePadding: 100,
      },
    },
  });
});

jQuery(document).ready(function () {
  //============== magnific popup=================
  $(".play_btn").magnificPopup({
    type: "iframe",

    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",

          id: "v=",

          src: "https://www.youtube.com/embed/%id%?rel=0&autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "https://maps.google.",
          src: "%id%&output=embed",
        },
      },

      srcAction: "iframe_src",
    },
  });

  // ==============counter=======================
  //   if (document.querySelector('.counter') !== null) {
  //     $('.counter').counterUp({
  //       delay: 10,
  //       disableOn: 0,
  //       time: 2000
  //     });
  //   }
});
