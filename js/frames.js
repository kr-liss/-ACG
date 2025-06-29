document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', function() {
      this.requestFullscreen();
      document.body.style.backdropFilter = 'blur(10px)';
    });
  });