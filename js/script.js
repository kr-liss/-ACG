// Раскрытие блоков
document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('active');
    });
  });