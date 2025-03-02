document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const cardTitle = document.querySelector(".card-title");
  const cardText = document.querySelector(".card-text");

  navToggle.addEventListener("click", function() {
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
  });

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("dropdown-menu")) {
        e.preventDefault();
        submenu.classList.toggle("show");
        this.classList.toggle("open");
      } else {
        e.preventDefault();
        navLinks.forEach(function(lnk) {
          lnk.classList.remove("active");
        });
        this.classList.add("active");


        const dropdownMenu = this.closest(".dropdown-menu");
        if (dropdownMenu) {
          const parentNavLink = dropdownMenu.parentElement.querySelector(".nav-link");
          const parentContent = parentNavLink.getAttribute("data-content") || parentNavLink.textContent;
          const childContent = this.getAttribute("data-content") || this.textContent;
          cardTitle.textContent = `${parentContent} → ${childContent}`;
          cardText.textContent = `Съдържанието на ${parentContent} → ${childContent}`;
        } else {
          const content = this.getAttribute("data-content") || this.textContent;
          cardTitle.textContent = content;
          cardText.textContent = `Съдържанието на ${content}`;
        }

        document.querySelectorAll(".dropdown-menu.show").forEach(function(menu) {
          menu.classList.remove("show");
        });
        document.querySelectorAll(".nav-link.open").forEach(function(link) {
          link.classList.remove("open");
        });
        if (window.innerWidth < 768) {
          navMenu.style.display = "none";
        }
      }
    });

    link.addEventListener("mouseover", function() {
      link.style.transform = "scale(1.1)";
      link.style.transition = "transform 0.3s ease";
    });

    link.addEventListener("mouseout", function() {
      link.style.transform = "scale(1)";
    });
  });
});
