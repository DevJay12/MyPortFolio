//GSAP animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#htxth1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce",
  });
  gsap.from(".hero-text h2", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    delay: 0.5,
  });
  gsap.from(".hero-text p", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    delay: 1,
  });
  gsap.from(".hero-img img", {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    delay: 1.2,
    ease: "back",
  });
  gsap.from(".btn", { duration: 1, y: 50, opacity: 0, delay: 1.5 });
  
})


const text = "Software Engineer";
const speed = 100;
const delay = 1000;
let i = 0;
const typedtext = document.getElementById("typedtext");
function type(){
  if (i < text.length) {
    typedtext.textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    typedtext.style.borderRight = "2px solid transparent";
  }
}
window.onload = () => {
  setTimeout(type, delay);
};


function revealOnScroll() {
  const reveals = document.querySelectorAll('.aboutcontainer, .aboutimg, .about2, .Skillset, .cssskill-level, .cssskill-percentage, .htmlskill-percentage, .jsskill-level, .jsskill-percentage, .pyskill-level, .pyskill-percentage, .reactskill-level, .reactskill-percentage, .path-1, .path-2, .path-3, .path-4, .contactme, form');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('reveal');
    } /*else {
      reveals[i].classList.remove('reveal')
    }*/
  }
}
window.addEventListener('scroll', revealOnScroll);


const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fill1');
      observer1.unobserve(entry.target); //animate only once
    }
  });
}, {threshold: 1.0});

const section1 = document.querySelector('.htmlskill-level');
observer1.observe(section1);



const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", (e) => {
e.stopPropagation(); // prevent body click from firing
hamburger.classList.toggle("active");
navLinks.classList.toggle("active");
});
// Close menu on body click
document.addEventListener("click", (e) => {
if (navLinks.classList.contains("active")) {
if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
navLinks.classList.remove("active");
hamburger.classList.remove("active");
}
}
});
// Optional: Close when a link is clicked

navLinks.addEventListener("click", (e) => {
if (e.target.tagName === "A") {
navLinks.classList.remove("active");
hamburger.classList.remove("active");
}
});