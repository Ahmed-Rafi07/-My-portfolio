// Smooth scroll for projects
function scrollProjects() {
  const container = document.getElementById("projects");
  container.scrollBy({ left: 300, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {

  // 🎯 PROJECT LINKS
  const projectLinks = {
    "Amazon Clone": "https://rafi-amazon.netlify.app/",
    "Portfolio": "https://ahmed-rafi-portfolio.netlify.app/",
    "Recipe Cards": "https://recipies-card.netlify.app/"
  };

  document.querySelectorAll(".project-card").forEach((card) => {
    const title = card.querySelector("h3")?.innerText.trim();
    const linkBtn = card.querySelector(".project-link");

    if (projectLinks[title] && linkBtn) {
      linkBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(projectLinks[title], "_blank");
      });
    }
  });

  // 🌗 THEME TOGGLE LOGIC
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector(".toggle-icon");
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-sun", "fa-moon");
  }

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    // Switch icons
    if (isDark) {
      icon.classList.replace("fa-sun", "fa-moon");
    } else {
      icon.classList.replace("fa-moon", "fa-sun");
    }

    // Save choice
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
