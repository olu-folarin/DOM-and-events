// this function allows two elements overlap
function isTouching(a,b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

// the imgs
const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

// to move the player img
window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'down') {
    const currTop = extractPos(player.style.top);
    // to add more pixels
    player.style.top = `${currTop + 50}px`;
  } 
  else if (e.key === 'ArrowUp' || e.key === 'Up') {
    const currTop = extractPos(player.style.top);
    // to add more pixels
    player.style.top = `${currTop - 50}px`;
  } 
  else if (e.key === 'ArrowRight' ||
   e.key === 'Right') {
    const currLeft = extractPos(player.style.left);
    // to add more pixels
    player.style.left = `${currLeft + 50}px`;
    player.style.transform = 'scale(1,1)';
  } 
  else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    const currLeft = extractPos(player.style.left);
    // to add more pixels
    player.style.left = `${currLeft - 50}px`;
    // to make the image face the direction it's headed
    player.style.transform = 'scale(-1,1)';
  } 
  if (isTouching(player, coin)) moveCoin();
});

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
}

// to move the coin to a random position on the viewport
const moveCoin = () => {
  const width = Math.floor(Math.random() * window.innerWidth);
  const height = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${height}px`;
  coin.style.left = `${width}px`;
}

moveCoin();