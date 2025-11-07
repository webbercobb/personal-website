// Toggle overlay when clicking images
document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
