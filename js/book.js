let currentPage = 1;
function flipPage(direction) {
  if (currentPage + direction < 1 || currentPage + direction > 5) return;
  currentPage += direction;
  document.querySelector('.book').style.transform = `rotateY(${currentPage * 180}deg)`;
}