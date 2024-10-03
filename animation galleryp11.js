document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        alert(`You clicked on ${title}`);
      });
    });
  });
  