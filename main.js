let counter = document.querySelector('.count');

let targetCount = 500;
const targetSuffix = '+';

let counterActivated = false;
let counterInterval;

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const distance = counter.getBoundingClientRect().top;
  const scrolled = window.scrollY;

  if (scrolled < lastScrollPosition) {
    clearInterval(counterInterval);
    counterActivated = false;
  } else if (distance < window.innerHeight && !counterActivated) {
    let currentCount = 0;
    counterInterval = setInterval(() => {
      currentCount += 1;
      counter.innerText = currentCount;
      if (currentCount >= targetCount) {
        clearInterval(counterInterval);
        counterActivated = true;
      }
    }, 10);
    counterActivated = true;
  }
  lastScrollPosition = scrolled;
});


