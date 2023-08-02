function jumpToSeasonal() {
    const flagElement = document.getElementById('jSeason');
    const windowHeight = window.innerHeight;
      const elementOffset = flagElement.offsetTop;
      const offsetPosition = elementOffset - (windowHeight / 2);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
}

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}