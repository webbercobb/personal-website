// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing navigation');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigation link clicked:', this.getAttribute('data-section'));
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
                console.log('Removed active from:', section.id);
            });
            
            // Add active class to target section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                console.log('Added active to:', targetSection);
                
                // Scroll to top when changing sections
                window.scrollTo(0, 0);
            } else {
                console.error('Target section not found:', targetSection);
            }
        });
    });

    // Initialize - make sure home is active on load
    console.log('Setting home as active section');
    document.querySelectorAll('section').forEach(section => {
        if (section.id === 'home') {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
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
    
    console.log('Navigation initialization complete');
});