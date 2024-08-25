const mainSection = document.querySelector('.main-section');

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    mainSection.scrollLeft += 100;
  } else {
    mainSection.scrollLeft -= 100;
  }
});
