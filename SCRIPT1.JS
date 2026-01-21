
// --- Welcome Message Popup ---
window.addEventListener("load", () => {
  if (!sessionStorage.getItem("welcomeShown")) {
    alert("💄 Welcome to She Beauty Makeup — Affordable Luxury, Curated Just for You!");
    sessionStorage.setItem("welcomeShown", "true");
  }
});

// --- Search Bar Glow ---
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("focus", () => {
    searchInput.style.boxShadow = "0 0 10px #d4b89c"; // nude glow
  });
  searchInput.addEventListener("blur", () => {
    searchInput.style.boxShadow = "none";
  });
}

// --- Add to Cart Notification ---
function showNotification(message) {
  const note = document.createElement("div");
  note.className = "notification";
  note.innerText = message;
  document.body.appendChild(note);

  setTimeout(() => note.classList.add("show"), 100);
  setTimeout(() => {
    note.classList.remove("show");
    setTimeout(() => note.remove(), 500);
  }, 3000);
}

const cartButtons = document.querySelectorAll(".gallery-card .btn");
cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h3").innerText;
    showNotification(`${productName} added to your cart 💄`);
  });
});

// --- Contact Form Validation ---
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#d4b89c"; // nude accent
      }
    });

    if (valid) {
      showNotification("✅ Your message has been sent successfully!");
      contactForm.reset();
    } else {
      showNotification("⚠️ Please fill in all fields.");
    }
  });
}

// --- Dynamic Year in Footer ---
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
if (!footer.innerText.includes(currentYear)) {
  footer.innerHTML += `<br/>© ${currentYear} She Beauty`;
}

// --- Smooth Section Fade-In ---
const sections = document.querySelectorAll(".section, .hero");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// --- Dark/Light Mode Toggle ---
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Toggle Theme";
toggleBtn.className = "btn btn-brand theme-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️ Toggle Theme";
    showNotification("Dark Mode Activated 🌙");
  } else {
    toggleBtn.innerText = "🌙 Toggle Theme";
    showNotification("Light Mode Activated ☀️");
  }
});
// --- Navbar background change on scroll ---
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.7) {
    // After leaving hero section
    topbar.style.background = "#f5e6d3"; // solid nude beige
  } else {
    // While on hero section
    topbar.style.background = "transparent";
  }
});