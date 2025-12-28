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
