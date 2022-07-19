var colorHex = "#2b2d42";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.nasa.gov/planetary/apod?api_key=PbyspaiHSuGvIKoFPLiEwGMBnonFF0YwgVobhqMv",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  console.log(response.url);
  var content = response.url;
  $("#myUrl").attr('src', content);
});

// document.addEventListener("click", function (event) {
//   // Checking if the button was clicked
//   if (!event.target.matches("#button_request")) return;
//   fetch("https://api.nasa.gov/planetary/apod?api_key=PbyspaiHSuGvIKoFPLiEwGMBnonFF0YwgVobhqMv")
//     .then((response) => response.json())
//     .then((data) => console.log(data.url));
//   console.log("Button was clicked!");
// });

const button = document.querySelector('.button');
button.addEventListener('click', function () {
  button.classList.remove('button--default');
  button.classList.add('button--process');
  setTimeout(function () {
    button.classList.remove('button--process');
    button.classList.add('button--success');
  }, 2000);
  setTimeout(function () {
    button.classList.remove('button--success');
    button.classList.add('button--default');
  }, 4500);
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 50],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

jQuery(document).ready(function ($) {
  $('.rating_stars span.r').hover(function () {
    // get hovered value
    var rating = $(this).data('rating');
    var value = $(this).data('value');
    $(this).parent().attr('class', '').addClass('rating_stars').addClass('rating_' + rating);
    highlight_star(value);
  }, function () {
    // get hidden field value
    var rating = $("#rating").val();
    var value = $("#rating_val").val();
    $(this).parent().attr('class', '').addClass('rating_stars').addClass('rating_' + rating);
    highlight_star(value);
  }).click(function () {
    // Set hidden field value
    var value = $(this).data('value');
    $("#rating_val").val(value);

    var rating = $(this).data('rating');
    $("#rating").val(rating);

    highlight_star(value);
  });

  var highlight_star = function (rating) {
    $('.rating_stars span.s').each(function () {
      var low = $(this).data('low');
      var high = $(this).data('high');
      $(this).removeClass('active-high').removeClass('active-low');
      if (rating >= high) $(this).addClass('active-high');
      else if (rating == low) $(this).addClass('active-low');
    });
  }
});

// add this rail gallery effect
$(document).on('click', '#socialShare > .socialBox', function () {

  var self = $(this);
  var element = $('#socialGallery a');
  var c = 0;

  if (self.hasClass('animate')) {
    return;
  }

  if (!self.hasClass('open')) {

    self.addClass('open');

    TweenMax.staggerTo(element, 0.3, {
      opacity: 1,
      visibility: 'visible'
    },
      0.075);
    TweenMax.staggerTo(element, 0.3, {
      top: -12,
      ease: Cubic.easeOut
    },
      0.075);

    TweenMax.staggerTo(element, 0.2, {
      top: 0,
      delay: 0.1,
      ease: Cubic.easeOut,
      onComplete: function () {
        c++;
        if (c >= element.length) {
          self.removeClass('animate');
        }
      }
    },
      0.075);

    self.addClass('animate');

  } else {

    TweenMax.staggerTo(element, 0.3, {
      opacity: 0,
      onComplete: function () {
        c++;
        if (c >= element.length) {
          self.removeClass('open animate');
          element.css('visibility', 'hidden');
        };
      }
    },
      0.075);
  }
});


document.querySelector("#btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  setColor();
});

function showPage() {
  document.getElementById("box").style.opacity = 0;
  //document.getElementById("preLoader").style.width = "0%";//
  document.getElementById("preLoader").style.height = "0%";
}
window.addEventListener("scroll", () => {
  console.log("Scrolled!");
  var value = -10 + window.scrollY / 40;
  if (value >= 10) {
    value = 10;
  }
});

function setColor() {
  colorHex = colorHex == "#ffffff" ? "#2b2d42" : "#ffffff";
  particlesJS("particles-js", {
    particles: {
      number: { value: 63, density: { enable: true, value_area: 800 } },
      color: { value: colorHex },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.3367165327817598,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 4.008530152163807,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 160.3412060865523,
        color: colorHex,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4.810236182596568,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 129.93235396821524, duration: 0.4 },
        push: { particles_nb: 2 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
setColor();

