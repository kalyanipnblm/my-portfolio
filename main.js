const skies = document.querySelectorAll('.pixel-sky'); 
const sun = document.querySelector('.sun');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

 
  const hue1 = 220 + (x * 40); 
  const hue2 = 280 + (y * 40); 

  
  skies.forEach(sky => {
    sky.style.background = `linear-gradient(to bottom, hsl(${hue1}, 100%, 30%), hsl(${hue2}, 100%, 30%))`;
  });
});

sun.addEventListener('click', () => {
  sun.style.animationPlayState = sun.style.animationPlayState === 'paused' ? 'running' : 'paused';
});