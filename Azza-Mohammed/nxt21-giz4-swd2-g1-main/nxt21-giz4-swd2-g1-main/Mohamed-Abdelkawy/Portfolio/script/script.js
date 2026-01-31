// --- Mobile navigation (burger menu) ---
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("active");
    });
  });
}

// --- Navbar shadow / background on scroll ---
const navbar = document.querySelector(".navbar-custom");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// --- Smooth scroll for in-page anchor links ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();

    const offsetTop = target.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

// --- Fade-in animation for sections and cards on scroll ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll("section, .skill-card, .project-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// --- Highlight active section link in navbar ---
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// --- Contact form submit (fake send + notification) ---
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitButton = this.querySelector(".btn-submit");
    if (!submitButton) return;

    const originalText = submitButton.innerHTML;

    submitButton.innerHTML = "<span>Sending...</span>";
    submitButton.disabled = true;
    submitButton.style.opacity = "0.7";

    // Simulated async request – swap with real API call if needed
    setTimeout(() => {
      submitButton.innerHTML = "<span>Message Sent! ✓</span>";
      submitButton.style.background =
        "linear-gradient(135deg, #10b981 0%, #059669 100%)";

      this.reset();

      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        submitButton.style.opacity = "1";
        submitButton.style.background = "";
      }, 3000);

      showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success",
      );
    }, 1500);
  });
}

// --- Small toast-style notification helper ---
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          type === "success"
            ? "linear-gradient(135deg, #10b981, #059669)"
            : "linear-gradient(135deg, #ef4444, #dc2626)"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 300px;
        font-weight: 500;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(40px)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}
