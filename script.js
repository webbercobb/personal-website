// Initialize work page overlays
function initWorkPageOverlays() {
    const workGrid = document.querySelector('.work-grid');
    if (!workGrid) return;

    // Use event delegation for better performance
    workGrid.addEventListener('click', (e) => {
        const workItem = e.target.closest('.work-item');
        if (!workItem) return;

        // Close other overlays and toggle current
        document.querySelectorAll('.work-item.active').forEach(item => {
            if (item !== workItem) item.classList.remove('active');
        });
        workItem.classList.toggle('active');
    });

    // Close overlay when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.work-item')) {
            document.querySelectorAll('.work-item.active').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}

// Initialize homepage image
function initHomepage() {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;

    heroImage.onload = () => console.log('Homepage image loaded');
    heroImage.onerror = () => console.error('Homepage image failed to load');
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    initWorkPageOverlays();
    initHomepage();
});