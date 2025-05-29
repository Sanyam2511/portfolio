// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close nav when clicking a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    }
  });
});

// Scroll reveal animations
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('section-visible');
    }
  });
};

// Initialize skill bar animation widths dynamically based on inline styles
const skillLevels = document.querySelectorAll('.skill-level');
skillLevels.forEach(skillLevel => {
  // store width from inline style
  const width = skillLevel.style.width || '0%';
  skillLevel.style.setProperty('--skill-width', width);
});

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial check in case some sections are already visible on load
window.addEventListener('load', revealOnScroll);
