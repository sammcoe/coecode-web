// Main JavaScript for coecode.io replica

document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const elementsToAnimate = document.querySelectorAll(
    ".hero, .projects-section, .project-card, .feature-section, .connect-section"
  );

  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-4px)";
    });
  });

  // Add loading state management
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Handle back button functionality
  const backButtons = document.querySelectorAll(".back-button");
  backButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (
        document.referrer &&
        document.referrer.includes(window.location.host)
      ) {
        e.preventDefault();
        window.history.back();
      }
    });
  });

  // Simple mobile menu toggle if needed
  const createMobileMenu = () => {
    const header = document.querySelector(".header-content");
    if (window.innerWidth <= 768 && header) {
      header.classList.add("mobile");
    } else if (header) {
      header.classList.remove("mobile");
    }
  };

  window.addEventListener("resize", createMobileMenu);
  createMobileMenu();

  // Add subtle parallax effect to background elements
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".bg-element");

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Preload images for better performance
  const preloadImages = () => {
    const imageUrls = [
      "images/logo.png",
      "images/linc-thumbnail.png",
      "images/linc-hero1.png",
      "images/linc-hero2.png",
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  preloadImages();

  // Contact form functionality
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        project: formData.get("project"),
        message: formData.get("message"),
      };

      // Simple form validation
      if (!data.name || !data.email || !data.message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Simulate form submission (you would typically send this to a server)
      const button = contactForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.textContent = "Sending...";
      button.disabled = true;

      // Simulate API call delay
      setTimeout(() => {
        button.textContent = "Message Sent!";
        button.style.background = "#4CAF50";

        // Reset form after 2 seconds
        setTimeout(() => {
          contactForm.reset();
          button.textContent = originalText;
          button.style.background = "#fff";
          button.disabled = false;

          // Show success message
          alert(
            "Thank you for your message! We'll get back to you within 24 hours."
          );
        }, 2000);
      }, 1000);
    });
  }
});

// Utility functions
const utils = {
  debounce: function (func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  isInViewport: function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
};

// Export for potential use in other scripts
window.CoeCodeUtils = utils;

// Enhanced Main JavaScript with comprehensive improvements

document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Initialize all features
  initializeLoader();
  initializeScrollEffects();
  initializeLazyLoading();
  initializeAnimations();
  initializeNavigation();
  initializeForms();
  initializeImageGallery();
  initializeParallax();
  initializePerformanceOptimizations();
}

// Loading Animation
function initializeLoader() {
  const loadingOverlay = document.createElement("div");
  loadingOverlay.className = "loading-overlay";
  loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loadingOverlay);

  // Preload critical images
  const criticalImages = [
    "images/logo.png",
    "images/bg1.png",
    "images/bg2.png",
  ];

  let loadedImages = 0;
  const totalImages = criticalImages.length;

  criticalImages.forEach((src) => {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setTimeout(() => {
          loadingOverlay.classList.add("hidden");
          setTimeout(() => {
            document.body.removeChild(loadingOverlay);
          }, 500);
        }, 800);
      }
    };
    img.src = src;
  });
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
  let ticking = false;

  function updateScrollEffects() {
    const scrollY = window.pageYOffset;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / documentHeight;

    // Parallax background effect
    const bgElements = document.querySelectorAll(
      ".hero-section, .project-card"
    );
    bgElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Update navigation transparency
    const nav = document.querySelector("nav");
    if (nav) {
      const opacity = Math.min(scrollY / 100, 0.95);
      nav.style.background = `rgba(0,0,0,${opacity})`;
    }

    ticking = false;
  }

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
}

// Lazy Loading for Images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Enhanced Animations with Intersection Observer
function initializeAnimations() {
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");

          // Stagger animations for grouped elements
          const siblings = entry.target.parentElement.children;
          Array.from(siblings).forEach((sibling, index) => {
            if (sibling !== entry.target) {
              setTimeout(() => {
                sibling.classList.add("animate-fade-in");
              }, index * 100);
            }
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".project-card, .hero-content, .contact-form, .screenshot-item"
  );
  animatedElements.forEach((el) => animationObserver.observe(el));
}

// Enhanced Navigation
function initializeNavigation() {
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname;

  // Set active navigation state
  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPath ||
      (currentPath.endsWith("/") && link.getAttribute("href") === "./")
    ) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for anchor links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

// Enhanced Form Handling
function initializeForms() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  const formInputs = contactForm.querySelectorAll("input, select, textarea");
  const submitButton = contactForm.querySelector(".form-button");

  // Real-time validation
  formInputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearErrors);
  });

  // Form submission
  contactForm.addEventListener("submit", handleFormSubmission);

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;

    clearFieldError(field);

    // Validation rules
    const validations = {
      name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message:
          "Please enter a valid name (letters only, minimum 2 characters)",
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
      projectType: {
        required: true,
        message: "Please select a project type",
      },
      requirements: {
        required: true,
        minLength: 10,
        message:
          "Please provide at least 10 characters describing your requirements",
      },
    };

    const validation = validations[fieldName];
    if (!validation) return true;

    // Check required
    if (validation.required && !value) {
      showFieldError(
        field,
        `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`
      );
      return false;
    }

    // Check minimum length
    if (validation.minLength && value.length < validation.minLength) {
      showFieldError(field, validation.message);
      return false;
    }

    // Check pattern
    if (validation.pattern && !validation.pattern.test(value)) {
      showFieldError(field, validation.message);
      return false;
    }

    return true;
  }

  function clearFieldError(field) {
    const errorElement = field.parentElement.querySelector(".field-error");
    if (errorElement) {
      errorElement.remove();
    }
    field.classList.remove("error");
  }

  function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add("error");

    const errorElement = document.createElement("div");
    errorElement.className = "field-error";
    errorElement.textContent = message;
    errorElement.style.cssText = `
            color: #ff6b6b;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            opacity: 0;
            animation: fadeInUp 0.3s ease forwards;
        `;

    field.parentElement.appendChild(errorElement);
  }

  function clearErrors() {
    const field = this;
    if (field.classList.contains("error")) {
      clearFieldError(field);
    }
  }

  async function handleFormSubmission(e) {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    formInputs.forEach((input) => {
      if (!validateField({ target: input })) {
        isValid = false;
      }
    });

    if (!isValid) {
      submitButton.textContent = "Please fix errors above";
      submitButton.style.background = "#ff6b6b";
      setTimeout(() => {
        submitButton.textContent = "Send Message";
        submitButton.style.background = "";
      }, 3000);
      return;
    }

    // Animate submission
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<div class="loading-spinner" style="width: 20px; height: 20px; margin: 0 auto;"></div>';

    // Simulate form submission
    await simulateFormSubmission();

    // Success feedback
    submitButton.innerHTML = "✓ Message Sent!";
    submitButton.style.background = "#4ade80";

    // Reset form after delay
    setTimeout(() => {
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.innerHTML = "Send Message";
      submitButton.style.background = "";
    }, 3000);
  }

  function simulateFormSubmission() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

// Image Gallery Enhancement
function initializeImageGallery() {
  const screenshots = document.querySelectorAll(".screenshot-item img");

  screenshots.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(img, index));
  });

  function openLightbox(img, index) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(10px);
        `;

    const lightboxImg = document.createElement("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "×";
    closeButton.style.cssText = `
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            font-size: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        `;

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);

    // Animate in
    requestAnimationFrame(() => {
      lightbox.style.opacity = "1";
      lightboxImg.style.transform = "scale(1)";
    });

    // Close handlers
    function closeLightbox() {
      lightbox.style.opacity = "0";
      lightboxImg.style.transform = "scale(0.8)";
      setTimeout(() => {
        document.body.removeChild(lightbox);
      }, 300);
    }

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") {
        closeLightbox();
        document.removeEventListener("keydown", escHandler);
      }
    });
  }
}

// Parallax Effects
function initializeParallax() {
  const parallaxElements = document.querySelectorAll(".hero-section");

  if (parallaxElements.length === 0) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach((element) => {
        element.style.transform = `translateY(${rate}px)`;
      });
    },
    { passive: true }
  );
}

// Performance Optimizations
function initializePerformanceOptimizations() {
  // Debounce resize events
  let resizeTimeout;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Recalculate layout-dependent features
        initializeAnimations();
      }, 250);
    },
    { passive: true }
  );

  // Preload next page resources on hover
  const navLinks = document.querySelectorAll(
    'nav a[href^="./"], nav a[href^="/"]'
  );
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const href = link.getAttribute("href");
      if (
        href &&
        !document.querySelector(`link[rel="prefetch"][href="${href}"]`)
      ) {
        const prefetchLink = document.createElement("link");
        prefetchLink.rel = "prefetch";
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    });
  });

  // Service Worker for caching (if supported)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}

// Add CSS for enhanced form validation
const enhancedStyles = document.createElement("style");
enhancedStyles.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ff6b6b !important;
        background: rgba(255, 107, 107, 0.1) !important;
    }
    
    .field-error {
        animation: fadeInUp 0.3s ease forwards;
    }
    
    .lightbox {
        cursor: pointer;
    }
    
    .lightbox img {
        cursor: default;
    }
    
    .lightbox button:hover {
        background: rgba(255,255,255,0.2) !important;
        transform: scale(1.1);
    }
`;
document.head.appendChild(enhancedStyles);
