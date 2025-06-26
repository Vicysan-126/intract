// Smooth scroll for navigation links
document.querySelectorAll('.navoption a').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith("#") && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Footer form validation
  document.querySelector('.sendmsg').addEventListener('click', function(e) {
    const name = document.querySelector('.typename').value.trim();
    const email = document.querySelector('.typemail').value.trim();
    const msg = document.querySelector('#typemsg').value.trim();
  
    if (!name || !email || !msg) {
      alert("Please fill out all fields before sending.");
      e.preventDefault(); 
    } else {
      alert("Thank you for your message!");
    }
  });
  
  // Optional: Add hover effect with JS fallback for gallery images
  document.querySelectorAll('.gallerycollections img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.opacity = '0.3';
    });
    img.addEventListener('mouseleave', () => {
      img.style.opacity = '1';
    });
  });
  
  // Optional: Toggle menu for small screens 
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('topnav');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  