// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = e.target.getAttribute('data-section');
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Show target section
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      targetElement.classList.add('active');
    }
  });
});

// Toggle overlay when clicking images in work section
document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    // Close any other open overlays
    document.querySelectorAll('.work-item').forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// Close overlay when clicking outside of it
document.addEventListener('click', (e) => {
  if (!e.target.closest('.work-item')) {
    document.querySelectorAll('.work-item').forEach(item => {
      item.classList.remove('active');
    });
  }
});

// Initialize - make sure home is active on load
document.addEventListener('DOMContentLoaded', function() {
  // Hide all sections except home
  document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'home') {
      section.classList.remove('active');
    } else {
      section.classList.add('active');
    }
  });
});