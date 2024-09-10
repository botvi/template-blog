  // Get reference to html element
  const html = document.documentElement;

  // Dark/Light Mode Toggle (Mobile)
  const themeToggleMobile = document.getElementById("themeToggleMobile");
  const moonIconMobile = document.getElementById("moonIconMobile");
  const sunIconMobile = document.getElementById("sunIconMobile");

  themeToggleMobile.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      moonIconMobile.classList.remove("hidden");
      sunIconMobile.classList.add("hidden");
    } else {
      html.classList.add("dark");
      moonIconMobile.classList.add("hidden");
      sunIconMobile.classList.remove("hidden");
    }
  });

  // Dark/Light Mode Toggle (Desktop)
  const themeToggle = document.getElementById("themeToggle");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  themeToggle.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      moonIcon.classList.remove("hidden");
      sunIcon.classList.add("hidden");
    } else {
      html.classList.add("dark");
      moonIcon.classList.add("hidden");
      sunIcon.classList.remove("hidden");
    }
  });

  // Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  });

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target) || menuToggle.contains(event.target);
    const isClickInsideToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideToggle) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("-translate-x-full");
    }
  });

//   SCRLLBAR HIDE
const scrollContainer = document.getElementById('scrollContainer');

let isDragging = false;
let startX, scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
  scrollContainer.style.cursor = 'grabbing';
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  scrollContainer.scrollLeft = scrollLeft - walk;
});