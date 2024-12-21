// script.js

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for header height
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Highlight Active Menu Item
  function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');
    const scrollPosition = window.scrollY + 70; // Adjust for header height
  
    sections.forEach(section => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);

// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach(faq => {
  faq.addEventListener('click', () => {
    const answer = faq.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
