// This script is only needed for the work page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only run if we're on the work page
    if (document.querySelector('.work-grid')) {
        console.log('Work page loaded - initializing image overlays');
        
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
        
        console.log('Work page initialization complete');
    }
});