// Wait for the DOM to be fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
  // Get reference to html element
  const html = document.documentElement;

  // Dark/Light Mode Toggle (Mobile)
  const themeToggleMobile = document.getElementById("themeToggleMobile");
  const moonIconMobile = document.getElementById("moonIconMobile");
  const sunIconMobile = document.getElementById("sunIconMobile");

  if (themeToggleMobile) {
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
  }

  // Dark/Light Mode Toggle (Desktop)
  const themeToggle = document.getElementById("themeToggle");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  if (themeToggle) {
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
  }

  // Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  if (menuToggle && mobileMenu && mobileMenuClose) {
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
  }

  // SCRLLBAR HIDE
  const scrollContainer = document.getElementById('scrollContainer');

  if (scrollContainer) {
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
  }

  // PARTIKEL
  function loadParticles(theme) {
    let particleColor = (theme === 'dark') ? '#ffffff' : '#000000'; // White for dark mode, Black for light mode
    
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 200, // Increase the number of particles
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": particleColor
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": particleColor
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.3, // Slightly more transparent for a dust effect
          "anim": {
            "enable": false
          }
        },
        "size": {
          "value": 2, // Smaller size for dust-like particles
          "random": true,
          "anim": {
            "enable": false
          }
        },
        "line_linked": {
          "enable": false // Disable line linking
        },
        "move": {
          "enable": true,
          "speed": 4, // Increase speed for more dynamic movement
          "direction": "none",
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false // Disable interaction effects
          },
          "onclick": {
            "enable": false
          },
          "resize": true
        }
      },
      "retina_detect": true
    });
  }
  
  // Function to detect the current theme
  function getTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
  
  // Load particles based on the initial theme
  loadParticles(getTheme());
  
  // Listen for theme changes
  const observer = new MutationObserver(() => {
    loadParticles(getTheme());
  });
  
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
});


// filter
document.getElementById('dropdownButton').addEventListener('click', function() {
  const dropdownList = document.getElementById('dropdownList');
  if (dropdownList.classList.contains('show')) {
      dropdownList.classList.remove('show');
      dropdownList.classList.add('hide');
      setTimeout(() => dropdownList.classList.remove('hide'), 300);
  } else {
      dropdownList.classList.remove('hide');
      dropdownList.classList.add('show');
  }
});

document.getElementById('closeButton').addEventListener('click', function() {
  const dropdownList = document.getElementById('dropdownList');
  dropdownList.classList.remove('show');
  dropdownList.classList.add('hide');
  setTimeout(() => dropdownList.classList.remove('hide'), 300);
});

const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
      // Remove 'active' class from all items
      dropdownItems.forEach(el => el.classList.remove('active'));
      
      // Add 'active' class to the clicked item
      this.classList.add('active');
      
      // Update the selected text
      document.getElementById('dropdownSelected').textContent = this.textContent;
      
      // Perform navigation
      const href = this.getAttribute('href');
      if (href && href !== '#') {
          window.location.href = href; // Navigate to the URL
      }
      
      // Hide the dropdown
      const dropdownList = document.getElementById('dropdownList');
      dropdownList.classList.remove('show');
      dropdownList.classList.add('hide');
      setTimeout(() => dropdownList.classList.remove('hide'), 300);
  });
});



// filter


// back to top

// back to top