// Show/Hide Scroll-Up Button
window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");

  if (window.scrollY > 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

// Smooth Scroll to Top
document.getElementById("scroll-up").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY > 300) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

// hamburger menu
const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");
const bars = document.querySelectorAll(".bar");
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
});

// Close menu when clicking any navbar link
document.querySelectorAll(".navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar-menu").classList.remove("active");

    // Remove hamburger animation (X)
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.classList.remove("active");
    });
  });
});


// contact from
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      form.reset(); 
    } else {
      alert("Something went wrong. Try again.");
    }
  });

// nav
  
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const spa = document.getElementById('weather-data')
if (spa) {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=22.56263&longitude=88.36304&current_weather=true")
    .then((response) => response.json())
    .then((json) => {
      console.log(json) 
      const temp = json.current_weather.temperature
      const wind = json.current_weather.windspeed
      const windDirection = json.current_weather.wind_direction_10m
      spa.innerHTML = `${temp}°C `
    })
    .catch((error) => {
      spa.textContent = "Error loading weather"
      console.error(error)
    })
}


// Custom cursor — vanilla JS (no jQuery / GSAP needed)
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;

// Track mouse position (use pageX/pageY so it works with scrolling)
document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// Animate at ~60 fps
function animateCursor() {
  // Smooth follower easing
  posX += (mouseX - posX) / 9;
  posY += (mouseY - posY) / 9;

  if (cursor) {
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  }

  if (follower) {
    follower.style.left = posX - 12 + "px";
    follower.style.top = posY - 12 + "px";
  }

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Expand follower on hoverable links
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor?.classList.add("active");
    follower?.classList.add("active");
  });
  link.addEventListener("mouseleave", () => {
    cursor?.classList.remove("active");
    follower?.classList.remove("active");
  });
});
