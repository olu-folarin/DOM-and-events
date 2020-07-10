let btn = document.querySelector('button');
// adding an eventListener
btn.addEventListener('click', () => {
  console.log('it works!')
})

btn.addEventListener('mouseover', () => {
  btn.innerText = 'mouse over me';
})

btn.addEventListener('mouseout', () => {
 btn.innerText = 'you removed the mouse';
})
let movingBtn = document.getElementById('move');

movingBtn.addEventListener('mouseover', () => {
  let width = Math.floor(Math.random() * window.innerWidth);
  let height = Math.floor(Math.random() * window.innerHeight);
  // now comes setting the width and height in pixels
  movingBtn.style.top = `${height}px`;
  movingBtn.style.left = `${width}px`;
});
