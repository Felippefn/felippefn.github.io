var colorHex;

function animationFunction(x) {
  x.classList.toggle("change");
}

document.querySelector("#btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  colorHex = colorHex == "#fffff" ? "#2b2d42" : "#fffff";
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
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
