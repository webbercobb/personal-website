// Artwork data for the Work page
const artworkData = [
  { id: 1, dimensions: "228.6 × 228.6 cm", loading: "eager" },
  { id: 2, dimensions: "228.6 × 167.6 cm", loading: "eager" },
  { id: 3, dimensions: "228.6 × 228.6 cm", loading: "eager" },
  { id: 4, dimensions: "167.6 × 167.6 cm", loading: "lazy" },
  { id: 5, dimensions: "167.6 × 228.6 cm", loading: "lazy" },
  { id: 6, dimensions: "228.6 × 167.6 cm", loading: "lazy" },
  { id: 7, dimensions: "228.6 × 167.6 cm", loading: "lazy" },
  { id: 8, dimensions: "167.6 × 228.6 cm", loading: "lazy" },
  { id: 9, dimensions: "228.6 × 167.6 cm", loading: "lazy" },
  { id: 10, dimensions: "228.6 × 167.6 cm", loading: "lazy" },
  { id: 11, dimensions: "228.6 × 167.6 cm", loading: "lazy" }
];

// Generate work items dynamically
function generateWorkItems() {
  const workGrid = document.querySelector('.work-grid');
  if (!workGrid) return;

  artworkData.forEach(artwork => {
    const workItem = document.createElement('div');
    workItem.className = 'work-item';
    
    workItem.innerHTML = `
      <img src="images/image${artwork.id}.jpg" 
           alt="Artwork ${artwork.id}" 
           loading="${artwork.loading}" 
           decoding="async">
      <div class="overlay">
        <div class="overlay-text">
          Untitled<br>${artwork.dimensions}<br>Oil stick and spray paint on linen
        </div>
      </div>
    `;
    
    workGrid.appendChild(workItem);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateWorkItems);
} else {
  generateWorkItems();
}

