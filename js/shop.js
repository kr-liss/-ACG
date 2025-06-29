document.querySelectorAll('.shop-link').forEach(link => {
    link.addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('active');
    });
  });